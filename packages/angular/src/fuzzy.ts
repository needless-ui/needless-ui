/** A match: its score (higher is better) and the matched character positions, for highlighting. */
export interface NuiMatch {
  score: number;
  /** Indexes into the original text (UTF-16), in order. */
  positions: number[];
}

/** Lower case with accents removed, one entry per UTF-16 unit of the original text. */
function fold(text: string): string {
  let folded = '';
  for (const char of text) {
    const base = char.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase();
    // Keep one output unit per input unit, so positions map straight back.
    folded += (base || char).padEnd(char.length, '\0').slice(0, char.length);
  }
  return folded;
}

const isBoundary = (text: string, index: number): boolean => {
  if (index === 0) return true;
  const before = text[index - 1];
  const here = text[index];
  return (
    /[\s\-_/.:()[\]]/.test(before) ||
    (before === before.toLowerCase() && here !== here.toLowerCase())
  );
};

/**
 * Fuzzy-matches `query` against `text`: every query character must appear in
 * order, and matches score higher for starting words, running consecutively and
 * starting early. Case and accents are ignored ("cafe" finds "Café"). Returns null
 * when the text doesn't match.
 *
 * ```ts
 * nuiFuzzyMatch('ngb', 'Angular Button'); // { score: …, positions: [1, 2, 8] }
 * ```
 */
export function nuiFuzzyMatch(query: string, text: string): NuiMatch | null {
  const needle = fold(query.trim());
  if (!needle) return { score: 0, positions: [] };
  const haystack = fold(text);

  // Greedy forward pass finds a match; a backward pass from its end tightens it,
  // which prefers compact matches ("bu" in "Button" over "B…u…" across words).
  const positions: number[] = [];
  let at = 0;
  for (const char of needle) {
    const found = haystack.indexOf(char, at);
    if (found < 0) return null;
    positions.push(found);
    at = found + 1;
  }
  let end = positions[positions.length - 1];
  for (let q = needle.length - 1; q >= 0; q--) {
    end = haystack.lastIndexOf(needle[q], end);
    positions[q] = end;
    end--;
  }

  let score = 0;
  for (let i = 0; i < positions.length; i++) {
    const position = positions[i];
    score += 1;
    if (isBoundary(text, position)) score += 8;
    if (i > 0 && position === positions[i - 1] + 1) score += 5;
  }
  score -= positions[0] * 0.2;
  score -= (positions[positions.length - 1] - positions[0] + 1 - positions.length) * 0.5;
  if (haystack.startsWith(needle)) score += 12;
  if (haystack === needle) score += 20;
  return { score, positions };
}

/**
 * Splits `text` into parts, marking the matched characters, ready for rendering
 * with `<mark>`: `[{ text: 'A', match: false }, { text: 'ng', match: true }, …]`.
 */
export function nuiHighlight(
  text: string,
  positions: readonly number[],
): { text: string; match: boolean }[] {
  const parts: { text: string; match: boolean }[] = [];
  const set = new Set(positions);
  for (let i = 0; i < text.length; i++) {
    const match = set.has(i);
    const last = parts[parts.length - 1];
    if (last && last.match === match) last.text += text[i];
    else parts.push({ text: text[i], match });
  }
  return parts;
}
