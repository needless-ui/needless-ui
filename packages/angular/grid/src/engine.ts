import { computed, type Signal, signal, type WritableSignal } from '@angular/core';
import {
  nuiCsv,
  type NuiCsvOptions,
  nuiGridComparator,
  nuiGridEmpty,
  nuiGridFilterActive,
  nuiGridFormatter,
  nuiGridMatches,
  nuiGridNormalize,
  nuiGridValue,
} from './format';
import type {
  NuiGridColumn,
  NuiGridColumnState,
  NuiGridFilter,
  NuiGridQuery,
  NuiGridSort,
  NuiGridType,
} from './types';

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

/** Where the grid gets its data and state: signals, usually a component's inputs and models. */
export interface NuiGridSources<T> {
  rows: WritableSignal<readonly T[]>;
  columns: Signal<readonly NuiGridColumn<T>[]>;
  rowId?: Signal<(row: T) => unknown>;
  sort?: WritableSignal<readonly NuiGridSort[]>;
  filters?: WritableSignal<Readonly<Record<string, NuiGridFilter>>>;
  search?: WritableSignal<string>;
  page?: WritableSignal<number>;
  pageSize?: Signal<number>;
  columnState?: WritableSignal<readonly NuiGridColumnState[]>;
  selected?: WritableSignal<readonly unknown[]>;
  selection?: Signal<'none' | 'single' | 'multiple'>;
  mode?: Signal<'client' | 'server'>;
  total?: Signal<number | null | undefined>;
  locale?: Signal<string>;
  words?: Signal<{ yes: string; no: string }>;
  /** Width of the columns before the data (checkboxes), which are always pinned. */
  leading?: Signal<number>;
  /** How many of those columns there are. */
  leadingCount?: Signal<number>;
}

const defaultId = (row: unknown) => (row as { id?: unknown } | null)?.id ?? row;

/**
 * The model behind the data grid. It filters, sorts and pages the rows, keeps the
 * selection by key and the columns' order, widths, pinning and visibility, and
 * tracks the active cell. It has no DOM.
 */
export class NuiGridEngine<T> {
  readonly rows: WritableSignal<readonly T[]>;
  readonly columns: Signal<readonly NuiGridColumn<T>[]>;
  readonly rowId: Signal<(row: T) => unknown>;
  readonly sort: WritableSignal<readonly NuiGridSort[]>;
  readonly filters: WritableSignal<Readonly<Record<string, NuiGridFilter>>>;
  readonly search: WritableSignal<string>;
  readonly page: WritableSignal<number>;
  readonly pageSize: Signal<number>;
  readonly columnState: WritableSignal<readonly NuiGridColumnState[]>;
  readonly selected: WritableSignal<readonly unknown[]>;
  readonly selection: Signal<'none' | 'single' | 'multiple'>;
  readonly mode: Signal<'client' | 'server'>;
  readonly totalRows: Signal<number | null | undefined>;
  readonly locale: Signal<string>;
  readonly words: Signal<{ yes: string; no: string }>;

  readonly leading: Signal<number>;
  readonly leadingCount: Signal<number>;
  /** Width of the scroll container, which `flex` columns share. */
  readonly containerWidth = signal(0);
  /** The active cell. Row -1 is the header; columns count the leading ones. */
  readonly active = signal({ row: -1, col: 0 });

  constructor(from: NuiGridSources<T>) {
    this.rows = from.rows;
    this.columns = from.columns;
    this.rowId = from.rowId ?? signal(defaultId);
    this.sort = from.sort ?? signal([]);
    this.filters = from.filters ?? signal({});
    this.search = from.search ?? signal('');
    this.page = from.page ?? signal(0);
    this.pageSize = from.pageSize ?? signal(0);
    this.columnState = from.columnState ?? signal([]);
    this.selected = from.selected ?? signal([]);
    this.selection = from.selection ?? signal('none');
    this.mode = from.mode ?? signal('client');
    this.totalRows = from.total ?? signal(null);
    this.locale = from.locale ?? signal('en');
    this.words = from.words ?? signal({ yes: 'Yes', no: 'No' });
    this.leading = from.leading ?? signal(0);
    this.leadingCount = from.leadingCount ?? signal(0);
  }

  // Columns ------------------------------------------------------------------

  readonly byId = computed(() => new Map(this.columns().map((column) => [column.id, column])));

  /** Every column's state, in display order: what's saved, then the rest as defined. */
  readonly state = computed<NuiGridColumnState[]>(() => {
    const byId = this.byId();
    const seen = new Set<string>();
    const state: NuiGridColumnState[] = [];
    const add = (id: string, saved: NuiGridColumnState | null) => {
      const column = byId.get(id);
      if (!column || seen.has(id)) return;
      seen.add(id);
      state.push({
        id,
        width: saved?.width ?? column.width,
        hidden: saved?.hidden ?? column.hidden ?? false,
        pinned: saved && saved.pinned !== undefined ? saved.pinned : (column.pinned ?? null),
      });
    };
    for (const saved of this.columnState()) add(saved.id, saved);
    for (const column of this.columns()) add(column.id, null);
    return state;
  });

  readonly layout = computed<NuiGridLayoutColumn<T>[]>(() => {
    const byId = this.byId();
    const visible = this.state().filter((entry) => !entry.hidden);
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
    const room = this.containerWidth() - this.leading() - fixed;
    const widths = ordered.map((entry, i) => {
      const column = byId.get(entry.id)!;
      const width = flexes[i] && room > 0 ? (room * flexes[i]) / flexTotal : base[i];
      return Math.round(bounds(column, width));
    });

    const sortIndex = new Map(this.sort().map((sort, i) => [sort.column, i]));
    const filters = this.filters();
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
            : { direction: this.sort()[priority].direction, priority: priority + 1 },
        filtered: nuiGridFilterActive(filters[entry.id]),
      };
    });

    // Sticky offsets: start columns count from the leading ones, end columns from the end.
    let start = this.leading();
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
  });

  /** The table's width: the leading columns and every visible column. */
  readonly width = computed(() =>
    this.layout().reduce((sum, column) => sum + column.width, this.leading()),
  );

  /** Columns in the tab and arrow order: leading ones, then data columns. */
  readonly colCount = computed(() => this.leadingCount() + this.layout().length);

  // Values ---------------------------------------------------------------------

  private readonly formatters = computed(() => {
    const locale = this.locale();
    const words = this.words();
    return new Map(
      this.columns().map((column) => [column.id, nuiGridFormatter(column, locale, words)]),
    );
  });

  private readonly comparators = computed(() => {
    const locale = this.locale();
    return new Map(this.columns().map((column) => [column.id, nuiGridComparator(column, locale)]));
  });

  value(column: NuiGridColumn<T>, row: T): unknown {
    return nuiGridValue(column, row);
  }

  /** A cell as text: formatted for the locale. */
  text(column: NuiGridColumn<T>, row: T): string {
    const format = this.formatters().get(column.id);
    const value = nuiGridValue(column, row);
    return format ? format(value, row) : String(value ?? '');
  }

  key(row: T): unknown {
    return this.rowId()(row);
  }

  // Rows -----------------------------------------------------------------------

  /** The columns search looks in: visible and filterable. Unchanged by resizing. */
  private readonly searchable = computed(
    () =>
      this.state()
        .filter((entry) => !entry.hidden)
        .map((entry) => this.byId().get(entry.id)!)
        .filter((column) => column.filterable !== false),
    { equal: (a, b) => a.length === b.length && a.every((column, i) => column === b[i]) },
  );

  /** Each row's searchable text, built on the first search and kept until the data changes. */
  private readonly haystacks = computed(() => {
    const columns = this.searchable();
    return this.rows().map((row) =>
      nuiGridNormalize(columns.map((column) => this.text(column, row)).join('\n')),
    );
  });

  /** The rows that pass the search and the filters. */
  readonly filtered = computed<readonly T[]>(() => {
    const rows = this.rows();
    if (this.mode() === 'server') return rows;
    const words = nuiGridNormalize(this.search()).split(/\s+/).filter(Boolean);
    const filters = Object.entries(this.filters()).filter(
      ([id, filter]) => this.byId().has(id) && nuiGridFilterActive(filter),
    );
    if (!words.length && !filters.length) return rows;
    const haystacks = words.length ? this.haystacks() : null;
    const byId = this.byId();
    return rows.filter((row, i) => {
      if (haystacks && !words.every((word) => haystacks[i].includes(word))) return false;
      return filters.every(([id, filter]) => {
        const column = byId.get(id)!;
        return nuiGridMatches(column, filter, nuiGridValue(column, row), this.text(column, row));
      });
    });
  });

  /** Filtered rows in sort order. Sorting is stable, and empty values go last. */
  readonly sorted = computed<readonly T[]>(() => {
    const rows = this.filtered();
    const byId = this.byId();
    const keys = this.sort()
      .map((sort) => ({
        column: byId.get(sort.column),
        direction: sort.direction === 'desc' ? -1 : 1,
        compare: this.comparators().get(sort.column),
      }))
      .filter((key) => key.column && key.column.sortable !== false && key.compare);
    if (this.mode() === 'server' || !keys.length) return rows;
    const decorated = rows.map((row, index) => ({
      row,
      index,
      values: keys.map((key) => nuiGridValue(key.column!, row)),
    }));
    decorated.sort((a, b) => {
      for (let i = 0; i < keys.length; i++) {
        const [x, y] = [a.values[i], b.values[i]];
        const [emptyX, emptyY] = [nuiGridEmpty(x), nuiGridEmpty(y)];
        if (emptyX || emptyY) {
          if (emptyX && emptyY) continue;
          return emptyX ? 1 : -1;
        }
        const order = keys[i].compare!(x, y) * keys[i].direction;
        if (order) return order;
      }
      return a.index - b.index;
    });
    return decorated.map((item) => item.row);
  });

  /** How many rows there are in all: filtered here, or as the server says. */
  readonly total = computed(() =>
    this.mode() === 'server' ? (this.totalRows() ?? this.rows().length) : this.sorted().length,
  );

  readonly paged = computed(() => this.pageSize() > 0);
  readonly pageCount = computed(() =>
    this.paged() ? Math.max(1, Math.ceil(this.total() / this.pageSize())) : 1,
  );
  /** The page shown: the model's, kept inside the pages there are. */
  readonly currentPage = computed(() => Math.min(Math.max(0, this.page()), this.pageCount() - 1));

  /** The rows to render: one page, or all of them. */
  readonly view = computed<readonly T[]>(() => {
    const rows = this.sorted();
    if (this.mode() === 'server' || !this.paged()) return rows;
    const start = this.currentPage() * this.pageSize();
    return rows.slice(start, start + this.pageSize());
  });

  /** The index of the first row shown among all of them, for `aria-rowindex`. */
  readonly firstIndex = computed(() => (this.paged() ? this.currentPage() * this.pageSize() : 0));

  readonly query = computed<NuiGridQuery>(() => ({
    sort: this.sort(),
    filters: this.filters(),
    search: this.search(),
    page: this.currentPage(),
    pageSize: this.pageSize(),
  }));

  // Sorting and filtering --------------------------------------------------------

  /** Asc, desc, then no sort. With `add`, the column joins the sort instead of replacing it. */
  toggleSort(id: string, add = false): void {
    const column = this.byId().get(id);
    if (!column || column.sortable === false) return;
    const current = this.sort().find((sort) => sort.column === id);
    const next = !current ? 'asc' : current.direction === 'asc' ? 'desc' : null;
    this.setSort(id, next, add);
  }

  /**
   * Sorts by a column (or stops, with `null`). With `add` the column joins the
   * sort or changes its place in it; without, it replaces the whole sort.
   */
  setSort(id: string, direction: 'asc' | 'desc' | null, add = false): void {
    const current = this.sort();
    let next: NuiGridSort[];
    if (!add) next = direction ? [{ column: id, direction }] : [];
    else if (!direction) next = current.filter((sort) => sort.column !== id);
    else if (current.some((sort) => sort.column === id)) {
      next = current.map((sort) => (sort.column === id ? { column: id, direction } : sort));
    } else next = [...current, { column: id, direction }];
    this.sort.set(next);
    this.page.set(0);
  }

  setFilter(id: string, filter: NuiGridFilter | null): void {
    const filters = { ...this.filters() };
    if (filter) filters[id] = filter;
    else delete filters[id];
    this.filters.set(filters);
    this.page.set(0);
  }

  clearFilters(): void {
    this.filters.set({});
    this.search.set('');
    this.page.set(0);
  }

  setSearch(text: string): void {
    this.search.set(text);
    this.page.set(0);
  }

  // Selection ------------------------------------------------------------------

  readonly selectedKeys = computed(() => new Set(this.selected()));

  isSelected(row: T): boolean {
    return this.selectedKeys().has(this.key(row));
  }

  /** The row that Shift+click and Shift+Space select from. */
  private anchor: unknown = null;

  toggle(row: T, selected = !this.isSelected(row)): void {
    const mode = this.selection();
    if (mode === 'none') return;
    const key = this.key(row);
    this.anchor = key;
    if (mode === 'single') {
      this.selected.set(selected ? [key] : []);
      return;
    }
    const keys = this.selected().filter((k) => k !== key);
    this.selected.set(selected ? [...keys, key] : keys);
  }

  /** Selects the rows from the last one toggled to this one, as they're shown. */
  selectRange(row: T): void {
    if (this.selection() !== 'multiple') return this.toggle(row, true);
    const rows = this.view();
    const to = rows.indexOf(row);
    const from = rows.findIndex((r) => this.key(r) === this.anchor);
    if (to < 0 || from < 0) return this.toggle(row, true);
    const [low, high] = from < to ? [from, to] : [to, from];
    const keys = new Set(this.selected());
    for (let i = low; i <= high; i++) keys.add(this.key(rows[i]));
    this.selected.set([...keys]);
  }

  /** Every row that passes the filters (every page); in server mode, the rows shown. */
  private readonly selectable = computed(() =>
    (this.mode() === 'server' ? this.rows() : this.sorted()).map((row) => this.key(row)),
  );

  readonly allSelected = computed(() => {
    const keys = this.selectable();
    const selected = this.selectedKeys();
    return keys.length > 0 && keys.every((key) => selected.has(key));
  });

  readonly someSelected = computed(() => {
    const selected = this.selectedKeys();
    return !this.allSelected() && this.selectable().some((key) => selected.has(key));
  });

  toggleAll(): void {
    if (this.selection() !== 'multiple') return;
    const keys = this.selectable();
    const inView = new Set(keys);
    const rest = this.selected().filter((key) => !inView.has(key));
    this.selected.set(this.allSelected() ? rest : [...rest, ...keys]);
  }

  // Column state ----------------------------------------------------------------

  private writeState(change: (state: NuiGridColumnState[]) => void): void {
    const state = this.state().map((entry) => ({ ...entry }));
    change(state);
    this.columnState.set(state);
  }

  resize(id: string, width: number): void {
    const column = this.byId().get(id);
    if (!column) return;
    const bounded = Math.round(
      Math.min(column.maxWidth ?? Infinity, Math.max(column.minWidth ?? MIN_WIDTH, width)),
    );
    this.writeState((state) => {
      const entry = state.find((e) => e.id === id);
      if (entry) entry.width = bounded;
    });
  }

  /** The width a column has now. */
  widthOf(id: string): number {
    return this.layout().find((column) => column.id === id)?.width ?? 0;
  }

  pin(id: string, pinned: 'start' | 'end' | null): void {
    this.writeState((state) => {
      const entry = state.find((e) => e.id === id);
      if (entry) entry.pinned = pinned;
    });
  }

  hide(id: string, hidden = true): void {
    const column = this.byId().get(id);
    if (!column || (hidden && column.hideable === false)) return;
    // The last visible column stays.
    if (hidden && this.layout().length <= 1) return;
    this.writeState((state) => {
      const entry = state.find((e) => e.id === id);
      if (entry) entry.hidden = hidden;
    });
  }

  /** Whether a column can move one place back (-1) or forward (1) among its pinned group. */
  canMove(id: string, delta: -1 | 1): boolean {
    return this.neighbour(id, delta) !== null;
  }

  /** Moves a column one place back (-1) or forward (1), among its pinned group. */
  move(id: string, delta: -1 | 1): void {
    const other = this.neighbour(id, delta);
    if (other) this.moveTo(id, other, delta < 0 ? 'before' : 'after');
  }

  /** Puts a column before or after another one of the same pinned group. */
  moveTo(id: string, target: string, side: 'before' | 'after'): void {
    const layout = this.layout();
    const from = layout.find((c) => c.id === id);
    const to = layout.find((c) => c.id === target);
    if (!from || !to || id === target || from.pinned !== to.pinned) return;
    if (from.column.reorderable === false || to.column.reorderable === false) return;
    this.writeState((state) => {
      const entry = state.splice(
        state.findIndex((e) => e.id === id),
        1,
      )[0];
      const index = state.findIndex((e) => e.id === target);
      state.splice(side === 'before' ? index : index + 1, 0, entry);
    });
  }

  private neighbour(id: string, delta: -1 | 1): string | null {
    const layout = this.layout();
    const index = layout.findIndex((c) => c.id === id);
    const other = layout[index + delta];
    if (index < 0 || !other || other.pinned !== layout[index].pinned) return null;
    if (layout[index].column.reorderable === false || other.column.reorderable === false) {
      return null;
    }
    return other.id;
  }

  // Editing --------------------------------------------------------------------

  /** Whether a cell can be edited: the column says so, and there's a way to set it. */
  editable(column: NuiGridColumn<T>, row: T): boolean {
    const editable =
      typeof column.editable === 'function' ? column.editable(row) : !!column.editable;
    return editable && (!!column.set || typeof column.value !== 'function');
  }

  /** Replaces a row with its edited copy in `rows`, and returns both. */
  commit(row: T, column: NuiGridColumn<T>, value: unknown): { row: T; previous: T } {
    const key = typeof column.value === 'string' ? column.value : column.id;
    const next = column.set
      ? column.set(row, value)
      : ({ ...(row as object), [key as string]: value } as T);
    this.rows.update((rows) => rows.map((r) => (r === row ? next : r)));
    return { row: next, previous: row };
  }

  // Navigation -------------------------------------------------------------------

  /** Moves the active cell, staying inside the grid. */
  moveActive(rows: number, cols: number): void {
    const { row, col } = this.active();
    this.setActive(row + rows, col + cols);
  }

  setActive(row: number, col: number): void {
    const lastRow = this.view().length - 1;
    const lastCol = this.colCount() - 1;
    this.active.set({
      row: Math.max(-1, Math.min(lastRow, row)),
      col: Math.max(0, Math.min(lastCol, col)),
    });
  }

  // Export -----------------------------------------------------------------------

  /** The filtered, sorted rows (every page) of the visible columns, as CSV. */
  csv(options: NuiCsvOptions & { formatted?: boolean } = {}): string {
    const columns = this.layout().map((layout) => layout.column);
    const cell = (column: NuiGridColumn<T>, row: T) => {
      if (options.formatted !== false) return this.text(column, row);
      const value = nuiGridValue(column, row);
      const date = value instanceof Date ? value.toISOString() : null;
      return date ?? (nuiGridEmpty(value) ? '' : String(value));
    };
    const rows = this.mode() === 'server' ? this.rows() : this.sorted();
    return nuiCsv(
      columns.map((column) => column.header),
      rows.map((row) => columns.map((column) => cell(column, row))),
      options,
      columns.map((column) => (column.type ?? 'text') === 'text' || column.type === 'enum'),
    );
  }
}
