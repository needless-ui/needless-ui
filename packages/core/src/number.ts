/**
 * Reads a number the way `Intl.NumberFormat` writes it in `locale`: its digits
 * (Arabic-Indic, Persian, Devanagari…), decimal and group separators, minus sign,
 * currency, percent and units. Returns null for text that isn't a number.
 *
 * A lone `.` or `,` that isn't the locale's decimal separator is read as one
 * unless three digits follow it, as grouping would: a phone's keypad has the
 * separator of the phone's region, not the page's ("12.50" on a German page).
 */
export function nuiParseNumber(
  text: string,
  locale: string,
  options: Intl.NumberFormatOptions = {},
): number | null {
  // One fraction digit whatever the options, so the sample shows the decimal separator.
  const format = new Intl.NumberFormat(locale, {
    ...options,
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    minimumSignificantDigits: undefined,
    maximumSignificantDigits: undefined,
  });
  const parts = format.formatToParts(-12345.6);
  const decimal = parts.find((part) => part.type === 'decimal')?.value ?? '.';
  const group = parts.find((part) => part.type === 'group')?.value ?? ',';
  const digits = new Map(
    [...new Intl.NumberFormat(locale, { useGrouping: false }).format(9876543210)].map(
      (digit, i) => [digit, String(9 - i)],
    ),
  );
  const chars = [...text.trim()];
  const isDigit = (char: string | undefined) => !!char && (digits.has(char) || /\d/.test(char));
  let point = decimal;
  const lone = chars.filter((char) => char === '.' || char === ',');
  if (!chars.includes(decimal) && lone.length === 1 && options.maximumFractionDigits !== 0) {
    let after = 0;
    for (let i = chars.indexOf(lone[0]) + 1; isDigit(chars[i]); i++) after++;
    if (after !== 3) point = lone[0];
  }
  let normalized = '';
  for (const char of chars) {
    if (digits.has(char)) normalized += digits.get(char);
    else if (/\d/.test(char)) normalized += char;
    else if (char === point) normalized += '.';
    else if (char === '-' || char === '−') normalized += normalized ? '' : '-';
    else if (char === group || /\s/.test(char)) continue;
  }
  if (!/\d/.test(normalized)) return null;
  const value = Number(normalized);
  if (!Number.isFinite(value)) return null;
  return options.style === 'percent' ? value / 100 : value;
}
