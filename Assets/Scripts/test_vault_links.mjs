import test from 'node:test';
import LZString from './vendor/lz-string.mjs';
import assert from 'node:assert/strict';
import { VaultIndex, extractLinks, repairText, sanitizeComponent } from './vault_links.mjs';

const config = { component_replacements: { 'CTL* Family': 'CTLstar Family' }, name_replacements: { 'CS143: Compilers.md': 'CS143 - Compilers.md' } };
const index = new VaultIndex(['Math/CTLstar Family/CTLstar Family.md', 'Courses/CS143 - Compilers.md', 'Assets/Pics/a (1).png', 'New/Unique.md', 'One/Duplicate.md', 'Two/Duplicate.md']);
const fix = (text, source = 'Math/Source.md', options = {}) => repairText(text, source, index, config, options);

test('repairs both directory and filename, preserving label and heading', () => {
  const result = fix('[CTL*](CTL*%20Family/CTL*%20Family.md#Syntax%20of%20CTL*)\r\n');
  assert.equal(result.text, '[CTL*](CTLstar%20Family/CTLstar%20Family.md#Syntax%20of%20CTL*)\r\n');
  assert.equal(result.edits.length, 1);
});

test('handles nested parentheses and arbitrary mixed URL encoding', () => {
  const text = '[x](../Math/CTL%2a%20Family%2FCTL*%20Family.md#Keep(foo))';
  assert.equal(fix(text).text, '[x](../Math/CTLstar%20Family/CTLstar%20Family.md#Keep(foo))');
  assert.equal(extractLinks('[x](foo%20(bar(baz)).md)')[0].raw, 'foo%20(bar(baz)).md');
});

test('does not change prose, titles, external URLs, or code examples', () => {
  const text = 'CS143: Compilers\n[CS143: Compilers](https://example.com/CS143:%20Compilers.md)\n`[x](../Courses/CS143:%20Compilers.md)`\n```md\n[x](../Courses/CS143:%20Compilers.md)\n```\n';
  assert.equal(fix(text).text, text);
});

test('preserves Markdown link title and angle-bracket destinations', () => {
  assert.equal(fix('[course](../Courses/CS143:%20Compilers.md "Title")').text, '[course](../Courses/CS143%20-%20Compilers.md "Title")');
  assert.equal(fix('[course](<../Courses/CS143: Compilers.md>)').text, '[course](<../Courses/CS143%20-%20Compilers.md>)');
});

test('preserves wiki aliases and block references', () => {
  assert.equal(fix('[[../Courses/CS143: Compilers#^block|Label]]').text, '[[../Courses/CS143 - Compilers#^block|Label]]');
  assert.equal(fix('![[../bad/a (1).png|400]]', 'Math/Source.md', { repairStale: true }).text, '![[../Assets/Pics/a (1).png|400]]');
});

test('repairs reference definitions and HTML destinations', () => {
  assert.equal(fix('[course]: ../Courses/CS143:%20Compilers.md "Title"').text, '[course]: ../Courses/CS143%20-%20Compilers.md "Title"');
  assert.equal(fix('<a href="../Courses/CS143:%20Compilers.md">CS143: Compilers</a>').text, '<a href="../Courses/CS143%20-%20Compilers.md">CS143: Compilers</a>');
});

test('requires opt-in for stale paths and never guesses ambiguous or missing targets', () => {
  const text = '[u](../Old/Unique.md) [d](../Old/Duplicate.md) [m](Missing.md)';
  assert.equal(fix(text).text, text);
  assert.equal(fix(text, 'Math/Source.md', { repairStale: true }).text, '[u](../New/Unique.md) [d](../Old/Duplicate.md) [m](Missing.md)');
});

test('leaves valid paths and shortest-name wiki links unchanged', () => {
  const text = '[[Unique]] [image](../Assets/Pics/a%20(1).png)';
  assert.equal(fix(text, 'Math/Source.md', { repairStale: true }).text, text);
});

test('keeps encoded literal # in filenames separate from the heading', () => {
  const idx = new VaultIndex(['New/a#b.md']);
  const result = repairText('[x](Old/a%23b.md#Header)', 'Source.md', idx, {}, { repairStale: true });
  assert.equal(result.text, '[x](New/a%23b.md#Header)');
});

test('protects compressed drawing text while fixing embedded-file records', () => {
  const text = '# Text Elements\n[[../Old/Unique]]\n## Embedded Files\nx: ![[../bad/a (1).png]]\n## Drawing\n```compressed-json\nabc\n```\n';
  const result = fix(text, 'Math/test.excalidraw.md', { repairStale: true });
  assert.ok(result.text.includes('[[../Old/Unique]]'));
  assert.ok(result.text.includes('![[../Assets/Pics/a (1).png]]'));
  assert.ok(result.text.includes('```compressed-json\nabc\n```'));
});

test('repair is idempotent and retains CRLF line endings', () => {
  const first = fix('[x](CTL*%20Family/CTL*%20Family.md)\r\n\r\n').text;
  assert.equal(fix(first).text, first);
  assert.ok(first.endsWith('\r\n\r\n'));
});

test('relative path markers and Windows reserved names remain safe', () => {
  for (const value of ['.', '..', '']) assert.equal(sanitizeComponent(value), value);
  assert.equal(sanitizeComponent('NUL.md'), '_NUL.md');
  assert.equal(sanitizeComponent('COM1.txt'), '_COM1.txt');
});

test('disambiguates only when an existing trailing directory uniquely matches', () => {
  const result = fix('[[Wrong/One/Duplicate]] [[Wrong/Duplicate]]', 'Math/Source.md', { repairStale: true });
  assert.equal(result.text, '[[../One/Duplicate]] [[Wrong/Duplicate]]');
});

test('recognizes mapped colon basenames without mistaking them for URI schemes', () => {
  assert.equal(fix('[[CS143: Compilers|Course]]').text, '[[CS143 - Compilers|Course]]');
  assert.equal(fix('[course](CS143:%20Compilers.md)').text, '[course](CS143%20-%20Compilers.md)');
  assert.equal(fix('[mail](mailto:student@example.com)').text, '[mail](mailto:student@example.com)');
});

test('preserves escaped wiki alias delimiters inside tables', () => {
  assert.equal(fix('| [[CS143: Compilers\\|Course]] |').text, '| [[CS143 - Compilers\\|Course]] |');
});


test('normalizes encoded Markdown directory separators even when the decoded target exists', () => {
  const text = '[CTL](CTLstar%20Family%2FCTLstar%20Family.md#Heading%2FKeep)';
  const first = fix(text);
  assert.equal(first.text, '[CTL](CTLstar%20Family/CTLstar%20Family.md#Heading%2FKeep)');
  assert.equal(first.issues[0].category, 'encoded-separator');
  assert.equal(first.edits.length, 1);
  assert.equal(fix(first.text).edits.length, 0);
  assert.equal(fix('[x](<CTLstar%20Family%2fCTLstar%20Family.md> "Title")').text, '[x](<CTLstar%20Family/CTLstar%20Family.md> "Title")');
  assert.equal(fix('[ref]: CTLstar%20Family%2FCTLstar%20Family.md').text, '[ref]: CTLstar%20Family/CTLstar%20Family.md');
});

test('separator normalization leaves unresolved targets, literal percent names, wiki links and external URLs alone', () => {
  const text = '[missing](Missing%2FNote.md) [[CTLstar Family%2FCTLstar Family]] [web](https://example.com/a%2Fb)';
  assert.equal(fix(text).text, text);
  const literalIndex = new VaultIndex(['Math/a%2Fb.md']);
  const literal = '[literal](a%252Fb.md)';
  assert.equal(repairText(literal, 'Math/Source.md', literalIndex, {}).text, literal);
});


test('encodes bare Markdown spaces without double-encoding existing escapes or changing the title', () => {
  const text = '![image](../Assets/Pics/a (1).png "Image title")\r\n[heading](../New/Unique.md#Some heading%20name)';
  const result = fix(text);
  assert.equal(result.text, '![image](../Assets/Pics/a%20(1).png "Image title")\r\n[heading](../New/Unique.md#Some%20heading%20name)');
  assert.equal(result.edits.length, 2);
  assert.equal(fix(result.text).edits.length, 0);
});

test('keeps spaces in valid angle destinations and wiki links', () => {
  const text = '[image](<../Assets/Pics/a (1).png>)\n[ref]: <../Assets/Pics/a (1).png> "Title"\n[[../Assets/Pics/a (1).png]]';
  assert.equal(fix(text).text, text);
});

test('detects and encodes whitespace in same-note heading links', () => {
  const text = '[section](#Some heading) [valid](#Already%20encoded)';
  const result = fix(text);
  assert.equal(result.text, '[section](#Some%20heading) [valid](#Already%20encoded)');
  assert.equal(result.issues[0].category, 'unencoded-whitespace');
  assert.equal(fix(result.text).edits.length, 0);
});

test('reports whitespace on unresolved links while keeping missing or ambiguous targets unchanged', () => {
  const idx = new VaultIndex(['One/Two Words.md', 'Two/Two Words.md']);
  const text = '[missing](Missing File.md) [ambiguous](Old/Two Words.md)';
  const result = repairText(text, 'Source.md', idx, {}, { repairStale: true });
  assert.equal(result.text, text);
  assert.equal(result.issues.length, 2);
  assert.ok(result.issues.every(i => i.encodingIssues.includes('unencoded-whitespace')));
});

function drawingFixture(scene, type = 'compressed-json', record = scene.elements[0].link) {
  const body = type === 'compressed-json' ? LZString.compressToBase64(JSON.stringify(scene)) : JSON.stringify(scene);
  return '# Text Elements\r\n[[../Old/Unique]]\r\n## Element Links\r\nelement1: ' + record + '\r\n## Drawing\r\n```' + type + '\r\n' + body + '\r\n```\r\n';
}

for (const type of ['compressed-json', 'json']) test('updates matched Excalidraw Element Links and ' + type + ' scene together', () => {
  const scene = { type: 'excalidraw', version: 2, elements: [{ id: 'element1', link: '[[../Old/Unique#Heading|Label]]', x: 3, y: 7, text: 'unchanged', points: [[1, 2]], customData: { example: 'Keep' } }], appState: { zoom: 1 }, files: {} };
  const text = drawingFixture(scene, type);
  const result = fix(text, 'Math/Test.excalidraw.md', { repairStale: true });
  assert.equal(result.edits.length, 1);
  assert.ok(result.text.includes('element1: [[../New/Unique#Heading|Label]]'));
  assert.ok(result.text.startsWith('# Text Elements\r\n[[../Old/Unique]]'));
  assert.ok(!/(?<!\r)\n/.test(result.text));
  const block = result.text.match(/```(?:compressed-json|json)\r\n([\s\S]*?)\r\n```/)[1];
  const actual = JSON.parse(type === 'compressed-json' ? LZString.decompressFromBase64(block.replace(/\s/g, '')) : block);
  const expected = structuredClone(scene);
  expected.elements[0].link = '[[../New/Unique#Heading|Label]]';
  assert.deepEqual(actual, expected);
  assert.equal(fix(result.text, 'Math/Test.excalidraw.md', { repairStale: true }).text, result.text);
});

test('leaves unmatched, malformed and duplicate-id Excalidraw scene records protected', () => {
  const scene = { type: 'excalidraw', elements: [{ id: 'element1', link: '[[../Old/Unique]]' }] };
  const valid = drawingFixture(scene);
  const cases = [
    drawingFixture(scene, 'compressed-json', '[[../Wrong/Unique]]'),
    valid.replace(/(```compressed-json\r\n)[\s\S]*?(\r\n```)/, '$1invalid$2'),
    drawingFixture({ ...scene, elements: [...scene.elements, scene.elements[0]] }),
    drawingFixture({ ...scene, elements: [...scene.elements, null] })
  ];
  for (const text of cases) {
    const result = fix(text, 'Math/Test.excalidraw.md', { repairStale: true });
    assert.equal(result.text, text);
    assert.ok(result.issues.every(i => i.drawingText));
  }
});
