/** IBAN lengths by country, from the SWIFT IBAN registry. */
const LENGTHS: Readonly<Record<string, number>> = Object.fromEntries(
  (
    'AD24 AE23 AL28 AT20 AZ28 BA20 BE16 BG22 BH22 BI27 BR29 BY28 CH21 CR22 CY28 CZ24 DE22 DJ27 ' +
    'DK18 DO28 EE20 EG29 ES24 FI18 FK18 FO18 FR27 GB22 GE22 GI23 GL18 GR27 GT28 HN28 HR21 HU28 ' +
    'IE22 IL23 IQ23 IS26 IT27 JO30 KW30 KZ20 LB28 LC32 LI21 LT20 LU20 LV21 LY25 MC27 MD24 ME22 ' +
    'MK19 MN20 MR27 MT31 MU30 NI28 NL18 NO15 OM23 PK24 PL28 PS29 PT25 QA29 RO24 RS22 RU33 SA24 ' +
    'SC31 SD18 SE24 SI19 SK24 SM27 SO23 ST25 SV28 TL23 TN24 TR26 UA29 VA22 VG24 XK20 YE30'
  )
    .split(' ')
    .map((entry) => [entry.slice(0, 2), +entry.slice(2)]),
);

/** How long IBANs from a country are, or undefined for a country without them. */
export function nuiIbanLength(country: string): number | undefined {
  return LENGTHS[country.toUpperCase()];
}

/**
 * A mask for IBANs, for `[nuiMask]`: in groups of four, as long as the country's
 * IBANs once its two letters are typed.
 */
export function nuiIbanMask(raw: string): string {
  const length = nuiIbanLength(raw.slice(0, 2)) ?? 34;
  let mask = 'AA00';
  for (let i = 4; i < length; i++) mask += (i % 4 ? '' : ' ') + 'X';
  return mask;
}

/** Whether an IBAN (with spaces or without) is whole: its country's length, and its check digits right. */
export function nuiIbanValid(iban: string): boolean {
  const text = iban.replace(/\s/g, '').toUpperCase();
  if (!/^[A-Z]{2}\d{2}[A-Z\d]+$/.test(text)) return false;
  if (text.length !== nuiIbanLength(text.slice(0, 2))) return false;
  // Mod 97 (ISO 7064): the first four characters move to the end, letters become
  // 10 to 35, and the number must leave a remainder of 1. Taking the remainder a
  // digit at a time keeps the number small.
  const moved = text.slice(4) + text.slice(0, 4);
  let rest = 0;
  for (const char of moved) {
    const value = char <= '9' ? char : String(char.charCodeAt(0) - 55);
    for (const digit of value) rest = (rest * 10 + +digit) % 97;
  }
  return rest === 1;
}
