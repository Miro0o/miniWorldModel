import LZString from './vendor/lz-string.mjs';

// Only edit explicit Element Links whose Markdown record exactly matches the
// stored scene link. Drawing text, geometry and all other properties stay intact.
export function sceneLinkEditor(text) {
  const sectionStart = text.search(/^## Element Links\s*$/m);
  if (sectionStart < 0) return null;
  const sectionEnd = text.indexOf('\n#', sectionStart + 1);
  const drawingStart = text.search(/^## Drawing[ \t]*\r?$/m);
  if (drawingStart < 0) return null;
  const block = text.slice(drawingStart).match(/```(compressed-json|json)[ \t]*\r?\n([\s\S]*?)\r?\n```/);
  if (!block) return null;
  let scene;
  try {
    const json = block[1] === 'compressed-json' ? LZString.decompressFromBase64(block[2].replace(/\s/g, '')) : block[2];
    scene = JSON.parse(json);
  } catch { return null; }
  if (scene?.type !== 'excalidraw' || !Array.isArray(scene.elements)) return null;
  const elements = new Map();
  for (const element of scene.elements) {
    if (!element || typeof element.id !== 'string' || elements.has(element.id)) return null;
    elements.set(element.id, element);
  }
  let changed = false;
  function record(link) {
    if (link.start <= sectionStart || (sectionEnd >= 0 && link.start >= sectionEnd)) return null;
    const start = text.lastIndexOf('\n', link.start) + 1;
    const end = text.indexOf('\n', link.end);
    const line = text.slice(start, end < 0 ? text.length : end).replace(/\r$/, '');
    const match = line.match(/^([\w-]+):[ \t]*(.+)$/);
    const element = match && elements.get(match[1]);
    if (!element || element.isDeleted || element.link !== match[2]) return null;
    const offset = link.start - start - line.indexOf(match[2]);
    if (element.link.slice(offset, offset + link.raw.length) !== link.raw) return null;
    return { element, offset };
  }
  return {
    canEdit: link => Boolean(record(link)),
    edit(link, replacement) {
      const found = record(link);
      if (!found) throw new Error('Excalidraw record differs from scene link');
      const { element, offset } = found;
      element.link = element.link.slice(0, offset) + replacement + element.link.slice(offset + link.raw.length);
      changed = true;
    },
    finish(updated) {
      if (!changed) return updated;
      const eol = text.includes('\r\n') ? '\r\n' : '\n';
      const json = JSON.stringify(scene);
      const content = block[1] === 'compressed-json'
        ? LZString.compressToBase64(json).match(/.{1,256}/g).join(eol + eol)
        : JSON.stringify(scene, null, 2).replace(/\n/g, eol);
      return updated.replace(block[0], '```' + block[1] + eol + content + eol + '```');
    }
  };
}
