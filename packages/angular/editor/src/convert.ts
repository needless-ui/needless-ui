import {
  type NuiMarkdownBlock,
  type NuiMarkdownInline,
  nuiParseMarkdown,
  nuiSafeUrl,
} from '@needless-ui/angular/markdown';
import {
  blockText,
  normalize,
  nuiEditorBlock,
  type NuiEditorBlock,
  type NuiEditorBlockType,
  type NuiEditorDoc,
  nuiEditorEmpty,
  type NuiEditorMarks,
  type NuiEditorRun,
} from './model';

/** Formats in the order their tags nest, outermost first. */
const ORDER = ['link', 'bold', 'italic', 'underline', 'strike', 'code'] as const;
type Key = (typeof ORDER)[number];

const TAGS: Record<Exclude<Key, 'link'>, string> = {
  bold: 'strong',
  italic: 'em',
  underline: 'u',
  strike: 's',
  code: 'code',
};

/**
 * A link address the editor keeps: web, mail and phone addresses, and paths on
 * the same site. Anything else (`javascript:`, `data:`) is dropped.
 */
export function nuiEditorSafeUrl(url: string): string | null {
  const href = url.trim();
  if (!href) return null;
  if (/^[/#?]/.test(href) && !href.startsWith('//')) return href;
  return nuiSafeUrl(href) ? href : null;
}

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeAttribute = (text: string) => escapeHtml(text).replace(/"/g, '&quot;');

/** A format's identity: links with different addresses are different. */
const markKey = (key: Key, marks: NuiEditorMarks) => (key === 'link' ? `link:${marks.link}` : key);

function activeKeys(marks: NuiEditorMarks): string[] {
  return ORDER.filter((key) => (key === 'link' ? !!marks.link : !!marks[key])).map((key) =>
    markKey(key, marks),
  );
}

/** Runs as HTML, with tags opened and closed only where formats change. */
export function runsToHtml(runs: readonly NuiEditorRun[]): string {
  let html = '';
  let open: string[] = [];
  const close = (count: number) => {
    for (const key of open.splice(open.length - count).reverse()) {
      html += key.startsWith('link:') ? '</a>' : `</${TAGS[key as keyof typeof TAGS]}>`;
    }
  };
  for (const run of runs) {
    const keys = activeKeys(run.marks);
    let same = 0;
    while (same < open.length && same < keys.length && open[same] === keys[same]) same++;
    close(open.length - same);
    for (const key of keys.slice(same)) {
      html += key.startsWith('link:')
        ? `<a href="${escapeAttribute(key.slice(5))}">`
        : `<${TAGS[key as keyof typeof TAGS]}>`;
      open.push(key);
    }
    html += escapeHtml(run.text).replace(/\n/g, '<br>');
  }
  close(open.length);
  return html;
}

/**
 * The document as HTML: paragraphs, headings, quotes, lists nested by depth,
 * code blocks and rules, with only the formats the editor has.
 */
export function nuiEditorToHtml(doc: NuiEditorDoc): string {
  let html = '';
  // Open lists, outermost first; each has an open item.
  const lists: ('ul' | 'ol')[] = [];
  const closeLists = (to: number) => {
    while (lists.length > to) html += `</li></${lists.pop()}>`;
  };
  let quote = false;
  for (const block of doc) {
    const list = block.type === 'bullet' || block.type === 'ordered';
    if (quote && block.type !== 'quote') {
      html += '</blockquote>';
      quote = false;
    }
    if (!list) closeLists(0);
    const inline = runsToHtml(block.runs);
    switch (block.type) {
      case 'paragraph':
        html += `<p>${inline}</p>`;
        break;
      case 'heading':
        html += `<h${block.level}>${inline}</h${block.level}>`;
        break;
      case 'quote':
        if (!quote) html += '<blockquote>';
        quote = true;
        html += `<p>${inline}</p>`;
        break;
      case 'code':
        html += `<pre><code>${escapeHtml(blockText(block))}</code></pre>`;
        break;
      case 'rule':
        html += '<hr>';
        break;
      default: {
        const tag = block.type === 'bullet' ? 'ul' : 'ol';
        const depth = block.depth ?? 0;
        closeLists(depth + 1);
        if (lists.length === depth + 1 && lists[depth] !== tag) closeLists(depth);
        if (lists.length === depth + 1) html += '</li><li>';
        while (lists.length < depth + 1) {
          const level = lists.length;
          lists.push(level === depth ? tag : 'ul');
          html += `<${lists[level]}><li>`;
        }
        html += inline;
      }
    }
  }
  if (quote) html += '</blockquote>';
  closeLists(0);
  return html;
}

const SKIP = new Set([
  'SCRIPT',
  'STYLE',
  'TEMPLATE',
  'NOSCRIPT',
  'IFRAME',
  'OBJECT',
  'EMBED',
  'SVG',
  'MATH',
  'HEAD',
  'TITLE',
  'META',
  'LINK',
  'BUTTON',
  'SELECT',
  'INPUT',
  'TEXTAREA',
  'IMG',
  'VIDEO',
  'AUDIO',
  'CANVAS',
]);
const CONTAINERS = new Set([
  'P',
  'DIV',
  'SECTION',
  'ARTICLE',
  'MAIN',
  'HEADER',
  'FOOTER',
  'ASIDE',
  'NAV',
  'FIGURE',
  'FIGCAPTION',
  'ADDRESS',
  'DETAILS',
  'SUMMARY',
  'DL',
  'DT',
  'DD',
  'TABLE',
  'THEAD',
  'TBODY',
  'TFOOT',
  'TR',
  'TD',
  'TH',
  'CAPTION',
  'BODY',
  'CENTER',
]);

interface Context {
  marks: NuiEditorMarks;
  quote: boolean;
  list: { type: 'bullet' | 'ordered'; depth: number } | null;
}

/** Collects blocks while walking HTML. */
class Builder {
  readonly blocks: NuiEditorBlock[] = [];
  private runs: NuiEditorRun[] | null = null;
  private kind: {
    type: NuiEditorBlockType;
    level?: 1 | 2 | 3;
    depth?: number;
    keep: boolean;
  } | null = null;

  open(
    type: NuiEditorBlockType,
    attrs: { level?: 1 | 2 | 3; depth?: number } = {},
    keep = true,
  ): void {
    // A block opened inside one still empty (<li><p>) takes its place.
    if (this.runs && !this.runs.length && this.kind) {
      this.kind = { type, ...attrs, keep: keep || this.kind.keep };
      return;
    }
    this.flush();
    this.kind = { type, ...attrs, keep };
    this.runs = [];
  }

  text(text: string, context: Context): void {
    if (!this.runs) {
      if (!text.trim()) return;
      const list = context.list;
      if (list) this.open(list.type, { depth: list.depth }, false);
      else this.open(context.quote ? 'quote' : 'paragraph', {}, false);
    }
    this.runs!.push({ text, marks: context.marks });
  }

  flush(): void {
    if (!this.runs || !this.kind) return;
    const runs = collapse(this.runs);
    if (runs.length || this.kind.keep) {
      this.blocks.push(nuiEditorBlock(this.kind.type, runs, this.kind));
    }
    this.runs = null;
    this.kind = null;
  }
}

/** Whitespace as a browser shows it: runs of spaces as one, none at the ends. */
function collapse(runs: readonly NuiEditorRun[]): NuiEditorRun[] {
  const out: NuiEditorRun[] = [];
  let space = true;
  for (const run of runs) {
    let text = '';
    for (const char of run.text) {
      if (char === '\n') {
        text += char;
        space = true;
      } else if (char === ' ') {
        if (!space) text += ' ';
        space = true;
      } else {
        text += char;
        space = false;
      }
    }
    out.push({ text, marks: run.marks });
  }
  // No space at the end, nor before a line break.
  for (let i = out.length - 1; i >= 0; i--) {
    const trimmed = out[i].text.replace(/ +$/, '');
    out[i] = { ...out[i], text: trimmed };
    if (trimmed) break;
  }
  return normalize(out.map((run) => ({ ...run, text: run.text.replace(/ \n/g, '\n') })));
}

function styleMarks(element: HTMLElement, marks: NuiEditorMarks): NuiEditorMarks {
  const style = element.style;
  if (!style) return marks;
  const next = { ...marks };
  const weight = style.fontWeight;
  if (weight === 'bold' || weight === 'bolder' || Number(weight) >= 600) next.bold = true;
  else if (weight === 'normal' || (Number(weight) > 0 && Number(weight) < 600)) delete next.bold;
  if (style.fontStyle === 'italic') next.italic = true;
  else if (style.fontStyle === 'normal') delete next.italic;
  const decoration = `${style.textDecoration} ${style.textDecorationLine}`;
  if (decoration.includes('underline')) next.underline = true;
  if (decoration.includes('line-through')) next.strike = true;
  if (/monospace|courier|consolas/i.test(style.fontFamily)) next.code = true;
  return next;
}

function walk(node: Node, context: Context, out: Builder): void {
  if (node.nodeType === 3) {
    // Newlines in HTML source are spaces; only <br> breaks a line.
    out.text((node.nodeValue ?? '').replace(/[\t\n\r\f ]+/g, ' '), context);
    return;
  }
  if (node.nodeType !== 1) return;
  const element = node as HTMLElement;
  const tag = element.tagName.toUpperCase();
  if (SKIP.has(tag)) return;
  const children = (ctx: Context) => {
    for (const child of Array.from(element.childNodes)) walk(child, ctx, out);
  };
  let marks = styleMarks(element, context.marks);
  switch (tag) {
    case 'BR':
      out.text('\n', context);
      return;
    case 'HR':
      out.flush();
      out.blocks.push(nuiEditorBlock('rule'));
      return;
    case 'H1':
    case 'H2':
    case 'H3':
    case 'H4':
    case 'H5':
    case 'H6':
      out.open('heading', { level: Math.min(3, Number(tag[1])) as 1 | 2 | 3 });
      children({ ...context, marks: {} });
      out.flush();
      return;
    case 'BLOCKQUOTE':
      out.flush();
      children({ ...context, quote: true });
      out.flush();
      return;
    case 'UL':
    case 'OL': {
      out.flush();
      const depth = context.list ? context.list.depth + 1 : 0;
      children({ ...context, list: { type: tag === 'OL' ? 'ordered' : 'bullet', depth } });
      out.flush();
      return;
    }
    case 'LI': {
      const list = context.list ?? { type: 'bullet', depth: 0 };
      out.open(list.type, { depth: list.depth });
      children({ ...context, list });
      out.flush();
      return;
    }
    case 'PRE':
      out.flush();
      out.blocks.push(
        nuiEditorBlock('code', [
          { text: (element.textContent ?? '').replace(/\n$/, ''), marks: {} },
        ]),
      );
      return;
    case 'P':
      out.open(
        context.list ? context.list.type : context.quote ? 'quote' : 'paragraph',
        context.list ? { depth: context.list.depth } : {},
      );
      children({ ...context, marks });
      out.flush();
      return;
    case 'B':
    case 'STRONG':
      // Google Docs wraps everything in <b style="font-weight: normal">.
      if (!/normal|[1-5]00/.test(element.style?.fontWeight ?? '')) marks = { ...marks, bold: true };
      break;
    case 'I':
    case 'EM':
    case 'CITE':
    case 'DFN':
      marks = { ...marks, italic: true };
      break;
    case 'U':
    case 'INS':
      marks = { ...marks, underline: true };
      break;
    case 'S':
    case 'DEL':
    case 'STRIKE':
      marks = { ...marks, strike: true };
      break;
    case 'CODE':
    case 'KBD':
    case 'SAMP':
    case 'TT':
      marks = { ...marks, code: true };
      break;
    case 'A': {
      const href = nuiEditorSafeUrl(element.getAttribute('href') ?? '');
      if (href) marks = { ...marks, link: href };
      break;
    }
    default:
      if (CONTAINERS.has(tag)) {
        out.flush();
        children({ ...context, marks });
        out.flush();
        return;
      }
  }
  children({ ...context, marks });
}

/**
 * Reads HTML into a document, keeping what the editor can show: paragraphs,
 * headings, quotes, lists, code, rules, bold, italic, underline, strikethrough,
 * code and safe links, including formats pasted as styles (from Google Docs or
 * Word). `document` parses it, inertly: nothing runs or loads.
 */
export function nuiEditorFromHtml(html: string, document: Document): NuiEditorDoc {
  const template = document.createElement('template');
  template.innerHTML = html;
  const out = new Builder();
  const root = template.content ?? template;
  for (const child of Array.from(root.childNodes)) {
    walk(child, { marks: {}, quote: false, list: null }, out);
  }
  out.flush();
  return out.blocks.length ? out.blocks : nuiEditorEmpty();
}

/** Plain text into paragraphs, one per line (a blank line between is dropped). */
export function nuiEditorFromText(text: string): NuiEditorDoc {
  const lines = text.replace(/\r\n?/g, '\n').split('\n');
  const blocks = lines.map((line) => nuiEditorBlock('paragraph', [{ text: line, marks: {} }]));
  return blocks.length ? blocks : nuiEditorEmpty();
}

// Markdown.

function inlineRuns(
  nodes: readonly NuiMarkdownInline[],
  marks: NuiEditorMarks = {},
): NuiEditorRun[] {
  const out: NuiEditorRun[] = [];
  for (const node of nodes) {
    switch (node.type) {
      case 'text':
        out.push({ text: node.text, marks });
        break;
      case 'break':
        out.push({ text: '\n', marks });
        break;
      case 'code':
        out.push({ text: node.text, marks: { ...marks, code: true } });
        break;
      case 'strong':
        out.push(...inlineRuns(node.children, { ...marks, bold: true }));
        break;
      case 'em':
        out.push(...inlineRuns(node.children, { ...marks, italic: true }));
        break;
      case 'del':
        out.push(...inlineRuns(node.children, { ...marks, strike: true }));
        break;
      case 'link': {
        const href = nuiEditorSafeUrl(node.href);
        out.push(...inlineRuns(node.children, href ? { ...marks, link: href } : marks));
        break;
      }
      case 'image':
        if (node.alt) out.push({ text: node.alt, marks });
        break;
    }
  }
  return out;
}

function markdownBlocks(
  blocks: readonly NuiMarkdownBlock[],
  context: { quote: boolean; depth: number; list: 'bullet' | 'ordered' | null },
  out: NuiEditorBlock[],
): void {
  for (const block of blocks) {
    switch (block.type) {
      case 'paragraph':
        out.push(
          nuiEditorBlock(
            context.list ?? (context.quote ? 'quote' : 'paragraph'),
            inlineRuns(block.children),
            {
              depth: context.depth,
            },
          ),
        );
        break;
      case 'heading':
        out.push(
          nuiEditorBlock('heading', inlineRuns(block.children), {
            level: Math.min(3, block.level) as 1 | 2 | 3,
          }),
        );
        break;
      case 'code':
        out.push(nuiEditorBlock('code', [{ text: block.text, marks: {} }]));
        break;
      case 'quote':
        markdownBlocks(block.children, { ...context, quote: true, list: null }, out);
        break;
      case 'rule':
        out.push(nuiEditorBlock('rule'));
        break;
      case 'table':
        for (const row of [block.head, ...block.rows]) {
          const runs = row.flatMap((cell, i) => [
            ...(i ? [{ text: ' | ', marks: {} }] : []),
            ...inlineRuns(cell),
          ]);
          out.push(nuiEditorBlock('paragraph', runs));
        }
        break;
      case 'list': {
        const type = block.ordered ? 'ordered' : 'bullet';
        const depth = context.list ? context.depth + 1 : 0;
        for (const item of block.items) {
          const start = out.length;
          markdownBlocks(item.children, { quote: false, depth, list: type }, out);
          // An item that started with no paragraph still gets its bullet.
          if (out.length === start || out[start].type !== type) {
            out.splice(start, 0, nuiEditorBlock(type, [], { depth }));
          }
        }
        break;
      }
    }
  }
}

/** Reads Markdown into a document. */
export function nuiEditorFromMarkdown(markdown: string): NuiEditorDoc {
  const out: NuiEditorBlock[] = [];
  markdownBlocks(nuiParseMarkdown(markdown), { quote: false, depth: 0, list: null }, out);
  return out.length ? out : nuiEditorEmpty();
}

const escapeMarkdown = (text: string) => text.replace(/([\\`*_[\]~<>|])/g, '\\$1');

const MARKDOWN = ['link', 'bold', 'italic', 'strike'] as const;

function codeSpan(text: string): string {
  const ticks = text.includes('`') ? '``' : '`';
  const pad = ticks.length > 1 ? ' ' : '';
  return `${ticks}${pad}${text}${pad}${ticks}`;
}

/**
 * Runs as Markdown, with markers opened and closed only where formats change.
 * Emphasis can't open before a space or close after one, so spaces at the
 * edges of a change stay outside the markers.
 */
function runsToMarkdown(runs: readonly NuiEditorRun[]): string {
  let md = '';
  const open: string[] = [];
  const opener = (key: string) =>
    key.startsWith('link:') ? '[' : key === 'bold' ? '**' : key === 'italic' ? '*' : '~~';
  const closer = (key: string) =>
    key.startsWith('link:')
      ? `](${key.slice(5).replace(/[()\s]/g, encodeURIComponent)})`
      : opener(key);
  const close = (count: number) => {
    if (!count) return;
    const trail = /\s*$/.exec(md)![0];
    md = md.slice(0, md.length - trail.length);
    for (const key of open.splice(open.length - count).reverse()) md += closer(key);
    md += trail;
  };
  for (const run of runs) {
    const text = run.marks.code
      ? codeSpan(run.text)
      : escapeMarkdown(run.text).replace(/\n/g, '\\\n');
    // Spaces alone change nothing: they go on with the formats around them.
    if (!run.text.trim()) {
      md += text;
      continue;
    }
    const keys = MARKDOWN.filter((key) =>
      key === 'link' ? !!run.marks.link : !!run.marks[key],
    ).map((key) => (key === 'link' ? `link:${run.marks.link}` : key));
    let same = 0;
    while (same < open.length && same < keys.length && open[same] === keys[same]) same++;
    close(open.length - same);
    const lead = /^\s*/.exec(text)![0];
    md += lead;
    for (const key of keys.slice(same)) {
      md += opener(key);
      open.push(key);
    }
    md += text.slice(lead.length);
  }
  close(open.length);
  return md;
}

/** The document as Markdown (CommonMark and GitHub's strikethrough). Underline has no Markdown: it's dropped. */
export function nuiEditorToMarkdown(doc: NuiEditorDoc): string {
  const parts: string[] = [];
  const counters: number[] = [];
  const indents: number[] = [];
  let previous: NuiEditorBlock | null = null;
  for (const block of doc) {
    const list = block.type === 'bullet' || block.type === 'ordered';
    const inline = runsToMarkdown(block.runs);
    let text: string;
    switch (block.type) {
      case 'heading':
        text = `${'#'.repeat(block.level ?? 2)} ${inline}`;
        break;
      case 'quote':
        text = `> ${inline.replace(/\n/g, '\n> ')}`;
        break;
      case 'code': {
        const code = blockText(block);
        const fence = code.includes('```') ? '~~~' : '```';
        text = `${fence}\n${code}\n${fence}`;
        break;
      }
      case 'rule':
        text = '---';
        break;
      case 'bullet':
      case 'ordered': {
        const depth = block.depth ?? 0;
        counters.length = depth + 1;
        indents.length = depth + 1;
        const sameList = previous && (previous.type === 'bullet' || previous.type === 'ordered');
        if (
          !sameList ||
          counters[depth] === undefined ||
          (previous!.type !== block.type && (previous!.depth ?? 0) === depth)
        )
          counters[depth] = 0;
        counters[depth]++;
        const marker = block.type === 'bullet' ? '- ' : `${counters[depth]}. `;
        const indent = indents.slice(0, depth).reduce((sum, width) => sum + (width ?? 2), 0);
        indents[depth] = marker.length;
        text =
          ' '.repeat(indent) +
          marker +
          inline.replace(/\n/g, '\n' + ' '.repeat(indent + marker.length));
        break;
      }
      default:
        // A paragraph that would read as other Markdown keeps its first character literal.
        text = inline.replace(/^(#{1,6} |[-+*] |>)/, '\\$1').replace(/^(\d+)([.)]) /, '$1\\$2 ');
    }
    if (!list) {
      counters.length = 0;
      indents.length = 0;
    }
    const tight =
      previous &&
      ((list && (previous.type === 'bullet' || previous.type === 'ordered')) ||
        (block.type === 'quote' && previous.type === 'quote'));
    if (parts.length) parts.push(tight ? (block.type === 'quote' ? '\n>\n' : '\n') : '\n\n');
    parts.push(text);
    previous = block;
  }
  return parts.join('');
}
