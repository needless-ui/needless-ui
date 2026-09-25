import { describe, expect, it } from 'vitest';
import { nuiFlag, nuiPhoneRegionOf } from './countries';
import { nuiFormatPhone, nuiParsePhone, nuiPhoneMask, nuiPhoneValid } from './phone';

describe('phone numbers', () => {
  it('finds the region of an international number', () => {
    expect(nuiPhoneRegionOf('393331234567')?.region).toBe('IT');
    expect(nuiPhoneRegionOf('12125551234')?.region).toBe('US');
    expect(nuiPhoneRegionOf('14165551234')?.region).toBe('CA');
    expect(nuiPhoneRegionOf('12685551234')?.region).toBe('AG');
    expect(nuiPhoneRegionOf('77012345678')?.region).toBe('KZ');
    expect(nuiPhoneRegionOf('79123456789')?.region).toBe('RU');
    expect(nuiPhoneRegionOf('441481123456')?.region).toBe('GG');
    expect(nuiPhoneRegionOf('12125551234', 'CA')?.region).toBe('CA');
    expect(nuiPhoneRegionOf('3')).toBeUndefined();
  });

  it('reads numbers typed any way', () => {
    expect(nuiParsePhone('+39 333 123 4567')).toEqual({
      region: 'IT',
      code: '39',
      national: '3331234567',
    });
    expect(nuiParsePhone('0044 (0)20 7946 0958')?.national).toBe('2079460958');
    expect(nuiParsePhone('07400 123456', 'GB')?.national).toBe('7400123456');
    expect(nuiParsePhone('02 1234 5678', 'IT')?.national).toBe('0212345678');
    expect(nuiParsePhone('8 912 345-67-89', 'RU')?.national).toBe('9123456789');
    expect(nuiParsePhone('812 345-67-89', 'RU')?.national).toBe('8123456789');
    expect(nuiParsePhone('+٩٧١ ٥٠ ١٢٣ ٤٥٦٧')?.region).toBe('AE');
    expect(nuiParsePhone('+999 1234')).toBeNull();
  });

  it('groups numbers as their region does', () => {
    expect(nuiFormatPhone('+12125551234')).toBe('+1 (212) 555-1234');
    expect(nuiFormatPhone('+33612345678')).toBe('+33 6 12 34 56 78');
    expect(nuiFormatPhone('+5511912345678')).toBe('+55 11 91234-5678');
    expect(nuiFormatPhone('+5511 12345678', 'e164')).toBe('+551112345678');
    expect(nuiPhoneMask('GB', '07400123456')).toBe('00000 000000');
    expect(nuiFormatPhone('+442079460958')).toBe('+44 20 7946 0958');
    expect(nuiFormatPhone('+441134960000')).toBe('+44 113 496 0000');
    expect(nuiFormatPhone('+390212345678')).toBe('+39 02 1234 5678');
    expect(nuiPhoneMask('US', '12125551234')).toBe('0 (000) 000-0000');
  });

  it('checks lengths', () => {
    expect(nuiPhoneValid('+12125551234')).toBe(true);
    expect(nuiPhoneValid('+1212555123')).toBe(false);
    expect(nuiPhoneValid('+39 06 1234')).toBe(true);
    expect(nuiPhoneValid('+999 1234')).toBe(false);
  });

  it('draws flags from regional indicators', () => {
    expect(nuiFlag('it')).toBe('🇮🇹');
  });
});
