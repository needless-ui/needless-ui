import {
  blockText,
  type NuiEditorBlock,
  type NuiEditorDoc,
  type NuiEditorMarks,
  type NuiEditorPoint,
  type NuiEditorSelection,
  point,
} from './model';

const MARK_TAGS: [keyof NuiEditorMarks, string][] = [
  ['link', 'A'],
  ['bold', 'STRONG'],
  ['italic', 'EM'],
  ['underline', 'U'],
  ['strike', 'S'],
  ['code', 'CODE'],
];

/** Marks a <br> that only holds an empty line open: it isn't a character. */
const TRAILING = 'data-nui-trailing';

/**
 * Draws a document into an editable element, and maps between places in the
 * DOM and places in the document. Blocks that didn't change keep their
 * elements, so the browser's caret, spellcheck and input methods aren't
 * disturbed more than an edit needs.
 */
export class NuiEditorView {
  private readonly elements = new Map<number, HTMLElement>();
  private readonly drawn = new Map<number, NuiEditorBlock>();
  private index = new Map<number, number>();
  private doc: NuiEditorDoc = [];

  constructor(
    private readonly root: HTMLElement,
    private readonly document: Document,
  ) {}

  render(doc: NuiEditorDoc): void {
    this.doc = doc;
    this.index = new Map(doc.map((block, i) => [block.id, i]));
    const nodes: HTMLElement[] = [];
    let wrapper: { element: HTMLElement; type: string; depth: number } | null = null;
    // Items placed in each list so far (the server's DOM has no dataset to keep it in).
    const placed = new Map<HTMLElement, number>();
    // Ordered lists count on across deeper items: each depth keeps its count.
    const counts: number[] = [];
    const seen = new Set<number>();
    for (const block of doc) {
      seen.add(block.id);
      const element = this.element(block);
      if (block.type === 'bullet' || block.type === 'ordered') {
        const depth = block.depth ?? 0;
        const tag = block.type === 'bullet' ? 'UL' : 'OL';
        counts.length = depth + 1;
        if (!wrapper || wrapper.type !== tag || wrapper.depth !== depth) {
          const reuse = this.root.childNodes[nodes.length] as HTMLElement | undefined;
          const list: HTMLElement =
            reuse?.tagName === tag && reuse.getAttribute('data-depth') === String(depth)
              ? reuse
              : this.document.createElement(tag);
          list.setAttribute('data-depth', String(depth));
          list.setAttribute('style', `--_depth: ${depth}`);
          if (tag === 'OL') {
            const start = (counts[depth] ?? 0) + 1;
            if (start > 1) list.setAttribute('start', String(start));
            else list.removeAttribute('start');
          }
          wrapper = { element: list, type: tag, depth };
          nodes.push(list);
          placed.set(list, 0);
        }
        counts[depth] = (counts[depth] ?? 0) + 1;
        const children = wrapper.element.childNodes;
        const at = placed.get(wrapper.element)!;
        if (children[at] !== element) wrapper.element.insertBefore(element, children[at] ?? null);
        placed.set(wrapper.element, at + 1);
      } else {
        wrapper = null;
        counts.length = 0;
        nodes.push(element);
      }
    }
    // Trim what's left in reused lists, then put the top-level nodes in order.
    for (const [list, count] of placed) {
      while (list.childNodes.length > count) list.removeChild(list.lastChild!);
    }
    nodes.forEach((node, i) => {
      if (this.root.childNodes[i] !== node)
        this.root.insertBefore(node, this.root.childNodes[i] ?? null);
    });
    while (this.root.childNodes.length > nodes.length) this.root.removeChild(this.root.lastChild!);
    for (const id of [...this.elements.keys()]) {
      if (!seen.has(id)) {
        this.elements.delete(id);
        this.drawn.delete(id);
      }
    }
  }

  /** The element for a block: the one it had, redrawn if the block changed. */
  private element(block: NuiEditorBlock): HTMLElement {
    const tag = tagOf(block);
    let element = this.elements.get(block.id);
    if (element && this.drawn.get(block.id) === block && element.tagName === tag) return element;
    if (!element || element.tagName !== tag) {
      element = this.document.createElement(tag);
      element.setAttribute('data-nui-block', String(block.id));
      // Each block runs in its own text's direction: English in an Arabic page
      // reads left to right. Code always does.
      if (block.type !== 'rule')
        element.setAttribute('dir', block.type === 'code' ? 'ltr' : 'auto');
      this.elements.set(block.id, element);
    }
    this.drawn.set(block.id, block);
    if (block.type === 'rule') {
      element.setAttribute('contenteditable', 'false');
      return element;
    }
    while (element.firstChild) element.removeChild(element.firstChild);
    for (const node of this.inline(block)) element.appendChild(node);
    return element;
  }

  private inline(block: NuiEditorBlock): Node[] {
    const doc = this.document;
    const nodes: Node[] = [];
    const text = blockText(block);
    if (block.type === 'code') {
      const code = doc.createElement('code');
      if (text) code.appendChild(doc.createTextNode(text));
      nodes.push(code);
    } else {
      // Runs nest their formats in a fixed order; a format that goes on across
      // runs keeps one element.
      const stack: { key: string; element: HTMLElement }[] = [];
      const parent = () => stack[stack.length - 1]?.element;
      const add = (node: Node) => (parent() ? parent()!.appendChild(node) : nodes.push(node));
      for (const run of block.runs) {
        const keys = MARK_TAGS.filter(([mark]) => run.marks[mark]).map(([mark, tag]) => ({
          key: mark === 'link' ? `link:${run.marks.link}` : mark,
          tag,
        }));
        let same = 0;
        while (same < stack.length && same < keys.length && stack[same].key === keys[same].key)
          same++;
        stack.length = same;
        for (const { key, tag } of keys.slice(same)) {
          const element = doc.createElement(tag);
          if (tag === 'A') element.setAttribute('href', run.marks.link!);
          add(element);
          stack.push({ key, element });
        }
        run.text.split('\n').forEach((part, i) => {
          if (i) add(doc.createElement('br'));
          if (part) add(doc.createTextNode(part));
        });
      }
    }
    // An empty block, or one ending on a line break, keeps its last line open.
    if (!text || text.endsWith('\n')) {
      const br = doc.createElement('br');
      br.setAttribute(TRAILING, '');
      if (block.type === 'code') (nodes[0] as HTMLElement).appendChild(br);
      else nodes.push(br);
    }
    return nodes;
  }

  /** The document place of a DOM place inside the editor, if it's in a block. */
  pointFromDom(node: Node, offset: number): NuiEditorPoint | null {
    if (!this.root.contains(node)) return null;
    const element: Element | null = node.nodeType === 1 ? (node as Element) : node.parentElement;
    const block = element?.closest('[data-nui-block]');
    if (!block || !this.root.contains(block)) {
      // Between blocks (on the root or a list): the block after the place, at its start.
      const container = node as Element;
      const next = container.childNodes[offset] as Element | undefined;
      const target = next ?? container.childNodes[offset - 1];
      if (!target) return null;
      const first =
        target.nodeType === 1
          ? (target as Element).matches('[data-nui-block]')
            ? target
            : (target as Element).querySelector('[data-nui-block]')
          : null;
      if (!first) return null;
      const index = this.index.get(Number((first as HTMLElement).getAttribute('data-nui-block')));
      if (index === undefined) return null;
      return next ? point(index, 0) : point(index, blockText(this.doc[index]).length);
    }
    const index = this.index.get(Number((block as HTMLElement).getAttribute('data-nui-block')));
    if (index === undefined) return null;
    if (this.doc[index].type === 'rule') return point(index, 0);
    const range = this.document.createRange();
    range.setStart(block, 0);
    range.setEnd(node, offset);
    const offsetInBlock = length(range.cloneContents());
    // Against the text on screen: while an input method composes, it's ahead of
    // the document last drawn.
    return point(index, Math.min(offsetInBlock, length(block)));
  }

  /** The DOM place of a document place. */
  domFromPoint(at: NuiEditorPoint): { node: Node; offset: number } {
    const block = this.doc[at.block];
    const element = block && this.elements.get(block.id);
    if (!element) return { node: this.root, offset: 0 };
    if (block.type === 'rule') {
      const parent = element.parentNode!;
      return { node: parent, offset: Array.prototype.indexOf.call(parent.childNodes, element) };
    }
    let remaining = at.offset;
    const walker = this.document.createTreeWalker(element, 5 /* elements and text */);
    let last: Node | null = null;
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      if (node.nodeType === 3) {
        const size = node.nodeValue!.length;
        if (remaining <= size) return { node, offset: remaining };
        remaining -= size;
        last = node;
      } else if ((node as Element).tagName === 'BR') {
        const parent = node.parentNode!;
        const index = Array.prototype.indexOf.call(parent.childNodes, node);
        // Before a line break, or on the empty line a trailing one holds open.
        if ((node as Element).hasAttribute(TRAILING) || remaining === 0) {
          return { node: parent, offset: index };
        }
        remaining -= 1;
        last = null;
      }
    }
    if (last) return { node: last, offset: last.nodeValue!.length };
    return { node: element, offset: element.childNodes.length };
  }

  /** The editor's selection in the document, if the DOM selection is inside it. */
  readSelection(): NuiEditorSelection | null {
    const selection = this.document.getSelection();
    if (!selection || !selection.anchorNode || !selection.focusNode) return null;
    const anchor = this.pointFromDom(selection.anchorNode, selection.anchorOffset);
    const focus = this.pointFromDom(selection.focusNode, selection.focusOffset);
    return anchor && focus ? { anchor, focus } : null;
  }

  writeSelection(selection: NuiEditorSelection): void {
    const dom = this.document.getSelection();
    if (!dom) return;
    const anchor = this.domFromPoint(selection.anchor);
    const focus = this.domFromPoint(selection.focus);
    if (
      dom.anchorNode === anchor.node &&
      dom.anchorOffset === anchor.offset &&
      dom.focusNode === focus.node &&
      dom.focusOffset === focus.offset
    )
      return;
    dom.setBaseAndExtent(anchor.node, anchor.offset, focus.node, focus.offset);
  }

  /** A DOM range for a document range: for the browser's own boxes (the link popover's anchor). */
  range(from: NuiEditorPoint, to: NuiEditorPoint): Range {
    const range = this.document.createRange();
    const start = this.domFromPoint(from);
    const end = this.domFromPoint(to);
    range.setStart(start.node, start.offset);
    range.setEnd(end.node, end.offset);
    return range;
  }

  /** The element of a block, to read what the browser typed into it. */
  elementOf(index: number): HTMLElement | undefined {
    const block = this.doc[index];
    return block && this.elements.get(block.id);
  }

  /** Reads a block's text back from the DOM, after an input method typed into it. */
  textOf(index: number): string {
    const element = this.elementOf(index);
    return element ? length(element, true) : '';
  }
}

function tagOf(block: NuiEditorBlock): string {
  switch (block.type) {
    case 'heading':
      return `H${block.level ?? 2}`;
    case 'quote':
      return 'BLOCKQUOTE';
    case 'code':
      return 'PRE';
    case 'rule':
      return 'HR';
    case 'bullet':
    case 'ordered':
      return 'LI';
    default:
      return 'P';
  }
}

/** Characters in a piece of the editor: text, and <br> as a line break. */
function length(node: Node, text: true): string;
function length(node: Node): number;
function length(node: Node, text?: true): number | string {
  let out = '';
  const visit = (n: Node) => {
    if (n.nodeType === 3) out += n.nodeValue;
    else if (n.nodeType === 1 && (n as Element).tagName === 'BR') {
      if (!(n as Element).hasAttribute(TRAILING)) out += '\n';
    } else n.childNodes.forEach(visit);
  };
  node.childNodes.forEach(visit);
  return text ? out : out.length;
}
