import { describe, expect, it } from 'vitest';
import { nuiCardBrand, nuiCardMask, nuiCardValid, nuiLuhn } from './card';
import {
  nuiAsciiDigits,
  nuiMaskDelete,
  nuiMaskEdit,
  nuiMaskFormat,
  nuiMaskRead,
  nuiMaskSlots,
  nuiMaskWrite,
  nuiUnmask,
} from './engine';
import { nuiIbanMask, nuiIbanValid } from './iban';

const date = nuiMaskSlots('00/00/0000');
const us = nuiMaskSlots('+1 (000) 000-0000');

describe('mask engine', () => {
  it('formats data, with literals only between characters unless eager', () => {
    expect(nuiMaskWrite('12', date)).toBe('12');
    expect(nuiMaskWrite('12', date, true)).toBe('12/');
    expect(nuiMaskWrite('12031999', date)).toBe('12/03/1999');
    expect(nuiMaskWrite('', us, true)).toBe('');
    expect(nuiMaskWrite('2', us)).toBe('+1 (2');
  });

  it('reads data out of a value, whatever literals it has or lacks', () => {
    expect(nuiMaskRead('12/03/1999', date).raw).toBe('12031999');
    expect(nuiMaskRead('12031999', date).raw).toBe('12031999');
    expect(nuiMaskRead('+1 (212) 555-1234', us).raw).toBe('2125551234');
    // Typed into an empty field: the 1 is data, not the literal 1.
    expect(nuiMaskRead('1', us).raw).toBe('1');
    expect(nuiMaskRead('+1 212 555 1234', us).raw).toBe('2125551234');
    expect(nuiMaskRead('1a2', date).raw).toBe('12');
  });

  it('takes digits of any script, and transforms case for code tokens', () => {
    expect(nuiAsciiDigits('٠١٢٣ ۴۵۶ १२३ ４５')).toBe('0123 456 123 45');
    expect(nuiMaskFormat('it60x', 'AA00 X')).toBe('IT60 X');
    expect(nuiUnmask('(555) 123', '(000) 000-0000')).toBe('555123');
  });

  it('works an edit out: the caret keeps its place in the data', () => {
    // "123-4|56" and a 9 typed after the 4.
    const typed = nuiMaskEdit('123-4956', 5, 'insertText', nuiMaskSlots('000-000'), () =>
      nuiMaskSlots('000-0000'),
    );
    expect(typed).toMatchObject({ raw: '1234956', text: '123-4956', caret: 5 });
    // Into a full field, a character stays out.
    const full = nuiMaskSlots('000-000');
    expect(nuiMaskEdit('123-4956', 5, 'insertText', full, () => full)).toBeNull();
    // A paste is cut short instead.
    expect(nuiMaskEdit('123-4956', 5, 'insertFromPaste', full, () => full)?.text).toBe('123-495');
    // Typing up to a literal moves past it.
    expect(nuiMaskEdit('12', 2, 'insertText', date, () => date)).toMatchObject({
      text: '12/',
      caret: 3,
    });
  });

  it('deletes the data beyond a literal instead of the literal', () => {
    expect(nuiMaskDelete('12/03', 3, 3, 'deleteContentBackward', date)).toEqual({
      text: '1/03',
      caret: 1,
    });
    expect(nuiMaskDelete('12/03', 2, 2, 'deleteContentForward', date)).toEqual({
      text: '12/3',
      caret: 3,
    });
    expect(nuiMaskDelete('12/03', 4, 4, 'deleteContentBackward', date)).toBeNull();
    expect(nuiMaskDelete('+1 (2', 4, 4, 'deleteContentBackward', us)).toBe('none');
  });
});

describe('cards', () => {
  it('tells brands by their first digits', () => {
    expect(nuiCardBrand('4111 1111')?.id).toBe('visa');
    expect(nuiCardBrand('5500')?.id).toBe('mastercard');
    expect(nuiCardBrand('2221 00')?.id).toBe('mastercard');
    expect(nuiCardBrand('3782')?.id).toBe('amex');
    expect(nuiCardBrand('6011')?.id).toBe('discover');
    expect(nuiCardBrand('3530')?.id).toBe('jcb');
    expect(nuiCardBrand('2201')?.id).toBe('mir');
    expect(nuiCardBrand('9')).toBeNull();
  });

  it('masks by brand, and checks numbers', () => {
    expect(nuiCardMask('3782')).toBe('0000 000000 00000');
    expect(nuiCardMask('4111')).toBe('0000 0000 0000 0000');
    expect(nuiCardMask('41111111111111111')).toBe('0000 0000 0000 0000 000');
    expect(nuiLuhn('4111 1111 1111 1111')).toBe(true);
    expect(nuiLuhn('4111 1111 1111 1112')).toBe(false);
    expect(nuiCardValid('378282246310005')).toBe(true);
    expect(nuiCardValid('37828224631000')).toBe(false);
  });
});

describe('IBAN', () => {
  it('masks by country length, and checks the check digits', () => {
    expect(nuiIbanMask('IT')).toBe('AA00 XXXX XXXX XXXX XXXX XXXX XXX');
    expect(nuiIbanMask('NO')).toBe('AA00 XXXX XXXX XXX');
    expect(nuiIbanValid('IT60 X054 2811 1010 0000 0123 456')).toBe(true);
    expect(nuiIbanValid('GB82 WEST 1234 5698 7654 32')).toBe(true);
    expect(nuiIbanValid('GB82 WEST 1234 5698 7654 33')).toBe(false);
    expect(nuiIbanValid('GB82 WEST 1234 5698 7654 3')).toBe(false);
  });
});
