import type { NuiGridColumn, NuiGridFilter } from './types';

/** A cell's value: what `column.value` points at, or `row[column.id]`. */
export function nuiGridValue<T>(column: NuiGridColumn<T>, row: T): unknown {
  const value = column.value;
  if (typeof value === 'function') return value(row);
  return (row as Record<PropertyKey, unknown>)[(value ?? column.id) as PropertyKey];
}

/** Dates arrive as `Date`s, timestamps or ISO strings; a bare `2026-09-25` is a local day. */
export function nuiGridDate(value: unknown): Date | null {
  let date: Date | null = null;
  if (value instanceof Date) date = value;
  else if (typeof value === 'number') date = new Date(value);
  else if (typeof value === 'string' && value) {
    const day = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    date = day ? new Date(+day[1], +day[2] - 1, +day[3]) : new Date(value);
  }
  return date && !isNaN(date.getTime()) ? date : null;
}

/** Whether a value counts as empty: it sorts last and matches the `empty` filter. */
export function nuiGridEmpty(value: unknown): boolean {
  return (
    value === null ||
    value === undefined ||
    value === '' ||
    (typeof value === 'number' && isNaN(value)) ||
    (value instanceof Date && isNaN(value.getTime())) ||
    (Array.isArray(value) && !value.length)
  );
}

/** Lowercase, without accents: how search and text filters compare. */
export function nuiGridNormalize(text: string): string {
  return text.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase();
}

/** Makes the text of a column's values, from its type, format and options. */
export function nuiGridFormatter<T>(
  column: NuiGridColumn<T>,
  locale: string,
  words: { yes: string; no: string },
): (value: unknown, row: T) => string {
  const format = column.format;
  if (typeof format === 'function') {
    return (value, row) => (nuiGridEmpty(value) ? '' : format(value, row));
  }
  switch (column.type ?? 'text') {
    case 'number': {
      const numbers = new Intl.NumberFormat(locale, format as Intl.NumberFormatOptions);
      return (value) =>
        typeof value === 'number' && isFinite(value) ? numbers.format(value) : text(value);
    }
    case 'date': {
      const dates = new Intl.DateTimeFormat(
        locale,
        (format as Intl.DateTimeFormatOptions) ?? { dateStyle: 'medium' },
      );
      return (value) => {
        const date = nuiGridDate(value);
        return date ? dates.format(date) : '';
      };
    }
    case 'boolean':
      return (value) => (nuiGridEmpty(value) ? '' : value ? words.yes : words.no);
    case 'enum': {
      const labels = new Map(column.options?.map((option) => [option.value, option.label]));
      return (value) => labels.get(value) ?? text(value);
    }
    default:
      return text;
  }
}

const text = (value: unknown) => (nuiGridEmpty(value) ? '' : String(value));

/** Compares two non-empty values of a column, by its type (or its own `compare`). */
export function nuiGridComparator<T>(
  column: NuiGridColumn<T>,
  locale: string,
): (a: unknown, b: unknown) => number {
  if (column.compare) return column.compare;
  switch (column.type ?? 'text') {
    case 'number':
      return (a, b) => Number(a) - Number(b);
    case 'date':
      return (a, b) => (nuiGridDate(a)?.getTime() ?? 0) - (nuiGridDate(b)?.getTime() ?? 0);
    case 'boolean':
      return (a, b) => Number(Boolean(a)) - Number(Boolean(b));
    case 'enum': {
      // Enums sort in the order their options are listed: pending before shipped.
      const order = new Map(column.options?.map((option, i) => [option.value, i]));
      return (a, b) => (order.get(a) ?? Infinity) - (order.get(b) ?? Infinity);
    }
    default: {
      const collator = new Intl.Collator(locale, { numeric: true, sensitivity: 'base' });
      return (a, b) => collator.compare(String(a), String(b));
    }
  }
}

/** A day as a number (20260925), so date filters compare days, not instants. */
const day = (value: unknown) => {
  const date = nuiGridDate(value);
  return date ? date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate() : null;
};

/** Whether a filter does anything: an empty value filters nothing. */
export function nuiGridFilterActive(filter: NuiGridFilter | null | undefined): boolean {
  if (!filter) return false;
  if (filter.op === 'empty' || filter.op === 'notEmpty') return true;
  if (filter.op === 'between') return !nuiGridEmpty(filter.value) || !nuiGridEmpty(filter.to);
  if (filter.op === 'in') return Array.isArray(filter.value);
  return !nuiGridEmpty(filter.value);
}

/** Whether a cell passes its column's filter. `text` is the formatted value. */
export function nuiGridMatches<T>(
  column: NuiGridColumn<T>,
  filter: NuiGridFilter,
  value: unknown,
  text: string,
): boolean {
  const type = column.type ?? 'text';
  switch (filter.op) {
    case 'empty':
      return nuiGridEmpty(value);
    case 'notEmpty':
      return !nuiGridEmpty(value);
    case 'is':
      return Boolean(value) === Boolean(filter.value);
    case 'in':
      return (filter.value as readonly unknown[]).includes(value);
    case 'contains':
    case 'notContains':
    case 'equals':
    case 'startsWith':
    case 'endsWith': {
      const cell = nuiGridNormalize(text);
      const wanted = nuiGridNormalize(String(filter.value ?? ''));
      if (filter.op === 'contains') return cell.includes(wanted);
      if (filter.op === 'notContains') return !cell.includes(wanted);
      if (filter.op === 'equals') return cell === wanted;
      if (filter.op === 'startsWith') return cell.startsWith(wanted);
      return cell.endsWith(wanted);
    }
    default: {
      // Numbers compare as numbers, dates as days.
      const key = type === 'date' ? day : (v: unknown) => (nuiGridEmpty(v) ? null : Number(v));
      const cell = key(value);
      if (cell === null || isNaN(cell)) return false;
      const from = nuiGridEmpty(filter.value) ? null : key(filter.value);
      if (filter.op === 'between') {
        const to = nuiGridEmpty(filter.to) ? null : key(filter.to);
        return (from === null || cell >= from) && (to === null || cell <= to);
      }
      if (from === null) return true;
      if (filter.op === 'eq') return cell === from;
      if (filter.op === 'ne') return cell !== from;
      if (filter.op === 'lt') return cell < from;
      if (filter.op === 'lte') return cell <= from;
      if (filter.op === 'gt') return cell > from;
      return cell >= from;
    }
  }
}

/** The filter operators that fit a column type, the first being the default. */
export function nuiGridOperators(column: NuiGridColumn): NuiGridFilter['op'][] {
  switch (column.type ?? 'text') {
    case 'number':
    case 'date':
      return ['eq', 'ne', 'lt', 'lte', 'gt', 'gte', 'between', 'empty', 'notEmpty'];
    case 'boolean':
      return ['is', 'empty', 'notEmpty'];
    case 'enum':
      return ['in', 'empty', 'notEmpty'];
    default:
      return ['contains', 'notContains', 'equals', 'startsWith', 'endsWith', 'empty', 'notEmpty'];
  }
}

export interface NuiCsvOptions {
  /** Defaults to a comma; spreadsheets in many European locales expect a semicolon. */
  separator?: string;
  /** A byte-order mark first, so Excel reads UTF-8. Off by default. */
  bom?: boolean;
}

/**
 * Rows as CSV (RFC 4180): fields with separators, quotes or line breaks are quoted.
 * Text that a spreadsheet would run as a formula (`=`, `+`, `-`, `@`) gets a
 * leading apostrophe, so an exported file can't run anything.
 */
export function nuiCsv(
  header: readonly string[],
  rows: readonly (readonly string[])[],
  options: NuiCsvOptions = {},
  /** Per column: whether its cells are text, which gets the formula guard. */
  text: readonly boolean[] = [],
): string {
  const separator = options.separator ?? ',';
  const field = (value: string, guard: boolean) => {
    const safe = guard && /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
    return /["\r\n]/.test(safe) || safe.includes(separator)
      ? `"${safe.replace(/"/g, '""')}"`
      : safe;
  };
  const lines = [
    header.map((cell) => field(cell, true)).join(separator),
    ...rows.map((row) => row.map((cell, i) => field(cell, text[i] ?? true)).join(separator)),
  ];
  return (options.bom ? '﻿' : '') + lines.join('\r\n');
}
