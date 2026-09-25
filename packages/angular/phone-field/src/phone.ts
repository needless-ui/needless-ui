import {
  nuiAsciiDigits,
  nuiMaskCapacity,
  nuiMaskSlots,
  nuiMaskWrite,
} from '@needless-ui/angular/mask';
import { nuiPhoneCountry, nuiPhoneFormat, nuiPhoneRegionOf, nuiTrunkPrefix } from './countries';

/** A phone number, in its parts. */
export interface NuiPhoneNumber {
  /** ISO 3166 region, such as `IT`. */
  region: string;
  /** Its calling code, without the plus. */
  code: string;
  /** The national number: the digits after the code, without a trunk prefix. */
  national: string;
}

/** The trunk prefix at the start of national digits, if they start with one. */
function trunkOf(region: string, digits: string): { prefix: string; gap: string } | null {
  const trunk = nuiTrunkPrefix(region);
  if (!trunk || !digits.startsWith(trunk.prefix)) return null;
  // Russian and Kazakh numbers can start with 8 themselves: 8 is a trunk prefix
  // only before ten more digits.
  if (trunk.prefix === '8' && digits.length <= 10) return null;
  return trunk;
}

/** National digits (as typed, trunk prefix and all) without the trunk prefix. */
export function nuiNationalNumber(region: string, digits: string): string {
  const trunk = trunkOf(region, digits);
  return trunk ? digits.slice(trunk.prefix.length) : digits;
}

/**
 * The mask for national digits as typed in a region: the region's grouping for
 * their length, after the trunk prefix when they start with one.
 */
export function nuiPhoneMask(region: string, digits: string): string {
  const trunk = trunkOf(region, digits);
  const national = digits.slice(trunk?.prefix.length ?? 0);
  const { masks, starts } = nuiPhoneFormat(region);
  const mask =
    starts?.find(([prefix]) => national.startsWith(prefix))?.[1] ??
    masks.find((m) => nuiMaskCapacity(nuiMaskSlots(m)) >= national.length) ??
    masks[masks.length - 1];
  return trunk ? '0'.repeat(trunk.prefix.length) + trunk.gap + mask : mask;
}

/** How many digits a region's national numbers have, at least and at most. */
export function nuiPhoneLengths(region: string): { min: number; max: number } {
  const { masks, min } = nuiPhoneFormat(region);
  const capacity = (mask: string) => nuiMaskCapacity(nuiMaskSlots(mask));
  return { min: min ?? capacity(masks[0]), max: capacity(masks[masks.length - 1]) };
}

/**
 * Reads a phone number: international (`+39 333 123 4567`, `0039 333…`), or
 * national for `region` (`0333…` where people dial a trunk prefix at home). Null
 * without digits, or with a calling code no region has.
 */
export function nuiParsePhone(text: string, region?: string): NuiPhoneNumber | null {
  const plain = nuiAsciiDigits(text).trim();
  const digits = plain.replace(/\D/g, '');
  if (!digits) return null;
  if (/^(\+|00)/.test(plain)) {
    const international = plain.startsWith('+') ? digits : digits.slice(2);
    const country = nuiPhoneRegionOf(international, region);
    if (!country) return null;
    const rest = international.slice(country.code.length);
    return {
      region: country.region,
      code: country.code,
      national: nuiNationalNumber(country.region, rest),
    };
  }
  const country = region ? nuiPhoneCountry(region) : undefined;
  if (!country) return null;
  return {
    region: country.region,
    code: country.code,
    national: nuiNationalNumber(country.region, digits),
  };
}

/**
 * Writes a phone number (E.164, or its parts): `international`, grouped as its
 * region groups them (`+39 333 123 4567`), or `e164` (`+393331234567`).
 */
export function nuiFormatPhone(
  phone: string | NuiPhoneNumber,
  style: 'international' | 'e164' = 'international',
): string {
  const number = typeof phone === 'string' ? nuiParsePhone(phone) : phone;
  if (!number) return typeof phone === 'string' ? phone : '';
  const { region, code, national } = number;
  if (style === 'e164') return `+${code}${national}`;
  const grouped = nuiMaskWrite(national, nuiMaskSlots(nuiPhoneMask(region, national)));
  return grouped ? `+${code} ${grouped}` : `+${code}`;
}

/** Whether a phone number has a known calling code and as many digits as its region's numbers. */
export function nuiPhoneValid(phone: string, region?: string): boolean {
  const number = nuiParsePhone(phone, region);
  if (!number) return false;
  const { min, max } = nuiPhoneLengths(number.region);
  return number.national.length >= min && number.national.length <= max;
}
