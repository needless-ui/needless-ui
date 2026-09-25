/**
 * Calling codes by region (ITU E.164 assignments), as `region code` pairs. Regions
 * that share a code, such as the countries of the North American Numbering Plan,
 * each list it; `MAIN` says which one a bare code stands for.
 */
const CODES =
  'AC247 AD376 AE971 AF93 AG1 AI1 AL355 AM374 AO244 AR54 AS1 AT43 AU61 AW297 AX358 AZ994 ' +
  'BA387 BB1 BD880 BE32 BF226 BG359 BH973 BI257 BJ229 BL590 BM1 BN673 BO591 BQ599 BR55 BS1 BT975 BW267 BY375 BZ501 ' +
  'CA1 CC61 CD243 CF236 CG242 CH41 CI225 CK682 CL56 CM237 CN86 CO57 CR506 CU53 CV238 CW599 CX61 CY357 CZ420 ' +
  'DE49 DJ253 DK45 DM1 DO1 DZ213 EC593 EE372 EG20 EH212 ER291 ES34 ET251 ' +
  'FI358 FJ679 FK500 FM691 FO298 FR33 GA241 GB44 GD1 GE995 GF594 GG44 GH233 GI350 GL299 GM220 GN224 GP590 GQ240 GR30 GT502 GU1 GW245 GY592 ' +
  'HK852 HN504 HR385 HT509 HU36 ID62 IE353 IL972 IM44 IN91 IO246 IQ964 IR98 IS354 IT39 JE44 JM1 JO962 JP81 ' +
  'KE254 KG996 KH855 KI686 KM269 KN1 KP850 KR82 KW965 KY1 KZ7 LA856 LB961 LC1 LI423 LK94 LR231 LS266 LT370 LU352 LV371 LY218 ' +
  'MA212 MC377 MD373 ME382 MF590 MG261 MH692 MK389 ML223 MM95 MN976 MO853 MP1 MQ596 MR222 MS1 MT356 MU230 MV960 MW265 MX52 MY60 MZ258 ' +
  'NA264 NC687 NE227 NF672 NG234 NI505 NL31 NO47 NP977 NR674 NU683 NZ64 OM968 ' +
  'PA507 PE51 PF689 PG675 PH63 PK92 PL48 PM508 PR1 PS970 PT351 PW680 PY595 QA974 RE262 RO40 RS381 RU7 RW250 ' +
  'SA966 SB677 SC248 SD249 SE46 SG65 SH290 SI386 SJ47 SK421 SL232 SM378 SN221 SO252 SR597 SS211 ST239 SV503 SX1 SY963 SZ268 ' +
  'TA290 TC1 TD235 TG228 TH66 TJ992 TK690 TL670 TM993 TN216 TO676 TR90 TT1 TV688 TW886 TZ255 ' +
  'UA380 UG256 US1 UY598 UZ998 VA39 VC1 VE58 VG1 VI1 VN84 VU678 WF681 WS685 XK383 YE967 YT262 ZA27 ZM260 ZW263';

/** The region a code shared by several stands for, when nothing else tells them apart. */
const MAIN: Readonly<Record<string, string>> = {
  '1': 'US',
  '7': 'RU',
  '39': 'IT',
  '44': 'GB',
  '47': 'NO',
  '61': 'AU',
  '212': 'MA',
  '262': 'RE',
  '290': 'SH',
  '358': 'FI',
  '590': 'GP',
  '599': 'CW',
};

/**
 * How the numbers of a region that shares its code begin, after the code: area
 * codes in North America (planned ones included), and the ranges set apart for
 * smaller regions elsewhere.
 */
const PREFIXES =
  'AG268 AI264 AS684 BB246 BM441 BS242 DM767 DO809,829,849 GD473 GU671 JM876,658 KN869 KY345 ' +
  'LC758 MP670 MS664 PR787,939 SX721 TC649 TT868 VC784 VG284 VI340 ' +
  'CA204,226,236,249,250,257,263,289,306,343,354,365,367,368,382,387,403,416,418,428,431,437,' +
  '438,450,460,468,474,506,514,519,537,548,568,579,581,584,587,604,613,639,647,672,683,705,709,' +
  '742,753,778,780,782,807,819,825,851,867,873,879,902,905,942 ' +
  'KZ6,7 AX18 SJ79 GG1481 JE1534 IM1624 CX89164 CC89162 VA06698 TA8 YT269,639 BQ3,4,7 CW9 ' +
  'EH5288,5289';

/** A region's calling code and what we know of its numbers. */
export interface NuiPhoneCountry {
  /** ISO 3166 region, such as `IT`. */
  region: string;
  /** Its calling code, without the plus: `39`. */
  code: string;
}

export const NUI_PHONE_COUNTRIES: readonly NuiPhoneCountry[] = CODES.split(' ').map((entry) => ({
  region: entry.slice(0, 2),
  code: entry.slice(2),
}));

const BY_REGION = new Map(NUI_PHONE_COUNTRIES.map((c) => [c.region, c]));
const BY_PREFIX: [prefix: string, region: string][] = PREFIXES.split(' ').flatMap((entry) =>
  entry
    .slice(2)
    .split(',')
    .map((prefix): [string, string] => [prefix, entry.slice(0, 2)]),
);

/** A region's country, or undefined for one without a calling code. */
export function nuiPhoneCountry(region: string): NuiPhoneCountry | undefined {
  return BY_REGION.get(region.toUpperCase());
}

/**
 * The region an international number (the digits after the plus) belongs to: the
 * one with its calling code, told apart by how the rest begins where regions
 * share a code. `prefer` wins when nothing tells them apart and it shares the code.
 */
export function nuiPhoneRegionOf(digits: string, prefer?: string): NuiPhoneCountry | undefined {
  // Calling codes are a prefix code: no code begins another, so one fits at most.
  for (let length = 1; length <= Math.min(3, digits.length); length++) {
    const code = digits.slice(0, length);
    const regions = NUI_PHONE_COUNTRIES.filter((c) => c.code === code);
    if (!regions.length) continue;
    if (regions.length === 1) return regions[0];
    const rest = digits.slice(length);
    const known = BY_PREFIX.find(
      ([prefix, region]) => rest.startsWith(prefix) && BY_REGION.get(region)?.code === code,
    )?.[1];
    const region =
      known ?? (prefer && regions.some((r) => r.region === prefer) ? prefer : MAIN[code]);
    return BY_REGION.get(region) ?? regions[0];
  }
  return undefined;
}

/** A flag, from the region's letters as regional indicator symbols. */
export function nuiFlag(region: string): string {
  return region
    .toUpperCase()
    .replace(/[A-Z]/g, (letter) => String.fromCodePoint(0x1f1e6 + letter.charCodeAt(0) - 65));
}

/** How a region's numbers are grouped, by length: the first mask long enough is used. */
export interface NuiPhoneFormat {
  masks: readonly string[];
  /** The shortest number, when shorter ones than the first mask hold are valid. */
  min?: number;
  /** Groupings for numbers that begin a certain way, such as London's 20: tried first. */
  starts?: readonly (readonly [prefix: string, mask: string])[];
}

const NANP = 'US CA AG AI AS BB BM BS DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI';

/**
 * Groupings of national numbers (without the trunk prefix) where they're settled
 * and of known lengths. Other regions get groups of three, from 4 digits to what
 * E.164 leaves after the calling code.
 */
const FORMATS: readonly [regions: string, format: NuiPhoneFormat][] = [
  [NANP, { masks: ['(000) 000-0000'] }],
  ['RU KZ', { masks: ['000 000-00-00'] }],
  ['FR GP MQ GF RE YT BL MF', { masks: ['0 00 00 00 00'] }],
  [
    'GB',
    {
      masks: ['0000 00000', '0000 000000'],
      // Area codes of two digits (London's 20) and three (Leeds' 113, 1x1 cities).
      starts: [
        ['2', '00 0000 0000'],
        ...['11', '121', '131', '141', '151', '161', '191', '3', '8', '9'].map(
          (prefix) => [prefix, '000 000 0000'] as const,
        ),
      ],
    },
  ],
  [
    'IT',
    {
      masks: ['000 000 0000', '000 0000 0000'],
      min: 6,
      // Milan and Rome have two-digit area codes.
      starts: [
        ['02', '00 0000 0000'],
        ['06', '00 0000 0000'],
      ],
    },
  ],
  ['DE', { masks: ['000 00000000'], min: 6 }],
  ['ES', { masks: ['000 00 00 00'] }],
  ['NL', { masks: ['0 00000000'] }],
  ['BE', { masks: ['0 000 00 00', '000 00 00 00'] }],
  ['CH', { masks: ['00 000 00 00'] }],
  ['PT PL CZ SK RO', { masks: ['000 000 000'] }],
  ['DK', { masks: ['00 00 00 00'] }],
  ['NO', { masks: ['000 00 000'] }],
  ['SE', { masks: ['00-000 00 00'], min: 7 }],
  ['IE', { masks: ['00 000 0000'], min: 7 }],
  ['HU', { masks: ['0 000 0000', '00 000 0000'] }],
  ['GR', { masks: ['000 000 0000'] }],
  ['UA', { masks: ['00 000 0000'] }],
  ['TR', { masks: ['000 000 00 00'] }],
  ['IL', { masks: ['0-000-0000', '00-000-0000'] }],
  ['AE', { masks: ['0 000 0000', '00 000 0000'] }],
  ['SA', { masks: ['00 000 0000'], min: 8 }],
  ['EG', { masks: ['00 0000 0000'], min: 8 }],
  ['NG PH', { masks: ['000 000 0000'], min: 8 }],
  ['ZA', { masks: ['00 000 0000'] }],
  ['IN', { masks: ['00000 00000'] }],
  ['PK', { masks: ['000 0000000'] }],
  ['BD', { masks: ['0000-000000'] }],
  ['CN', { masks: ['00 0000 0000', '000 0000 0000'] }],
  ['JP', { masks: ['0-0000-0000', '00-0000-0000'] }],
  ['TH', { masks: ['0 000 0000', '00 000 0000'] }],
  ['MY', { masks: ['00-000 0000', '00-0000 0000'] }],
  ['SG HK', { masks: ['0000 0000'] }],
  ['AU', { masks: ['000 000 000'] }],
  ['MX CO', { masks: ['000 000 0000'] }],
  ['BR', { masks: ['00 0000-0000', '00 00000-0000'] }],
  ['CL', { masks: ['0 0000 0000'] }],
];

const FORMAT_BY_REGION = new Map(
  FORMATS.flatMap(([regions, format]) => regions.split(' ').map((r) => [r, format] as const)),
);

/** How a region's numbers are grouped: its own grouping, or groups of three. */
export function nuiPhoneFormat(region: string): NuiPhoneFormat {
  const known = FORMAT_BY_REGION.get(region);
  if (known) return known;
  // E.164 numbers have at most 15 digits, the calling code's among them.
  const length = 15 - (BY_REGION.get(region)?.code.length ?? 3);
  return { masks: ['000 000 000 000 000'.slice(0, length + Math.floor((length - 1) / 3))], min: 4 };
}

/**
 * The trunk prefix people dial before a national number at home (the 0 in
 * "020 7946 0958"), and what separates it from the number when it's shown. A few
 * regions have none: their numbers can start with 0.
 */
export function nuiTrunkPrefix(region: string): { prefix: string; gap: string } | null {
  if (NANP.split(' ').includes(region)) return { prefix: '1', gap: ' ' };
  if (region === 'RU' || region === 'KZ') return { prefix: '8', gap: ' ' };
  if (['IT', 'SM', 'VA', 'CI', 'CG', 'BJ'].includes(region)) return null;
  return { prefix: '0', gap: '' };
}
