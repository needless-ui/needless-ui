/**
 * A Markdown parser for text such as a chat model writes: CommonMark blocks and
 * inlines, plus GitHub's tables, task lists, strikethrough and bare links. It
 * makes a tree and never HTML: raw HTML in the text stays text.
 *
 * With `streaming`, text that's still arriving reads as it will once complete: an
 * open code fence is a code block, and a dangling `**` or `` ` `` is held back.
 */

export type NuiMarkdownInline =
  | { type: 'text'; text: string }
  | { type: 'strong' | 'em' | 'del'; children: NuiMarkdownInline[] }
  | { type: 'code'; text: string }
  | { type: 'link'; href: string; title: string | null; children: NuiMarkdownInline[] }
  | { type: 'image'; src: string; alt: string; title: string | null }
  | { type: 'break' };

export type NuiMarkdownAlign = 'left' | 'center' | 'right' | null;

export interface NuiMarkdownItem {
  /** `null` for a plain item; true or false for a task. */
  checked: boolean | null;
  children: NuiMarkdownBlock[];
}

export type NuiMarkdownBlock = (
  | { type: 'paragraph'; children: NuiMarkdownInline[] }
  | { type: 'heading'; level: number; children: NuiMarkdownInline[] }
  | { type: 'code'; lang: string; text: string; open: boolean }
  | { type: 'quote'; children: NuiMarkdownBlock[] }
  | { type: 'list'; ordered: boolean; start: number; tight: boolean; items: NuiMarkdownItem[] }
  | {
      type: 'table';
      align: NuiMarkdownAlign[];
      head: NuiMarkdownInline[][];
      rows: NuiMarkdownInline[][][];
    }
  | { type: 'rule' }
) & {
  /** The Markdown a top-level block came from: unchanged source, unchanged block. */
  source?: string;
};

const FENCE = /^( {0,3})(`{3,}|~{3,})[ \t]*([^\s`]*)[^`]*$/;
const HEADING = /^ {0,3}(#{1,6})(?:[ \t]+(.*?))?(?:[ \t]+#+)?[ \t]*$/;
const RULE = /^ {0,3}([-*_])(?:[ \t]*\1){2,}[ \t]*$/;
const QUOTE = /^ {0,3}>/;
const LIST = /^( {0,3})([-+*]|\d{1,9}[.)])([ \t]+|$)(.*)$/;
const TABLE_DELIMITER = /^ {0,3}\|?[ \t]*:?-+:?[ \t]*(?:\|[ \t]*:?-+:?[ \t]*)*\|?[ \t]*$/;
/** The start of a delimiter row, still arriving. */
const PARTIAL_DELIMITER = /^ {0,3}[|:\- \t]*$/;

export function nuiParseMarkdown(
  text: string,
  options: { streaming?: boolean } = {},
): NuiMarkdownBlock[] {
  const lines = text.replace(/\r\n?/g, '\n').split('\n');
  return blocks(lines, options.streaming ?? false, true);
}

/** Leading spaces, with tabs to the next multiple of four. */
function indentOf(line: string): number {
  let width = 0;
  for (const char of line) {
    if (char === ' ') width++;
    else if (char === '\t') width += 4 - (width % 4);
    else break;
  }
  return width;
}

/** A line without its first `width` columns of indentation. */
function dedent(line: string, width: number): string {
  let column = 0;
  let i = 0;
  while (i < line.length && column < width && (line[i] === ' ' || line[i] === '\t')) {
    column += line[i] === '\t' ? 4 - (column % 4) : 1;
    i++;
  }
  return ' '.repeat(Math.max(0, column - width)) + line.slice(i);
}

/** Whether a line starts a block that interrupts a paragraph. */
function interrupts(line: string): boolean {
  if (FENCE.test(line) || HEADING.test(line) || RULE.test(line) || QUOTE.test(line)) return true;
  const item = LIST.exec(line);
  // Only a bullet, or a list counting from 1, with content, breaks into a paragraph.
  return !!item && !!item[4].trim() && (!/\d/.test(item[2]) || /^1[.)]$/.test(item[2]));
}

function blocks(lines: string[], streaming: boolean, top: boolean): NuiMarkdownBlock[] {
  const out: NuiMarkdownBlock[] = [];
  let i = 0;
  const add = (block: NuiMarkdownBlock, start: number) => {
    if (top) block.source = lines.slice(start, i).join('\n');
    out.push(block);
  };
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    const start = i;
    // Only the block at the very end is still arriving.
    const last = () => streaming && i >= lines.length;

    const fence = FENCE.exec(line);
    if (fence) {
      const [, indent, marks, lang] = fence;
      const close = new RegExp(`^ {0,3}${marks[0] === '`' ? '`' : '~'}{${marks.length},}[ \\t]*$`);
      const body: string[] = [];
      let closed = false;
      for (i++; i < lines.length; i++) {
        if (close.test(lines[i])) {
          closed = true;
          i++;
          break;
        }
        body.push(dedent(lines[i], indent.length));
      }
      add({ type: 'code', lang, text: body.join('\n'), open: !closed }, start);
      continue;
    }

    const heading = HEADING.exec(line);
    if (heading) {
      i++;
      add(
        { type: 'heading', level: heading[1].length, children: inlines(heading[2] ?? '', last()) },
        start,
      );
      continue;
    }

    if (RULE.test(line)) {
      i++;
      add({ type: 'rule' }, start);
      continue;
    }

    if (QUOTE.test(line)) {
      const inner: string[] = [];
      while (i < lines.length) {
        const next = lines[i];
        if (QUOTE.test(next)) inner.push(next.replace(/^ {0,3}> ?/, ''));
        // A paragraph inside the quote goes on lazily, without the marker.
        else if (next.trim() && inner.at(-1)?.trim() && !interrupts(next)) inner.push(next);
        else break;
        i++;
      }
      add({ type: 'quote', children: blocks(inner, streaming && i >= lines.length, false) }, start);
      continue;
    }

    if (LIST.test(line)) {
      const [block, next] = list(lines, i, streaming);
      i = next;
      add(block, start);
      continue;
    }

    // While streaming, a last row that starts with a pipe is a table's head on its way.
    const arriving =
      streaming &&
      /^ {0,3}\|/.test(line) &&
      (i === lines.length - 1 || (i === lines.length - 2 && PARTIAL_DELIMITER.test(lines[i + 1])));
    if (
      arriving ||
      (line.includes('|') && i + 1 < lines.length && TABLE_DELIMITER.test(lines[i + 1]))
    ) {
      const head = cells(line);
      const delimiter = arriving
        ? cells(lines[i + 1] ?? '').slice(0, head.length)
        : cells(lines[i + 1]);
      const align = [...delimiter, ...Array<string>(head.length - delimiter.length).fill('')].map(
        (cell): NuiMarkdownAlign => {
          const left = cell.startsWith(':');
          const right = cell.endsWith(':');
          return left && right ? 'center' : right ? 'right' : left ? 'left' : null;
        },
      );
      if (head.length === align.length) {
        const rows: string[][] = [];
        for (i += 2; i < lines.length && lines[i].trim() && !interrupts(lines[i]); i++) {
          const row = cells(lines[i]);
          rows.push(head.map((_, c) => row[c] ?? ''));
        }
        const end = streaming && i >= lines.length;
        add(
          {
            type: 'table',
            align,
            head: head.map((cell) => inlines(cell, arriving)),
            rows: rows.map((row, r) =>
              row.map((cell) => inlines(cell, end && r === rows.length - 1)),
            ),
          },
          start,
        );
        continue;
      }
    }

    const paragraph: string[] = [];
    while (i < lines.length && lines[i].trim() && (!paragraph.length || !interrupts(lines[i]))) {
      paragraph.push(lines[i]);
      i++;
    }
    add({ type: 'paragraph', children: inlines(paragraph.join('\n').trim(), last()) }, start);
  }
  return out;
}

/** A list and the line after it. Items hold every line indented past their marker. */
function list(lines: string[], from: number, streaming: boolean): [NuiMarkdownBlock, number] {
  const first = LIST.exec(lines[from])!;
  const ordered = /\d/.test(first[2]);
  const marker = first[2].slice(-1);
  const items: { lines: string[] }[] = [];
  let tight = true;
  let i = from;
  while (i < lines.length) {
    const item = LIST.exec(lines[i]);
    if (!item || RULE.test(lines[i])) break;
    if (/\d/.test(item[2]) !== ordered || item[2].slice(-1) !== marker) break;
    const [, indent, bullet, space, content] = item;
    const gap = indentOf(space);
    // Five or more spaces after the marker is indented code: the content starts after one.
    const width = indent.length + bullet.length + (gap >= 5 || !content ? 1 : gap);
    const body = [gap >= 5 ? dedent(space + content, 1) : content];
    for (i++; i < lines.length; i++) {
      const line = lines[i];
      if (!line.trim()) {
        let next = i + 1;
        while (next < lines.length && !lines[next].trim()) next++;
        if (next < lines.length && indentOf(lines[next]) >= width) {
          // A blank line inside an item makes the list loose.
          tight = false;
          for (; i < next; i++) body.push('');
          i--;
          continue;
        }
        break;
      }
      if (indentOf(line) >= width) body.push(dedent(line, width));
      // An item's paragraph goes on lazily, without indentation.
      else if (body.at(-1)?.trim() && !interrupts(line) && !LIST.test(line)) body.push(line);
      else break;
    }
    items.push({ lines: body });
    // Blank lines between items make it loose; anything else after them ends the list.
    let next = i;
    while (next < lines.length && !lines[next].trim()) next++;
    if (next > i) {
      const following = LIST.exec(lines[next] ?? '');
      if (
        !following ||
        /\d/.test(following[2]) !== ordered ||
        following[2].slice(-1) !== marker ||
        RULE.test(lines[next])
      ) {
        break;
      }
      tight = false;
      i = next;
    }
  }
  const end = i >= lines.length;
  return [
    {
      type: 'list',
      ordered,
      start: ordered ? parseInt(first[2], 10) : 1,
      tight,
      items: items.map((item, n) => {
        const task = /^\[([ xX])\][ \t]+/.exec(item.lines[0]);
        if (task) item.lines[0] = item.lines[0].slice(task[0].length);
        return {
          checked: task ? task[1] !== ' ' : null,
          children: blocks(item.lines, streaming && end && n === items.length - 1, false),
        };
      }),
    },
    i,
  ];
}

/** A table row's cells; `\|` is a pipe inside a cell. */
function cells(line: string): string[] {
  let text = line.trim();
  if (text.startsWith('|')) text = text.slice(1);
  if (text.endsWith('|') && !text.endsWith('\\|')) text = text.slice(0, -1);
  const out: string[] = [];
  let cell = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '\\' && text[i + 1] === '|') {
      cell += '|';
      i++;
    } else if (text[i] === '|') {
      out.push(cell.trim());
      cell = '';
    } else cell += text[i];
  }
  out.push(cell.trim());
  return out;
}

// Inlines ----------------------------------------------------------------------

interface Delimiter {
  type: 'delimiter';
  char: '*' | '_' | '~';
  length: number;
  open: boolean;
  close: boolean;
}

type Token = NuiMarkdownInline | Delimiter;

const PUNCTUATION = /[\p{P}\p{S}]/u;
const SPACE = /\s/;
const ESCAPABLE = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
const URL_START = /^(?:https?:\/\/|www\.)/i;

/** Whether a link may go to this address: web, mail and phone links only. */
export function nuiSafeUrl(url: string): boolean {
  return /^(?:https?:|mailto:|tel:)/i.test(url.trim());
}

function inlines(text: string, streaming: boolean): NuiMarkdownInline[] {
  const tokens: Token[] = [];
  let buffer = '';
  const flush = () => {
    if (buffer) tokens.push({ type: 'text', text: buffer });
    buffer = '';
  };
  const push = (token: Token) => {
    flush();
    tokens.push(token);
  };

  let i = 0;
  while (i < text.length) {
    const char = text[i];

    if (char === '\\' && i + 1 < text.length) {
      if (text[i + 1] === '\n') {
        push({ type: 'break' });
        i += 2;
        continue;
      }
      if (ESCAPABLE.test(text[i + 1])) {
        buffer += text[i + 1];
        i += 2;
        continue;
      }
    }

    if (char === '\n') {
      // Two spaces before a line end make a hard break; otherwise it's a space.
      if (/ {2,}$/.test(buffer)) {
        buffer = buffer.replace(/ +$/, '');
        push({ type: 'break' });
      } else {
        buffer = buffer.replace(/ +$/, '');
        buffer += '\n';
      }
      i++;
      while (text[i] === ' ') i++;
      continue;
    }

    if (char === '`') {
      const run = /^`+/.exec(text.slice(i))![0];
      const end = findRun(text, i + run.length, run);
      if (end >= 0) {
        let code = text.slice(i + run.length, end).replace(/\n/g, ' ');
        if (/^ .*[^ ].* $/.test(code) || /^ [^ ] $/.test(code)) code = code.slice(1, -1);
        push({ type: 'code', text: code });
        i = end + run.length;
        continue;
      }
      if (streaming) {
        // Still arriving: the rest is code, without the backticks.
        push({ type: 'code', text: text.slice(i + run.length) });
        i = text.length;
        continue;
      }
      buffer += run;
      i += run.length;
      continue;
    }

    if (char === '!' && text[i + 1] === '[') {
      const link = parseLink(text, i + 1);
      if (link) {
        push({ type: 'image', src: link.href, alt: plain(link.label), title: link.title });
        i = link.end;
        continue;
      }
    }

    if (char === '[') {
      const link = parseLink(text, i);
      if (link) {
        const children = inlines(link.label, false);
        if (nuiSafeUrl(link.href))
          push({ type: 'link', href: link.href, title: link.title, children });
        else {
          flush();
          tokens.push(...children);
        }
        i = link.end;
        continue;
      }
      if (streaming && isPartialLink(text, i)) {
        // A link still arriving shows its text alone.
        const close = text.indexOf('](', i);
        flush();
        tokens.push(...inlines(text.slice(i + 1, close < 0 ? text.length : close), true));
        i = text.length;
        continue;
      }
    }

    if (char === '<') {
      const auto = /^<((?:https?|mailto|tel):[^\s<>]*)>/i.exec(text.slice(i));
      if (auto) {
        push({
          type: 'link',
          href: auto[1],
          title: null,
          children: [{ type: 'text', text: auto[1] }],
        });
        i += auto[0].length;
        continue;
      }
    }

    if (
      (char === 'h' || char === 'H' || char === 'w' || char === 'W') &&
      URL_START.test(text.slice(i))
    ) {
      const before = buffer.at(-1) ?? text[i - 1];
      if (!before || /[\s(*_~"']/.test(before)) {
        const url = bareUrl(text.slice(i));
        if (url) {
          const href = /^www\./i.test(url) ? `https://${url}` : url;
          push({ type: 'link', href, title: null, children: [{ type: 'text', text: url }] });
          i += url.length;
          continue;
        }
      }
    }

    if (char === '*' || char === '_' || char === '~') {
      const run = new RegExp(`^\\${char}+`).exec(text.slice(i))![0];
      const before = i === 0 ? ' ' : text[i - 1];
      const after = i + run.length >= text.length ? ' ' : text[i + run.length];
      const left =
        !SPACE.test(after) &&
        (!PUNCTUATION.test(after) || SPACE.test(before) || PUNCTUATION.test(before));
      const right =
        !SPACE.test(before) &&
        (!PUNCTUATION.test(before) || SPACE.test(after) || PUNCTUATION.test(after));
      const tilde = char === '~' && run.length > 2;
      push({
        type: 'delimiter',
        char,
        length: run.length,
        // An underscore inside a word (snake_case) is just an underscore.
        open: !tilde && (char === '_' ? left && (!right || PUNCTUATION.test(before)) : left),
        close: !tilde && (char === '_' ? right && (!left || PUNCTUATION.test(after)) : right),
      });
      i += run.length;
      continue;
    }

    buffer += char;
    i++;
  }
  flush();
  return merge(emphasis(tokens, streaming));
}

/** The next run of exactly these backticks, or -1. */
function findRun(text: string, from: number, run: string): number {
  for (let i = text.indexOf(run, from); i >= 0; i = text.indexOf(run, i + 1)) {
    if (text[i - 1] !== '`' && text[i + run.length] !== '`') return i;
    while (text[i + 1] === '`') i++;
  }
  return -1;
}

/** `[label](href "title")` from `start`, with its end, or null. */
function parseLink(
  text: string,
  start: number,
): { label: string; href: string; title: string | null; end: number } | null {
  let depth = 0;
  let close = -1;
  for (let i = start; i < text.length; i++) {
    const char = text[i];
    if (char === '\\') i++;
    else if (char === '`') {
      const run = /^`+/.exec(text.slice(i))![0];
      const end = findRun(text, i + run.length, run);
      if (end >= 0) i = end + run.length - 1;
    } else if (char === '[') depth++;
    else if (char === ']' && --depth === 0) {
      close = i;
      break;
    }
  }
  if (close < 0 || text[close + 1] !== '(') return null;
  const rest = text.slice(close + 2);
  const match =
    /^[ \t\n]*(?:<([^<>\n]*)>|((?:[^\s()\\]|\\.|\((?:[^\s()\\]|\\.)*\))*))(?:[ \t\n]+("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'))?[ \t\n]*\)/.exec(
      rest,
    );
  if (!match) return null;
  return {
    label: text.slice(start + 1, close),
    href: (match[1] ?? match[2] ?? '').replace(/\\(.)/g, '$1'),
    title: match[3] ? match[3].slice(1, -1).replace(/\\(.)/g, '$1') : null,
    end: close + 2 + match[0].length,
  };
}

/** Whether a `[` opens a link that the end of the text cut short. */
function isPartialLink(text: string, start: number): boolean {
  const rest = text.slice(start);
  return /^\[[^\]]*$/.test(rest) || /^\[[^\]]*\]\([^)]*$/.test(rest);
}

/** A bare web address at the start of the text, without trailing punctuation. */
function bareUrl(text: string): string | null {
  let url = /^(?:https?:\/\/|www\.)[^\s<]*/i.exec(text)?.[0] ?? '';
  // Trailing punctuation belongs to the sentence; a closing parenthesis only when unmatched.
  for (;;) {
    const trimmed = url.replace(/[.,:;!?"'*_~]+$/, '');
    if (trimmed.endsWith(')')) {
      const open = (trimmed.match(/\(/g) ?? []).length;
      const close = (trimmed.match(/\)/g) ?? []).length;
      if (close > open) {
        url = trimmed.slice(0, -1);
        continue;
      }
    }
    url = trimmed;
    break;
  }
  return url.length > (/^www\./i.test(url) ? 4 : 8) ? url : null;
}

/** Pairs up `*`, `_` and `~` runs into strong, emphasis and strikethrough (CommonMark's rules). */
function emphasis(tokens: Token[], streaming: boolean): NuiMarkdownInline[] {
  for (let c = 0; c < tokens.length; c++) {
    const closer = tokens[c];
    if (closer.type !== 'delimiter' || !closer.close) continue;
    for (let o = c - 1; o >= 0; o--) {
      const opener = tokens[o];
      if (opener.type !== 'delimiter' || !opener.open || opener.char !== closer.char) continue;
      if (closer.char === '~' && opener.length !== closer.length) continue;
      // The rule of three: `*foo**bar*` must not pair the lone `*` with `**`.
      if (
        closer.char !== '~' &&
        (opener.close || closer.open) &&
        (opener.length + closer.length) % 3 === 0 &&
        (opener.length % 3 !== 0 || closer.length % 3 !== 0)
      ) {
        continue;
      }
      const use =
        closer.char === '~' ? closer.length : opener.length >= 2 && closer.length >= 2 ? 2 : 1;
      const inner = tokens.slice(o + 1, c).map(literal);
      const node: NuiMarkdownInline = {
        type: closer.char === '~' ? 'del' : use === 2 ? 'strong' : 'em',
        children: merge(inner),
      };
      opener.length -= use;
      closer.length -= use;
      const replaced: Token[] = [];
      if (opener.length) replaced.push(opener);
      replaced.push(node);
      if (closer.length) replaced.push(closer);
      tokens.splice(o, c - o + 1, ...replaced);
      // Look again from the new node: the closer may pair with an earlier opener too.
      c = o + (opener.length ? 1 : 0);
      break;
    }
  }
  // While streaming, an opener still unmatched is waiting for its partner: hold it back.
  const held = streaming
    ? tokens.filter((token) => token.type !== 'delimiter' || !token.open)
    : tokens;
  return held.map(literal);
}

function literal(token: Token): NuiMarkdownInline {
  return token.type === 'delimiter'
    ? { type: 'text', text: token.char.repeat(token.length) }
    : token;
}

/** Joins neighbouring text nodes. */
function merge(nodes: NuiMarkdownInline[]): NuiMarkdownInline[] {
  const out: NuiMarkdownInline[] = [];
  for (const node of nodes) {
    const last = out.at(-1);
    if (node.type === 'text' && last?.type === 'text')
      out[out.length - 1] = { type: 'text', text: last.text + node.text };
    else if (node.type !== 'text' || node.text) out.push(node);
  }
  return out;
}

/** The text of some inline Markdown, without its marks (for alt text and titles). */
function plain(markdown: string): string {
  return nuiMarkdownText(inlines(markdown, false));
}

/** The plain text of inline nodes. */
export function nuiMarkdownText(nodes: readonly NuiMarkdownInline[]): string {
  return nodes
    .map((node) =>
      node.type === 'text' || node.type === 'code'
        ? node.text
        : node.type === 'image'
          ? node.alt
          : node.type === 'break'
            ? '\n'
            : nuiMarkdownText(node.children),
    )
    .join('');
}

/**
 * The plain text of Markdown, a line per block: for announcing a reply to screen
 * readers, or previewing it.
 */
export function nuiMarkdownToText(markdown: string): string {
  return blockText(nuiParseMarkdown(markdown));
}

function blockText(blocks: readonly NuiMarkdownBlock[]): string {
  return blocks
    .map((block) => {
      switch (block.type) {
        case 'paragraph':
        case 'heading':
          return nuiMarkdownText(block.children);
        case 'code':
          return block.text;
        case 'quote':
          return blockText(block.children);
        case 'list':
          return block.items.map((item) => blockText(item.children)).join('\n');
        case 'table':
          return [block.head, ...block.rows]
            .map((row) => row.map((cell) => nuiMarkdownText(cell)).join(', '))
            .join('\n');
        case 'rule':
          return '';
      }
    })
    .filter((text) => text !== '')
    .join('\n');
}
