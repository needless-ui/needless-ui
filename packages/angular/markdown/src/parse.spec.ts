import {
  type NuiMarkdownBlock,
  type NuiMarkdownInline,
  nuiMarkdownToText,
  nuiParseMarkdown,
} from './parse';

const parse = (text: string, streaming = false) =>
  nuiParseMarkdown(text, { streaming }).map(({ source: _, ...block }) => block);

/** Inlines as compact text: `**x**` for strong, `*x*` em, `~~x~~` del, `` `x` `` code, [x](url) links. */
function show(nodes: readonly NuiMarkdownInline[]): string {
  return nodes
    .map((node) => {
      switch (node.type) {
        case 'text':
          return node.text;
        case 'strong':
          return `**${show(node.children)}**`;
        case 'em':
          return `*${show(node.children)}*`;
        case 'del':
          return `~~${show(node.children)}~~`;
        case 'code':
          return `\`${node.text}\``;
        case 'link':
          return `[${show(node.children)}](${node.href})`;
        case 'image':
          return `![${node.alt}](${node.src})`;
        case 'break':
          return '⏎';
      }
    })
    .join('');
}

const inline = (text: string, streaming = false) => {
  const [block] = parse(text, streaming) as { children: NuiMarkdownInline[] }[];
  return show(block.children);
};

describe('nuiParseMarkdown', () => {
  it('reads headings, paragraphs, rules and quotes', () => {
    const blocks = parse(
      '# Title\n\nFirst line\nsame paragraph\n\n---\n\n> quoted\nlazily\n> > nested',
    );
    expect(blocks.map((b) => b.type)).toEqual(['heading', 'paragraph', 'rule', 'quote']);
    expect(blocks[0]).toMatchObject({ level: 1 });
    expect(show((blocks[1] as { children: NuiMarkdownInline[] }).children)).toBe(
      'First line\nsame paragraph',
    );
    const quote = blocks[3] as { children: NuiMarkdownBlock[] };
    expect(quote.children.map((b) => b.type)).toEqual(['paragraph', 'quote']);
  });

  it('reads fenced code with its language, untouched', () => {
    const [code] = parse('```ts\nconst a = 1; // **not bold**\n\n<b>raw</b>\n```\nafter');
    expect(code).toEqual({
      type: 'code',
      lang: 'ts',
      text: 'const a = 1; // **not bold**\n\n<b>raw</b>',
      open: false,
    });
    expect(parse('~~~\ncode\n~~~')[0]).toMatchObject({ type: 'code', lang: '', text: 'code' });
  });

  it('reads nested, ordered, task and loose lists', () => {
    const [list] = parse('- one\n  - nested\n- [x] done\n- [ ] todo') as Extract<
      NuiMarkdownBlock,
      { type: 'list' }
    >[];
    expect(list).toMatchObject({ ordered: false, tight: true });
    expect(list.items.map((item) => item.checked)).toEqual([null, true, false]);
    expect(list.items[0].children.map((b) => b.type)).toEqual(['paragraph', 'list']);

    const [ordered] = parse('3. three\n4. four') as Extract<NuiMarkdownBlock, { type: 'list' }>[];
    expect(ordered).toMatchObject({ ordered: true, start: 3 });

    const [loose] = parse('- a\n\n- b') as Extract<NuiMarkdownBlock, { type: 'list' }>[];
    expect(loose.tight).toBe(false);
    expect(loose.items.length).toBe(2);

    // A different marker starts another list; a rule isn't an item.
    expect(parse('- a\n+ b').map((b) => b.type)).toEqual(['list', 'list']);
    expect(parse('- a\n- - -').map((b) => b.type)).toEqual(['list', 'rule']);
  });

  it('reads tables with alignment and escaped pipes', () => {
    const [table] = parse(
      '| Name | Score | Note |\n| :--- | ---: | :-: |\n| Ada | 10 | a \\| b |\n| Alan |',
    ) as Extract<NuiMarkdownBlock, { type: 'table' }>[];
    expect(table.align).toEqual(['left', 'right', 'center']);
    expect(table.head.map(show)).toEqual(['Name', 'Score', 'Note']);
    expect(table.rows.map((row) => row.map(show))).toEqual([
      ['Ada', '10', 'a | b'],
      ['Alan', '', ''],
    ]);
  });

  it('reads emphasis by CommonMark’s rules, leaving snake_case alone', () => {
    expect(inline('**bold** and *em* and ***both*** and ~~gone~~')).toBe(
      '**bold** and *em* and ***both*** and ~~gone~~',
    );
    expect(inline('call my_long_function_name now')).toBe('call my_long_function_name now');
    expect(inline('__init__ is *not* _this_')).toBe('**init** is *not* *this*');
    expect(inline('2 * 3 * 4')).toBe('2 * 3 * 4');
    expect(inline('*foo**bar*')).toBe('*foo**bar*');
    expect(inline('**unclosed')).toBe('**unclosed');
  });

  it('reads code spans, escapes and breaks', () => {
    expect(inline('use `a*b*c` and ``x ` y``')).toBe('use `a*b*c` and `x ` y`');
    expect(inline('\\*not em\\* and <b>raw</b>')).toBe('*not em* and <b>raw</b>');
    expect(inline('line one  \nline two\\\nthree')).toBe('line one⏎line two⏎three');
  });

  it('links only to web, mail and phone addresses', () => {
    expect(inline('[docs](https://example.com "Docs") and <mailto:a@b.c>')).toBe(
      '[docs](https://example.com) and [mailto:a@b.c](mailto:a@b.c)',
    );
    expect(inline('[bad](javascript:alert(1))')).toBe('bad');
    expect(inline('see https://example.com/a_(b). And www.example.org!')).toBe(
      'see [https://example.com/a_(b)](https://example.com/a_(b)). And [www.example.org](https://www.example.org)!',
    );
    expect(inline('![a *cat*](https://img.example/c.png)')).toBe(
      '![a cat](https://img.example/c.png)',
    );
  });

  it('while streaming, reads unfinished text as it will read once complete', () => {
    expect(parse('```js\nlet x', true)[0]).toMatchObject({
      type: 'code',
      text: 'let x',
      open: true,
    });
    expect(inline('Some **bol', true)).toBe('Some bol');
    expect(inline('Some *em', true)).toBe('Some em');
    expect(inline('Run `npm i', true)).toBe('Run `npm i`');
    expect(inline('See [the docs](https://exa', true)).toBe('See the docs');
    // A table's head is a table as soon as it starts.
    const head = (text: string) =>
      (parse(text, true)[0] as Extract<NuiMarkdownBlock, { type: 'table' }>).head.map(show);
    expect(head('| Day | Morn')).toEqual(['Day', 'Morn']);
    expect(head('| Day | Morning |\n| :-- ')).toEqual(['Day', 'Morning']);
    expect(parse('| Day | Morning |')[0].type).toBe('paragraph');
    // Only the end is still arriving: earlier blocks read as they are.
    const blocks = parse('**done**\n\nstill **going', true) as { children: NuiMarkdownInline[] }[];
    expect(blocks.map((b) => show(b.children))).toEqual(['**done**', 'still going']);
  });

  it('reads as plain text, a line per block', () => {
    expect(
      nuiMarkdownToText(
        '# Plan\n\nShip **it**.\n\n- [x] one\n- two\n\n| A | B |\n| - | - |\n| 1 | 2 |\n\n---\n\n```\nx = 1\n```',
      ),
    ).toBe('Plan\nShip it.\none\ntwo\nA, B\n1, 2\nx = 1');
  });

  it('keeps each top-level block’s source, for reusing unchanged blocks', () => {
    const blocks = nuiParseMarkdown('# A\n\npara\n\n```\ncode\n```');
    expect(blocks.map((b) => b.source)).toEqual(['# A', 'para', '```\ncode\n```']);
  });
});
