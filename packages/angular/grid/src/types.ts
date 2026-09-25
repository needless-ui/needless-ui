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
  /** What the column shows on group rows and the totals row: a sum, an average… */
  aggregate?: NuiGridAggregate<T, V>;
}

/**
 * How a column sums up rows, on group rows and the totals row: `sum`, `avg`,
 * `min`, `max`, `count` (of values that aren't empty), or a function of the
 * values (empty ones left out) and the rows.
 */
export type NuiGridAggregate<T = any, V = any> =
  'sum' | 'avg' | 'min' | 'max' | 'count' | ((values: readonly V[], rows: readonly T[]) => unknown);

/**
 * A line the grid draws: a row (with its depth, in tree data or under groups), a
 * group of rows, or a row's details.
 */
export type NuiGridItem<T> =
  | {
      kind: 'row';
      key: unknown;
      row: T;
      /** Depth, from 0. */
      level: number;
      expandable: boolean;
      expanded: boolean;
      /** Rows at this depth under the same parent, and this one's place among them, from 1. */
      size: number;
      position: number;
    }
  | {
      kind: 'group';
      key: string;
      level: number;
      /** The column the rows are grouped by, and their value in it. */
      column: string;
      value: unknown;
      /** Every row in the group, nested groups included. */
      rows: readonly T[];
      expanded: boolean;
      size: number;
      position: number;
    }
  | { kind: 'detail'; key: string; row: T; level: number };

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
  /** Selects every row of a group. */
  selectGroup: string;
  showDetail: string;
  /** The toggle of a group or a row with children. */
  expand: string;
  /** A group's row: its column, its value, and how many rows it has. */
  group: (header: string, value: string, count: number) => string;
  /** The totals row's first cell. */
  total: string;
  /** Read before an aggregate's value. */
  aggregates: Record<'sum' | 'avg' | 'min' | 'max' | 'count' | 'custom', string>;
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
  selectGroup: 'Select the rows of this group',
  showDetail: 'Show details',
  expand: 'Expand',
  group: (header, value, count) => `${header}: ${value} (${count.toLocaleString('en')})`,
  total: 'Total',
  aggregates: {
    sum: 'Sum',
    avg: 'Average',
    min: 'Minimum',
    max: 'Maximum',
    count: 'Count',
    custom: 'Summary',
  },
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
