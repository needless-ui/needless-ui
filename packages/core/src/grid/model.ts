/**
 * The data grid's model, as pure functions: columns laid out from their state,
 * rows filtered, sorted, grouped and paged, the selection kept by key, and the
 * active cell kept inside the grid. Each binding keeps the state (the sort, the
 * filters, the selection, the column state) and memoizes these: Angular in
 * `computed()`s, React in `useMemo()`s.
 */
import { nuiParseNumber } from '../number.js';
import {
  nuiCsv,
  type NuiCsvOptions,
  nuiGridComparator,
  nuiGridDate,
  nuiGridEmpty,
  nuiGridFilterActive,
  nuiGridFormatter,
  nuiGridMatches,
  nuiGridNormalize,
  nuiGridValue,
} from './format.js';
import type {
  NuiGridColumn,
  NuiGridColumnState,
  NuiGridFilter,
  NuiGridFilterOp,
  NuiGridItem,
  NuiGridSort,
  NuiGridType,
} from './types.js';
import type { NuiXlsxSheet } from './xlsx.js';

const WIDTHS: Record<NuiGridType, number> = {
  text: 180,
  number: 120,
  date: 140,
  boolean: 100,
  enum: 140,
};
const MIN_WIDTH = 64;

/** A column as laid out: its place, width, pinning and sort. */
export interface NuiGridLayoutColumn<T> {
  column: NuiGridColumn<T>;
  id: string;
  type: NuiGridType;
  width: number;
  pinned: 'start' | 'end' | null;
  /** Distance from the pinned edge, for `position: sticky`. */
  offset: number;
  /** The pinned column next to the scrolling ones, which draws the shadow. */
  edge: boolean;
  align: 'start' | 'center' | 'end';
  sort: { direction: 'asc' | 'desc'; priority: number } | null;
  filtered: boolean;
}

/** A cell: row -1 is the header, and columns count the leading ones (checkboxes, toggles). */
export interface NuiGridCellPosition {
  row: number;
  col: number;
}

/** Where the active cell can be: rows from the header (-1) or the first row, to the footer. */
export interface NuiGridBounds {
  firstRow: number;
  lastRow: number;
  lastCol: number;
}

/** How a row's text is made: its column's formatter, by column id. */
export type NuiGridFormatters<T> = ReadonlyMap<string, (value: unknown, row: T) => string>;

/** How a column's values compare, by column id. */
export type NuiGridComparators = ReadonlyMap<string, (a: unknown, b: unknown) => number>;

/** The search words and active filters that narrow the rows. */
export interface NuiGridNarrowing {
  words: readonly string[];
  filters: readonly (readonly [string, NuiGridFilter])[];
}

/** Tree data, filtered: the top-level rows that stay, and the children of each row that stay. */
export interface NuiGridForest<T> {
  roots: readonly T[];
  kept: ReadonlyMap<T, readonly T[]>;
  narrowed: boolean;
}

/** One column of the sort, ready to compare with. */
export interface NuiGridSortKey<T> {
  column: NuiGridColumn<T>;
  direction: 1 | -1;
  compare: (a: unknown, b: unknown) => number;
}

/** A row's key when the grid isn't told how to find one: its `id`, or the row itself. */
export function nuiGridRowId(row: unknown): unknown {
  return (row as { id?: unknown } | null)?.id ?? row;
}

// Columns ------------------------------------------------------------------

/** The columns by id. */
export function nuiGridColumnsById<T>(
  columns: readonly NuiGridColumn<T>[],
): Map<string, NuiGridColumn<T>> {
  return new Map(columns.map((column) => [column.id, column]));
}

/** Every column's state, in display order: what's saved, then the rest as defined. */
export function nuiGridColumnStates<T>(
  columns: readonly NuiGridColumn<T>[],
  saved: readonly NuiGridColumnState[],
  byId: ReadonlyMap<string, NuiGridColumn<T>> = nuiGridColumnsById(columns),
): NuiGridColumnState[] {
  const seen = new Set<string>();
  const state: NuiGridColumnState[] = [];
  const add = (id: string, entry: NuiGridColumnState | null) => {
    const column = byId.get(id);
    if (!column || seen.has(id)) return;
    seen.add(id);
    state.push({
      id,
      width: entry?.width ?? column.width,
      hidden: entry?.hidden ?? column.hidden ?? false,
      pinned: entry && entry.pinned !== undefined ? entry.pinned : (column.pinned ?? null),
    });
  };
  for (const entry of saved) add(entry.id, entry);
  for (const column of columns) add(column.id, null);
  return state;
}

/**
 * The visible columns, laid out: pinned to the start, then the rest, then pinned
 * to the end. Set widths are kept within each column's bounds, and `flex` columns
 * share what the container has left after the others and the `leading` columns.
 */
export function nuiGridLayout<T>(options: {
  byId: ReadonlyMap<string, NuiGridColumn<T>>;
  state: readonly NuiGridColumnState[];
  sort: readonly NuiGridSort[];
  filters: Readonly<Record<string, NuiGridFilter>>;
  /** Width of the scroll container, which `flex` columns share. */
  containerWidth: number;
  /** Width of the columns before the data (checkboxes), which are always pinned. */
  leading: number;
}): NuiGridLayoutColumn<T>[] {
  const { byId, sort, filters, leading } = options;
  const visible = options.state.filter((entry) => !entry.hidden);
  const group = (pinned: 'start' | 'end' | null) =>
    visible.filter((entry) => (entry.pinned ?? null) === pinned);
  const ordered = [...group('start'), ...group(null), ...group('end')];

  // Widths: set ones as given, flex ones share what the container has left.
  const bounds = (column: NuiGridColumn<T>, width: number) =>
    Math.min(column.maxWidth ?? Infinity, Math.max(column.minWidth ?? MIN_WIDTH, width));
  const base = ordered.map((entry) => {
    const column = byId.get(entry.id)!;
    return entry.width ?? column.width ?? WIDTHS[column.type ?? 'text'];
  });
  const flexes = ordered.map((entry) =>
    entry.width === undefined ? (byId.get(entry.id)!.flex ?? 0) : 0,
  );
  const flexTotal = flexes.reduce((sum, flex) => sum + flex, 0);
  const fixed = base.reduce((sum, width, i) => sum + (flexes[i] ? 0 : width), 0);
  const room = options.containerWidth - leading - fixed;
  const widths = ordered.map((entry, i) => {
    const column = byId.get(entry.id)!;
    const width = flexes[i] && room > 0 ? (room * flexes[i]) / flexTotal : base[i];
    return Math.round(bounds(column, width));
  });

  const sortIndex = new Map(sort.map((entry, i) => [entry.column, i]));
  const layout = ordered.map((entry, i): NuiGridLayoutColumn<T> => {
    const column = byId.get(entry.id)!;
    const type = column.type ?? 'text';
    const priority = sortIndex.get(entry.id);
    return {
      column,
      id: entry.id,
      type,
      width: widths[i],
      pinned: entry.pinned ?? null,
      offset: 0,
      edge: false,
      align:
        column.align ??
        (type === 'number' || type === 'date' ? 'end' : type === 'boolean' ? 'center' : 'start'),
      sort:
        priority === undefined
          ? null
          : { direction: sort[priority].direction, priority: priority + 1 },
      filtered: nuiGridFilterActive(filters[entry.id]),
    };
  });

  // Sticky offsets: start columns count from the leading ones, end columns from the end.
  let start = leading;
  for (const column of layout.filter((c) => c.pinned === 'start')) {
    column.offset = start;
    start += column.width;
  }
  let end = 0;
  for (const column of layout.filter((c) => c.pinned === 'end').reverse()) {
    column.offset = end;
    end += column.width;
  }
  const starts = layout.filter((c) => c.pinned === 'start');
  const ends = layout.filter((c) => c.pinned === 'end');
  if (starts.length) starts[starts.length - 1].edge = true;
  if (ends.length) ends[0].edge = true;
  return layout;
}

// Values ---------------------------------------------------------------------

/** Each column's formatter, for the locale. */
export function nuiGridFormatters<T>(
  columns: readonly NuiGridColumn<T>[],
  locale: string,
  words: { yes: string; no: string },
): Map<string, (value: unknown, row: T) => string> {
  return new Map(columns.map((column) => [column.id, nuiGridFormatter(column, locale, words)]));
}

/** Each column's comparator, for the locale. */
export function nuiGridComparators<T>(
  columns: readonly NuiGridColumn<T>[],
  locale: string,
): Map<string, (a: unknown, b: unknown) => number> {
  return new Map(columns.map((column) => [column.id, nuiGridComparator(column, locale)]));
}

/** A cell as text: formatted for the locale. */
export function nuiGridText<T>(
  formatters: NuiGridFormatters<T>,
  column: NuiGridColumn<T>,
  row: T,
): string {
  const format = formatters.get(column.id);
  const value = nuiGridValue(column, row);
  return format ? format(value, row) : String(value ?? '');
}

// Rows -----------------------------------------------------------------------

/** The columns search looks in: visible and filterable. Unchanged by resizing. */
export function nuiGridSearchable<T>(
  state: readonly NuiGridColumnState[],
  byId: ReadonlyMap<string, NuiGridColumn<T>>,
): NuiGridColumn<T>[] {
  return state
    .filter((entry) => !entry.hidden)
    .map((entry) => byId.get(entry.id)!)
    .filter((column) => column.filterable !== false);
}

/** Whether two lists of searchable columns are the same, so their haystacks can be kept. */
export function nuiGridSameColumns<T>(
  a: readonly NuiGridColumn<T>[],
  b: readonly NuiGridColumn<T>[],
): boolean {
  return a.length === b.length && a.every((column, i) => column === b[i]);
}

/** A row's searchable text: every searchable cell, normalized. */
export function nuiGridHaystack<T>(
  columns: readonly NuiGridColumn<T>[],
  row: T,
  text: (column: NuiGridColumn<T>, row: T) => string,
): string {
  return nuiGridNormalize(columns.map((column) => text(column, row)).join('\n'));
}

/** The search words and active filters, or null when nothing narrows the rows. */
export function nuiGridNarrowing<T>(
  search: string,
  filters: Readonly<Record<string, NuiGridFilter>>,
  byId: ReadonlyMap<string, NuiGridColumn<T>>,
): NuiGridNarrowing | null {
  const words = nuiGridNormalize(search).split(/\s+/).filter(Boolean);
  const active = Object.entries(filters).filter(
    ([id, filter]) => byId.has(id) && nuiGridFilterActive(filter),
  );
  return words.length || active.length ? { words, filters: active } : null;
}

/**
 * Whether a row passes the search and the filters; `haystack` is its searchable
 * text, if known.
 */
export function nuiGridPasses<T>(
  row: T,
  narrowing: NuiGridNarrowing | null,
  context: {
    searchable: readonly NuiGridColumn<T>[];
    byId: ReadonlyMap<string, NuiGridColumn<T>>;
    text: (column: NuiGridColumn<T>, row: T) => string;
  },
  haystack?: string,
): boolean {
  if (!narrowing) return true;
  const { words, filters } = narrowing;
  if (words.length) {
    const text = haystack ?? nuiGridHaystack(context.searchable, row, context.text);
    if (!words.every((word) => text.includes(word))) return false;
  }
  return filters.every(([id, filter]) => {
    const column = context.byId.get(id)!;
    return nuiGridMatches(column, filter, nuiGridValue(column, row), context.text(column, row));
  });
}

/**
 * Tree data, filtered: a row stays when it passes, or when a row under it does.
 * Its children are the ones that stay.
 */
export function nuiGridForest<T>(
  rows: readonly T[],
  children: (row: T) => readonly T[] | null | undefined,
  narrowed: boolean,
  passes: (row: T) => boolean,
): NuiGridForest<T> {
  const kept = new Map<T, readonly T[]>();
  const keep = (row: T): boolean => {
    const under = (children(row) ?? []).filter(keep);
    kept.set(row, under);
    return !narrowed || under.length > 0 || passes(row);
  };
  return { roots: rows.filter(keep), kept, narrowed };
}

/**
 * The rows that pass the search and the filters (in tree data, the top-level
 * ones). `haystacks` gives every row's searchable text, and is read only when
 * there are words to search for.
 */
export function nuiGridFiltered<T>(
  rows: readonly T[],
  options: {
    server: boolean;
    forest: NuiGridForest<T> | null;
    narrowing: NuiGridNarrowing | null;
    haystacks: () => readonly string[];
    passes: (row: T, haystack?: string) => boolean;
  },
): readonly T[] {
  if (options.server) return rows;
  if (options.forest) return options.forest.roots;
  const narrowing = options.narrowing;
  if (!narrowing) return rows;
  const haystacks = narrowing.words.length ? options.haystacks() : null;
  return rows.filter((row, i) => options.passes(row, haystacks?.[i]));
}

/** The sort's columns, ready to compare with: those that exist and sort. */
export function nuiGridSortKeys<T>(
  sort: readonly NuiGridSort[],
  byId: ReadonlyMap<string, NuiGridColumn<T>>,
  comparators: NuiGridComparators,
): NuiGridSortKey<T>[] {
  return sort
    .map((entry) => ({
      column: byId.get(entry.column),
      direction: entry.direction === 'desc' ? -1 : 1,
      compare: comparators.get(entry.column),
    }))
    .filter(
      (key): key is NuiGridSortKey<T> =>
        !!key.column && key.column.sortable !== false && !!key.compare,
    );
}

/** Rows in sort order. Sorting is stable, and empty values go last. */
export function nuiGridSortRows<T>(
  rows: readonly T[],
  keys: readonly NuiGridSortKey<T>[],
): readonly T[] {
  if (!keys.length) return rows;
  const decorated = rows.map((row, index) => ({
    row,
    index,
    values: keys.map((key) => nuiGridValue(key.column, row)),
  }));
  decorated.sort((a, b) => {
    for (let i = 0; i < keys.length; i++) {
      const [x, y] = [a.values[i], b.values[i]];
      const [emptyX, emptyY] = [nuiGridEmpty(x), nuiGridEmpty(y)];
      if (emptyX || emptyY) {
        if (emptyX && emptyY) continue;
        return emptyX ? 1 : -1;
      }
      const order = keys[i].compare(x, y) * keys[i].direction;
      if (order) return order;
    }
    return a.index - b.index;
  });
  return decorated.map((item) => item.row);
}

// Groups, trees and details ----------------------------------------------------

/** The columns rows are grouped by, that exist; none in tree data or server mode. */
export function nuiGridGrouping<T>(
  groupBy: readonly string[],
  byId: ReadonlyMap<string, NuiGridColumn<T>>,
  options: { tree: boolean; server: boolean },
): string[] {
  if (options.tree || options.server) return [];
  return groupBy.filter((id) => byId.has(id));
}

/** Every line to draw, before paging: groups, rows and details, in order. */
export function nuiGridDisplay<T>(options: {
  /** The filtered rows in sort order (the top-level ones in tree data). */
  sorted: readonly T[];
  grouping: readonly string[];
  byId: ReadonlyMap<string, NuiGridColumn<T>>;
  comparators: NuiGridComparators;
  sort: readonly NuiGridSort[];
  /** Keys of the groups closed. */
  collapsed: ReadonlySet<string>;
  /** Keys of the rows open, in tree data. */
  expanded: ReadonlySet<unknown>;
  /** Keys of the rows whose details are open, or null when rows have no details. */
  details: ReadonlySet<unknown> | null;
  children: ((row: T) => readonly T[] | null | undefined) | null;
  forest: NuiGridForest<T> | null;
  key: (row: T) => unknown;
  /** Sorts a row's children among themselves. */
  sortRows: (rows: readonly T[]) => readonly T[];
}): NuiGridItem<T>[] {
  const { details, children, forest, expanded, key: keyOf, sortRows } = options;
  const out: NuiGridItem<T>[] = [];
  const push = (row: T, level: number, size: number, position: number, under: readonly T[]) => {
    const key = keyOf(row);
    // While a search or filter narrows tree data, rows open to show what matched.
    const open = under.length > 0 && (expanded.has(key) || !!forest?.narrowed);
    out.push({
      kind: 'row',
      key,
      row,
      level,
      expandable: under.length > 0,
      expanded: open,
      size,
      position,
    });
    if (details?.has(key)) out.push({ kind: 'detail', key: `detail:${String(key)}`, row, level });
    if (open) {
      const sorted = sortRows(under);
      sorted.forEach((child, i) =>
        push(child, level + 1, sorted.length, i + 1, forest?.kept.get(child) ?? []),
      );
    }
  };
  if (options.grouping.length) {
    groupRows(options, options.sorted, 0, [], out, push);
    return out;
  }
  const rows = options.sorted;
  rows.forEach((row, i) =>
    push(
      row,
      0,
      rows.length,
      i + 1,
      children ? (forest?.kept.get(row) ?? children(row) ?? []) : [],
    ),
  );
  return out;
}

/** Groups rows by a column, then by the next, adding each group's line and, if it's open, its rows. */
function groupRows<T>(
  options: {
    grouping: readonly string[];
    byId: ReadonlyMap<string, NuiGridColumn<T>>;
    comparators: NuiGridComparators;
    sort: readonly NuiGridSort[];
    collapsed: ReadonlySet<string>;
  },
  rows: readonly T[],
  level: number,
  path: readonly [string, string][],
  out: NuiGridItem<T>[],
  push: (row: T, level: number, size: number, position: number, under: readonly T[]) => void,
): void {
  const { grouping, collapsed } = options;
  const id = grouping[level];
  const column = options.byId.get(id)!;
  const buckets = new Map<string, { value: unknown; rows: T[] }>();
  for (const row of rows) {
    const value = nuiGridValue(column, row);
    const key = valueKey(value);
    const bucket = buckets.get(key);
    if (bucket) bucket.rows.push(row);
    else buckets.set(key, { value, rows: [row] });
  }
  // Groups in the column's sort order (ascending unless the sort says otherwise); empty last.
  const compare = options.comparators.get(id)!;
  const direction = options.sort.find((sort) => sort.column === id)?.direction === 'desc' ? -1 : 1;
  const groups = [...buckets.entries()].sort(([, a], [, b]) => {
    const [emptyA, emptyB] = [nuiGridEmpty(a.value), nuiGridEmpty(b.value)];
    if (emptyA || emptyB) return emptyA === emptyB ? 0 : emptyA ? 1 : -1;
    return compare(a.value, b.value) * direction;
  });
  groups.forEach(([valueId, group], i) => {
    const at: [string, string][] = [...path, [id, valueId]];
    const key = JSON.stringify(at);
    const expanded = !collapsed.has(key);
    out.push({
      kind: 'group',
      key,
      level,
      column: id,
      value: group.value,
      rows: group.rows,
      expanded,
      size: groups.length,
      position: i + 1,
    });
    if (!expanded) return;
    if (level + 1 < grouping.length) {
      groupRows(options, group.rows, level + 1, at, out, push);
    } else {
      group.rows.forEach((row, j) => push(row, level + 1, group.rows.length, j + 1, []));
    }
  });
}

/** The keys of the groups closed once the group `key` opens (`open`) or closes. */
export function nuiGridCollapsed(
  collapsed: readonly string[],
  key: string,
  open: boolean,
): string[] {
  return open ? collapsed.filter((k) => k !== key) : [...collapsed, key];
}

/** The keys of the rows open (or with their details open) once `key` opens or closes. */
export function nuiGridOpened(keys: readonly unknown[], key: unknown, open: boolean): unknown[] {
  return open ? [...keys.filter((k) => k !== key), key] : keys.filter((k) => k !== key);
}

/** The key of every group of rows, nested ones too: what closing them all closes. */
export function nuiGridGroupKeys<T>(
  rows: readonly T[],
  grouping: readonly string[],
  byId: ReadonlyMap<string, NuiGridColumn<T>>,
): string[] {
  const keys: string[] = [];
  const walk = (group: readonly T[], level: number, path: [string, string][]) => {
    const id = grouping[level];
    const column = byId.get(id)!;
    const seen = new Map<string, T[]>();
    for (const row of group) {
      const valueId = valueKey(nuiGridValue(column, row));
      (seen.get(valueId) ?? seen.set(valueId, []).get(valueId)!).push(row);
    }
    for (const [valueId, inside] of seen) {
      const at: [string, string][] = [...path, [id, valueId]];
      keys.push(JSON.stringify(at));
      if (level + 1 < grouping.length) walk(inside, level + 1, at);
    }
  };
  if (grouping.length) walk(rows, 0, []);
  return keys;
}

/** The key of every row with children, at any depth: what opening them all opens. */
export function nuiGridParentKeys<T>(
  rows: readonly T[],
  children: (row: T) => readonly T[] | null | undefined,
  key: (row: T) => unknown,
): unknown[] {
  const keys: unknown[] = [];
  const walk = (list: readonly T[]) => {
    for (const row of list) {
      const under = children(row) ?? [];
      if (under.length) {
        keys.push(key(row));
        walk(under);
      }
    }
  };
  walk(rows);
  return keys;
}

/** A column's aggregate over rows, as the column shows it; empty when it has none. */
export function nuiGridAggregate<T>(
  column: NuiGridColumn<T>,
  rows: readonly T[],
  context: {
    locale: string;
    comparators: NuiGridComparators;
    formatters: NuiGridFormatters<T>;
  },
): string {
  const kind = column.aggregate;
  if (!kind) return '';
  const values = rows.map((row) => nuiGridValue(column, row)).filter((v) => !nuiGridEmpty(v));
  let result: unknown;
  if (typeof kind === 'function') result = kind(values, rows);
  else if (kind === 'count') {
    return new Intl.NumberFormat(context.locale).format(values.length);
  } else if (!values.length) return '';
  else if (kind === 'sum' || kind === 'avg') {
    const sum = values.reduce<number>((total, value) => total + Number(value), 0);
    result = kind === 'sum' ? sum : sum / values.length;
  } else {
    const compare = context.comparators.get(column.id)!;
    result = values.reduce((best, value) =>
      (kind === 'min' ? compare(value, best) < 0 : compare(value, best) > 0) ? value : best,
    );
  }
  if (nuiGridEmpty(result)) return '';
  const format = context.formatters.get(column.id);
  return format &&
    (typeof result === 'number' || result instanceof Date || typeof kind !== 'function')
    ? format(result, rows[0])
    : String(result);
}

// Pages ------------------------------------------------------------------------

/** How many pages there are, the one shown (kept inside them), and its first line. */
export function nuiGridPages(
  total: number,
  pageSize: number,
  page: number,
): { paged: boolean; pageCount: number; currentPage: number; firstIndex: number } {
  const paged = pageSize > 0;
  const pageCount = paged ? Math.max(1, Math.ceil(total / pageSize)) : 1;
  const currentPage = Math.min(Math.max(0, page), pageCount - 1);
  return { paged, pageCount, currentPage, firstIndex: paged ? currentPage * pageSize : 0 };
}

/** The lines to draw: one page, or all of them (in server mode, as they come). */
export function nuiGridPage<T>(
  display: readonly NuiGridItem<T>[],
  options: { server: boolean; pageSize: number; currentPage: number },
): readonly NuiGridItem<T>[] {
  if (options.server || options.pageSize <= 0) return display;
  const start = options.currentPage * options.pageSize;
  return display.slice(start, start + options.pageSize);
}

// Sorting and filtering --------------------------------------------------------

/**
 * The sort once a column sorts `direction` (or stops, with `null`). With `add` the
 * column joins the sort or changes its place in it; without, it replaces the
 * whole sort.
 */
export function nuiGridSorted(
  current: readonly NuiGridSort[],
  id: string,
  direction: 'asc' | 'desc' | null,
  add = false,
): NuiGridSort[] {
  if (!add) return direction ? [{ column: id, direction }] : [];
  if (!direction) return current.filter((sort) => sort.column !== id);
  if (current.some((sort) => sort.column === id)) {
    return current.map((sort) => (sort.column === id ? { column: id, direction } : sort));
  }
  return [...current, { column: id, direction }];
}

/** What a click on a column's header sorts it by next: ascending, descending, then not at all. */
export function nuiGridNextDirection(
  current: readonly NuiGridSort[],
  id: string,
): 'asc' | 'desc' | null {
  const sort = current.find((entry) => entry.column === id);
  return !sort ? 'asc' : sort.direction === 'asc' ? 'desc' : null;
}

/** The filters with a column's filter set, or removed with `null`. */
export function nuiGridFiltersWith(
  filters: Readonly<Record<string, NuiGridFilter>>,
  id: string,
  filter: NuiGridFilter | null,
): Record<string, NuiGridFilter> {
  const next = { ...filters };
  if (filter) next[id] = filter;
  else delete next[id];
  return next;
}

// Selection ------------------------------------------------------------------

/** The selection once a row (by key) is selected or not; null when rows can't be selected. */
export function nuiGridToggled(
  selected: readonly unknown[],
  key: unknown,
  mode: 'none' | 'single' | 'multiple',
  on: boolean,
): unknown[] | null {
  if (mode === 'none') return null;
  if (mode === 'single') return on ? [key] : [];
  const keys = selected.filter((k) => k !== key);
  return on ? [...keys, key] : keys;
}

/** The selection with every row of a group selected, or none of them. */
export function nuiGridGroupToggled(
  selected: readonly unknown[],
  keys: readonly unknown[],
  on: boolean,
): unknown[] {
  const inGroup = new Set(keys);
  const rest = selected.filter((key) => !inGroup.has(key));
  return on ? [...rest, ...keys] : rest;
}

/** Whether all of some rows are selected, some, or none. */
export function nuiGridSelectionOf(
  selected: ReadonlySet<unknown>,
  keys: readonly unknown[],
): 'all' | 'some' | 'none' {
  let count = 0;
  for (const key of keys) if (selected.has(key)) count++;
  return count === 0 ? 'none' : count === keys.length ? 'all' : 'some';
}

/**
 * The selection with the rows from `anchor` (the row toggled last) to `key`
 * added, as they're shown; null when either isn't shown.
 */
export function nuiGridRange(
  selected: readonly unknown[],
  shown: readonly unknown[],
  anchor: unknown,
  key: unknown,
): unknown[] | null {
  const to = shown.indexOf(key);
  const from = shown.indexOf(anchor);
  if (to < 0 || from < 0) return null;
  const [low, high] = from < to ? [from, to] : [to, from];
  const keys = new Set(selected);
  for (let i = low; i <= high; i++) keys.add(shown[i]);
  return [...keys];
}

/** Whether every one of `keys` is selected (and there is one). */
export function nuiGridAllSelected(
  selected: ReadonlySet<unknown>,
  keys: readonly unknown[],
): boolean {
  return keys.length > 0 && keys.every((key) => selected.has(key));
}

/** The selection with all of `keys` selected, or, when they all are, none of them. */
export function nuiGridAllToggled(
  selected: readonly unknown[],
  keys: readonly unknown[],
  all: boolean,
): unknown[] {
  const inView = new Set(keys);
  const rest = selected.filter((key) => !inView.has(key));
  return all ? rest : [...rest, ...keys];
}

// Column state ----------------------------------------------------------------

/** The column state with one change made to a copy of it. */
function changed(
  state: readonly NuiGridColumnState[],
  change: (state: NuiGridColumnState[]) => void,
): NuiGridColumnState[] {
  const next = state.map((entry) => ({ ...entry }));
  change(next);
  return next;
}

/** A width kept within a column's bounds. */
export function nuiGridWidth<T>(column: NuiGridColumn<T>, width: number): number {
  return Math.round(
    Math.min(column.maxWidth ?? Infinity, Math.max(column.minWidth ?? MIN_WIDTH, width)),
  );
}

/** The column state with a column resized. */
export function nuiGridResized<T>(
  state: readonly NuiGridColumnState[],
  column: NuiGridColumn<T>,
  width: number,
): NuiGridColumnState[] {
  const bounded = nuiGridWidth(column, width);
  return changed(state, (next) => {
    const entry = next.find((e) => e.id === column.id);
    if (entry) entry.width = bounded;
  });
}

/** The column state with a column pinned to an edge, or to none. */
export function nuiGridPinned(
  state: readonly NuiGridColumnState[],
  id: string,
  pinned: 'start' | 'end' | null,
): NuiGridColumnState[] {
  return changed(state, (next) => {
    const entry = next.find((e) => e.id === id);
    if (entry) entry.pinned = pinned;
  });
}

/**
 * The column state with a column hidden or shown, or null when it can't be: it
 * isn't hideable, or it's the last one visible.
 */
export function nuiGridHidden<T>(
  state: readonly NuiGridColumnState[],
  column: NuiGridColumn<T> | undefined,
  hidden: boolean,
  visible: number,
): NuiGridColumnState[] | null {
  if (!column || (hidden && column.hideable === false)) return null;
  // The last visible column stays.
  if (hidden && visible <= 1) return null;
  return changed(state, (next) => {
    const entry = next.find((e) => e.id === column.id);
    if (entry) entry.hidden = hidden;
  });
}

/** The column one place back (-1) or forward (1) among a column's pinned group, if it can swap. */
export function nuiGridNeighbour<T>(
  layout: readonly NuiGridLayoutColumn<T>[],
  id: string,
  delta: -1 | 1,
): string | null {
  const index = layout.findIndex((c) => c.id === id);
  const other = layout[index + delta];
  if (index < 0 || !other || other.pinned !== layout[index].pinned) return null;
  if (layout[index].column.reorderable === false || other.column.reorderable === false) {
    return null;
  }
  return other.id;
}

/**
 * The column state with a column put before or after another one of the same
 * pinned group, or null when it can't move there.
 */
export function nuiGridMoved<T>(
  state: readonly NuiGridColumnState[],
  layout: readonly NuiGridLayoutColumn<T>[],
  id: string,
  target: string,
  side: 'before' | 'after',
): NuiGridColumnState[] | null {
  const from = layout.find((c) => c.id === id);
  const to = layout.find((c) => c.id === target);
  if (!from || !to || id === target || from.pinned !== to.pinned) return null;
  if (from.column.reorderable === false || to.column.reorderable === false) return null;
  return changed(state, (next) => {
    const entry = next.splice(
      next.findIndex((e) => e.id === id),
      1,
    )[0];
    const index = next.findIndex((e) => e.id === target);
    next.splice(side === 'before' ? index : index + 1, 0, entry);
  });
}

// Editing --------------------------------------------------------------------

/** Whether a cell can be edited: the column says so, and there's a way to set it. */
export function nuiGridEditable<T>(column: NuiGridColumn<T>, row: T): boolean {
  const editable = typeof column.editable === 'function' ? column.editable(row) : !!column.editable;
  return editable && (!!column.set || typeof column.value !== 'function');
}

/** A row with a cell's new value: through the column's `set`, or a copy with the value under its key. */
export function nuiGridSetValue<T>(row: T, column: NuiGridColumn<T>, value: unknown): T {
  const key = typeof column.value === 'string' ? column.value : column.id;
  return column.set
    ? column.set(row, value)
    : ({ ...(row as object), [key as string]: value } as T);
}

/** Whether an edit leaves a cell as it was: the same value, the same moment, or empty both times. */
export function nuiGridSameValue(previous: unknown, value: unknown): boolean {
  return (
    previous === value ||
    (previous instanceof Date && value instanceof Date && previous.getTime() === value.getTime()) ||
    (nuiGridEmpty(previous) && nuiGridEmpty(value))
  );
}

const pad = (n: number) => String(n).padStart(2, '0');

/** A cell's value as its editor shows it: an enum's option by its index. */
export function nuiGridEditText<T>(column: NuiGridColumn<T>, row: T, locale: string): string {
  const value = nuiGridValue(column, row);
  switch (column.type ?? 'text') {
    case 'number':
      return typeof value === 'number' && isFinite(value)
        ? new Intl.NumberFormat(locale, {
            useGrouping: false,
            maximumFractionDigits: 20,
          }).format(value)
        : '';
    case 'date': {
      const date = nuiGridDate(value);
      return date ? `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` : '';
    }
    case 'enum':
      return String(column.options?.findIndex((option) => option.value === value) ?? -1);
    default:
      return nuiGridEmpty(value) ? '' : String(value);
  }
}

/**
 * What an editor's text means, in the same shape as the value it replaces: a
 * number read in the locale (or `invalidNumber` as the error), a date that keeps
 * a timestamp a timestamp and a `Date`'s time of day, an enum's option.
 */
export function nuiGridParseEdit<T>(
  column: NuiGridColumn<T>,
  text: string,
  previous: unknown,
  locale: string,
  invalidNumber: string,
): { value: unknown } | { error: string } {
  switch (column.type ?? 'text') {
    case 'number': {
      if (!text.trim()) return { value: null };
      const number = nuiParseNumber(text, locale);
      return number === null ? { error: invalidNumber } : { value: number };
    }
    case 'date': {
      const day = nuiGridDate(text);
      if (!day) return { value: null };
      if (typeof previous === 'number') return { value: day.getTime() };
      if (previous instanceof Date) {
        // Keep the time of day; change the day.
        const date = new Date(previous);
        date.setFullYear(day.getFullYear(), day.getMonth(), day.getDate());
        return { value: date };
      }
      return { value: text };
    }
    case 'enum':
      return { value: column.options?.[Number(text)]?.value ?? null };
    default:
      return { value: text };
  }
}

// The column panel's filter ------------------------------------------------------

/** Filter operators that take no value. */
export function nuiGridBareOperator(op: NuiGridFilterOp): boolean {
  return op === 'empty' || op === 'notEmpty';
}

/** A filter's values as the panel's fields show them: numbers in the locale, without grouping. */
export function nuiGridFilterDraft(
  filter: NuiGridFilter | null,
  type: NuiGridType,
  locale: string,
): { value: string; to: string } {
  const shown = (value: unknown) =>
    value === undefined || value === null
      ? ''
      : type === 'number'
        ? new Intl.NumberFormat(locale, { useGrouping: false }).format(Number(value))
        : String(value);
  return { value: shown(filter?.value), to: shown(filter?.to) };
}

/** The filter the panel's operator and fields make, or none while they're empty. */
export function nuiGridFilterOf(
  op: NuiGridFilterOp,
  draft: { value: string; to: string },
  type: NuiGridType,
  locale: string,
): NuiGridFilter | null {
  const read = (text: string) =>
    !text.trim()
      ? undefined
      : type === 'number'
        ? (nuiParseNumber(text, locale) ?? undefined)
        : text;
  if (nuiGridBareOperator(op)) return { op };
  if (op === 'between') {
    const [from, until] = [read(draft.value), read(draft.to)];
    return from === undefined && until === undefined ? null : { op, value: from, to: until };
  }
  const parsed = read(draft.value);
  return parsed === undefined ? null : { op, value: parsed };
}

// Navigation -------------------------------------------------------------------

/** Where the active cell can be, for the lines shown and the columns. */
export function nuiGridBounds(
  lines: number,
  footerRows: number,
  header: boolean,
  colCount: number,
): NuiGridBounds {
  const lastRow = lines - 1 + (lines ? footerRows : 0);
  const firstRow = header || lastRow < 0 ? -1 : 0;
  return { firstRow, lastRow, lastCol: colCount - 1 };
}

/** The cell, moved inside the bounds. */
export function nuiGridInside(
  cell: NuiGridCellPosition,
  bounds: NuiGridBounds,
): NuiGridCellPosition {
  return {
    row: Math.max(bounds.firstRow, Math.min(bounds.lastRow, cell.row)),
    col: Math.max(0, Math.min(bounds.lastCol, cell.col)),
  };
}

// Export -----------------------------------------------------------------------

/** Rows of the columns laid out, as CSV: formatted text, or raw values with `formatted: false`. */
export function nuiGridCsv<T>(
  layout: readonly NuiGridLayoutColumn<T>[],
  rows: readonly T[],
  text: (column: NuiGridColumn<T>, row: T) => string,
  options: NuiCsvOptions & { formatted?: boolean } = {},
): string {
  const columns = layout.map((entry) => entry.column);
  const cell = (column: NuiGridColumn<T>, row: T) => {
    if (options.formatted !== false) return text(column, row);
    const value = nuiGridValue(column, row);
    const date = value instanceof Date ? value.toISOString() : null;
    return date ?? (nuiGridEmpty(value) ? '' : String(value));
  };
  return nuiCsv(
    columns.map((column) => column.header),
    rows.map((row) => columns.map((column) => cell(column, row))),
    options,
    columns.map((column) => (column.type ?? 'text') === 'text' || column.type === 'enum'),
  );
}

/**
 * Rows of the columns laid out, as a spreadsheet describes them: typed cells
 * (numbers, dates, booleans; text as the column shows it), the columns' number
 * formats, and widths in characters. `nuiXlsx()` writes it.
 */
export function nuiGridSheet<T>(
  layout: readonly NuiGridLayoutColumn<T>[],
  rows: readonly T[],
  text: (column: NuiGridColumn<T>, row: T) => string,
  name: string,
): NuiXlsxSheet {
  const cell = (column: NuiGridColumn<T>, row: T): unknown => {
    const value = nuiGridValue(column, row);
    switch (column.type ?? 'text') {
      case 'number':
        return typeof value === 'number' ? value : null;
      case 'date':
        return nuiGridDate(value);
      case 'boolean':
        return nuiGridEmpty(value) ? null : !!value;
      default:
        return text(column, row);
    }
  };
  const format = (column: NuiGridColumn<T>): string | undefined => {
    const options =
      typeof column.format === 'object' ? (column.format as Intl.NumberFormatOptions) : null;
    if (column.type === 'date') return 'yyyy-mm-dd';
    if (column.type !== 'number') return undefined;
    if (options?.style === 'percent') return '0%';
    const digits = options?.maximumFractionDigits ?? options?.minimumFractionDigits;
    return digits ? `#,##0.${'0'.repeat(digits)}` : '#,##0.##';
  };
  return {
    name,
    columns: layout.map((column) => ({
      header: column.column.header,
      width: Math.max(8, Math.round(column.width / 7)),
      format: format(column.column),
    })),
    rows: rows.map((row) => layout.map((column) => cell(column.column, row))),
  };
}

/** A value as a group's key: dates by their time, empty ones as one. */
function valueKey(value: unknown): string {
  if (nuiGridEmpty(value)) return '\u0000';
  if (value instanceof Date) return value.toISOString();
  return typeof value === 'object' ? JSON.stringify(value) : String(value);
}
