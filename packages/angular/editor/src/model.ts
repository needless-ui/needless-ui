/** The inline formats text can carry. */
export type NuiEditorMark = 'bold' | 'italic' | 'underline' | 'strike' | 'code';

/** The formats of a run of text; `link` holds the address. */
export interface NuiEditorMarks {
  bold?: true;
  italic?: true;
  underline?: true;
  strike?: true;
  code?: true;
  link?: string;
}

/** Text with the same formats throughout. */
export interface NuiEditorRun {
  text: string;
  marks: NuiEditorMarks;
}

export type NuiEditorBlockType =
  'paragraph' | 'heading' | 'quote' | 'code' | 'bullet' | 'ordered' | 'rule';

/**
 * A block of the document: a paragraph, a heading (level 1 to 3), a quote, a
 * code block, a list item (with its depth, from 0) or a rule. Blocks are never
 * changed, only replaced; `id` stays with the block across edits.
 */
export interface NuiEditorBlock {
  readonly id: number;
  readonly type: NuiEditorBlockType;
  readonly level?: 1 | 2 | 3;
  readonly depth?: number;
  readonly runs: readonly NuiEditorRun[];
}

export type NuiEditorDoc = readonly NuiEditorBlock[];

/** A place in the document: a block, and a character in its text. */
export interface NuiEditorPoint {
  block: number;
  offset: number;
}

export interface NuiEditorSelection {
  anchor: NuiEditorPoint;
  focus: NuiEditorPoint;
}

/** What an edit comes to: the document, and where the selection goes. */
export interface NuiEditorChange {
  doc: NuiEditorDoc;
  selection: NuiEditorSelection;
}

let nextId = 1;

export function nuiEditorBlock(
  type: NuiEditorBlockType,
  runs: readonly NuiEditorRun[] = [],
  attrs: { level?: 1 | 2 | 3; depth?: number; id?: number } = {},
): NuiEditorBlock {
  const block: NuiEditorBlock = { id: attrs.id ?? nextId++, type, runs: normalize(runs) };
  if (type === 'heading') return { ...block, level: attrs.level ?? 2 };
  if (type === 'bullet' || type === 'ordered') return { ...block, depth: attrs.depth ?? 0 };
  if (type === 'code') return { ...block, runs: plain(block.runs) };
  if (type === 'rule') return { ...block, runs: [] };
  return block;
}

/** An empty document: one empty paragraph. */
export function nuiEditorEmpty(): NuiEditorDoc {
  return [nuiEditorBlock('paragraph')];
}

export const point = (block: number, offset: number): NuiEditorPoint => ({ block, offset });
export const caret = (at: NuiEditorPoint): NuiEditorSelection => ({ anchor: at, focus: at });

export function comparePoints(a: NuiEditorPoint, b: NuiEditorPoint): number {
  return a.block - b.block || a.offset - b.offset;
}

/** The selection's ends, in document order. */
export function ordered(selection: NuiEditorSelection): [NuiEditorPoint, NuiEditorPoint] {
  const { anchor, focus } = selection;
  return comparePoints(anchor, focus) <= 0 ? [anchor, focus] : [focus, anchor];
}

export const collapsed = (selection: NuiEditorSelection) =>
  comparePoints(selection.anchor, selection.focus) === 0;

export function blockText(block: NuiEditorBlock): string {
  return block.runs.map((run) => run.text).join('');
}

export function sameMarks(a: NuiEditorMarks, b: NuiEditorMarks): boolean {
  return (
    !!a.bold === !!b.bold &&
    !!a.italic === !!b.italic &&
    !!a.underline === !!b.underline &&
    !!a.strike === !!b.strike &&
    !!a.code === !!b.code &&
    (a.link ?? null) === (b.link ?? null)
  );
}

/** Adjacent runs with the same formats merged, empty ones gone. */
export function normalize(runs: readonly NuiEditorRun[]): NuiEditorRun[] {
  const out: NuiEditorRun[] = [];
  for (const run of runs) {
    if (!run.text) continue;
    const last = out[out.length - 1];
    if (last && sameMarks(last.marks, run.marks)) {
      out[out.length - 1] = { text: last.text + run.text, marks: last.marks };
    } else out.push(run);
  }
  return out;
}

/** Runs without formats: code blocks hold plain text. */
function plain(runs: readonly NuiEditorRun[]): NuiEditorRun[] {
  const text = runs.map((run) => run.text).join('');
  return text ? [{ text, marks: {} }] : [];
}

/** The runs between two offsets. */
export function sliceRuns(runs: readonly NuiEditorRun[], from: number, to: number): NuiEditorRun[] {
  const out: NuiEditorRun[] = [];
  let at = 0;
  for (const run of runs) {
    const end = at + run.text.length;
    const start = Math.max(from, at);
    const stop = Math.min(to, end);
    if (stop > start) out.push({ text: run.text.slice(start - at, stop - at), marks: run.marks });
    at = end;
  }
  return out;
}

/**
 * The formats text typed at an offset takes: those of the character before it
 * (after it, at the start). Links and code don't grow at their edges: text
 * typed right after a link isn't part of it.
 */
export function marksAt(block: NuiEditorBlock, offset: number): NuiEditorMarks {
  if (block.type === 'code') return {};
  const before = offset > 0 ? sliceRuns(block.runs, offset - 1, offset)[0]?.marks : undefined;
  const after = sliceRuns(block.runs, offset, offset + 1)[0]?.marks;
  const { link, code, ...rest } = before ?? after ?? {};
  return {
    ...rest,
    ...(link && before?.link === link && after?.link === link ? { link } : {}),
    ...(code && before?.code && after?.code ? { code: true as const } : {}),
  };
}

function withRuns(block: NuiEditorBlock, runs: readonly NuiEditorRun[]): NuiEditorBlock {
  return { ...block, runs: block.type === 'code' ? plain(runs) : normalize(runs) };
}

function replaceBlocks(
  doc: NuiEditorDoc,
  from: number,
  to: number,
  blocks: readonly NuiEditorBlock[],
): NuiEditorDoc {
  return [...doc.slice(0, from), ...blocks, ...doc.slice(to + 1)];
}

/** Deletes what's between two points, joining the blocks at the ends. */
export function deleteRange(
  doc: NuiEditorDoc,
  from: NuiEditorPoint,
  to: NuiEditorPoint,
): NuiEditorChange {
  [from, to] = comparePoints(from, to) <= 0 ? [from, to] : [to, from];
  const first = doc[from.block];
  const last = doc[to.block];
  if (from.block === to.block) {
    const runs = [
      ...sliceRuns(first.runs, 0, from.offset),
      ...sliceRuns(first.runs, to.offset, Infinity),
    ];
    return {
      doc: replaceBlocks(doc, from.block, from.block, [withRuns(first, runs)]),
      selection: caret(from),
    };
  }
  // A rule at the start gives way to the block at the end.
  const keep = first.type === 'rule' ? { ...last, id: last.id } : first;
  const runs = [
    ...sliceRuns(first.runs, 0, from.offset),
    ...sliceRuns(last.runs, to.offset, Infinity),
  ];
  const merged = withRuns(keep, runs);
  const at = first.type === 'rule' ? point(from.block, 0) : from;
  return { doc: replaceBlocks(doc, from.block, to.block, [merged]), selection: caret(at) };
}

/** Types text at a point, with formats. */
export function insertText(
  doc: NuiEditorDoc,
  at: NuiEditorPoint,
  text: string,
  marks: NuiEditorMarks,
): NuiEditorChange {
  const block = doc[at.block];
  if (block.type === 'rule') {
    // A rule holds no text: the text goes in a paragraph after it.
    const paragraph = nuiEditorBlock('paragraph', [{ text, marks }]);
    return {
      doc: replaceBlocks(doc, at.block, at.block, [block, paragraph]),
      selection: caret(point(at.block + 1, text.length)),
    };
  }
  const runs = [
    ...sliceRuns(block.runs, 0, at.offset),
    { text, marks: block.type === 'code' ? {} : marks },
    ...sliceRuns(block.runs, at.offset, Infinity),
  ];
  return {
    doc: replaceBlocks(doc, at.block, at.block, [withRuns(block, runs)]),
    selection: caret(point(at.block, at.offset + text.length)),
  };
}

/** Replaces a selection with typed text. */
export function replaceText(
  doc: NuiEditorDoc,
  selection: NuiEditorSelection,
  text: string,
  marks: NuiEditorMarks,
): NuiEditorChange {
  const [from, to] = ordered(selection);
  const deleted = collapsed(selection)
    ? { doc, selection: caret(from) }
    : deleteRange(doc, from, to);
  return insertText(deleted.doc, deleted.selection.focus, text, marks);
}

/**
 * Enter: splits the block at the point. A heading goes on as a paragraph, a
 * list as another item; Enter in an empty item leaves the list (or goes up a
 * level). In a code block, Enter is a new line.
 */
export function splitBlock(doc: NuiEditorDoc, selection: NuiEditorSelection): NuiEditorChange {
  const [from, to] = ordered(selection);
  const deleted = collapsed(selection)
    ? { doc, selection: caret(from) }
    : deleteRange(doc, from, to);
  const at = deleted.selection.focus;
  doc = deleted.doc;
  const block = doc[at.block];
  if (block.type === 'code') return insertText(doc, at, '\n', {});
  const text = blockText(block);
  const list = block.type === 'bullet' || block.type === 'ordered';
  if ((list || block.type === 'quote') && !text) {
    const depth = block.depth ?? 0;
    const lifted =
      list && depth > 0
        ? { ...block, depth: depth - 1 }
        : nuiEditorBlock('paragraph', [], { id: block.id });
    return { doc: replaceBlocks(doc, at.block, at.block, [lifted]), selection: caret(at) };
  }
  if (block.type === 'rule') {
    const paragraph = nuiEditorBlock('paragraph');
    return {
      doc: replaceBlocks(doc, at.block, at.block, [block, paragraph]),
      selection: caret(point(at.block + 1, 0)),
    };
  }
  const nextType = block.type === 'heading' ? 'paragraph' : block.type;
  if (at.offset === 0 && text) {
    // Enter at the very start opens a block above; the block itself moves down whole.
    const above = nuiEditorBlock(nextType, [], { level: block.level, depth: block.depth });
    return {
      doc: replaceBlocks(doc, at.block, at.block, [above, block]),
      selection: caret(point(at.block + 1, 0)),
    };
  }
  const head = withRuns(block, sliceRuns(block.runs, 0, at.offset));
  const tail = nuiEditorBlock(nextType, sliceRuns(block.runs, at.offset, Infinity), {
    level: block.level,
    depth: block.depth,
  });
  return {
    doc: replaceBlocks(doc, at.block, at.block, [head, tail]),
    selection: caret(point(at.block + 1, 0)),
  };
}

/**
 * Backspace at the start of a block: a list item or quote turns into a
 * paragraph first (an indented item goes up a level), a heading too; a
 * paragraph joins the block before it.
 */
export function joinBackward(doc: NuiEditorDoc, at: NuiEditorPoint): NuiEditorChange {
  const block = doc[at.block];
  if ((block.type === 'bullet' || block.type === 'ordered') && (block.depth ?? 0) > 0) {
    return {
      doc: replaceBlocks(doc, at.block, at.block, [{ ...block, depth: (block.depth ?? 0) - 1 }]),
      selection: caret(at),
    };
  }
  if (block.type !== 'paragraph' && block.type !== 'rule') {
    const paragraph = nuiEditorBlock('paragraph', block.type === 'code' ? block.runs : block.runs, {
      id: block.id,
    });
    return { doc: replaceBlocks(doc, at.block, at.block, [paragraph]), selection: caret(at) };
  }
  if (at.block === 0) return { doc, selection: caret(at) };
  const previous = doc[at.block - 1];
  if (previous.type === 'rule') {
    // The rule before goes; the text stays.
    return {
      doc: replaceBlocks(doc, at.block - 1, at.block - 1, []),
      selection: caret(point(at.block - 1, 0)),
    };
  }
  const offset = blockText(previous).length;
  return deleteRange(doc, point(at.block - 1, offset), point(at.block, 0));
}

/** Delete at the end of a block joins the next one into it. */
export function joinForward(doc: NuiEditorDoc, at: NuiEditorPoint): NuiEditorChange {
  if (at.block >= doc.length - 1) return { doc, selection: caret(at) };
  const next = doc[at.block + 1];
  if (next.type === 'rule') {
    return { doc: replaceBlocks(doc, at.block + 1, at.block + 1, []), selection: caret(at) };
  }
  return deleteRange(doc, at, point(at.block + 1, 0));
}

/** Whether every character between two points has a format (links: this address). */
export function hasMark(
  doc: NuiEditorDoc,
  from: NuiEditorPoint,
  to: NuiEditorPoint,
  mark: NuiEditorMark | 'link',
): boolean {
  let any = false;
  for (let b = from.block; b <= to.block; b++) {
    const block = doc[b];
    if (block.type === 'rule' || block.type === 'code') continue;
    const start = b === from.block ? from.offset : 0;
    const end = b === to.block ? to.offset : Infinity;
    for (const run of sliceRuns(block.runs, start, end)) {
      any = true;
      if (mark === 'link' ? !run.marks.link : !run.marks[mark]) return false;
    }
  }
  return any;
}

/** Changes the formats of the text between two points. */
export function mapMarks(
  doc: NuiEditorDoc,
  from: NuiEditorPoint,
  to: NuiEditorPoint,
  change: (marks: NuiEditorMarks) => NuiEditorMarks,
): NuiEditorDoc {
  const next = [...doc];
  for (let b = from.block; b <= to.block; b++) {
    const block = doc[b];
    if (block.type === 'rule' || block.type === 'code') continue;
    const start = b === from.block ? from.offset : 0;
    const end = b === to.block ? to.offset : Infinity;
    const runs = [
      ...sliceRuns(block.runs, 0, start),
      ...sliceRuns(block.runs, start, end).map((run) => ({
        text: run.text,
        marks: change(run.marks),
      })),
      ...sliceRuns(block.runs, end, Infinity),
    ];
    next[b] = withRuns(block, runs);
  }
  return next;
}

/** Turns a format on for the whole selection, or off where it's on everywhere. */
export function toggleMark(
  doc: NuiEditorDoc,
  selection: NuiEditorSelection,
  mark: NuiEditorMark,
): NuiEditorDoc {
  const [from, to] = ordered(selection);
  const on = !hasMark(doc, from, to, mark);
  return mapMarks(doc, from, to, (marks) => {
    const { [mark]: _, ...rest } = marks;
    return on ? { ...rest, [mark]: true } : rest;
  });
}

/** Sets or removes a link on the selection. */
export function setLink(
  doc: NuiEditorDoc,
  selection: NuiEditorSelection,
  href: string | null,
): NuiEditorDoc {
  const [from, to] = ordered(selection);
  return mapMarks(doc, from, to, ({ link: _, ...rest }) => (href ? { ...rest, link: href } : rest));
}

/** The stretch of a link around a point, so a link can be edited from inside it. */
export function linkRange(
  doc: NuiEditorDoc,
  at: NuiEditorPoint,
): { from: NuiEditorPoint; to: NuiEditorPoint; href: string } | null {
  const block = doc[at.block];
  let start = 0;
  let found: { from: number; to: number; href: string } | null = null;
  const runs = block.runs;
  for (let i = 0; i < runs.length; i++) {
    const end = start + runs[i].text.length;
    const href = runs[i].marks.link;
    if (href && at.offset >= start && at.offset <= end) {
      let from = start;
      let to = end;
      // Neighbouring runs with the same address are the same link.
      let s = start;
      for (let j = i - 1; j >= 0 && runs[j].marks.link === href; j--) {
        s -= runs[j].text.length;
        from = s;
      }
      let e = end;
      for (let j = i + 1; j < runs.length && runs[j].marks.link === href; j++) {
        e += runs[j].text.length;
        to = e;
      }
      found = { from, to, href };
      break;
    }
    start = end;
  }
  return found
    ? { from: point(at.block, found.from), to: point(at.block, found.to), href: found.href }
    : null;
}

/** Turns the blocks of a selection into another type (or back into paragraphs). */
export function setBlockType(
  doc: NuiEditorDoc,
  selection: NuiEditorSelection,
  type: NuiEditorBlockType,
  attrs: { level?: 1 | 2 | 3 } = {},
): NuiEditorDoc {
  const [from, to] = ordered(selection);
  const next = [...doc];
  for (let b = from.block; b <= to.block; b++) {
    const block = doc[b];
    if (block.type === 'rule') continue;
    next[b] = nuiEditorBlock(type, block.runs, {
      id: block.id,
      level: attrs.level,
      depth: type === block.type ? block.depth : 0,
    });
  }
  return next;
}

/** Whether every block of a selection is of a type. */
export function isBlockType(
  doc: NuiEditorDoc,
  selection: NuiEditorSelection,
  type: NuiEditorBlockType,
  level?: number,
): boolean {
  const [from, to] = ordered(selection);
  for (let b = from.block; b <= to.block; b++) {
    const block = doc[b];
    if (block.type === 'rule') continue;
    if (block.type !== type || (level !== undefined && block.level !== level)) return false;
  }
  return true;
}

/** Indents list items (or outdents, with a negative step), up to eight levels. */
export function indent(
  doc: NuiEditorDoc,
  selection: NuiEditorSelection,
  step: 1 | -1,
): NuiEditorDoc {
  const [from, to] = ordered(selection);
  const next = [...doc];
  for (let b = from.block; b <= to.block; b++) {
    const block = doc[b];
    if (block.type !== 'bullet' && block.type !== 'ordered') continue;
    const depth = Math.min(7, Math.max(0, (block.depth ?? 0) + step));
    next[b] = { ...block, depth };
  }
  return next;
}

/** Inserts a rule after the block with the point, and a paragraph after it when it's last. */
export function insertRule(doc: NuiEditorDoc, at: NuiEditorPoint): NuiEditorChange {
  const block = doc[at.block];
  const empty = block.type === 'paragraph' && !blockText(block);
  const rule = nuiEditorBlock('rule');
  const after = at.block + 1 < doc.length && !empty ? [] : [nuiEditorBlock('paragraph')];
  const blocks = empty ? [rule, ...after] : [block, rule, ...after];
  const next = replaceBlocks(doc, at.block, at.block, blocks);
  const index = empty ? at.block + 1 : at.block + 2;
  return { doc: next, selection: caret(point(Math.min(index, next.length - 1), 0)) };
}

/**
 * Inserts blocks (pasted, dropped) at a selection: the first joins the text
 * before the point, the last the text after it.
 */
export function insertBlocks(
  doc: NuiEditorDoc,
  selection: NuiEditorSelection,
  blocks: readonly NuiEditorBlock[],
): NuiEditorChange {
  if (!blocks.length) return { doc, selection };
  const [from, to] = ordered(selection);
  const deleted = collapsed(selection)
    ? { doc, selection: caret(from) }
    : deleteRange(doc, from, to);
  doc = deleted.doc;
  const at = deleted.selection.focus;
  const target = doc[at.block];
  const head = sliceRuns(target.runs, 0, at.offset);
  const tail = sliceRuns(target.runs, at.offset, Infinity);
  if (blocks.length === 1 && blocks[0].type !== 'rule') {
    const runs = [...head, ...blocks[0].runs, ...tail];
    const length = [...head, ...blocks[0].runs].reduce((n, r) => n + r.text.length, 0);
    return {
      doc: replaceBlocks(doc, at.block, at.block, [withRuns(target, runs)]),
      selection: caret(point(at.block, length)),
    };
  }
  const first = blocks[0];
  const last = blocks[blocks.length - 1];
  const out: NuiEditorBlock[] = [];
  // Into an empty paragraph, the pasted blocks go as they are. Otherwise a
  // pasted paragraph joins the text before the point; other blocks (a list, a
  // heading) keep their shape, below it.
  const emptyTarget = target.type === 'paragraph' && !blockText(target);
  const joinFirst = !emptyTarget && first.type === 'paragraph';
  if (emptyTarget) out.push({ ...first, id: target.id });
  else if (joinFirst) out.push(withRuns(target, [...head, ...first.runs]));
  else {
    if (head.length || !tail.length) out.push(withRuns(target, head));
    out.push(first);
  }
  out.push(...blocks.slice(1));
  // The text after the point joins a pasted paragraph at the end, or goes on
  // in a block of its own.
  const end = out[out.length - 1];
  let caretOffset = blockText(end).length;
  if (tail.length) {
    if (end.type === 'paragraph' && end !== out[0])
      out[out.length - 1] = withRuns(end, [...end.runs, ...tail]);
    else out.push(nuiEditorBlock(target.type === 'rule' ? 'paragraph' : target.type, tail, target));
  }
  const caretBlock =
    at.block + (tail.length && end.type !== 'paragraph' ? out.length - 2 : out.length - 1);
  if (end.type === 'rule') caretOffset = 0;
  // Fresh ids for the inserted blocks, so no two share one.
  const seen = new Set<number>();
  const fixed = out.map((block) => {
    if (block.id === target.id && !seen.has(block.id)) {
      seen.add(block.id);
      return block;
    }
    return { ...block, id: nextId++ };
  });
  return {
    doc: replaceBlocks(doc, at.block, at.block, fixed),
    selection: caret(point(caretBlock, caretOffset)),
  };
}

/** Whether a document is empty: one paragraph without text. */
export function isEmpty(doc: NuiEditorDoc): boolean {
  return doc.length === 1 && doc[0].type === 'paragraph' && !blockText(doc[0]);
}

/** Keeps a point inside the document. */
export function clampPoint(doc: NuiEditorDoc, at: NuiEditorPoint): NuiEditorPoint {
  const block = Math.min(Math.max(0, at.block), doc.length - 1);
  const length = blockText(doc[block]).length;
  return point(block, Math.min(Math.max(0, at.offset), length));
}

/** A copy of the document between two points, with fresh ids: for the clipboard. */
export function sliceDoc(
  doc: NuiEditorDoc,
  from: NuiEditorPoint,
  to: NuiEditorPoint,
): NuiEditorBlock[] {
  [from, to] = comparePoints(from, to) <= 0 ? [from, to] : [to, from];
  const out: NuiEditorBlock[] = [];
  for (let b = from.block; b <= to.block; b++) {
    const block = doc[b];
    const start = b === from.block ? from.offset : 0;
    const end = b === to.block ? to.offset : Infinity;
    out.push(
      nuiEditorBlock(block.type, sliceRuns(block.runs, start, end), {
        level: block.level,
        depth: block.depth,
      }),
    );
  }
  return out;
}
