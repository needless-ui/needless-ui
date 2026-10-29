import { computed, linkedSignal, type Signal, signal, type WritableSignal } from '@angular/core';
import {
  nuiGridAggregate,
  nuiGridAllSelected,
  nuiGridAllToggled,
  nuiGridBounds,
  nuiGridCollapsed,
  nuiGridColumnsById,
  nuiGridColumnStates,
  nuiGridComparators,
  nuiGridCsv,
  nuiGridDisplay,
  nuiGridEditable,
  nuiGridFiltered,
  nuiGridFiltersWith,
  nuiGridForest,
  nuiGridFormatters,
  nuiGridGroupKeys,
  nuiGridGrouping,
  nuiGridGroupToggled,
  nuiGridHaystack,
  nuiGridHidden,
  nuiGridInside,
  nuiGridLayout,
  type NuiGridLayoutColumn,
  nuiGridMoved,
  nuiGridNarrowing,
  nuiGridNeighbour,
  nuiGridNextDirection,
  nuiGridOpened,
  nuiGridPage,
  nuiGridPages,
  nuiGridParentKeys,
  nuiGridPasses,
  nuiGridPinned,
  nuiGridRange,
  nuiGridResized,
  nuiGridRowId,
  nuiGridSameColumns,
  nuiGridSearchable,
  nuiGridSelectionOf,
  nuiGridSetValue,
  nuiGridSortKeys,
  nuiGridSorted,
  nuiGridSortRows,
  nuiGridText,
  nuiGridToggled,
  nuiGridValue,
} from '@needless-ui/core/grid';
import type { NuiCsvOptions } from './format';
import type {
  NuiGridColumn,
  NuiGridColumnState,
  NuiGridFilter,
  NuiGridItem,
  NuiGridQuery,
  NuiGridSort,
} from './types';

/** A column as laid out: it lives in @needless-ui/core, exported here as before. */
export type { NuiGridLayoutColumn };

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
  /** Columns to group rows by, outermost first. */
  groupBy?: WritableSignal<readonly string[]>;
  /** Keys of the groups closed; groups start open. */
  collapsed?: WritableSignal<readonly string[]>;
  /** Keys of the rows with children that are open; they start closed. */
  expanded?: WritableSignal<readonly unknown[]>;
  /** Keys of the rows whose details are open. */
  details?: WritableSignal<readonly unknown[]>;
  /** A row's children, for tree data. */
  children?: Signal<((row: T) => readonly T[] | null | undefined) | null>;
  /** Rows have details to open. */
  hasDetails?: Signal<boolean>;
  /** Rows drawn after the data that the keyboard reaches too, such as totals. */
  footerRows?: Signal<number>;
  /** The header row is drawn, so the keyboard reaches it. Cards have none. */
  header?: Signal<boolean>;
}

/**
 * The model behind the data grid. It filters, sorts and pages the rows, keeps the
 * selection by key and the columns' order, widths, pinning and visibility, and
 * tracks the active cell. It has no DOM. The work is done by the pure functions
 * of @needless-ui/core, which the React grid shares; this keeps the state in
 * signals and each result in a `computed()`.
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
  readonly groupBy: WritableSignal<readonly string[]>;
  readonly collapsed: WritableSignal<readonly string[]>;
  readonly expanded: WritableSignal<readonly unknown[]>;
  readonly details: WritableSignal<readonly unknown[]>;
  readonly children: Signal<((row: T) => readonly T[] | null | undefined) | null>;
  readonly hasDetails: Signal<boolean>;
  readonly footerRows: Signal<number>;
  readonly header: Signal<boolean>;
  /** Width of the scroll container, which `flex` columns share. */
  readonly containerWidth = signal(0);
  /** Where the active cell can be: rows from the header (-1) or the first row, to the footer. */
  private readonly bounds = computed(() =>
    nuiGridBounds(this.shown().length, this.footerRows(), this.header(), this.colCount()),
  );
  /**
   * The active cell. Row -1 is the header; columns count the leading ones. It stays
   * inside the grid when rows or columns go, or the header row does.
   */
  readonly active = linkedSignal<
    { firstRow: number; lastRow: number; lastCol: number },
    { row: number; col: number }
  >({
    source: this.bounds,
    computation: (bounds, previous) =>
      nuiGridInside(previous?.value ?? { row: -1, col: 0 }, bounds),
  });

  constructor(from: NuiGridSources<T>) {
    this.rows = from.rows;
    this.columns = from.columns;
    this.rowId = from.rowId ?? signal(nuiGridRowId);
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
    this.groupBy = from.groupBy ?? signal([]);
    this.collapsed = from.collapsed ?? signal([]);
    this.expanded = from.expanded ?? signal([]);
    this.details = from.details ?? signal([]);
    this.children = from.children ?? signal(null);
    this.hasDetails = from.hasDetails ?? signal(false);
    this.footerRows = from.footerRows ?? signal(0);
    this.header = from.header ?? signal(true);
  }

  // Columns ------------------------------------------------------------------

  readonly byId = computed(() => nuiGridColumnsById(this.columns()));

  /** Every column's state, in display order: what's saved, then the rest as defined. */
  readonly state = computed<NuiGridColumnState[]>(() =>
    nuiGridColumnStates(this.columns(), this.columnState(), this.byId()),
  );

  readonly layout = computed<NuiGridLayoutColumn<T>[]>(() =>
    nuiGridLayout({
      byId: this.byId(),
      state: this.state(),
      sort: this.sort(),
      filters: this.filters(),
      containerWidth: this.containerWidth(),
      leading: this.leading(),
    }),
  );

  /** The table's width: the leading columns and every visible column. */
  readonly width = computed(() =>
    this.layout().reduce((sum, column) => sum + column.width, this.leading()),
  );

  /** Columns in the tab and arrow order: leading ones, then data columns. */
  readonly colCount = computed(() => this.leadingCount() + this.layout().length);

  // Values ---------------------------------------------------------------------

  private readonly formatters = computed(() =>
    nuiGridFormatters(this.columns(), this.locale(), this.words()),
  );

  private readonly comparators = computed(() => nuiGridComparators(this.columns(), this.locale()));

  value(column: NuiGridColumn<T>, row: T): unknown {
    return nuiGridValue(column, row);
  }

  /** A cell as text: formatted for the locale. */
  text(column: NuiGridColumn<T>, row: T): string {
    return nuiGridText(this.formatters(), column, row);
  }

  key(row: T): unknown {
    return this.rowId()(row);
  }

  // Rows -----------------------------------------------------------------------

  /** The columns search looks in: visible and filterable. Unchanged by resizing. */
  private readonly searchable = computed(() => nuiGridSearchable(this.state(), this.byId()), {
    equal: nuiGridSameColumns,
  });

  /** Each row's searchable text, built on the first search and kept until the data changes. */
  private readonly haystacks = computed(() => {
    const columns = this.searchable();
    const text = (column: NuiGridColumn<T>, row: T) => this.text(column, row);
    return this.rows().map((row) => nuiGridHaystack(columns, row, text));
  });

  /** The search words and active filters, or null when nothing narrows the rows. */
  private readonly narrowing = computed(() =>
    nuiGridNarrowing(this.search(), this.filters(), this.byId()),
  );

  /** Whether a row passes the search and the filters; `haystack` is its searchable text, if known. */
  private passes(row: T, haystack?: string): boolean {
    return nuiGridPasses(
      row,
      this.narrowing(),
      {
        searchable: this.searchable(),
        byId: this.byId(),
        text: (column, cell) => this.text(column, cell),
      },
      haystack,
    );
  }

  /** The rows that pass the search and the filters (in tree data, the top-level ones). */
  readonly filtered = computed<readonly T[]>(() =>
    nuiGridFiltered(this.rows(), {
      server: this.mode() === 'server',
      forest: this.forest(),
      narrowing: this.narrowing(),
      haystacks: () => this.haystacks(),
      passes: (row, haystack) => this.passes(row, haystack),
    }),
  );

  /**
   * Tree data, filtered: a row stays when it passes, or when a row under it does.
   * Its children are the ones that stay.
   */
  private readonly forest = computed(() => {
    const children = this.children();
    if (!children || this.mode() === 'server') return null;
    return nuiGridForest(this.rows(), children, !!this.narrowing(), (row) => this.passes(row));
  });

  /** The sort's columns, ready to compare with. */
  private readonly sortKeys = computed(() =>
    nuiGridSortKeys(this.sort(), this.byId(), this.comparators()),
  );

  /** Filtered rows in sort order. Sorting is stable, and empty values go last. */
  readonly sorted = computed<readonly T[]>(() => this.sortRows(this.filtered()));

  /** Rows in sort order: the data, or the children of a row in tree data. */
  private sortRows(rows: readonly T[]): readonly T[] {
    return this.mode() === 'server' ? rows : nuiGridSortRows(rows, this.sortKeys());
  }

  // Groups, trees and details ----------------------------------------------------

  /** The columns rows are grouped by, that exist; none in tree data or server mode. */
  readonly grouping = computed(() =>
    nuiGridGrouping(this.groupBy(), this.byId(), {
      tree: !!this.children(),
      server: this.mode() === 'server',
    }),
  );

  /** Rows nest: grouped, or tree data. The table is a treegrid then. */
  readonly nested = computed(() => this.grouping().length > 0 || !!this.children());

  private readonly collapsedKeys = computed(() => new Set(this.collapsed()));
  private readonly expandedKeys = computed(() => new Set(this.expanded()));
  private readonly detailKeys = computed(() => new Set(this.details()));

  /** Every line to draw, before paging: groups, rows and details, in order. */
  readonly display = computed<readonly NuiGridItem<T>[]>(() =>
    nuiGridDisplay({
      sorted: this.sorted(),
      grouping: this.grouping(),
      byId: this.byId(),
      comparators: this.comparators(),
      sort: this.sort(),
      collapsed: this.collapsedKeys(),
      expanded: this.expandedKeys(),
      details: this.hasDetails() ? this.detailKeys() : null,
      children: this.children(),
      forest: this.forest(),
      key: (row) => this.key(row),
      sortRows: (rows) => this.sortRows(rows),
    }),
  );

  /** Opens or closes a group, a row's children or a row's details. */
  toggleItem(item: NuiGridItem<T>, open?: boolean): void {
    if (item.kind === 'group') {
      const now = open ?? !item.expanded;
      this.collapsed.update((keys) => nuiGridCollapsed(keys, item.key, now));
    } else if (item.kind === 'row' && item.expandable) {
      const now = open ?? !item.expanded;
      this.expanded.update((keys) => nuiGridOpened(keys, item.key, now));
    }
  }

  /** Opens or closes a row's details. */
  toggleDetails(row: T, open?: boolean): void {
    const key = this.key(row);
    const now = open ?? !this.detailKeys().has(key);
    this.details.update((keys) => nuiGridOpened(keys, key, now));
  }

  detailsOpen(row: T): boolean {
    return this.detailKeys().has(this.key(row));
  }

  /** Opens every group and every row with children, or closes them all. */
  expandAll(open = true): void {
    if (this.grouping().length) {
      this.collapsed.set(open ? [] : nuiGridGroupKeys(this.sorted(), this.grouping(), this.byId()));
      return;
    }
    const children = this.children();
    if (!children) return;
    this.expanded.set(open ? nuiGridParentKeys(this.rows(), children, (row) => this.key(row)) : []);
  }

  /** A column's aggregate over rows, as the column shows it; empty when it has none. */
  aggregate(column: NuiGridColumn<T>, rows: readonly T[]): string {
    return nuiGridAggregate(column, rows, {
      locale: this.locale(),
      comparators: this.comparators(),
      formatters: this.formatters(),
    });
  }

  /** Every aggregate over every row that passes the filters: the totals row. */
  readonly totals = computed(() => {
    const rows = this.sorted();
    return new Map(this.layout().map((column) => [column.id, this.aggregate(column.column, rows)]));
  });

  /** Whether any visible column sums up rows. */
  readonly aggregated = computed(() => this.layout().some((column) => !!column.column.aggregate));

  /** How many lines there are in all (rows, groups, details): filtered here, or as the server says. */
  readonly total = computed(() =>
    this.mode() === 'server' ? (this.totalRows() ?? this.rows().length) : this.display().length,
  );

  readonly paged = computed(() => this.pageSize() > 0);
  private readonly pages = computed(() => nuiGridPages(this.total(), this.pageSize(), this.page()));
  readonly pageCount = computed(() => this.pages().pageCount);
  /** The page shown: the model's, kept inside the pages there are. */
  readonly currentPage = computed(() => this.pages().currentPage);

  /** The lines to draw: one page, or all of them. */
  readonly shown = computed<readonly NuiGridItem<T>[]>(() =>
    nuiGridPage(this.display(), {
      server: this.mode() === 'server',
      pageSize: this.pageSize(),
      currentPage: this.currentPage(),
    }),
  );

  /** The rows drawn, without groups or details. */
  readonly view = computed<readonly T[]>(() =>
    this.shown().flatMap((item) => (item.kind === 'row' ? [item.row] : [])),
  );

  /** The index of the first row shown among all of them, for `aria-rowindex`. */
  readonly firstIndex = computed(() => this.pages().firstIndex);

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
    this.setSort(id, nuiGridNextDirection(this.sort(), id), add);
  }

  /**
   * Sorts by a column (or stops, with `null`). With `add` the column joins the
   * sort or changes its place in it; without, it replaces the whole sort.
   */
  setSort(id: string, direction: 'asc' | 'desc' | null, add = false): void {
    this.sort.set(nuiGridSorted(this.sort(), id, direction, add));
    this.page.set(0);
  }

  setFilter(id: string, filter: NuiGridFilter | null): void {
    this.filters.set(nuiGridFiltersWith(this.filters(), id, filter));
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
    this.selected.set(nuiGridToggled(this.selected(), key, mode, selected)!);
  }

  /** Selects every row of a group, or clears them. */
  toggleGroupRows(rows: readonly T[], selected?: boolean): void {
    if (this.selection() !== 'multiple') return;
    const keys = rows.map((row) => this.key(row));
    const now = selected ?? !keys.every((key) => this.selectedKeys().has(key));
    this.selected.set(nuiGridGroupToggled(this.selected(), keys, now));
  }

  /** Whether all of a group's rows are selected, some, or none. */
  groupSelection(rows: readonly T[]): 'all' | 'some' | 'none' {
    return nuiGridSelectionOf(
      this.selectedKeys(),
      rows.map((row) => this.key(row)),
    );
  }

  /** Selects the rows from the last one toggled to this one, as they're shown. */
  selectRange(row: T): void {
    if (this.selection() !== 'multiple') return this.toggle(row, true);
    const keys = nuiGridRange(
      this.selected(),
      this.view().map((r) => this.key(r)),
      this.anchor,
      this.key(row),
    );
    if (!keys) return this.toggle(row, true);
    this.selected.set(keys);
  }

  /**
   * The keys that select all acts on: every row that passes the filters (every page),
   * or in server mode the rows shown.
   */
  readonly selectableKeys = computed(() =>
    (this.mode() === 'server' ? this.rows() : this.sorted()).map((row) => this.key(row)),
  );

  readonly allSelected = computed(() =>
    nuiGridAllSelected(this.selectedKeys(), this.selectableKeys()),
  );

  readonly someSelected = computed(() => {
    const selected = this.selectedKeys();
    return !this.allSelected() && this.selectableKeys().some((key) => selected.has(key));
  });

  toggleAll(): void {
    if (this.selection() !== 'multiple') return;
    this.selected.set(
      nuiGridAllToggled(this.selected(), this.selectableKeys(), this.allSelected()),
    );
  }

  // Column state ----------------------------------------------------------------

  resize(id: string, width: number): void {
    const column = this.byId().get(id);
    if (!column) return;
    this.columnState.set(nuiGridResized(this.state(), column, width));
  }

  /** The width a column has now. */
  widthOf(id: string): number {
    return this.layout().find((column) => column.id === id)?.width ?? 0;
  }

  pin(id: string, pinned: 'start' | 'end' | null): void {
    this.columnState.set(nuiGridPinned(this.state(), id, pinned));
  }

  hide(id: string, hidden = true): void {
    const state = nuiGridHidden(this.state(), this.byId().get(id), hidden, this.layout().length);
    if (state) this.columnState.set(state);
  }

  /** Whether a column can move one place back (-1) or forward (1) among its pinned group. */
  canMove(id: string, delta: -1 | 1): boolean {
    return nuiGridNeighbour(this.layout(), id, delta) !== null;
  }

  /** Moves a column one place back (-1) or forward (1), among its pinned group. */
  move(id: string, delta: -1 | 1): void {
    const other = nuiGridNeighbour(this.layout(), id, delta);
    if (other) this.moveTo(id, other, delta < 0 ? 'before' : 'after');
  }

  /** Puts a column before or after another one of the same pinned group. */
  moveTo(id: string, target: string, side: 'before' | 'after'): void {
    const state = nuiGridMoved(this.state(), this.layout(), id, target, side);
    if (state) this.columnState.set(state);
  }

  // Editing --------------------------------------------------------------------

  /** Whether a cell can be edited: the column says so, and there's a way to set it. */
  editable(column: NuiGridColumn<T>, row: T): boolean {
    return nuiGridEditable(column, row);
  }

  /** Replaces a row with its edited copy in `rows`, and returns both. */
  commit(row: T, column: NuiGridColumn<T>, value: unknown): { row: T; previous: T } {
    const next = nuiGridSetValue(row, column, value);
    this.rows.update((rows) => rows.map((r) => (r === row ? next : r)));
    return { row: next, previous: row };
  }

  // Navigation -------------------------------------------------------------------

  /** Moves the active cell, staying inside the grid. */
  moveActive(rows: number, cols: number): void {
    const { row, col } = this.active();
    this.setActive(row + rows, col + cols);
  }

  /** Moves the active cell, kept inside the grid: in the rows when the header isn't drawn. */
  setActive(row: number, col: number): void {
    this.active.set(nuiGridInside({ row, col }, this.bounds()));
  }

  // Export -----------------------------------------------------------------------

  /** The filtered, sorted rows (every page) of the visible columns, as CSV. */
  csv(options: NuiCsvOptions & { formatted?: boolean } = {}): string {
    const rows = this.mode() === 'server' ? this.rows() : this.sorted();
    return nuiGridCsv(this.layout(), rows, (column, row) => this.text(column, row), options);
  }
}
