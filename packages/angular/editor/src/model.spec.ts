import { describe, expect, it } from 'vitest';
import {
  nuiEditorFromHtml,
  nuiEditorFromMarkdown,
  nuiEditorToHtml,
  nuiEditorToMarkdown,
} from './convert';
import {
  blockText,
  caret,
  deleteRange,
  indent,
  insertBlocks,
  insertText,
  joinBackward,
  linkRange,
  nuiEditorBlock,
  type NuiEditorDoc,
  point,
  setLink,
  splitBlock,
  toggleMark,
} from './model';

const p = (text: string, marks = {}) => nuiEditorBlock('paragraph', [{ text, marks }]);
const texts = (doc: NuiEditorDoc) =>
  doc.map((b) => `${b.type}${b.depth ? b.depth : ''}:${blockText(b)}`);

describe('editor model', () => {
  it('types, and deletes across blocks', () => {
    let doc: NuiEditorDoc = [p('Hello'), p('world')];
    doc = insertText(doc, point(0, 5), ',', {}).doc;
    expect(texts(doc)).toEqual(['paragraph:Hello,', 'paragraph:world']);
    const deleted = deleteRange(doc, point(0, 3), point(1, 2));
    expect(texts(deleted.doc)).toEqual(['paragraph:Helrld']);
    expect(deleted.selection).toEqual(caret(point(0, 3)));
  });

  it('splits blocks as Enter does', () => {
    const heading = nuiEditorBlock('heading', [{ text: 'Title', marks: {} }], { level: 2 });
    const after = splitBlock([heading], caret(point(0, 5)));
    expect(texts(after.doc)).toEqual(['heading:Title', 'paragraph:']);
    const item = nuiEditorBlock('bullet', [{ text: 'One', marks: {} }]);
    expect(texts(splitBlock([item], caret(point(0, 3))).doc)).toEqual(['bullet:One', 'bullet:']);
    // Enter in an empty item leaves the list; an indented one goes up a level.
    const empty = nuiEditorBlock('bullet', [], { depth: 1 });
    expect(texts(splitBlock([empty], caret(point(0, 0))).doc)).toEqual(['bullet:']);
    expect(splitBlock([empty], caret(point(0, 0))).doc[0].depth).toBe(0);
    const top = nuiEditorBlock('bullet');
    expect(texts(splitBlock([top], caret(point(0, 0))).doc)).toEqual(['paragraph:']);
    // Code blocks take a new line instead.
    const code = nuiEditorBlock('code', [{ text: 'a', marks: {} }]);
    expect(blockText(splitBlock([code], caret(point(0, 1))).doc[0])).toBe('a\n');
    // Enter at the start keeps the block, moved down.
    const start = splitBlock([heading], caret(point(0, 0)));
    expect(texts(start.doc)).toEqual(['paragraph:', 'heading:Title']);
    expect(start.doc[1]).toBe(heading);
  });

  it('joins backward as Backspace does', () => {
    const item = nuiEditorBlock('bullet', [{ text: 'x', marks: {} }], { depth: 1 });
    const outdented = joinBackward([p('a'), item], point(1, 0));
    expect(outdented.doc[1].depth).toBe(0);
    const unlisted = joinBackward(outdented.doc, point(1, 0));
    expect(texts(unlisted.doc)).toEqual(['paragraph:a', 'paragraph:x']);
    const joined = joinBackward(unlisted.doc, point(1, 0));
    expect(texts(joined.doc)).toEqual(['paragraph:ax']);
    expect(joined.selection.focus).toEqual(point(0, 1));
  });

  it('toggles formats and links', () => {
    let doc: NuiEditorDoc = [p('bold text')];
    doc = toggleMark(doc, { anchor: point(0, 0), focus: point(0, 4) }, 'bold');
    expect(doc[0].runs).toEqual([
      { text: 'bold', marks: { bold: true } },
      { text: ' text', marks: {} },
    ]);
    doc = toggleMark(doc, { anchor: point(0, 0), focus: point(0, 4) }, 'bold');
    expect(doc[0].runs).toEqual([{ text: 'bold text', marks: {} }]);
    doc = setLink(doc, { anchor: point(0, 5), focus: point(0, 9) }, 'https://example.com');
    expect(linkRange(doc, point(0, 7))).toEqual({
      from: point(0, 5),
      to: point(0, 9),
      href: 'https://example.com',
    });
  });

  it('indents list items, and pastes blocks into text', () => {
    const doc = [nuiEditorBlock('bullet', [{ text: 'a', marks: {} }])];
    expect(indent(doc, caret(point(0, 0)), 1)[0].depth).toBe(1);
    const pasted = insertBlocks([p('Hello world')], caret(point(0, 6)), [p('big'), p('wide ')]);
    expect(texts(pasted.doc)).toEqual(['paragraph:Hello big', 'paragraph:wide world']);
    expect(pasted.selection.focus).toEqual(point(1, 5));
  });
});

describe('editor HTML and Markdown', () => {
  const html =
    '<h2>Plan</h2><p>Some <strong>bold <em>and italic</em></strong> text, <a href="https://example.com">a link</a> and <code>code</code>.</p>' +
    '<ul><li>One<ul><li>Two</li></ul></li><li>Three</li></ul><ol><li>First</li></ol>' +
    '<blockquote><p>Quoted</p><p>twice</p></blockquote><pre><code>let a = 1;\nlet b = 2;</code></pre><hr><p>End</p>';

  it('reads its own HTML back exactly', () => {
    const doc = nuiEditorFromHtml(html, document);
    expect(texts(doc)).toEqual([
      'heading:Plan',
      'paragraph:Some bold and italic text, a link and code.',
      'bullet:One',
      'bullet1:Two',
      'bullet:Three',
      'ordered:First',
      'quote:Quoted',
      'quote:twice',
      'code:let a = 1;\nlet b = 2;',
      'rule:',
      'paragraph:End',
    ]);
    expect(nuiEditorToHtml(doc)).toBe(html);
  });

  it('keeps only what it can show from pasted HTML', () => {
    const pasted =
      '<b style="font-weight:normal" id="docs-internal-guid-1"><p><span style="font-weight:700">Bold</span> ' +
      '<span style="font-style:italic;text-decoration:underline">styled</span></p>' +
      '<p onclick="alert(1)">Click <a href="javascript:alert(1)">me</a><script>alert(1)</script><img src=x onerror=alert(1)></p></b>' +
      '<table><tr><td>Cell</td></tr></table>';
    const doc = nuiEditorFromHtml(pasted, document);
    expect(nuiEditorToHtml(doc)).toBe(
      '<p><strong>Bold</strong> <em><u>styled</u></em></p><p>Click me</p><p>Cell</p>',
    );
  });

  it('writes Markdown and reads it back', () => {
    const doc = nuiEditorFromHtml(html, document);
    const markdown = nuiEditorToMarkdown(doc);
    expect(markdown).toBe(
      [
        '## Plan',
        '',
        'Some **bold *and italic*** text, [a link](https://example.com) and `code`.',
        '',
        '- One',
        '  - Two',
        '- Three',
        '1. First',
        '',
        '> Quoted',
        '>',
        '> twice',
        '',
        '```',
        'let a = 1;',
        'let b = 2;',
        '```',
        '',
        '---',
        '',
        'End',
      ].join('\n'),
    );
    expect(texts(nuiEditorFromMarkdown(markdown))).toEqual(texts(doc));
  });
});
