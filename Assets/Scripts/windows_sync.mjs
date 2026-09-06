#!/usr/bin/env node
// Incremental conversion that preserves changes committed on the Windows branch.
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { execFileSync, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { audit, repairText, sanitizeTarget, VaultIndex } from './vault_links.mjs';

const STATE = '.github/windows-sync-state.json';
const utf8 = new TextDecoder('utf-8', { fatal: true });
const same = (a, b) => a === null ? b === null : b !== null && a.equals(b);
const git = (root, args, options = {}) => execFileSync('git', ['-C', root, ...args], { maxBuffer: 128 * 1024 * 1024, ...options });
const gitText = (root, args) => git(root, args, { encoding: 'utf8' }).trim();
const paths = (root, ref) => git(root, ['ls-tree', '-r', '--name-only', '-z', ref], { encoding: 'utf8' }).split('\0').filter(Boolean);

function blob(root, ref, file) {
  const result = spawnSync('git', ['-C', root, 'show', `${ref}:${file}`], { maxBuffer: 128 * 1024 * 1024 });
  if (result.status === 0) return result.stdout;
  const exists = spawnSync('git', ['-C', root, 'cat-file', '-e', `${ref}:${file}`]);
  if (exists.status === 128 && /does not exist|not in|exists on disk/.test(exists.stderr.toString())) return null;
  throw new Error(result.stderr.toString());
}

function destination(root, rel) {
  const absolute = path.resolve(root, rel);
  const relative = path.relative(root, absolute);
  if (!relative || relative === '..' || relative.startsWith('..' + path.sep) || path.isAbsolute(relative)) throw new Error('Unsafe target path: ' + rel);
  return absolute;
}

function converted(bytes, file, index, config) {
  if (bytes === null || bytes.includes(0)) return bytes;
  try {
    const text = utf8.decode(bytes).replaceAll('\r\n', '\n');
    return Buffer.from(/\.(md|markdown)$/i.test(file) && !file.startsWith('Assets/Scripts/')
      ? repairText(text, file, index, config, { repairStale: true }).text : text);
  }
  catch (error) { if (error instanceof TypeError) return bytes; throw error; }
}

async function merge(file, base, ours, theirs, temp) {
  if (same(ours, theirs)) return ours;
  if (same(ours, base)) return theirs;
  if (same(theirs, base)) return ours;
  if (base === null) throw new Error(`${file}: add/add conflict`);
  if (ours === null || theirs === null) throw new Error(`${file}: modify/delete conflict`);
  if ([base, ours, theirs].some(data => data.includes(0))) throw new Error(`${file}: binary conflict`);
  const files = ['ours', 'base', 'theirs'].map(name => path.join(temp, name));
  await Promise.all([ours, base, theirs].map((data, i) => fs.writeFile(files[i], data)));
  const result = spawnSync('git', ['merge-file', '-p', '--diff3', ...files], { maxBuffer: 128 * 1024 * 1024 });
  if (result.status !== 0) throw new Error(`${file}: overlapping changes; sync stopped without writing files`);
  return result.stdout;
}

function changes(source, base, head) {
  const fields = git(source, ['diff', '--name-status', '--find-renames', '-z', base, head], { encoding: 'utf8' }).split('\0');
  const result = [];
  for (let i = 0; fields[i];) {
    const status = fields[i++];
    const first = fields[i++];
    if (status.startsWith('R')) result.push({ status: 'R', old: first, next: fields[i++] });
    else if (status === 'D') result.push({ status, old: first, next: null });
    else if (status === 'A') result.push({ status, old: null, next: first });
    else if (status === 'M') result.push({ status, old: first, next: first });
    else throw new Error(`Unsupported source change ${status}: ${first}`);
  }
  return result;
}

export async function sync({ source, target, config, stateFile = STATE, head: requestedHead, base: requestedBase, baseline: requestedBaseline }) {
  source = path.resolve(source);
  target = path.resolve(target);
  if (path.resolve(gitText(target, ['rev-parse', '--show-toplevel'])) !== target) throw new Error('Target must be a Git worktree root');
  if (gitText(target, ['status', '--porcelain', '--untracked-files=normal'])) throw new Error('Target has uncommitted files; commit or stash them before sync');
  const targetHead = gitText(target, ['rev-parse', 'HEAD']);
  const state = JSON.parse(await fs.readFile(destination(target, stateFile), 'utf8'));
  const base = requestedBase ?? state.last_synced_main;
  if (!base) throw new Error('Missing last_synced_main; refusing to guess a baseline');
  const head = gitText(source, ['rev-parse', requestedHead ?? 'HEAD']);
  if (spawnSync('git', ['-C', source, 'merge-base', '--is-ancestor', base, head]).status !== 0) throw new Error('Source no longer descends from the last synchronized main commit');
  // Manual note commits do not touch the generated state file. The last commit
  // changing it is the exact Windows snapshot produced by the preceding sync.
  const baseline = requestedBaseline ?? gitText(target, ['log', '-1', '--format=%H', 'HEAD', '--', stateFile]);
  if (!baseline) throw new Error('Cannot locate the previous generated Windows snapshot');
  const baselineState = blob(target, baseline, stateFile);
  if (!baselineState || JSON.parse(baselineState).last_synced_main !== base) throw new Error('Windows baseline does not match last_synced_main');

  const incomingPaths = paths(source, head);
  const names = new Map();
  for (const file of incomingPaths) {
    const normalized = sanitizeTarget(file, config).normalize('NFC').toLowerCase();
    if (names.has(normalized)) throw new Error(`Windows path collision: ${names.get(normalized)} / ${file}`);
    names.set(normalized, file);
  }
  const existingPaths = paths(target, 'HEAD');
  const operations = changes(source, base, head).filter(change => (change.next ?? change.old) !== stateFile);
  const finalPaths = new Set(existingPaths);
  for (const op of operations) {
    if (op.old) finalPaths.delete(sanitizeTarget(op.old, config));
    if (op.next) finalPaths.add(sanitizeTarget(op.next, config));
  }
  const index = new VaultIndex(finalPaths);
  const plans = [];
  const errors = [];
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'vault-three-way-'));
  try {
    for (const op of operations) {
      const old = op.old ? sanitizeTarget(op.old, config) : null;
      const next = op.next ? sanitizeTarget(op.next, config) : null;
      const file = next ?? old;
      destination(target, file);
      if (old && next && old !== next && existingPaths.includes(next)) {
        errors.push(`${file}: rename destination already exists`);
        continue;
      }
      // The base must be canonical main, not the preceding generated Windows
      // tree: that tree already includes manual edits. Using it as the base
      // would silently drop those edits on the second subsequent main change.
      const before = op.old ? blob(source, base, op.old) : null;
      const current = blob(target, 'HEAD', old ?? next);
      const incoming = op.next ? blob(source, head, op.next) : null;
      try {
        // Tools and generated workflow/config copies are maintained on main.
        const control = file.startsWith('Assets/Scripts/') || file.startsWith('.github/');
        const data = control ? incoming : await merge(file, converted(before, file, index, config), converted(current, file, index, config), converted(incoming, file, index, config), temp);
        plans.push({ old, next, data });
      } catch (error) { errors.push(error.message); }
    }
  } finally {
    // Only the three explicitly named files in our newly created temp folder.
    for (const name of ['ours', 'base', 'theirs']) await fs.unlink(path.join(temp, name)).catch(error => { if (error.code !== 'ENOENT') throw error; });
    await fs.rmdir(temp);
  }
  if (errors.length) throw new Error(errors.join('\n'));
  if (gitText(target, ['rev-parse', 'HEAD']) !== targetHead || gitText(target, ['status', '--porcelain', '--untracked-files=normal'])) throw new Error('Target changed while preparing sync; no files written');

  for (const plan of plans) {
    if (plan.next && plan.data !== null) {
      const dest = destination(target, plan.next);
      await fs.mkdir(path.dirname(dest), { recursive: true });
      await fs.writeFile(dest, plan.data);
    }
    if (plan.old && (plan.old !== plan.next || plan.data === null)) {
      await fs.unlink(destination(target, plan.old)).catch(error => { if (error.code !== 'ENOENT') throw error; });
    }
  }
  const report = await audit(target, config, { write: true, repairStale: true });
  const remaining = await audit(target, config);
  if (remaining.issues.some(i => ['windows-rename', 'encoded-separator', 'unencoded-whitespace'].includes(i.category) && !i.drawingText)) throw new Error('Converted links failed verification; sync state was not advanced');
  if (base !== head) await fs.writeFile(destination(target, stateFile), JSON.stringify({ last_synced_main: head, previous_synced_main: base }, null, 2) + '\n');
  return { sourceBase: base, sourceHead: head, windowsBaseline: baseline, windowsParent: targetHead, mergedFiles: plans.length, repairedLinks: report.summary.repaired };
}

async function main() {
  const args = process.argv.slice(2);
  const value = name => { const i = args.indexOf(name); return i < 0 ? undefined : args[i + 1]; };
  const source = value('--source');
  if (!source) throw new Error('--source is required');
  const target = value('--target') ?? '.';
  const config = JSON.parse(await fs.readFile(value('--config') ?? path.join(source, '.github/windows-path-map.json'), 'utf8'));
  console.log(JSON.stringify(await sync({ source, target, config, base: value('--base'), head: value('--head'), baseline: value('--baseline'), stateFile: value('--state-file') ?? config.state_file ?? STATE }), null, 2));
}

if (typeof process !== 'undefined' && process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { await main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
