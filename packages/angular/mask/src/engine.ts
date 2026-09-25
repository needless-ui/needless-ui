/** What a mask character stands for. */
export interface NuiMaskToken {
  /** The characters it takes, tested one at a time. */
  pattern: RegExp;
  /** Changes a character as it goes in, such as to upper case. */
  transform?: (char: string) => string;
}

/**
 * The mask characters. Lower case takes any script, upper case is for codes:
 * `0` a digit, `a` a letter, `*` a letter or digit, `A` a letter from A to Z and
 * `X` a letter from A to Z or a digit, both put in upper case. A backslash makes
 * the next character literal; every other character is a literal.
 */
export const NUI_MASK_TOKENS: Readonly<Record<string, NuiMaskToken>> = {
  '0': { pattern: /\d/ },
  a: { pattern: /\p{L}/u },
  '*': { pattern: /[\p{L}\d]/u },
  A: { pattern: /[a-z]/i, transform: (c) => c.toUpperCase() },
  X: { pattern: /[a-z\d]/i, transform: (c) => c.toUpperCase() },
};

/** A mask, or a function that picks one for the data typed so far (such as by card brand). */
export type NuiMaskPattern = string | ((raw: string) => string);

/** A place in a mask: a token, or a literal character. */
export type NuiMaskSlot = NuiMaskToken | string;

const compiled = new WeakMap<object, Map<string, NuiMaskSlot[]>>();

/** @internal A mask read into its places, cached. */
export function nuiMaskSlots(
  mask: string,
  tokens: Readonly<Record<string, NuiMaskToken>> = NUI_MASK_TOKENS,
): NuiMaskSlot[] {
  let cache = compiled.get(tokens);
  if (!cache) compiled.set(tokens, (cache = new Map()));
  let slots = cache.get(mask);
  if (!slots) {
    slots = [];
    for (let i = 0; i < mask.length; i++) {
      const char = mask[i];
      if (char === '\\' && i + 1 < mask.length) slots.push(mask[++i]);
      else slots.push(tokens[char] ?? char);
    }
    cache.set(mask, slots);
  }
  return slots;
}

/** How many characters of data a mask holds. */
export function nuiMaskCapacity(slots: readonly NuiMaskSlot[]): number {
  return slots.reduce((count, slot) => count + (typeof slot === 'string' ? 0 : 1), 0);
}

/** First code points of the decimal digits of other scripts, so any digit typed counts. */
const ZEROS = [
  0x660, 0x6f0, 0x7c0, 0x966, 0x9e6, 0xa66, 0xae6, 0xb66, 0xbe6, 0xc66, 0xce6, 0xd66, 0xde6, 0xe50,
  0xed0, 0xf20, 0x1040, 0x1090, 0x17e0, 0x1810, 0xff10,
];

/** Digits of any script (Arabic-Indic, Devanagari, full width…) as 0 to 9. */
export function nuiAsciiDigits(text: string): string {
  return text.replace(/\p{Nd}/gu, (digit) => {
    const point = digit.codePointAt(0)!;
    const zero = ZEROS.find((z) => point >= z && point < z + 10);
    return zero === undefined ? digit : String(point - zero);
  });
}

/**
 * The data in a value shown with a mask: the characters its tokens hold, without
 * its literals. `counts[i]` is how many of them come before position `i`, to put
 * the caret back after reformatting. Characters past the end of the mask are
 * kept when some token takes them, so a longer mask can.
 */
export function nuiMaskRead(
  value: string,
  slots: readonly NuiMaskSlot[],
): { raw: string; counts: number[] } {
  const text = nuiAsciiDigits(value);
  const counts = [0];
  let raw = '';
  let s = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    // A run of literals is matched character by character while the value follows
    // it; where it doesn't, the value left the run out (it was typed into an empty
    // field, or pasted), and the rest of the run is skipped.
    if (typeof slots[s] === 'string') {
      if (slots[s] === char) {
        s++;
        counts.push(raw.length);
        continue;
      }
      while (typeof slots[s] === 'string') s++;
    }
    const slot = slots[s];
    if (slot !== undefined) {
      const token = slot as NuiMaskToken;
      if (token.pattern.test(char)) {
        raw += token.transform ? token.transform(char) : char;
        s++;
      }
    } else {
      const token = slots.find(
        (t): t is NuiMaskToken => typeof t !== 'string' && t.pattern.test(char),
      );
      if (token) raw += token.transform ? token.transform(char) : char;
    }
    counts.push(raw.length);
  }
  return { raw, counts };
}

/**
 * Data shown with a mask: each character in its token's place, literals between.
 * Characters a token doesn't take are left out. `eager` adds the literals that
 * follow the last character, as when typing forward.
 */
export function nuiMaskWrite(raw: string, slots: readonly NuiMaskSlot[], eager = false): string {
  let text = '';
  let r = 0;
  for (const slot of slots) {
    if (typeof slot === 'string') {
      if (r < raw.length || (eager && r > 0)) text += slot;
      else break;
      continue;
    }
    while (r < raw.length && !slot.pattern.test(raw[r])) r++;
    if (r >= raw.length) break;
    text += slot.transform ? slot.transform(raw[r]) : raw[r];
    r++;
  }
  return text;
}

/**
 * Where the caret goes in a masked value: after its `count`th character of data,
 * and past the literals that follow when typing forward (or at the start).
 */
export function nuiMaskCaret(
  text: string,
  slots: readonly NuiMaskSlot[],
  count: number,
  forward: boolean,
): number {
  let i = 0;
  for (let seen = 0; i < text.length && seen < count; i++) {
    if (typeof slots[i] !== 'string') seen++;
  }
  if (forward || count === 0) {
    while (i < text.length && typeof slots[i] === 'string') i++;
  }
  return i;
}

/** Formats data (or a value typed any way) with a mask. */
export function nuiMaskFormat(
  value: string,
  mask: NuiMaskPattern,
  tokens: Readonly<Record<string, NuiMaskToken>> = NUI_MASK_TOKENS,
): string {
  const raw = nuiUnmask(value, mask, tokens);
  const slots = nuiMaskSlots(typeof mask === 'function' ? mask(raw) : mask, tokens);
  return nuiMaskWrite(raw, slots);
}

/** The data in a value typed with a mask, without its literals. */
export function nuiUnmask(
  value: string,
  mask: NuiMaskPattern,
  tokens: Readonly<Record<string, NuiMaskToken>> = NUI_MASK_TOKENS,
): string {
  const first = nuiMaskSlots(typeof mask === 'function' ? mask('') : mask, tokens);
  const { raw } = nuiMaskRead(value, first);
  if (typeof mask !== 'function') return raw.slice(0, nuiMaskCapacity(first));
  // A mask picked by the data: read again with the one this data gets.
  const slots = nuiMaskSlots(mask(raw), tokens);
  return nuiMaskRead(value, slots).raw.slice(0, nuiMaskCapacity(slots));
}

/** An edit to a masked field, worked out. */
export interface NuiMaskEdit {
  /** The data. */
  raw: string;
  /** What the field shows. */
  text: string;
  /** Where the caret goes. */
  caret: number;
  /** The mask it's shown with. */
  slots: readonly NuiMaskSlot[];
}

/**
 * @internal What a field becomes after an edit: `text` is its value with the caret
 * at `caret`, read with the mask it was shown with; `slotsFor` picks the mask for
 * the data. Null when a character was typed into a full field: it stays out.
 */
export function nuiMaskEdit(
  text: string,
  caret: number,
  inputType: string,
  shown: readonly NuiMaskSlot[],
  slotsFor: (raw: string) => readonly NuiMaskSlot[],
): NuiMaskEdit | null {
  const { raw: read, counts } = nuiMaskRead(text, shown);
  const slots = slotsFor(read);
  const capacity = nuiMaskCapacity(slots);
  let raw = read;
  if (raw.length > capacity) {
    if (inputType === 'insertText' || inputType === 'insertCompositionText') return null;
    raw = raw.slice(0, capacity);
  }
  const forward = inputType.startsWith('insert');
  const out = nuiMaskWrite(raw, slots, forward);
  const count = Math.min(counts[caret] ?? raw.length, raw.length);
  return { raw, text: out, caret: nuiMaskCaret(out, slots, count, forward), slots };
}

/**
 * @internal Deleting a literal deletes the character of data beyond it instead: a
 * literal the mask would only put back. Returns what the field becomes, `'none'`
 * when there's no data beyond it, or null to let the browser delete.
 */
export function nuiMaskDelete(
  value: string,
  start: number,
  end: number,
  inputType: string,
  slots: readonly NuiMaskSlot[],
): { text: string; caret: number } | 'none' | null {
  const backward = inputType === 'deleteContentBackward';
  if ((!backward && inputType !== 'deleteContentForward') || start !== end) return null;
  const literal = (i: number) => typeof slots[i] === 'string';
  let i = backward ? start - 1 : start;
  if (i < 0 || i >= value.length || !literal(i)) return null;
  while (i >= 0 && i < value.length && literal(i)) i += backward ? -1 : 1;
  if (i < 0 || i >= value.length) return 'none';
  return { text: value.slice(0, i) + value.slice(i + 1), caret: i };
}
