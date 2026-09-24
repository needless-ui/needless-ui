/**
 * Roughly how wide a string renders, in Latin characters. Search engines cut
 * titles and descriptions by width, so limits are measured this way: one per
 * grapheme (a Devanagari syllable with its vowel sign is one), two for East
 * Asian wide characters.
 */
const graphemes = new Intl.Segmenter();
const WIDE =
  /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\u3000-\u303f\uff01-\uff60\uffe0-\uffe6]/u;

export function textWidth(text: string): number {
  let width = 0;
  for (const { segment } of graphemes.segment(text)) width += WIDE.test(segment) ? 2 : 1;
  return width;
}
