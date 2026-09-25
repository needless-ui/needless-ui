import type { NuiOption } from '@needless-ui/angular/select';

/** What a column holds. It picks the alignment, the sort, the filter and the editor. */
export type NuiGridType = 'text' | 'number' | 'date' | 'boolean' | 'enum';

/**
 * One column. Only `id` and `header` are required. `V` defaults to `any` on purpose:
 * a list of columns holds values of every type, and each column's callbacks still
 * take the type you give them.
 */
export interface NuiGridColumn<T = any, V = any> {
  /** Unique; the key in the sort, filters and column state. */
  id: string;
  header: string;
  /** A key of the row, or a function of it. Defaults to `row[id]`. */
  value?: keyof T | ((row: T) => V);
  /** Defaults to `text`. */
  type?: NuiGridType;
  /** `Intl` options for numbers and dates, or a function that makes the text. */
  format?: Intl.NumberFormatOptions | Intl.DateTimeFormatOptions | ((value: V, row: T) => string);
  /** The choices of an `enum` column: their labels, the filter and the editor. */
  options?: readonly NuiOption<V>[];
  /** In pixels. */
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  /** Shares the room left over with the other `flex` columns, in proportion. */
  flex?: number;
  /** Defaults by type: numbers and dates at the end, booleans centered. */
  align?: 'start' | 'center' | 'end';
  pinned?: 'start' | 'end';
  hidden?: boolean;
  sortable?: boolean;
  filterable?: boolean;
  resizable?: boolean;
  reorderable?: boolean;
  hideable?: boolean;
  /** A custom sort, for the values of two rows. */
  compare?: (a: V, b: V) => number;
  editable?: boolean | ((row: T) => boolean);
  /** A message when an edited value isn't valid; nothing when it is. */
  validate?: (value: V, row: T) => string | null | undefined;
  /** Makes the edited row. Defaults to a copy with the new value under `value`'s key (or `id`). */
  set?: (row: T, value: V) => T;
}

export type NuiGridSortDirection = 'asc' | 'desc';

/** One column of the sort. The first in the list sorts first. */
export interface NuiGridSort {
  column: string;
  direction: NuiGridSortDirection;
}

export type NuiGridFilterOp =
  | 'contains'
  | 'notContains'
  | 'equals'
  | 'startsWith'
  | 'endsWith'
  | 'eq'
  | 'ne'
  | 'lt'
  | 'lte'
  | 'gt'
  | 'gte'
  | 'between'
  | 'in'
  | 'is'
  | 'empty'
  | 'notEmpty';

/**
 * A column's filter. Text: `contains`, `notContains`, `equals`, `startsWith`,
 * `endsWith`. Numbers and dates: `eq`, `ne`, `lt`, `lte`, `gt`, `gte`, and
 * `between` (with `to`). Booleans: `is`. Enums: `in` (an array). Any type:
 * `empty` and `notEmpty`.
 */
export interface NuiGridFilter {
  op: NuiGridFilterOp;
  value?: unknown;
  /** The upper end of `between`. */
  to?: unknown;
}

/** One column's state, in display order: what the user changed, to save and restore. */
export interface NuiGridColumnState {
  id: string;
  width?: number;
  hidden?: boolean;
  pinned?: 'start' | 'end' | null;
}

/** Everything a server needs to fetch a page. */
export interface NuiGridQuery {
  sort: readonly NuiGridSort[];
  filters: Readonly<Record<string, NuiGridFilter>>;
  search: string;
  page: number;
  pageSize: number;
}

/** A committed edit. `rows` already holds `row`. */
export interface NuiGridEdit<T> {
  row: T;
  previous: T;
  column: string;
  value: unknown;
}

/** Every text the grid shows or announces. */
export interface NuiGridLabels {
  selectAll: string;
  selectRow: string;
  showDetail: string;
  columnOptions: (header: string) => string;
  sort: string;
  ascending: string;
  descending: string;
  sortedAscending: (header: string) => string;
  sortedDescending: (header: string) => string;
  sortCleared: string;
  filter: string;
  clearFilter: string;
  value: string;
  to: string;
  operators: Record<NuiGridFilterOp, string>;
  pin: string;
  pinStart: string;
  pinEnd: string;
  unpin: string;
  moveBack: string;
  moveForward: string;
  fit: string;
  hide: string;
  columns: string;
  yes: string;
  no: string;
  invalidNumber: string;
  empty: string;
  noMatches: string;
  clearFilters: string;
  loading: string;
  rows: (count: number) => string;
  rowsPerPage: string;
  range: (from: number, to: number, total: number) => string;
  firstPage: string;
  previousPage: string;
  nextPage: string;
  lastPage: string;
  pager: string;
}

export const NUI_GRID_LABELS: NuiGridLabels = {
  selectAll: 'Select all rows',
  selectRow: 'Select row',
  showDetail: 'Show details',
  columnOptions: (header) => `${header} column options`,
  sort: 'Sort',
  ascending: 'Ascending',
  descending: 'Descending',
  sortedAscending: (header) => `Sorted by ${header}, ascending`,
  sortedDescending: (header) => `Sorted by ${header}, descending`,
  sortCleared: 'Sort cleared',
  filter: 'Filter',
  clearFilter: 'Clear filter',
  value: 'Value',
  to: 'To',
  operators: {
    contains: 'Contains',
    notContains: 'Doesn’t contain',
    equals: 'Is',
    startsWith: 'Starts with',
    endsWith: 'Ends with',
    eq: '=',
    ne: '≠',
    lt: '<',
    lte: '≤',
    gt: '>',
    gte: '≥',
    between: 'Between',
    in: 'Is any of',
    is: 'Is',
    empty: 'Is empty',
    notEmpty: 'Isn’t empty',
  },
  pin: 'Pin',
  pinStart: 'Start',
  pinEnd: 'End',
  unpin: 'None',
  moveBack: 'Move back',
  moveForward: 'Move forward',
  fit: 'Fit to content',
  hide: 'Hide column',
  columns: 'Columns',
  yes: 'Yes',
  no: 'No',
  invalidNumber: 'Enter a number',
  empty: 'No rows',
  noMatches: 'No rows match',
  clearFilters: 'Clear filters',
  loading: 'Loading…',
  rows: (count) => `${count.toLocaleString('en')} ${count === 1 ? 'row' : 'rows'}`,
  rowsPerPage: 'Rows per page',
  range: (from, to, total) =>
    `${from.toLocaleString('en')}–${to.toLocaleString('en')} of ${total.toLocaleString('en')}`,
  firstPage: 'First page',
  previousPage: 'Previous page',
  nextPage: 'Next page',
  lastPage: 'Last page',
  pager: 'Pages',
};
