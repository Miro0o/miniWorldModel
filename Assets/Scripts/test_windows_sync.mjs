import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { sync } from './windows_sync.mjs';

const run = (root, args) => execFileSync('git', ['-C', root, ...args], { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
const write = async (root, file, data) => { await fs.mkdir(path.dirname(path.join(root, file)), { recursive: true }); await fs.writeFile(path.join(root, file), data); };
const commit = (root, message) => { run(root, ['add', '-A']); return run(root, ['-c', 'user.name=Vault Test', '-c', 'user.email=vault-test@example.invalid', '-c', 'commit.gpgsign=false', 'commit', '-qm', message]) || run(root, ['rev-parse', 'HEAD']); };
const STATE = '.github/windows-sync-state.json';

async function fixture(t, files = { 'Note.md': 'first\n\nsecond\n\nthird\n\nlast\n' }) {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'vault-sync-test-'));
  t.after(async () => {
    const relative = path.relative(os.tmpdir(), directory);
    assert.ok(relative.startsWith('vault-sync-test-') && !relative.includes(path.sep));
    await fs.rm(directory, { recursive: true, force: true });
  });
  const source = path.join(directory, 'source');
  const target = path.join(directory, 'target');
  await fs.mkdir(source);
  run(source, ['init', '-q']);
  run(source, ['config', 'core.autocrlf', 'false']);
  for (const [file, data] of Object.entries(files)) await write(source, file, data);
  const base = commit(source, 'source base');
  run(directory, ['-c', 'core.autocrlf=false', 'clone', '-q', source, target]);
  run(target, ['config', 'core.autocrlf', 'false']);
  await write(target, STATE, JSON.stringify({ last_synced_main: base }) + '\n');
  const baseline = commit(target, 'generated baseline');
  return { source, target, initialMain: base, initialWindows: baseline, config: {} };
}

test('merges separate edits to the same file and preserves manual commit ancestry', async t => {
  const f = await fixture(t);
  await write(f.target, 'Note.md', 'first\n\nmanual second\n\nthird\n\nlast\n');
  const manual = commit(f.target, 'manual Windows edit');
  await write(f.source, 'Note.md', 'first\n\nsecond\n\nthird\n\nmain last\n');
  const incoming = commit(f.source, 'main edit');
  const result = await sync(f);
  assert.equal(result.windowsBaseline, f.initialWindows);
  assert.equal(await fs.readFile(path.join(f.target, 'Note.md'), 'utf8'), 'first\n\nmanual second\n\nthird\n\nmain last\n');
  assert.equal(JSON.parse(await fs.readFile(path.join(f.target, STATE))).last_synced_main, incoming);
  const generated = commit(f.target, 'next generated commit');
  assert.equal(run(f.target, ['rev-parse', `${generated}^`]), manual);
  assert.equal(run(f.target, ['merge-base', manual, generated]), manual);
});

test('a later main commit uses the new generated baseline and keeps earlier manual text', async t => {
  const f = await fixture(t);
  await write(f.target, 'Note.md', 'first\n\nmanual second\n\nthird\n\nlast\n');
  commit(f.target, 'manual');
  await write(f.source, 'Other.md', 'new note\n');
  commit(f.source, 'first main update');
  await sync(f);
  const baseline = commit(f.target, 'generated one');
  await write(f.source, 'Note.md', 'main first\n\nsecond\n\nthird\n\nlast\n');
  commit(f.source, 'second main update');
  const result = await sync(f);
  assert.equal(result.windowsBaseline, baseline);
  assert.equal(await fs.readFile(path.join(f.target, 'Note.md'), 'utf8'), 'main first\n\nmanual second\n\nthird\n\nlast\n');
});

test('overlapping changes abort before any files or synchronization state are written', async t => {
  const f = await fixture(t, { 'A.md': 'old\n', 'Z.md': 'old\n' });
  await write(f.target, 'Z.md', 'manual\n');
  const before = commit(f.target, 'manual');
  await write(f.source, 'A.md', 'new\n');
  await write(f.source, 'Z.md', 'main\n');
  commit(f.source, 'conflicting main');
  await assert.rejects(sync(f), /overlapping changes/);
  assert.equal(run(f.target, ['status', '--porcelain']), '');
  assert.equal(run(f.target, ['rev-parse', 'HEAD']), before);
  assert.equal(await fs.readFile(path.join(f.target, 'A.md'), 'utf8'), 'old\n');
  assert.equal(JSON.parse(await fs.readFile(path.join(f.target, STATE))).last_synced_main, f.initialMain);
});

test('source deletion cannot erase a manually modified Windows file', async t => {
  const f = await fixture(t, { 'Note.md': 'old\n', 'Keep.md': 'keep\n' });
  await write(f.target, 'Note.md', 'manual\n');
  commit(f.target, 'manual');
  await fs.unlink(path.join(f.source, 'Note.md'));
  commit(f.source, 'delete main note');
  await assert.rejects(sync(f), /modify\/delete/);
  assert.equal(run(f.target, ['status', '--porcelain']), '');
  assert.equal(await fs.readFile(path.join(f.target, 'Note.md'), 'utf8'), 'manual\n');
});

test('manual deletion cannot be silently recreated by a main modification', async t => {
  const f = await fixture(t, { 'Note.md': 'old\n', 'Keep.md': 'keep\n' });
  await fs.unlink(path.join(f.target, 'Note.md'));
  commit(f.target, 'manual delete');
  await write(f.source, 'Note.md', 'main new\n');
  commit(f.source, 'main modification');
  await assert.rejects(sync(f), /modify\/delete/);
  assert.equal(run(f.target, ['status', '--porcelain']), '');
});

test('main rename retains manual Windows edits', async t => {
  const f = await fixture(t);
  await write(f.target, 'Note.md', 'first\n\nmanual second\n\nthird\n\nlast\n');
  commit(f.target, 'manual');
  run(f.source, ['mv', 'Note.md', 'Renamed.md']);
  commit(f.source, 'rename main');
  await sync(f);
  await assert.rejects(fs.access(path.join(f.target, 'Note.md')));
  assert.ok((await fs.readFile(path.join(f.target, 'Renamed.md'), 'utf8')).includes('manual second'));
});

test('add/add and binary conflicts preserve the Windows version', async t => {
  const f = await fixture(t, { 'Image.bin': Buffer.from([0, 1]) });
  await write(f.target, 'Image.bin', Buffer.from([0, 2]));
  await write(f.target, 'New.md', 'manual\n');
  commit(f.target, 'manual');
  await write(f.source, 'Image.bin', Buffer.from([0, 3]));
  await write(f.source, 'New.md', 'main\n');
  commit(f.source, 'main');
  await assert.rejects(sync(f), error => /binary conflict/.test(error.message) && /add\/add/.test(error.message));
  assert.equal(run(f.target, ['status', '--porcelain']), '');
});

test('unchanged main is idempotent; reports and manual-only notes remain local', async t => {
  const f = await fixture(t);
  await write(f.target, '.gitignore', '/Assets/Reports/\n');
  await write(f.target, 'Manual.md', 'only Windows\n');
  commit(f.target, 'manual-only note');
  await write(f.target, 'Assets/Reports/local.json', '{"private":true}\n');
  const result = await sync(f);
  assert.equal(result.mergedFiles, 0);
  assert.equal(run(f.target, ['status', '--porcelain']), '');
  assert.equal(await fs.readFile(path.join(f.target, 'Manual.md'), 'utf8'), 'only Windows\n');
  assert.equal(await fs.readFile(path.join(f.target, 'Assets/Reports/local.json'), 'utf8'), '{"private":true}\n');
});

test('a dirty target is refused before synchronization', async t => {
  const f = await fixture(t);
  await write(f.target, 'Note.md', 'uncommitted\n');
  await assert.rejects(sync(f), /uncommitted/);
  assert.equal(await fs.readFile(path.join(f.target, 'Note.md'), 'utf8'), 'uncommitted\n');
});

test('normalization retains Windows link fixes when main edits the same note', async t => {
  const f = await fixture(t, { 'Note.md': '[x](Old/Target.md)\n\nbody\n\nlast\n', 'New/Target.md': '# Target\n' });
  await write(f.target, 'Note.md', '[x](New/Target.md)\n\nmanual body\n\nlast\n');
  commit(f.target, 'manual repair');
  await write(f.source, 'Note.md', '[x](Old/Target.md)\n\nbody\n\nmain last\n');
  commit(f.source, 'main content change');
  await sync(f);
  assert.equal(await fs.readFile(path.join(f.target, 'Note.md'), 'utf8'), '[x](New/Target.md)\n\nmanual body\n\nmain last\n');
});
