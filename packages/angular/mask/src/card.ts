/** A card brand, told by the first digits of its numbers. */
export interface NuiCardBrand {
  id:
    'visa' | 'mastercard' | 'amex' | 'discover' | 'diners' | 'jcb' | 'unionpay' | 'maestro' | 'mir';
  name: string;
  /** How many digits its numbers have. */
  lengths: readonly number[];
  /** How many digits its security code has. */
  code: number;
}

type Range = string | [low: number, high: number];

/** Brands by the ranges their numbers start with, most specific first. */
const BRANDS: readonly (NuiCardBrand & { ranges: readonly Range[] })[] = [
  { id: 'amex', name: 'American Express', lengths: [15], code: 4, ranges: ['34', '37'] },
  {
    id: 'diners',
    name: 'Diners Club',
    lengths: [14, 15, 16, 17, 18, 19],
    code: 3,
    ranges: ['36', '38', '39', [300, 305]],
  },
  { id: 'jcb', name: 'JCB', lengths: [16, 17, 18, 19], code: 3, ranges: [[3528, 3589]] },
  { id: 'mir', name: 'Mir', lengths: [16, 17, 18, 19], code: 3, ranges: [[2200, 2204]] },
  {
    id: 'mastercard',
    name: 'Mastercard',
    lengths: [16],
    code: 3,
    ranges: [
      [51, 55],
      [2221, 2720],
    ],
  },
  {
    id: 'discover',
    name: 'Discover',
    lengths: [16, 17, 18, 19],
    code: 3,
    ranges: ['6011', '65', [644, 649], [622126, 622925]],
  },
  { id: 'unionpay', name: 'UnionPay', lengths: [16, 17, 18, 19], code: 3, ranges: ['62'] },
  {
    id: 'maestro',
    name: 'Maestro',
    lengths: [12, 13, 14, 15, 16, 17, 18, 19],
    code: 3,
    ranges: ['5018', '5020', '5038', '5893', '6304', '6759', '6761', '6762', '6763'],
  },
  { id: 'visa', name: 'Visa', lengths: [16, 19], code: 3, ranges: ['4'] },
];

/** The brand of a card number (digits, or as typed), from its first digits. */
export function nuiCardBrand(number: string): NuiCardBrand | null {
  const digits = number.replace(/\D/g, '');
  if (!digits) return null;
  const brand = BRANDS.find((b) =>
    b.ranges.some((range) =>
      typeof range === 'string' ? digits.startsWith(range) : inRange(digits, range),
    ),
  );
  return brand
    ? { id: brand.id, name: brand.name, lengths: brand.lengths, code: brand.code }
    : null;
}

function inRange(digits: string, [low, high]: [number, number]): boolean {
  const size = String(low).length;
  if (digits.length < size) return false;
  const start = +digits.slice(0, size);
  return start >= low && start <= high;
}

/**
 * A mask for card numbers, for `[nuiMask]`: grouped as the brand prints them, and
 * as long as the shortest length the brand has that fits what's typed.
 */
export function nuiCardMask(raw: string): string {
  const brand = nuiCardBrand(raw);
  const lengths = brand?.lengths ?? [16, 19];
  const length = lengths.find((l) => l >= raw.length) ?? lengths[lengths.length - 1];
  if (brand?.id === 'amex') return '0000 000000 00000';
  if (brand?.id === 'diners' && length === 14) return '0000 000000 0000';
  return '0000 0000 0000 0000 000'.slice(0, length + Math.floor((length - 1) / 4));
}

/** Whether a number passes the Luhn check, as every card number does. */
export function nuiLuhn(number: string): boolean {
  const digits = number.replace(/\D/g, '');
  if (digits.length < 2) return false;
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let digit = +digits[digits.length - 1 - i];
    if (i % 2) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }
  return sum % 10 === 0;
}

/** Whether a card number is whole: a known length for its brand, and it passes the Luhn check. */
export function nuiCardValid(number: string): boolean {
  const digits = number.replace(/\D/g, '');
  const brand = nuiCardBrand(digits);
  const lengths = brand?.lengths ?? [12, 13, 14, 15, 16, 17, 18, 19];
  return lengths.includes(digits.length) && nuiLuhn(digits);
}
