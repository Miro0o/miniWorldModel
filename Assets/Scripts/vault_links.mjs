#!/usr/bin/env node
// Dependency-free Obsidian link audit and conservative repair (Node.js 20+).
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const p = path.posix;
const key = s => s.normalize('NFC').toLowerCase();
const note = name => /\.(md|markdown)$/i.test(name);
const external = s => /^(?:[a-z][\w+.-]*:|\/\/)/i.test(s);
const decode = s => { try { return decodeURIComponent(s); } catch { return s; } };
const encode = s => s.replace(/[\s%#?()[\]<>"|\\]/gu, c => encodeURIComponent(c).replace(/[()]/g, x => '%' + x.charCodeAt(0).toString(16).toUpperCase()));

export function sanitizeComponent(value, config = {}) {
  if (['', '.', '..'].includes(value)) return value;
  const mapped = config.component_replacements?.[value] ?? config.name_replacements?.[value];
  if (mapped !== undefined) return mapped;
  // File and folder names often share a title, but their mappings are distinct.
  if (value.endsWith('.md') && config.component_replacements?.[value.slice(0, -3)]) {
    return config.component_replacements[value.slice(0, -3)] + '.md';
  }
  if (config.name_replacements?.[value + '.md']) return config.name_replacements[value + '.md'].slice(0, -3);
  const query = value.includes('?') && /[=&]/.test(value);
  let result = value.replaceAll('->', 'to').replaceAll(': ', ' - ').replaceAll(':', ' -')
    .replaceAll(' | ', ' - ').replaceAll('|', '-').replace(/["<>?\\\x00-\x1f]/g, '').replaceAll('*', 'star');
  if (query) result = result.replaceAll('&', '_').replaceAll('=', '-');
  result = result.replace(/ {2,}/g, ' ').replace(/[ .]+$/g, '') || 'unnamed';
  if (/^(con|prn|aux|nul|com[1-9¹²³]|lpt[1-9¹²³])(?:\.|$)/i.test(result)) result = '_' + result;
  return result;
}

export const sanitizeTarget = (value, config) => value.split('/').map(c => sanitizeComponent(c, config)).join('/');

function maskCode(text) {
  let fence = null;
  let masked = text.split(/(?<=\n)/).map(line => {
    const marker = line.match(/^\s*(?:>\s*)*(`{3,}|~{3,})/);
    const hidden = fence !== null || marker !== null;
    if (marker) {
      if (!fence) fence = marker[1];
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length) fence = null;
    }
    return hidden ? line.replace(/[^\r\n]/g, ' ') : line;
  }).join('');
  masked = masked.replace(/<!--[\s\S]*?-->/g, m => m.replace(/[^\r\n]/g, ' '));
  masked = masked.replace(/(`+)[^`\r\n]*?\1/g, m => ' '.repeat(m.length));
  return masked;
}

// Keep source offsets: edit only the destination, preserving labels, headings,
// block IDs, aliases, embed dimensions, CRLFs, and all non-link prose.
export function extractLinks(text) {
  const masked = maskCode(text);
  const links = [];
  const re = /!?\[\[([^\]\r\n]+)\]\]|(?<!\\)\]\(/g;
  let match;
  while ((match = re.exec(masked))) {
    if (match[1] !== undefined) {
      const start = match.index + match[0].indexOf('[[') + 2;
      const raw = match[1].split('|')[0].replace(/\\$/, '');
      links.push({ start, end: start + raw.length, raw, kind: 'wiki' });
      continue;
    }
    let start = match.index + 2;
    while (/[ \t]/.test(masked[start] ?? '') && start < masked.length) start++;
    let end = start;
    if (masked[start] === '<') {
      start = ++end;
      while (end < masked.length && !/[>\r\n]/.test(masked[end])) end++;
      if (masked[end] !== '>') continue;
    } else {
      let depth = 1;
      for (; end < masked.length; end++) {
        const c = masked[end];
        if (c === '\r' || c === '\n') break;
        if (c === '\\') { end++; continue; }
        if (c === '(') depth++;
        if (c === ')' && --depth === 0) break;
        if (/\s/.test(c) && depth === 1 && /^\s+["']/.test(masked.slice(end))) break;
      }
      if (end >= masked.length || /[\r\n]/.test(masked[end])) continue;
    }
    links.push({ start, end, raw: text.slice(start, end), kind: 'markdown' });
    re.lastIndex = end + 1;
  }
  // Reference-style Markdown destinations (including angle brackets and titles).
  const refs = /^[ \t]{0,3}\[(?!\^)[^\]\r\n]+\]:[ \t]*(?:<([^>\r\n]+)>|(\S+))/gm;
  while ((match = refs.exec(masked))) {
    const raw = match[1] ?? match[2];
    const start = match.index + match[0].lastIndexOf(raw);
    links.push({ start, end: start + raw.length, raw, kind: 'markdown' });
  }
  const html = /<(?:img|a|image)\b[^>]*?\b(?:src|href|xlink:href)\s*=\s*(["'])(.*?)\1[^>]*>/gim;
  while ((match = html.exec(masked))) {
    const raw = match[2];
    const start = match.index + match[0].indexOf(match[1] + raw) + 1;
    links.push({ start, end: start + raw.length, raw, kind: 'html' });
  }
  return links.sort((a, b) => a.start - b.start).filter((l, i, a) => i === 0 || l.start >= a[i - 1].end);
}

export class VaultIndex {
  constructor(files) {
    this.files = new Set(files);
    this.folded = new Map();
    this.names = new Map();
    for (const file of files) {
      for (const [map, k] of [[this.folded, key(file)], [this.names, key(p.basename(file))]]) {
        if (!map.has(k)) map.set(k, []);
        map.get(k).push(file);
      }
    }
  }
  lookup(value) {
    value = p.normalize(value).replace(/^\//, '');
    for (const candidate of [value, value + '.md']) {
      if (this.files.has(candidate)) return candidate;
      const matches = this.folded.get(key(candidate));
      if (matches?.length === 1) return matches[0];
    }
    return null;
  }
  byName(value) {
    return [...new Set([...(this.names.get(key(p.basename(value))) ?? []), ...(this.names.get(key(p.basename(value) + '.md')) ?? [])])];
  }
  resolve(value, source) {
    if (value.startsWith('/')) return this.lookup(value);
    const local = this.lookup(p.join(p.dirname(source), value));
    if (local) return local;
    if (!value.startsWith('.')) {
      const rooted = this.lookup(value);
      if (rooted) return rooted;
      // Obsidian's shortest-path links intentionally omit directory names.
      if (!value.includes('/')) {
        const candidates = this.byName(value);
        if (candidates.length === 1) return candidates[0];
      }
    }
    return null;
  }
}

export function inspectLink(link, source, index, config, { repairStale = false } = {}) {
  const hash = link.raw.indexOf('#');
  const rawPath = hash < 0 ? link.raw : link.raw.slice(0, hash);
  const fragment = hash < 0 ? '' : link.raw.slice(hash);
  if (!rawPath) return null;
  const decoded = decode(rawPath.replace(/\\([()\[\]<>#|])/g, '$1').replaceAll('&amp;', '&'));
  // A mapped macOS basename such as "CS143: Compilers" is a local note,
  // although its leading colon also happens to satisfy URI-scheme syntax.
  if (external(rawPath) && !config.name_replacements?.[decoded] && !config.name_replacements?.[decoded + '.md']) return null;
  const target = index.resolve(decoded, source);
  const sanitized = sanitizeTarget(decoded, config);
  let resolved = target;
  let category = target ? 'resolved' : 'missing';
  let newPath = decoded;
  let candidates = [];
  if (!target && sanitized !== decoded) {
    resolved = index.resolve(sanitized, source);
    if (resolved) { category = 'windows-rename'; newPath = sanitized; }
  }
  if (!resolved) {
    candidates = index.byName(sanitized);
    // A complete trailing directory identifies the intended file even when
    // another folder contains the same basename. Never choose by proximity.
    if (candidates.length > 1) {
      const parts = key(sanitized).split('/');
      const scores = candidates.map(file => {
        const actual = key(file).split('/');
        if (!parts.at(-1).endsWith('.md') && actual.at(-1).endsWith('.md')) actual[actual.length - 1] = actual.at(-1).slice(0, -3);
        let score = 0;
        while (score < parts.length && score < actual.length && parts[parts.length - score - 1] === actual[actual.length - score - 1]) score++;
        return score;
      });
      const best = Math.max(...scores);
      if (best >= 2 && scores.filter(s => s === best).length === 1) candidates = [candidates[scores.indexOf(best)]];
    }
    if (candidates.length > 1) category = 'ambiguous';
    else if (candidates.length === 1) {
      category = 'stale-path';
      if (repairStale) {
        resolved = candidates[0];
        newPath = p.relative(p.dirname(source), resolved);
        if (!/\.md$/i.test(decoded) && /\.md$/i.test(newPath)) newPath = newPath.slice(0, -3);
      }
    }
  }
  // Do not alter drawing text without updating its compressed scene as well.
  // Embedded-file records are separate from the scene and can be repaired.
  // Directory separators must stay literal in Markdown destinations. A decoded
  // filesystem lookup alone hides encoded separators left by older converters.
  const encodedSeparator = target && link.kind === 'markdown' && /%2f/i.test(rawPath);
  if (encodedSeparator) category = 'encoded-separator';
  const replacement = newPath !== decoded
    ? (link.kind === 'wiki' ? newPath : encode(newPath)) + fragment
    : encodedSeparator ? rawPath.replace(/%2f/gi, '/') + fragment : null;
  return { ...link, decoded, category, resolved, candidates, replacement };
}

export function repairText(text, source, index, config, options = {}) {
  const issues = [];
  const edits = [];
  let links = 0;
  const drawing = /\.excalidraw\.md$/i.test(source);
  const embeddedStart = text.search(/^## Embedded [Ff]iles\s*$/m);
  const embeddedEnd = embeddedStart < 0 ? -1 : text.indexOf('\n#', embeddedStart + 1);
  for (const link of extractLinks(text)) {
    const result = inspectLink(link, source, index, config, options);
    if (!result) continue;
    links++;
    if (result.category !== 'resolved') {
      result.line = text.slice(0, link.start).split('\n').length;
      if (drawing && !(embeddedStart >= 0 && link.start > embeddedStart && (embeddedEnd < 0 || link.start < embeddedEnd))) {
        result.replacement = null;
        result.drawingText = true;
      }
      issues.push(result);
      if (result.replacement) edits.push(result);
    }
  }
  for (const edit of [...edits].reverse()) text = text.slice(0, edit.start) + edit.replacement + text.slice(edit.end);
  return { text, links, issues, edits };
}

async function walk(root, prefix = '') {
  const result = [];
  for (const entry of await fs.readdir(path.join(root, prefix), { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.isSymbolicLink()) continue;
    const rel = prefix ? prefix + '/' + entry.name : entry.name;
    if (rel === 'Assets/Reports') continue;
    if (entry.isDirectory()) result.push(...await walk(root, rel));
    else result.push(rel);
  }
  return result.sort();
}

export async function audit(root, config, options = {}) {
  const files = await walk(root);
  const index = new VaultIndex(files);
  const result = { summary: { files: files.length, notes: 0, links: 0, issues: 0, repaired: 0, changedFiles: 0, byCategory: {} }, issues: [], changes: [], limitations: ['File destinations only; heading/block existence is not checked.', 'Compressed Excalidraw scenes are not decoded; drawing text requires separate review.'], longPaths: files.filter(f => path.join(root, f).length >= 260) };
  for (let i = 0; i < files.length; i += 64) {
    const batch = files.slice(i, i + 64).filter(f => note(f) && !f.startsWith('Assets/Scripts/'));
    await Promise.all(batch.map(async file => {
      const text = await fs.readFile(path.join(root, file), 'utf8');
      const checked = repairText(text, file, index, config, options);
      result.summary.notes++;
      result.summary.links += checked.links;
      for (const issue of checked.issues) {
        const { start, end, ...details } = issue;
        result.issues.push({ file, ...details });
        result.summary.byCategory[issue.category] = (result.summary.byCategory[issue.category] ?? 0) + 1;
      }
      if (checked.edits.length && options.write) {
        // Guard against overwriting edits made in Obsidian since this read.
        if (await fs.readFile(path.join(root, file), 'utf8') !== text) throw new Error('File changed during audit: ' + file);
        await fs.writeFile(path.join(root, file), checked.text, 'utf8');
        result.summary.repaired += checked.edits.length;
        result.changes.push({ file, edits: checked.edits.length });
      }
    }));
  }
  result.issues.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);
  result.changes.sort((a, b) => a.file.localeCompare(b.file));
  result.summary.issues = result.issues.length;
  result.summary.changedFiles = result.changes.length;
  return result;
}

async function main() {
  const args = process.argv.slice(2);
  const value = flag => { const i = args.indexOf(flag); return i < 0 ? null : args[i + 1]; };
  const root = path.resolve(value('--target') ?? '.');
  // The Python sync wrapper supplies the canonical map via stdin, since the
  // generated worktree may contain an older map while being updated.
  let config;
  if (args.includes('--json')) {
    let input = '';
    for await (const chunk of process.stdin) input += chunk;
    config = JSON.parse(input);
  } else config = JSON.parse(await fs.readFile(value('--config') ?? path.join(root, '.github/windows-path-map.json'), 'utf8'));
  const report = await audit(root, config, { write: args.includes('--write'), repairStale: args.includes('--repair-stale') });
  const reportPath = value('--report');
  if (reportPath) await fs.writeFile(reportPath, JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(args.includes('--json') ? report : report.summary, null, 2));
  if (args.includes('--check-windows') && report.issues.some(i => ['windows-rename', 'encoded-separator'].includes(i.category) && !i.drawingText)) process.exitCode = 1;
  if (args.includes('--strict') && report.issues.length) process.exitCode = 1;
}

if (typeof process !== 'undefined' && process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
