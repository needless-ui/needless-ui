import {
  nuiCsv,
  nuiGridComparator,
  nuiGridDate,
  nuiGridFormatter,
  nuiGridMatches,
  nuiGridValue,
} from './format';
import type { NuiGridColumn } from './types';

const words = { yes: 'Yes', no: 'No' };

describe('grid values and formats', () => {
  it('reads a value by key, by function, or by id', () => {
    const row = { id: 1, name: 'Ada', born: 1815 };
    expect(nuiGridValue({ id: 'name', header: 'Name' }, row)).toBe('Ada');
    expect(nuiGridValue({ id: 'x', header: 'X', value: 'born' }, row)).toBe(1815);
    expect(nuiGridValue({ id: 'x', header: 'X', value: (r: typeof row) => r.born + 1 }, row)).toBe(
      1816,
    );
  });

  it('reads dates, taking a bare ISO date as a local day', () => {
    const day = nuiGridDate('2026-09-25')!;
    expect([day.getFullYear(), day.getMonth(), day.getDate(), day.getHours()]).toEqual([
      2026, 8, 25, 0,
    ]);
    expect(nuiGridDate(0)?.getTime()).toBe(0);
    expect(nuiGridDate('not a date')).toBeNull();
    expect(nuiGridDate(null)).toBeNull();
  });

  it('formats each type for the locale', () => {
    const price: NuiGridColumn = {
      id: 'price',
      header: 'Price',
      type: 'number',
      format: { style: 'currency', currency: 'USD' },
    };
    expect(nuiGridFormatter(price, 'en-US', words)(1234.5, {})).toBe('$1,234.50');
    const date: NuiGridColumn = {
      id: 'd',
      header: 'D',
      type: 'date',
      format: { dateStyle: 'short' },
    };
    expect(nuiGridFormatter(date, 'en-US', words)('2026-09-25', {})).toBe('9/25/26');
    const status: NuiGridColumn = {
      id: 's',
      header: 'S',
      type: 'enum',
      options: [{ value: 'open', label: 'Open' }],
    };
    expect(nuiGridFormatter(status, 'en', words)('open', {})).toBe('Open');
    const done: NuiGridColumn = { id: 'b', header: 'B', type: 'boolean' };
    expect(nuiGridFormatter(done, 'en', words)(true, {})).toBe('Yes');
    expect(nuiGridFormatter(done, 'en', words)(null, {})).toBe('');
    const custom: NuiGridColumn = { id: 'c', header: 'C', format: (v: number) => `#${v}` };
    expect(nuiGridFormatter(custom, 'en', words)(7, {})).toBe('#7');
  });

  it('sorts text with numbers in order, and enums in the order of their options', () => {
    const text = nuiGridComparator({ id: 't', header: 'T' }, 'en');
    expect(['File 10', 'file 2', 'File 1'].sort(text)).toEqual(['File 1', 'file 2', 'File 10']);
    const status = nuiGridComparator(
      {
        id: 's',
        header: 'S',
        type: 'enum',
        options: [
          { value: 'pending', label: 'Pending' },
          { value: 'shipped', label: 'Shipped' },
        ],
      },
      'en',
    );
    expect(['shipped', 'pending'].sort(status)).toEqual(['pending', 'shipped']);
  });

  it('filters text without case or accents, numbers by value and dates by day', () => {
    const name: NuiGridColumn = { id: 'n', header: 'N' };
    expect(nuiGridMatches(name, { op: 'contains', value: 'ZURI' }, 'Zürich', 'Zürich')).toBe(true);
    expect(nuiGridMatches(name, { op: 'startsWith', value: 'zu' }, 'Zürich', 'Zürich')).toBe(true);
    expect(nuiGridMatches(name, { op: 'notContains', value: 'ber' }, 'Bern', 'Bern')).toBe(false);

    const amount: NuiGridColumn = { id: 'a', header: 'A', type: 'number' };
    expect(nuiGridMatches(amount, { op: 'gte', value: '10' }, 10, '10')).toBe(true);
    expect(nuiGridMatches(amount, { op: 'between', value: 5, to: 9 }, 10, '10')).toBe(false);
    expect(nuiGridMatches(amount, { op: 'between', to: 20 }, 10, '10')).toBe(true);
    expect(nuiGridMatches(amount, { op: 'lt', value: 3 }, null, '')).toBe(false);

    const when: NuiGridColumn = { id: 'w', header: 'W', type: 'date' };
    const noon = new Date(2026, 8, 25, 12);
    expect(nuiGridMatches(when, { op: 'eq', value: '2026-09-25' }, noon, '')).toBe(true);
    expect(nuiGridMatches(when, { op: 'gt', value: '2026-09-25' }, noon, '')).toBe(false);

    expect(nuiGridMatches(name, { op: 'in', value: ['a', 'b'] }, 'b', 'b')).toBe(true);
    expect(nuiGridMatches(name, { op: 'is', value: true }, 1, '')).toBe(true);
    expect(nuiGridMatches(name, { op: 'empty' }, '', '')).toBe(true);
  });

  it('writes CSV that quotes what it must and runs no formulas', () => {
    const csv = nuiCsv(
      ['Name', 'Note', 'Total'],
      [
        ['Ada', 'says "hi", twice', '-3'],
        ['=SUM(A1)', 'two\nlines', '12'],
      ],
      {},
      [true, true, false],
    );
    expect(csv).toBe(
      'Name,Note,Total\r\nAda,"says ""hi"", twice",-3\r\n\'=SUM(A1),"two\nlines",12',
    );
    expect(nuiCsv(['a;b'], [], { separator: ';', bom: true })).toBe('﻿"a;b"');
  });
});
