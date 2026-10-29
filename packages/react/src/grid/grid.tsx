'use client';

import { nuiFollow, NuiVirtualizer } from '@needless-ui/core';
import {
  NUI_GRID_LABELS,
  nuiGridAggregate,
  nuiGridAllSelected,
  nuiGridAllToggled,
  nuiGridBounds,
  nuiGridCollapsed,
  type NuiGridColumn as NuiGridColumnBase,
  type NuiGridColumnState,
  nuiGridColumnsById,
  nuiGridColumnStates,
  nuiGridComparators,
  type NuiGridCellPosition,
  nuiGridCsv,
  nuiGridDisplay,
  type NuiGridEdit,
  nuiGridEditable,
  nuiGridEditText,
  type NuiGridFilter,
  nuiGridFilterActive,
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
  type NuiGridItem,
  type NuiGridLabels,
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
  nuiGridParseEdit,
  nuiGridPasses,
  nuiGridPinned,
  type NuiGridQuery,
  nuiGridRange,
  nuiGridResized,
  nuiGridRowId,
  nuiGridSameColumns,
  nuiGridSameValue,
  nuiGridSearchable,
  nuiGridSelectionOf,
  nuiGridSetValue,
  nuiGridSheet,
  type NuiGridSort,
  nuiGridSortKeys,
  nuiGridSorted,
  nuiGridSortRows,
  nuiGridText,
  nuiGridToggled,
  nuiGridValue,
  nuiXlsx,
  type NuiCsvOptions,
} from '@needless-ui/core/grid';
import {
  type CSSProperties,
  type FocusEvent as ReactFocusEvent,
  type HTMLAttributes,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  type Ref,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { flushSync } from 'react-dom';
import { isRtl, useControllable, useModel, useTouchActive } from '../internal.js';
import { nuiPersonality, type NuiPersonalityProps } from '../personality.js';
import { GridPanel, type GridPanelModel } from './panel.js';

/** Width of the checkbox column, in pixels; the CSS draws it the same. */
const LEAD = 44;
/** Pixels per Alt+arrow when resizing from the keyboard. */
const STEP = 16;
/** Rows past which `virtual: 'auto'` renders only the ones in view. */
const AUTO_VIRTUAL = 100;
/** A row's height before it's measured. */
const ESTIMATE = 40;
const NONE: readonly never[] = [];
const NO_FILTERS: Readonly<Record<string, NuiGridFilter>> = {};

/** What a column's own drawing of its cells gets. */
export interface NuiGridCellContext<T> {
  row: T;
  value: unknown;
  /** The value as the column formats it. */
  text: string;
  column: NuiGridColumn<T>;
}

/**
 * One column: the shared definition (`id`, `header`, `type`, `format`…), and how
 * to draw its cells and header yourself. `V` defaults to `any` on purpose: a list
 * of columns holds values of every type.
 */
export interface NuiGridColumn<T = any, V = any> extends NuiGridColumnBase<T, V> {
  /** Draws the column's cells yourself. */
  renderCell?: (context: NuiGridCellContext<T>) => ReactNode;
  /** Draws the column's header yourself, in place of `header` (which still names it). */
  renderHeader?: (column: NuiGridColumn<T>) => ReactNode;
}

/** What the grid's `ref` reaches: exports, printing, and focus from code. */
export interface NuiGridHandle {
  /** The filtered, sorted rows (every page) of the visible columns, as CSV. */
  exportCsv(options?: NuiCsvOptions & { formatted?: boolean }): string;
  /**
   * The filtered, sorted rows (every page) of the visible columns, as a spreadsheet
   * (.xlsx): typed cells with the columns' number formats, and a bold, frozen header
   * with filters.
   */
  exportXlsx(options?: { sheet?: string }): Blob;
  /** Prints the grid: every row that passes the filters, on as many pages as it takes. */
  print(): void;
  /** Opens every group and every row with children, or closes them all. */
  expandAll(open?: boolean): void;
  /** Focuses a cell: `row` -1 is the header (cards have none: the first row), `col` counts the checkboxes. */
  focusCell(row: number, col: number): void;
  /** Clears every filter and the search. */
  clearFilters(): void;
  /** Fits a column to the widest of its rendered cells. */
  fit(id: string): void;
}

export interface NuiGridProps<T>
  extends
    NuiPersonalityProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'defaultValue' | 'onChange'> {
  /** The data. Edits replace rows immutably and call `onRowsChange`; new `rows` replace the edits. */
  rows: readonly T[];
  onRowsChange?: (rows: readonly T[]) => void;
  columns: readonly NuiGridColumn<T>[];
  /** A row's key, for selection and tracking. Defaults to `row.id`, or the row itself. */
  rowId?: (row: T) => unknown;
  /** The grid's accessible name. */
  label?: string;
  selection?: 'none' | 'single' | 'multiple';
  /** The keys of the selected rows. */
  selected?: readonly unknown[];
  defaultSelected?: readonly unknown[];
  onSelectedChange?: (selected: readonly unknown[]) => void;
  /** Columns to sort by, the first first. */
  sort?: readonly NuiGridSort[];
  defaultSort?: readonly NuiGridSort[];
  onSortChange?: (sort: readonly NuiGridSort[]) => void;
  /** A filter per column id. */
  filters?: Readonly<Record<string, NuiGridFilter>>;
  defaultFilters?: Readonly<Record<string, NuiGridFilter>>;
  onFiltersChange?: (filters: Readonly<Record<string, NuiGridFilter>>) => void;
  /** Words that must all appear in a row's visible cells. */
  search?: string;
  defaultSearch?: string;
  onSearchChange?: (search: string) => void;
  /** Rows per page, or 0 for one scrolling list. */
  pageSize?: number;
  defaultPageSize?: number;
  onPageSizeChange?: (pageSize: number) => void;
  /** The page shown, from 0. */
  page?: number;
  defaultPage?: number;
  onPageChange?: (page: number) => void;
  pageSizes?: readonly number[];
  /** Render only the rows in view: always, never, or past 100 rows without pages. */
  virtual?: boolean | 'auto';
  /** A CSS length that bounds the grid's height; it scrolls inside. */
  height?: string | null;
  /** Each column's order, width, pinning and visibility, as changed. Save it to restore it. */
  columnState?: readonly NuiGridColumnState[];
  defaultColumnState?: readonly NuiGridColumnState[];
  onColumnStateChange?: (state: readonly NuiGridColumnState[]) => void;
  /** `server`: rows come sorted, filtered and paged; the grid only reports what's asked for. */
  mode?: 'client' | 'server';
  /** The number of rows on the server, in `server` mode. */
  total?: number | null;
  loading?: boolean;
  /** Formats numbers and dates, and reads typed numbers. Defaults to `en-US`. */
  locale?: string;
  /** Texts to replace, for translation. */
  labels?: Partial<NuiGridLabels>;
  /** Columns to group rows by, outermost first. Groups are rows of their own, with totals. */
  groupBy?: readonly string[];
  /** Keys of the groups closed; groups start open. */
  collapsed?: readonly string[];
  defaultCollapsed?: readonly string[];
  onCollapsedChange?: (collapsed: readonly string[]) => void;
  /** A row's children: the grid shows tree data, rows open to show theirs. */
  getChildren?: ((row: T) => readonly T[] | null | undefined) | null;
  /** Keys of the rows open in tree data; they start closed. */
  expanded?: readonly unknown[];
  defaultExpanded?: readonly unknown[];
  onExpandedChange?: (expanded: readonly unknown[]) => void;
  /** Keys of the rows whose details (`renderDetail`) are open. */
  details?: readonly unknown[];
  defaultDetails?: readonly unknown[];
  onDetailsChange?: (details: readonly unknown[]) => void;
  /** A row after the data with each column's aggregate over every row that passes the filters. */
  totals?: boolean;
  /** Cells whose text changes when `rows` do flash for a moment. */
  flash?: boolean;
  /** `table`; `list` shows each row as a card; `auto` does below 36rem. */
  layout?: 'table' | 'list' | 'auto';
  /**
   * A bar above the rows that sorts them, selects them all and opens the column
   * panel: always, never, or `auto` with cards, which have no header row.
   */
  toolbar?: boolean | 'auto';
  /** What the grid shows when there are no rows; `filtered` says whether filters hid them. */
  renderEmpty?: (filtered: boolean) => ReactNode;
  /** A row's details, shown under it when opened: the grid adds a column of toggles. */
  renderDetail?: (row: T) => ReactNode;
  /** A row was opened: Enter on a cell that can't be edited, or a double click. */
  onRowActivate?: (row: T) => void;
  /** An edit was committed; `onRowsChange` has the rows with it. */
  onCellEdit?: (edit: NuiGridEdit<T>) => void;
  /** The sort, filters, search or page changed (and once at the start), for fetching. */
  onQueryChange?: (query: NuiGridQuery) => void;
  ref?: Ref<NuiGridHandle>;
}

interface Editing<T> {
  key: unknown;
  row: T;
  index: number;
  column: string;
  text: string;
  error: string | null;
}

/** A line to render, or the gap left by lines that aren't. */
type Item<T> = { key: unknown; line: NuiGridItem<T>; index: number } | { key: string; gap: number };

type Style = CSSProperties & Record<`--${string}`, string | number | undefined>;

/**
 * A data grid on a native table: sorting (by several columns), filters and search,
 * pages or virtual scrolling, row selection, editing, columns you can resize, move,
 * pin and hide, groups, tree data, details, totals, and CSV and Excel exports.
 * Every cell is reachable from the keyboard.
 *
 * ```tsx
 * <NuiGrid label="Orders" rows={orders} onRowsChange={setOrders} columns={columns}
 *   selection="multiple" selected={picked} onSelectedChange={setPicked} pageSize={25} />
 * ```
 *
 * State can be controlled (`sort` and `onSortChange`, and so on) or left to the grid
 * (`defaultSort`), so it can be saved, restored and sent to a server.
 */
export function NuiGrid<T>(props: NuiGridProps<T>): ReactNode {
  const {
    rows: rowsProp,
    onRowsChange,
    columns,
    rowId = nuiGridRowId as (row: T) => unknown,
    label = '',
    selection = 'none',
    selected: selectedProp,
    defaultSelected,
    onSelectedChange,
    sort: sortProp,
    defaultSort,
    onSortChange,
    filters: filtersProp,
    defaultFilters,
    onFiltersChange,
    search: searchProp,
    defaultSearch,
    onSearchChange,
    pageSize: pageSizeProp,
    defaultPageSize,
    onPageSizeChange,
    page: pageProp,
    defaultPage,
    onPageChange,
    pageSizes = [10, 25, 50, 100],
    virtual = 'auto',
    height = null,
    columnState: columnStateProp,
    defaultColumnState,
    onColumnStateChange,
    mode = 'client',
    total: totalProp = null,
    loading = false,
    locale = 'en-US',
    labels,
    groupBy = NONE,
    collapsed: collapsedProp,
    defaultCollapsed,
    onCollapsedChange,
    getChildren = null,
    expanded: expandedProp,
    defaultExpanded,
    onExpandedChange,
    details: detailsProp,
    defaultDetails,
    onDetailsChange,
    totals = false,
    flash = false,
    layout = 'table',
    toolbar = 'auto',
    renderEmpty,
    renderDetail,
    onRowActivate,
    onCellEdit,
    onQueryChange,
    density,
    corners,
    radius,
    className,
    ref,
    ...rest
  } = props;
  useTouchActive();

  // State: the parent's, or the grid's own.
  const [rows, setRows] = useModel(rowsProp, onRowsChange);
  const [selected, setSelected] = useControllable<readonly unknown[]>(
    selectedProp,
    defaultSelected ?? NONE,
    onSelectedChange,
  );
  const [sort, setSortValue] = useControllable<readonly NuiGridSort[]>(
    sortProp,
    defaultSort ?? NONE,
    onSortChange,
  );
  const [filters, setFilters] = useControllable(
    filtersProp,
    defaultFilters ?? NO_FILTERS,
    onFiltersChange,
  );
  const [search, setSearch] = useControllable(searchProp, defaultSearch ?? '', onSearchChange);
  const [pageSize, setPageSize] = useControllable(
    pageSizeProp,
    defaultPageSize ?? 0,
    onPageSizeChange,
  );
  const [page, setPage] = useControllable(pageProp, defaultPage ?? 0, onPageChange);
  const [columnState, setColumnState] = useControllable<readonly NuiGridColumnState[]>(
    columnStateProp,
    defaultColumnState ?? NONE,
    onColumnStateChange,
  );
  const [collapsed, setCollapsed] = useControllable<readonly string[]>(
    collapsedProp,
    defaultCollapsed ?? NONE,
    onCollapsedChange,
  );
  const [expanded, setExpanded] = useControllable<readonly unknown[]>(
    expandedProp,
    defaultExpanded ?? NONE,
    onExpandedChange,
  );
  const [details, setDetails] = useControllable<readonly unknown[]>(
    detailsProp,
    defaultDetails ?? NONE,
    onDetailsChange,
  );

  const text = useMemo((): NuiGridLabels => {
    const given = labels ?? {};
    return {
      ...NUI_GRID_LABELS,
      ...given,
      operators: { ...NUI_GRID_LABELS.operators, ...given.operators },
    };
  }, [labels]);
  const selectable = selection !== 'none';
  const hasDetails = !!renderDetail;
  /** How many columns come before the data: the checkboxes and the details' toggles. */
  const lead = (selectable ? 1 : 0) + (hasDetails ? 1 : 0);
  const leading = lead * LEAD;
  const server = mode === 'server';

  // Rendering state, measured in the browser.
  const [containerWidth, setContainerWidth] = useState(0);
  const [viewport, setViewport] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [measured, setMeasured] = useState(0);
  /** Printing: every line, on one page, with nothing virtual. */
  const [printing, setPrinting] = useState(false);
  /** Rows show as cards: always with `list`, and below 36rem with `auto`. */
  const cards =
    layout === 'list' || (layout === 'auto' && containerWidth > 0 && containerWidth < 576);

  // The model ------------------------------------------------------------------------

  const byId = useMemo(() => nuiGridColumnsById(columns), [columns]);
  /** The columns as given, for their own drawing of cells and headers. */
  const drawn = byId as ReadonlyMap<string, NuiGridColumn<T>>;
  const state = useMemo(
    () => nuiGridColumnStates(columns, columnState, byId),
    [columns, columnState, byId],
  );
  const yes = text.yes;
  const no = text.no;
  const formatters = useMemo(
    () => nuiGridFormatters(columns, locale, { yes, no }),
    [columns, locale, yes, no],
  );
  const comparators = useMemo(() => nuiGridComparators(columns, locale), [columns, locale]);
  const columnsLaid = useMemo(
    () => nuiGridLayout({ byId, state, sort, filters, containerWidth, leading }),
    [byId, state, sort, filters, containerWidth, leading],
  );
  const width = columnsLaid.reduce((sum, column) => sum + column.width, leading);
  /** Columns in the tab and arrow order: leading ones, then data columns. */
  const colCount = lead + columnsLaid.length;
  const textOf = useCallback(
    (column: NuiGridColumnBase<T>, row: T) => nuiGridText(formatters, column, row),
    [formatters],
  );
  const key = useCallback((row: T) => rowId(row), [rowId]);

  /** The columns search looks in: visible and filterable. Unchanged by resizing. */
  const searchableNow = useMemo(() => nuiGridSearchable(state, byId), [state, byId]);
  const searchableKept = useRef(searchableNow);
  const searchable = nuiGridSameColumns(searchableKept.current, searchableNow)
    ? searchableKept.current
    : searchableNow;
  useLayoutEffect(() => {
    searchableKept.current = searchable;
  });
  /** Each row's searchable text, built on the first search and kept until the data changes. */
  const haystacks = useMemo(() => {
    let built: readonly string[] | null = null;
    return () => (built ??= rows.map((row) => nuiGridHaystack(searchable, row, textOf)));
  }, [rows, searchable, textOf]);
  const narrowing = useMemo(() => nuiGridNarrowing(search, filters, byId), [search, filters, byId]);
  const passes = useCallback(
    (row: T, haystack?: string) =>
      nuiGridPasses(row, narrowing, { searchable, byId, text: textOf }, haystack),
    [narrowing, searchable, byId, textOf],
  );
  const forest = useMemo(
    () =>
      getChildren && !server
        ? nuiGridForest(rows, getChildren, !!narrowing, (row) => passes(row))
        : null,
    [getChildren, server, rows, narrowing, passes],
  );
  const filtered = useMemo(
    () => nuiGridFiltered(rows, { server, forest, narrowing, haystacks, passes }),
    [rows, server, forest, narrowing, haystacks, passes],
  );
  const sortKeys = useMemo(
    () => nuiGridSortKeys(sort, byId, comparators),
    [sort, byId, comparators],
  );
  const sortRows = useCallback(
    (list: readonly T[]) => (server ? list : nuiGridSortRows(list, sortKeys)),
    [server, sortKeys],
  );
  const sorted = useMemo(() => sortRows(filtered), [sortRows, filtered]);
  const grouping = useMemo(
    () => nuiGridGrouping(groupBy, byId, { tree: !!getChildren, server }),
    [groupBy, byId, getChildren, server],
  );
  /** Rows nest: grouped, or tree data. The table is a treegrid then. */
  const nested = grouping.length > 0 || !!getChildren;
  const collapsedKeys = useMemo(() => new Set(collapsed), [collapsed]);
  const expandedKeys = useMemo(() => new Set(expanded), [expanded]);
  const detailKeys = useMemo(() => new Set(details), [details]);
  const display = useMemo(
    () =>
      nuiGridDisplay({
        sorted,
        grouping,
        byId,
        comparators,
        sort,
        collapsed: collapsedKeys,
        expanded: expandedKeys,
        details: hasDetails ? detailKeys : null,
        children: getChildren,
        forest,
        key,
        sortRows,
      }),
    [
      sorted,
      grouping,
      byId,
      comparators,
      sort,
      collapsedKeys,
      expandedKeys,
      hasDetails,
      detailKeys,
      getChildren,
      forest,
      key,
      sortRows,
    ],
  );
  /** How many lines there are in all (rows, groups, details): filtered here, or as the server says. */
  const total = server ? (totalProp ?? rows.length) : display.length;
  const { paged, pageCount, currentPage, firstIndex } = nuiGridPages(total, pageSize, page);
  /** The lines to draw: one page, or all of them. */
  const shown = useMemo(
    () => nuiGridPage(display, { server, pageSize, currentPage }),
    [display, server, pageSize, currentPage],
  );
  const selectedKeys = useMemo(() => new Set(selected), [selected]);
  /** The keys select all acts on: every row that passes the filters, or in server mode the rows shown. */
  const selectableKeys = useMemo(
    () => (server ? rows : sorted).map((row) => key(row)),
    [server, rows, sorted, key],
  );
  const allSelected = nuiGridAllSelected(selectedKeys, selectableKeys);
  const someSelected = !allSelected && selectableKeys.some((k) => selectedKeys.has(k));
  const aggregated = columnsLaid.some((column) => !!column.column.aggregate);
  const showTotals = totals && aggregated;
  const header = !cards;
  const bounds = nuiGridBounds(shown.length, showTotals ? 1 : 0, header, colCount);

  // The active cell: it stays inside the grid when rows or columns go, or the header does.
  const [activeStored, setActiveStored] = useState<NuiGridCellPosition>({ row: -1, col: 0 });
  const active = nuiGridInside(activeStored, bounds);
  if (active.row !== activeStored.row || active.col !== activeStored.col) setActiveStored(active);
  const setActive = (row: number, col: number) =>
    setActiveStored(nuiGridInside({ row, col }, bounds));

  const aggregate = (column: NuiGridColumnBase<T>, list: readonly T[]) =>
    nuiGridAggregate(column, list, { locale, comparators, formatters });
  const totalsRow = useMemo(
    () => new Map(columnsLaid.map((column) => [column.id, aggregate(column.column, sorted)])),
    [columnsLaid, sorted, locale, comparators, formatters],
  );

  // Changes, as the engine makes them --------------------------------------------------

  const setSort = (id: string, direction: 'asc' | 'desc' | null, add = false) => {
    setSortValue(nuiGridSorted(sort, id, direction, add));
    setPage(0);
  };
  const toggleSort = (id: string, add = false) => {
    const column = byId.get(id);
    if (!column || column.sortable === false) return;
    setSort(id, nuiGridNextDirection(sort, id), add);
  };
  const setFilter = (id: string, filter: NuiGridFilter | null) => {
    setFilters(nuiGridFiltersWith(filters, id, filter));
    setPage(0);
  };
  const clearFilters = () => {
    setFilters({});
    setSearch('');
    setPage(0);
  };
  /** The row that Shift+click and Shift+Space select from. */
  const anchor = useRef<unknown>(null);
  const toggle = (row: T, on = !selectedKeys.has(key(row))) => {
    if (selection === 'none') return;
    const k = key(row);
    anchor.current = k;
    setSelected(nuiGridToggled(selected, k, selection, on)!);
  };
  const toggleGroupRows = (list: readonly T[]) => {
    if (selection !== 'multiple') return;
    const keys = list.map((row) => key(row));
    const on = !keys.every((k) => selectedKeys.has(k));
    setSelected(nuiGridGroupToggled(selected, keys, on));
  };
  const selectRange = (row: T) => {
    if (selection !== 'multiple') return toggle(row, true);
    const keys = nuiGridRange(
      selected,
      shown.flatMap((item) => (item.kind === 'row' ? [key(item.row)] : [])),
      anchor.current,
      key(row),
    );
    if (!keys) return toggle(row, true);
    setSelected(keys);
  };
  const toggleAll = () => {
    if (selection !== 'multiple') return;
    setSelected(nuiGridAllToggled(selected, selectableKeys, allSelected));
  };
  const toggleItem = (item: NuiGridItem<T>, open?: boolean) => {
    if (item.kind === 'group') {
      setCollapsed(nuiGridCollapsed(collapsed, item.key, open ?? !item.expanded));
    } else if (item.kind === 'row' && item.expandable) {
      setExpanded(nuiGridOpened(expanded, item.key, open ?? !item.expanded));
    }
  };
  const toggleDetails = (row: T) => {
    const k = key(row);
    setDetails(nuiGridOpened(details, k, !detailKeys.has(k)));
  };
  const expandAll = (open = true) => {
    if (grouping.length) {
      setCollapsed(open ? [] : nuiGridGroupKeys(sorted, grouping, byId));
      return;
    }
    if (!getChildren) return;
    setExpanded(open ? nuiGridParentKeys(rows, getChildren, key) : []);
  };
  const resize = (id: string, to: number) => {
    const column = byId.get(id);
    if (column) setColumnState(nuiGridResized(state, column, to));
  };
  const hide = (id: string, hidden = true) => {
    const next = nuiGridHidden(state, byId.get(id), hidden, columnsLaid.length);
    if (next) setColumnState(next);
  };
  const moveTo = (id: string, target: string, side: 'before' | 'after') => {
    const next = nuiGridMoved(state, columnsLaid, id, target, side);
    if (next) setColumnState(next);
  };
  const canMove = (id: string, delta: -1 | 1) => nuiGridNeighbour(columnsLaid, id, delta) !== null;
  const move = (id: string, delta: -1 | 1) => {
    const other = nuiGridNeighbour(columnsLaid, id, delta);
    if (other) moveTo(id, other, delta < 0 ? 'before' : 'after');
  };

  const panelModel: GridPanelModel<T> = {
    layout: columnsLaid,
    byId,
    state,
    sort,
    filters,
    setSort,
    setFilter,
    pin: (id, pinned) => setColumnState(nuiGridPinned(state, id, pinned)),
    canMove,
    move,
    hide,
  };

  // Rendering -----------------------------------------------------------------------

  const virtualized = printing
    ? false
    : virtual !== 'auto'
      ? virtual
      : !paged && shown.length > AUTO_VIRTUAL;
  const virtualizer = useMemo(
    () => new NuiVirtualizer({ count: shown.length, estimate: ESTIMATE }),
    [shown.length],
  );
  /** The lines in view (and the active one wherever it is), with gaps for the rest. */
  const items = useMemo((): Item<T>[] => {
    const lines = printing ? display : shown;
    if (!virtualized) return lines.map((line, index) => ({ key: line.key, line, index }));
    const top = Math.max(0, scrollTop - headerHeight);
    const row = active.row;
    return virtualizer
      .slice(top, viewport || 480, row >= 0 && row < lines.length ? [row] : [])
      .map((item) =>
        'gap' in item
          ? { key: `gap:${item.at}`, gap: item.gap }
          : { key: lines[item.index].key, line: lines[item.index], index: item.index },
      );
    // `measured` counts the rows measured since: their sizes moved the slice.
  }, [
    printing,
    display,
    shown,
    virtualized,
    virtualizer,
    scrollTop,
    headerHeight,
    viewport,
    active.row,
    measured,
  ]);
  /** A virtual list needs a bounded height: 32rem unless `height` says otherwise. */
  const maxHeight = height ?? (virtualized ? '32rem' : null);
  const narrowed =
    !!search.trim() || Object.values(filters).some((filter) => nuiGridFilterActive(filter));

  // Editing, the panel, drags and announcements ---------------------------------------

  const [editing, setEditing] = useState<Editing<T> | null>(null);
  const [panelColumn, setPanelColumn] = useState<string | null>(null);
  /** The toolbar opened the panel, rather than a header: the panel picks its column. */
  const [panelPick, setPanelPick] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [drop, setDrop] = useState<{ id: string; side: 'before' | 'after' } | null>(null);
  const [status, setStatus] = useState('');
  const [flashing, setFlashing] = useState<ReadonlyMap<unknown, ReadonlySet<string>>>(new Map());
  const dragged = useRef(false);
  /** The panel was open when the filter button was pressed, so the press closes it. */
  const panelWasOpen = useRef(false);
  /** A finger on the cell that was already active: the tap that follows edits it. */
  const tapToEdit = useRef<NuiGridCellPosition | null>(null);

  const id = useId();
  const errorId = `${id}error`;
  const panelId = `${id}panel`;
  /** An id for a header's label; column ids may hold spaces, which ARIA references can't. */
  const headerId = (column: string) => `${id}header-${column.replace(/\s+/g, '_')}`;

  const root = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLTableSectionElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const filterButton = useRef<HTMLButtonElement>(null);
  const anchorElement = useRef<HTMLElement | null>(null);

  /** Says something through the polite status region, even the same thing twice. */
  const announce = (message: string) =>
    setStatus((current) => (current === message ? `${message} ` : message));

  // Move focus where it was asked to go, once that's rendered.
  const pendingFocus = useRef<'cell' | 'editor' | 'panel' | null>(null);
  const [focusTick, setFocusTick] = useState(0);
  const requestFocus = (kind: 'cell' | 'editor' | 'panel') => {
    pendingFocus.current = kind;
    setFocusTick((tick) => tick + 1);
  };
  const go = (row: number, col: number) => {
    setActive(row, col);
    requestFocus('cell');
  };

  /** What effects and listeners added earlier read: this render's model. */
  const latest = useRef({ active, columnsLaid, leading, headerHeight, lead });
  useLayoutEffect(() => {
    latest.current = { active, columnsLaid, leading, headerHeight, lead };
  });

  useLayoutEffect(() => {
    const kind = pendingFocus.current;
    if (!kind) return;
    pendingFocus.current = null;
    if (kind === 'panel') {
      panel.current?.querySelector<HTMLElement>('button:not(:disabled), select, input')?.focus();
      return;
    }
    const scroll = scroller.current!;
    if (kind === 'editor') {
      const editor = scroll.querySelector<HTMLElement>('.nui-grid-editor');
      editor?.focus();
      if (editor instanceof HTMLInputElement && editor.type === 'text') {
        editor.setSelectionRange(editor.value.length, editor.value.length);
      }
      return;
    }
    const { row, col } = latest.current.active;
    // A detail row has one cell: whatever the column, focus goes there.
    const cell =
      scroll.querySelector<HTMLElement>(`[data-row="${row}"][data-col="${col}"]`) ??
      scroll.querySelector<HTMLElement>(`[data-row="${row}"][data-col]`);
    if (!cell) return;
    cell.focus({ preventScroll: true });
    reveal(cell);
  }, [focusTick]);

  /** Scrolls a cell into view: below the header, and clear of pinned columns. */
  const reveal = (cell: HTMLElement) => {
    const scroll = scroller.current!;
    const view = scroll.getBoundingClientRect();
    const box = cell.getBoundingClientRect();
    const inHeader = !!cell.closest('thead');
    const current = latest.current;
    let dy = 0;
    if (!inHeader) {
      const top = view.top + scroll.clientTop + current.headerHeight;
      const bottom = view.top + scroll.clientTop + scroll.clientHeight;
      if (box.top < top) dy = box.top - top;
      else if (box.bottom > bottom) dy = box.bottom - bottom;
    }
    let dx = 0;
    if (!cell.hasAttribute('data-pinned')) {
      const widthOf = (pinned: 'start' | 'end') =>
        current.columnsLaid.filter((c) => c.pinned === pinned).reduce((sum, c) => sum + c.width, 0);
      const start = current.leading + widthOf('start');
      const end = widthOf('end');
      const rtl = isRtl(scroll);
      const left = view.left + scroll.clientLeft + (rtl ? end : start);
      const right = view.left + scroll.clientLeft + scroll.clientWidth - (rtl ? start : end);
      if (box.left < left) dx = box.left - left;
      else if (box.right > right) dx = box.right - right;
    }
    if (dx || dy) scroll.scrollBy({ top: dy, left: dx, behavior: 'instant' });
  };

  // Report the query at the start and on every change, so a server can fetch.
  const queryChanged = useRef(onQueryChange);
  useLayoutEffect(() => {
    queryChanged.current = onQueryChange;
  });
  const reported = useRef<NuiGridQuery | null>(null);
  useEffect(() => {
    const last = reported.current;
    if (
      last &&
      last.sort === sort &&
      last.filters === filters &&
      last.search === search &&
      last.page === currentPage &&
      last.pageSize === pageSize
    ) {
      return;
    }
    reported.current = { sort, filters, search, page: currentPage, pageSize };
    queryChanged.current?.(reported.current);
  }, [sort, filters, search, currentPage, pageSize]);

  // Measure the rows that rendered; a row taller or shorter than guessed re-lays the list.
  useLayoutEffect(() => {
    if (!virtualized) return;
    let changed = false;
    for (const row of scroller.current!.querySelectorAll<HTMLElement>('tbody > tr[data-index]')) {
      changed =
        virtualizer.measure(Number(row.getAttribute('data-index')), row.offsetHeight) || changed;
    }
    if (changed) setMeasured((n) => n + 1);
  }, [items, virtualized, virtualizer]);

  // The scroll container's size, for flex columns, cards and the rows in view.
  useEffect(() => {
    const scroll = scroller.current!;
    const header = head.current!;
    const observer = new ResizeObserver(() => {
      setViewport(scroll.clientHeight);
      setContainerWidth(scroll.clientWidth);
      setHeaderHeight(header.offsetHeight);
    });
    observer.observe(scroll);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // Printing, from the page's menu too: every line, rendered before the page is laid out.
  const printRequested = useRef(false);
  useEffect(() => {
    const view = root.current!.ownerDocument.defaultView!;
    const before = () => flushSync(() => setPrinting(true));
    const after = () => setPrinting(false);
    view.addEventListener('beforeprint', before);
    view.addEventListener('afterprint', after);
    return () => {
      view.removeEventListener('beforeprint', before);
      view.removeEventListener('afterprint', after);
    };
  }, []);
  useLayoutEffect(() => {
    if (!printing || !printRequested.current) return;
    printRequested.current = false;
    root.current!.ownerDocument.defaultView!.print();
  }, [printing]);

  // Cells that changed in new rows flash, among the ones drawn.
  const before = useRef<Map<unknown, T> | null>(null);
  useLayoutEffect(() => {
    const previous = before.current;
    before.current = new Map(rows.map((row) => [key(row), row]));
    if (!flash || !previous?.size) return;
    const changed = new Map<unknown, Set<string>>();
    for (const item of items) {
      if ('gap' in item || item.line.kind !== 'row') continue;
      const k = item.line.key;
      const now = before.current.get(k);
      const old = previous.get(k);
      if (!now || !old || now === old) continue;
      for (const column of columnsLaid) {
        if (textOf(column.column, old) === textOf(column.column, now)) continue;
        (changed.get(k) ?? changed.set(k, new Set()).get(k)!).add(column.id);
      }
    }
    if (!changed.size) return;
    setFlashing((current) => {
      const next = new Map(current);
      for (const [k, ids] of changed) next.set(k, new Set([...(next.get(k) ?? []), ...ids]));
      return next;
    });
    const timer = setTimeout(() => {
      setFlashing((current) => {
        const next = new Map(current);
        for (const [k, ids] of changed) {
          const left = [...(next.get(k) ?? [])].filter((c) => !ids.has(c));
          if (left.length) next.set(k, new Set(left));
          else next.delete(k);
        }
        return next;
      });
    }, 1200);
    return () => clearTimeout(timer);
    // Only new rows flash cells; the rest is read as it is then.
  }, [rows]);

  // Announce how many rows are left once filtering or searching settles.
  const counted = useRef<{ total: number; filters: object; search: string } | null>(null);
  useEffect(() => {
    const last = counted.current;
    counted.current = { total, filters, search };
    if (!last || (last.total === total && last.filters === filters && last.search === search)) {
      return;
    }
    const timer = setTimeout(() => announce(text.rows(total)), 700);
    return () => clearTimeout(timer);
  }, [total, filters, search]);

  // The panel: a native popover placed next to what opened it.
  useEffect(() => {
    const element = panel.current!;
    let stop: (() => void) | null = null;
    const toggled = (event: Event) => {
      const open = (event as ToggleEvent).newState === 'open';
      stop?.();
      stop = null;
      if (open && anchorElement.current) {
        stop = nuiFollow(anchorElement.current, element, {
          side: 'bottom',
          align: 'start',
          offset: 8,
        });
      }
      setPanelOpen(open);
    };
    element.addEventListener('toggle', toggled);
    return () => {
      element.removeEventListener('toggle', toggled);
      stop?.();
    };
  }, []);
  const showPanel = (anchorAt: HTMLElement) => {
    anchorElement.current = anchorAt;
    if (!panel.current!.matches(':popover-open')) panel.current!.showPopover({ source: anchorAt });
  };
  const hidePanel = () => {
    if (panel.current?.matches(':popover-open')) panel.current.hidePopover();
  };

  // The panel's anchor, a header or the toolbar's button, comes or goes with cards.
  const cardsBefore = useRef(cards);
  useEffect(() => {
    if (cardsBefore.current !== cards) hidePanel();
    cardsBefore.current = cards;
  }, [cards]);

  // When the panel closes with focus inside, focus goes back to what opened it:
  // the toolbar's button, or the column's header.
  const panelBefore = useRef(false);
  useEffect(() => {
    const was = panelBefore.current;
    panelBefore.current = panelOpen;
    if (!was || panelOpen) return;
    const doc = root.current!.ownerDocument;
    const focus = doc.activeElement;
    const inside = !focus || focus === doc.body || panel.current!.contains(focus);
    if (!inside) return;
    if (panelPick) {
      filterButton.current?.focus();
      return;
    }
    const index = columnsLaid.findIndex((column) => column.id === panelColumn);
    if (index >= 0 && header) go(-1, lead + index);
  }, [panelOpen]);

  // Toolbar ---------------------------------------------------------------------------

  /** The sort that comes first: the toolbar shows its column and direction. */
  const firstSort = sort[0] ?? null;
  /** What the toolbar sorts by: the visible columns that sort, and the one sorted by. */
  const sortChoices = useMemo(() => {
    const list = columnsLaid
      .map((entry) => entry.column)
      .filter((column) => column.sortable !== false);
    const by = firstSort ? byId.get(firstSort.column) : undefined;
    return by && !list.includes(by) ? [...list, by] : list;
  }, [columnsLaid, firstSort, byId]);
  /** The toolbar's filter button shows when a visible column can filter. */
  const filterable = columnsLaid.some((entry) => entry.column.filterable !== false);
  /** How many columns filter the rows, hidden ones included. */
  const filterCount = Object.entries(filters).filter(
    ([column, filter]) => byId.has(column) && nuiGridFilterActive(filter),
  ).length;
  /** The toolbar shows when asked (with cards under `auto`) and has something to do. */
  const showToolbar =
    (toolbar === 'auto' ? cards : toolbar) &&
    (selection === 'multiple' || sortChoices.length > 0 || filterable);

  /** Says how a column sorts now, after a header or the toolbar changed it. */
  const announceSort = (column: string, next: readonly NuiGridSort[]) => {
    const entry = next.find((s) => s.column === column);
    const name = byId.get(column)?.header ?? '';
    announce(
      !entry
        ? text.sortCleared
        : entry.direction === 'asc'
          ? text.sortedAscending(name)
          : text.sortedDescending(name),
    );
  };

  /** The toolbar sorts by a column (none for `''`), keeping the direction it had. */
  const sortBy = (column: string) => {
    if (!column) {
      if (!firstSort) return;
      setSort(firstSort.column, null);
      announceSort(firstSort.column, []);
      return;
    }
    setSort(column, firstSort?.direction ?? 'asc');
    announceSort(column, nuiGridSorted(sort, column, firstSort?.direction ?? 'asc'));
  };

  /** The toolbar turns the first sort around; the columns after it stay as they are. */
  const sortDirection = (direction: 'asc' | 'desc') => {
    if (!firstSort || firstSort.direction === direction) return;
    setSort(firstSort.column, direction, true);
    announceSort(firstSort.column, nuiGridSorted(sort, firstSort.column, direction, true));
  };

  const sortColumn = (column: NuiGridLayoutColumn<T>, add: boolean) => {
    if (column.column.sortable === false) return;
    const direction = nuiGridNextDirection(sort, column.id);
    toggleSort(column.id, add);
    announceSort(column.id, nuiGridSorted(sort, column.id, direction, add));
  };

  const headerCell = (column: string): HTMLElement | null =>
    head.current?.querySelector<HTMLElement>(`th[data-column="${CSS.escape(column)}"]`) ?? null;

  const openPanel = (column: string, event?: { stopPropagation(): void }) => {
    event?.stopPropagation();
    const cell = headerCell(column);
    if (!cell) return;
    setPanelColumn(column);
    setPanelPick(false);
    showPanel(cell);
    requestFocus('panel');
  };

  const onFilterPress = () => {
    panelWasOpen.current = panelPick && panelOpen;
  };

  /**
   * The toolbar's filter button opens the panel, which picks its column: the one
   * it showed last, else the first that filters or can. Pressed again, it closes.
   */
  const onFilterClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    // A press outside the open panel already closed it (light dismiss) by the time of the click.
    const open = panelWasOpen.current || (panelPick && !!panel.current?.matches(':popover-open'));
    panelWasOpen.current = false;
    if (open) {
      hidePanel();
      return;
    }
    const lastShown = columnsLaid.find((column) => column.id === panelColumn);
    const column = (
      lastShown ??
      columnsLaid.find((entry) => entry.filtered) ??
      columnsLaid.find((entry) => entry.column.filterable !== false) ??
      columnsLaid[0]
    )?.id;
    if (!column) return;
    // Safari doesn't focus a button it clicks; focused, it's where focus comes back to.
    if (button.ownerDocument.activeElement !== button) button.focus({ preventScroll: true });
    setPanelColumn(column);
    setPanelPick(true);
    showPanel(button);
    requestFocus('panel');
  };

  const hideColumn = (column: string) => {
    hidePanel();
    const { col } = active;
    hide(column);
    if (panelPick) filterButton.current?.focus();
    else go(-1, col);
  };

  // Pointer ---------------------------------------------------------------------------

  const onFocusIn = (event: ReactFocusEvent<HTMLTableElement>) => {
    const cell = (event.target as HTMLElement).closest<HTMLElement>('[data-row][data-col]');
    if (!cell || !root.current?.contains(cell)) return;
    const row = Number(cell.getAttribute('data-row'));
    const col = Number(cell.getAttribute('data-col'));
    if (active.row !== row || active.col !== col) setActiveStored({ row, col });
  };

  const onHeaderClick = (column: NuiGridLayoutColumn<T>, event: ReactMouseEvent) => {
    if (dragged.current) {
      dragged.current = false;
      return;
    }
    if ((event.target as HTMLElement).closest('.nui-grid-menu-button, .nui-grid-resize')) return;
    sortColumn(column, event.shiftKey);
  };

  const onRowClick = (row: T, event: ReactMouseEvent) => {
    if ((event.target as HTMLElement).closest('input, button, a, select, textarea, label')) return;
    if (selection === 'single') toggle(row, true);
    else if (selection === 'multiple' && event.shiftKey) selectRange(row);
    else if (selection === 'multiple' && (event.ctrlKey || event.metaKey)) toggle(row);
  };

  const onCellDoubleClick = (row: T, index: number, col: number) => {
    if (!startEdit(index, col)) onRowActivate?.(row);
  };

  const onCellPress = (event: ReactPointerEvent, row: number, col: number) => {
    tapToEdit.current =
      event.pointerType === 'touch' && active.row === row && active.col === col
        ? { row, col }
        : null;
  };

  /** Touch screens have no double click: a tap on the active cell starts editing it. */
  const onCellTap = (row: number, col: number) => {
    const tap = tapToEdit.current;
    tapToEdit.current = null;
    if (tap?.row === row && tap.col === col) startEdit(row, col);
  };

  const onCheck = (row: T, event: ReactMouseEvent) => {
    event.stopPropagation();
    if (event.shiftKey) selectRange(row);
    else toggle(row);
  };

  /**
   * Drag the header to move the column among its pinned group. Not by touch: a
   * finger on a header scrolls the grid (the column menu moves columns there).
   */
  const onHeaderPointerDown = (
    column: NuiGridLayoutColumn<T>,
    event: ReactPointerEvent<HTMLElement>,
  ) => {
    if (event.button !== 0 || event.pointerType === 'touch') return;
    if (column.column.reorderable === false) return;
    if ((event.target as HTMLElement).closest('.nui-grid-menu-button, .nui-grid-resize')) return;
    const cell = event.currentTarget;
    const view = cell.ownerDocument.defaultView!;
    const startX = event.clientX;
    let dragging = false;
    let target: { id: string; side: 'before' | 'after' } | null = null;
    const moved = (e: PointerEvent) => {
      if (!dragging && Math.abs(e.clientX - startX) < 6) return;
      if (!dragging) {
        dragging = true;
        cell.setAttribute('data-dragging', '');
      }
      target = dropTarget(column, e.clientX);
      setDrop(target);
    };
    const stop = () => {
      view.removeEventListener('pointermove', moved);
      view.removeEventListener('pointerup', end);
      view.removeEventListener('pointercancel', stop);
      cell.removeAttribute('data-dragging');
      setDrop(null);
      return target;
    };
    const end = () => {
      const at = stop();
      if (!dragging) return;
      // The click that follows the drop isn't a sort.
      dragged.current = true;
      view.setTimeout(() => (dragged.current = false));
      if (at) moveTo(column.id, at.id, at.side);
    };
    view.addEventListener('pointermove', moved);
    view.addEventListener('pointerup', end);
    // The browser took the gesture back: nothing moves.
    view.addEventListener('pointercancel', stop);
  };

  const dropTarget = (
    column: NuiGridLayoutColumn<T>,
    x: number,
  ): { id: string; side: 'before' | 'after' } | null => {
    const rtl = isRtl(root.current!);
    for (const other of latest.current.columnsLaid) {
      if (other.id === column.id || other.pinned !== column.pinned) continue;
      if (other.column.reorderable === false) continue;
      const box = headerCell(other.id)?.getBoundingClientRect();
      if (!box || x < box.left || x > box.right) continue;
      const firstHalf = x < box.left + box.width / 2;
      return { id: other.id, side: firstHalf !== rtl ? 'before' : 'after' };
    }
    return null;
  };

  const startResize = (column: NuiGridLayoutColumn<T>, event: ReactPointerEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const handle = event.currentTarget;
    // A pointer that isn't live (a synthetic event, one already lifted) can't be captured.
    try {
      handle.setPointerCapture(event.pointerId);
    } catch {}
    const startX = event.clientX;
    const start = column.width;
    const sign = isRtl(root.current!) ? -1 : 1;
    const base = state;
    const moved = (e: PointerEvent) => {
      const definition = byId.get(column.id);
      if (definition)
        setColumnState(nuiGridResized(base, definition, start + (e.clientX - startX) * sign));
    };
    const end = () => {
      handle.removeEventListener('pointermove', moved);
      handle.removeEventListener('pointerup', end);
      handle.removeEventListener('pointercancel', end);
    };
    handle.addEventListener('pointermove', moved);
    handle.addEventListener('pointerup', end);
    handle.addEventListener('pointercancel', end);
  };

  /** Fits a column to the widest of its rendered cells. */
  const fit = (column: string) => {
    const index = columnsLaid.findIndex((entry) => entry.id === column);
    if (index < 0 || !scroller.current) return;
    const scroll = scroller.current;
    const range = scroll.ownerDocument.createRange();
    let widest = 0;
    for (const cell of scroll.querySelectorAll<HTMLElement>(`[data-col="${lead + index}"]`)) {
      const style = getComputedStyle(cell);
      const padding = parseFloat(style.paddingInlineStart) + parseFloat(style.paddingInlineEnd);
      const content = cell.querySelector('.nui-grid-header-label') ?? cell;
      range.selectNodeContents(content);
      // Headers also hold the sort mark and the panel button.
      const extra = content === cell ? 0 : 56;
      widest = Math.max(widest, range.getBoundingClientRect().width + padding + extra);
    }
    resize(column, Math.ceil(widest) + 2);
  };

  // Keyboard --------------------------------------------------------------------------

  const pageRows = () => Math.max(1, Math.floor((viewport - headerHeight) / ESTIMATE));

  const onKeyDown = (event: ReactKeyboardEvent<HTMLTableElement>) => {
    if (editing || event.nativeEvent.isComposing) return;
    const target = event.target as HTMLElement;
    // Keys typed into a field of a custom cell stay there.
    if (target.matches('input:not([type="checkbox"]), textarea, select, [contenteditable]')) return;
    const { row, col } = active;
    const column = columnsLaid[col - lead] ?? null;
    const inHeader = row < 0;
    const mod = event.ctrlKey || event.metaKey;
    const lines = shown;
    const line = lines[row] as NuiGridItem<T> | undefined;
    const data = line?.kind === 'row' ? line.row : undefined;
    const last = lines.length - 1 + (lines.length && showTotals ? 1 : 0);
    const rtl = isRtl(root.current!);
    // Groups and rows with children open and close from their first data cell.
    const toggles =
      !!line && (line.kind === 'group' || (line.kind === 'row' && line.expandable)) && col <= lead;
    switch (event.key) {
      case 'ArrowDown':
        if (inHeader && event.altKey) {
          if (column) openPanel(column.id);
          break;
        }
        go(row + 1, col);
        break;
      case 'ArrowUp':
        go(row - 1, col);
        break;
      case 'ArrowLeft':
      case 'ArrowRight': {
        const forward = (event.key === 'ArrowRight') !== rtl;
        if (inHeader && event.altKey && column) {
          const delta = forward ? 1 : -1;
          if (event.shiftKey) {
            if (!canMove(column.id, delta)) break;
            move(column.id, delta);
            go(-1, col + delta);
          } else if (column.column.resizable !== false) {
            resize(column.id, column.width + delta * STEP);
          }
          break;
        }
        if (!inHeader && line && (line.kind === 'group' || toggles)) {
          const expandable = line.kind === 'group' || (line.kind === 'row' && line.expandable);
          const open = line.expanded;
          if (forward && expandable && !open) {
            toggleItem(line, true);
            break;
          }
          if (!forward && expandable && open) {
            toggleItem(line, false);
            break;
          }
          if (!forward && line.level > 0 && col <= lead) {
            // Left again: up to the group or row this one is in.
            for (let i = row - 1; i >= 0; i--) {
              const above = lines[i];
              if (above.kind !== 'detail' && above.level < line.level) {
                go(i, col);
                break;
              }
            }
            break;
          }
        }
        go(row, col + (forward ? 1 : -1));
        break;
      }
      case 'Home':
        go(mod ? -1 : row, 0);
        break;
      case 'End':
        go(mod ? last : row, colCount - 1);
        break;
      case 'PageDown':
        go(Math.min(last, row + pageRows()), col);
        break;
      case 'PageUp':
        go(inHeader ? -1 : Math.max(0, row - pageRows()), col);
        break;
      case 'Enter':
      case ' ':
        if (inHeader) {
          if (column) sortColumn(column, event.shiftKey);
          else if (selection === 'multiple') toggleAll();
          break;
        }
        if (line?.kind === 'group') {
          if (event.key === ' ' && selection === 'multiple') toggleGroupRows(line.rows);
          else toggleItem(line);
          break;
        }
        if (data && hasDetails && col === (selectable ? 1 : 0) && event.key === 'Enter') {
          toggleDetails(data);
          break;
        }
        if (!data) return;
        if (event.key === ' ') {
          if (!selectable) return;
          if (event.shiftKey) selectRange(data);
          else toggle(data);
          break;
        }
        if (!column) {
          if (selectable) toggle(data);
        } else if (!startEdit(row, col)) {
          onRowActivate?.(data);
        }
        break;
      case 'F2':
        if (!data || !startEdit(row, col)) return;
        break;
      case 'ContextMenu':
        if (!inHeader || !column) return;
        openPanel(column.id);
        break;
      case 'F10':
        if (!event.shiftKey || !inHeader || !column) return;
        openPanel(column.id);
        break;
      case 'a':
      case 'A':
        if (!mod || selection !== 'multiple') return;
        if (!allSelected) toggleAll();
        break;
      default:
        // Typing on a cell that can be edited starts editing with what's typed.
        if (!data || event.key.length !== 1 || mod || event.altKey) return;
        if (!startEdit(row, col, event.key)) return;
    }
    event.preventDefault();
  };

  // Editing ---------------------------------------------------------------------------

  /** Starts editing a cell; a boolean cell just flips. Returns whether it could. */
  const startEdit = (index: number, col: number, typed?: string): boolean => {
    const column = columnsLaid[col - lead] ?? null;
    const line = shown[index];
    const row = line?.kind === 'row' ? line.row : null;
    if (!column || !row || !nuiGridEditable(column.column, row)) return false;
    if (column.type === 'boolean') {
      if (typed !== undefined) return false;
      commitValue(row, column.column, !nuiGridValue(column.column, row));
      return true;
    }
    setEditing({
      key: key(row),
      row,
      index,
      column: column.id,
      text:
        typed !== undefined && column.type !== 'enum'
          ? typed
          : nuiGridEditText(column.column, row, locale),
      error: null,
    });
    requestFocus('editor');
    return true;
  };

  const onEditorInput = (value: string) => {
    if (editing) setEditing({ ...editing, text: value, error: null });
  };

  const onEditorKeyDown = (event: ReactKeyboardEvent) => {
    // The editor has the keys now: the grid's navigation waits.
    event.stopPropagation();
    if (event.nativeEvent.isComposing) return;
    const { row, col } = active;
    if (event.key === 'Enter') {
      event.preventDefault();
      if (commitEdit()) requestFocus('cell');
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setEditing(null);
      requestFocus('cell');
    } else if (event.key === 'Tab') {
      event.preventDefault();
      if (commitEdit()) go(row, col + (event.shiftKey ? -1 : 1));
    }
  };

  /** Leaving the editor commits a valid value and drops an invalid one. */
  const onEditorBlur = () => {
    if (editing && !commitEdit()) setEditing(null);
  };

  /** Commits the edit if its value is valid; otherwise shows why. */
  const commitEdit = (): boolean => {
    if (!editing) return true;
    const column = byId.get(editing.column)!;
    const previous = nuiGridValue(column, editing.row);
    const parsed = nuiGridParseEdit(column, editing.text, previous, locale, text.invalidNumber);
    const error =
      'error' in parsed ? parsed.error : (column.validate?.(parsed.value, editing.row) ?? null);
    if (error) {
      setEditing({ ...editing, error });
      announce(error);
      return false;
    }
    setEditing(null);
    commitValue(editing.row, column, (parsed as { value: unknown }).value);
    return true;
  };

  const commitValue = (row: T, column: NuiGridColumnBase<T>, value: unknown) => {
    if (nuiGridSameValue(nuiGridValue(column, row), value)) return;
    const error = column.validate?.(value, row);
    if (error) {
      announce(error);
      return;
    }
    const next = nuiGridSetValue(row, column, value);
    setRows(rows.map((r) => (r === row ? next : r)));
    onCellEdit?.({ row: next, previous: row, column: column.id, value });
  };

  // Pages ----------------------------------------------------------------------------

  const goToPage = (to: number) => {
    const next = Math.max(0, Math.min(pageCount - 1, to));
    setPage(next);
    scroller.current!.scrollTop = 0;
    const size = pageSize;
    announce(text.range(total ? next * size + 1 : 0, Math.min(total, (next + 1) * size), total));
  };

  const changePageSize = (size: number) => {
    setPageSize(size);
    setPage(0);
  };

  /** The pager's choices, with the current size among them even when it isn't one. */
  const sizes = useMemo(
    () => [...new Set([...pageSizes, pageSize])].sort((a, b) => a - b),
    [pageSizes, pageSize],
  );
  const pageRange = text.range(
    total ? currentPage * pageSize + 1 : 0,
    Math.min(total, (currentPage + 1) * pageSize),
    total,
  );

  // The handle --------------------------------------------------------------------------

  useImperativeHandle(ref, () => ({
    exportCsv: (options) => nuiGridCsv(columnsLaid, server ? rows : sorted, textOf, options ?? {}),
    exportXlsx: (options = {}) => {
      const bytes = nuiXlsx(
        nuiGridSheet(
          columnsLaid,
          server ? rows : sorted,
          textOf,
          options.sheet ?? (label || 'Sheet1'),
        ),
      );
      return new Blob([bytes as BlobPart], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
    },
    print: () => {
      printRequested.current = true;
      setPrinting(true);
    },
    expandAll,
    focusCell: go,
    clearFilters,
    fit,
  }));

  // Drawing --------------------------------------------------------------------------

  const tab = (row: number, col: number) => (active.row === row && active.col === col ? 0 : -1);
  /** A detail row's one cell takes the tab stop on any column of its row. */
  const tabRow = (row: number) => (active.row === row ? 0 : -1);
  /** Only the first sorted column carries `aria-sort`, as ARIA asks. */
  const ariaSort = (column: NuiGridLayoutColumn<T>) =>
    !column.sort || column.sort.priority !== 1
      ? undefined
      : column.sort.direction === 'asc'
        ? 'ascending'
        : 'descending';
  /** The words read before an aggregate. */
  const aggregateLabel = (column: NuiGridColumnBase<T>) => {
    const kind = column.aggregate;
    return text.aggregates[typeof kind === 'function' ? 'custom' : (kind ?? 'custom')];
  };
  const groupHeader = (line: NuiGridItem<T> & { kind: 'group' }) => {
    const column = byId.get(line.column)!;
    const value = line.rows.length ? textOf(column, line.rows[0]) : '';
    return text.group(column.header, value || '—', line.rows.length);
  };
  const detailCol = selectable ? 1 : 0;
  const pinnedOffset = (column: NuiGridLayoutColumn<T>) =>
    column.pinned ? `${column.offset}px` : undefined;

  /** A cell's content: its editor while it's edited, the column's drawing, a check or its text. */
  const cellContent = (column: NuiGridLayoutColumn<T>, row: T) => {
    if (editing && editing.column === column.id && editing.key === key(row)) {
      return (
        <>
          {column.type === 'enum' ? (
            <select
              className="nui-grid-editor"
              aria-label={column.column.header}
              value={editing.text}
              onChange={(event) => onEditorInput(event.target.value)}
              onKeyDown={onEditorKeyDown}
              onBlur={onEditorBlur}
            >
              {(column.column.options ?? []).map((option, i) => (
                <option key={i} value={String(i)}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              className="nui-grid-editor"
              type={column.type === 'date' ? 'date' : 'text'}
              inputMode={column.type === 'number' ? 'decimal' : undefined}
              aria-label={column.column.header}
              aria-invalid={editing.error ? true : undefined}
              aria-describedby={editing.error ? errorId : undefined}
              value={editing.text}
              onChange={(event) => onEditorInput(event.target.value)}
              onKeyDown={onEditorKeyDown}
              onBlur={onEditorBlur}
            />
          )}
          {editing.error && (
            <span className="nui-grid-error" id={errorId}>
              {editing.error}
            </span>
          )}
        </>
      );
    }
    const own = drawn.get(column.id)?.renderCell;
    if (own) {
      return own({
        row,
        value: nuiGridValue(column.column, row),
        text: textOf(column.column, row),
        column: drawn.get(column.id)!,
      });
    }
    if (column.type === 'boolean') {
      return (
        <>
          <span
            className="nui-grid-check"
            aria-hidden="true"
            data-checked={nuiGridValue(column.column, row) ? '' : undefined}
          />
          <span className="nui-grid-hidden">{textOf(column.column, row)}</span>
        </>
      );
    }
    return textOf(column.column, row);
  };

  const drawRow = (item: Item<T>) => {
    if ('gap' in item) {
      return (
        <tr key={item.key} className="nui-grid-gap" aria-hidden="true">
          <td colSpan={colCount} style={{ blockSize: item.gap }} />
        </tr>
      );
    }
    const r = item.index;
    const line = item.line;
    if (line.kind === 'detail') {
      return (
        <tr
          key={`detail:${reactKey(key(line.row))}`}
          role="row"
          className="nui-grid-detail"
          aria-rowindex={firstIndex + r + 2}
        >
          <td
            role="gridcell"
            className="nui-grid-detail-cell"
            colSpan={colCount}
            aria-colindex={1}
            data-row={r}
            data-col="0"
            tabIndex={tabRow(r)}
          >
            {renderDetail?.(line.row)}
          </td>
        </tr>
      );
    }
    if (line.kind === 'group') {
      const group = line;
      const groupSelected =
        selection === 'multiple' ? nuiGridSelectionOf(selectedKeys, group.rows.map(key)) : 'none';
      return (
        <tr
          key={group.key}
          role="row"
          className="nui-grid-row nui-grid-group"
          data-index={r}
          data-level={group.level}
          aria-rowindex={firstIndex + r + 2}
          aria-level={group.level + 1}
          aria-expanded={group.expanded}
          aria-setsize={group.size}
          aria-posinset={group.position}
          style={{ '--_level': group.level } as Style}
          onClick={(event) => {
            event.stopPropagation();
            toggleItem(group);
          }}
        >
          {selectable && (
            <td
              role="gridcell"
              className="nui-grid-select"
              aria-colindex={1}
              data-col="0"
              data-pinned="start"
              data-row={r}
              tabIndex={tab(r, 0)}
            >
              {selection === 'multiple' && (
                <Checkbox
                  checked={groupSelected === 'all'}
                  indeterminate={groupSelected === 'some'}
                  label={text.selectGroup}
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleGroupRows(group.rows);
                  }}
                />
              )}
            </td>
          )}
          {hasDetails && (
            <td
              role="gridcell"
              className="nui-grid-select"
              data-pinned="start"
              aria-colindex={detailCol + 1}
              data-col={detailCol}
              data-row={r}
              style={{ '--_offset': `${detailCol * LEAD}px` } as Style}
              tabIndex={tab(r, detailCol)}
            />
          )}
          {columnsLaid.map((column, c) => {
            const value = c === 0 ? '' : aggregate(column.column, group.rows);
            return (
              <td
                key={column.id}
                role="gridcell"
                className="nui-grid-cell"
                data-row={r}
                data-col={lead + c}
                data-type={column.type}
                data-align={c === 0 ? 'start' : column.align}
                data-pinned={column.pinned ?? undefined}
                data-edge={column.edge || undefined}
                data-label={column.column.header}
                aria-colindex={lead + c + 1}
                style={{ '--_offset': pinnedOffset(column) } as Style}
                tabIndex={tab(r, lead + c)}
              >
                {c === 0 ? (
                  <span className="nui-grid-tree">
                    <button
                      type="button"
                      className="nui-grid-toggle"
                      tabIndex={-1}
                      aria-label={text.expand}
                      aria-expanded={group.expanded}
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleItem(group);
                      }}
                    />
                    <span className="nui-grid-group-label">{groupHeader(group)}</span>
                  </span>
                ) : value ? (
                  <>
                    <span className="nui-grid-hidden">{aggregateLabel(column.column)}: </span>
                    {value}
                  </>
                ) : null}
              </td>
            );
          })}
        </tr>
      );
    }
    const row = line.row;
    const isSelected = selectable && selectedKeys.has(key(row));
    return (
      <tr
        key={reactKey(line.key)}
        role="row"
        className="nui-grid-row"
        data-index={r}
        data-level={nested ? line.level : undefined}
        aria-rowindex={firstIndex + r + 2}
        aria-selected={selectable ? isSelected : undefined}
        aria-level={nested ? line.level + 1 : undefined}
        aria-expanded={line.expandable ? line.expanded : undefined}
        aria-setsize={nested ? line.size : undefined}
        aria-posinset={nested ? line.position : undefined}
        style={nested ? ({ '--_level': line.level } as Style) : undefined}
        onClick={(event) => onRowClick(row, event)}
      >
        {selectable && (
          <td
            role="gridcell"
            className="nui-grid-select"
            aria-colindex={1}
            data-col="0"
            data-pinned="start"
            data-row={r}
            tabIndex={tab(r, 0)}
          >
            <Checkbox
              checked={isSelected}
              label={text.selectRow}
              onClick={(event) => onCheck(row, event)}
            />
          </td>
        )}
        {hasDetails && (
          <td
            role="gridcell"
            className="nui-grid-select"
            data-pinned="start"
            aria-colindex={detailCol + 1}
            data-col={detailCol}
            data-row={r}
            style={{ '--_offset': `${detailCol * LEAD}px` } as Style}
            tabIndex={tab(r, detailCol)}
          >
            <button
              type="button"
              className="nui-grid-toggle"
              tabIndex={-1}
              aria-label={text.showDetail}
              aria-expanded={detailKeys.has(key(row))}
              onClick={(event) => {
                event.stopPropagation();
                toggleDetails(row);
              }}
            />
          </td>
        )}
        {columnsLaid.map((column, c) => (
          <td
            key={column.id}
            role="gridcell"
            className="nui-grid-cell"
            data-row={r}
            data-col={lead + c}
            data-type={column.type}
            data-align={column.align}
            data-pinned={column.pinned ?? undefined}
            data-edge={column.edge || undefined}
            data-label={column.column.header}
            data-flash={flashing.get(line.key)?.has(column.id) || undefined}
            aria-colindex={lead + c + 1}
            style={{ '--_offset': pinnedOffset(column) } as Style}
            tabIndex={tab(r, lead + c)}
            onDoubleClick={() => onCellDoubleClick(row, r, lead + c)}
            onPointerDown={(event) => onCellPress(event, r, lead + c)}
            onClick={() => onCellTap(r, lead + c)}
          >
            {c === 0 && nested ? (
              <span className="nui-grid-tree">
                {line.expandable ? (
                  <button
                    type="button"
                    className="nui-grid-toggle"
                    tabIndex={-1}
                    aria-label={text.expand}
                    aria-expanded={line.expanded}
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleItem(line);
                    }}
                  />
                ) : (
                  <span className="nui-grid-toggle-space" aria-hidden="true" />
                )}
                {cellContent(column, row)}
              </span>
            ) : (
              cellContent(column, row)
            )}
          </td>
        ))}
      </tr>
    );
  };

  const lines = shown;
  const panelHeader = panelColumn ? (byId.get(panelColumn)?.header ?? '') : null;

  return (
    <div
      {...rest}
      ref={root}
      className={className ? `nui-grid ${className}` : 'nui-grid'}
      data-cards={cards || undefined}
      {...nuiPersonality({ corners, radius, density })}
    >
      {loading && (
        <div className="nui-grid-progress" role="progressbar" aria-label={text.loading} />
      )}

      {/* What the header row does, for cards, which have none: sort, select every row, and
          open the column panel. */}
      {showToolbar && (
        <div className="nui-grid-toolbar" role="group" aria-label={text.toolbar}>
          {sortChoices.length > 0 && (
            <>
              <label className="nui-grid-sort-by">
                {text.sortBy}
                <select
                  value={firstSort?.column ?? ''}
                  onChange={(event) => sortBy(event.target.value)}
                >
                  <option value="">{text.unsorted}</option>
                  {sortChoices.map((column) => (
                    <option key={column.id} value={column.id}>
                      {column.header}
                    </option>
                  ))}
                </select>
              </label>
              <span className="nui-grid-directions">
                <button
                  type="button"
                  className="nui-grid-direction"
                  data-direction="asc"
                  aria-label={text.ascending}
                  title={text.ascending}
                  aria-pressed={firstSort?.direction === 'asc'}
                  disabled={!firstSort}
                  onClick={() => sortDirection('asc')}
                />
                <button
                  type="button"
                  className="nui-grid-direction"
                  data-direction="desc"
                  aria-label={text.descending}
                  title={text.descending}
                  aria-pressed={firstSort?.direction === 'desc'}
                  disabled={!firstSort}
                  onClick={() => sortDirection('desc')}
                />
              </span>
            </>
          )}
          {selection === 'multiple' && (
            // The header's checkbox, with its name shown, and its attribute set for the server's HTML.
            <label className="nui-grid-select-all">
              <Checkbox
                checked={allSelected}
                indeterminate={someSelected}
                disabled={!selectableKeys.length}
                attribute
                focusable
                onClick={() => toggleAll()}
              />
              {text.selectAll}
            </label>
          )}
          {filterable && (
            <button
              ref={filterButton}
              type="button"
              className="nui-grid-filter-button"
              aria-haspopup="dialog"
              aria-expanded={panelOpen && panelPick}
              onPointerDown={onFilterPress}
              onClick={onFilterClick}
            >
              {text.filter}
              {filterCount > 0 && (
                <>
                  <span className="nui-grid-count" aria-hidden="true">
                    {filterCount}
                  </span>
                  <span className="nui-grid-hidden">{text.activeFilters(filterCount)}</span>
                </>
              )}
            </button>
          )}
        </div>
      )}

      <div
        ref={scroller}
        className="nui-grid-scroll"
        style={{ '--_height': maxHeight ?? undefined } as Style}
        onScroll={() => setScrollTop(scroller.current!.scrollTop)}
      >
        <table
          className="nui-grid-table"
          role={nested ? 'treegrid' : 'grid'}
          aria-label={label || undefined}
          aria-rowcount={
            loading && !lines.length ? -1 : total + 1 + (showTotals && lines.length ? 1 : 0)
          }
          aria-colcount={colCount}
          aria-multiselectable={selection === 'multiple' || undefined}
          aria-busy={loading || undefined}
          style={{ inlineSize: width }}
          onKeyDown={onKeyDown}
          onFocus={onFocusIn}
        >
          <colgroup>
            {selectable && <col className="nui-grid-col-select" style={{ inlineSize: LEAD }} />}
            {hasDetails && <col className="nui-grid-col-select" style={{ inlineSize: LEAD }} />}
            {columnsLaid.map((column) => (
              <col key={column.id} style={{ inlineSize: column.width }} />
            ))}
          </colgroup>

          <thead ref={head}>
            <tr role="row" aria-rowindex={1}>
              {selectable && (
                <th
                  role="columnheader"
                  className="nui-grid-select"
                  aria-colindex={1}
                  data-row="-1"
                  data-col="0"
                  data-pinned="start"
                  tabIndex={tab(-1, 0)}
                >
                  {selection === 'multiple' ? (
                    <Checkbox
                      checked={allSelected}
                      indeterminate={someSelected}
                      disabled={!selectableKeys.length}
                      label={text.selectAll}
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleAll();
                      }}
                    />
                  ) : (
                    <span className="nui-grid-hidden">{text.selectRow}</span>
                  )}
                </th>
              )}
              {hasDetails && (
                <th
                  role="columnheader"
                  className="nui-grid-select"
                  data-row="-1"
                  data-pinned="start"
                  data-col={detailCol}
                  aria-colindex={detailCol + 1}
                  style={{ '--_offset': `${detailCol * LEAD}px` } as Style}
                  tabIndex={tab(-1, detailCol)}
                >
                  <span className="nui-grid-hidden">{text.showDetail}</span>
                </th>
              )}
              {columnsLaid.map((column, c) => {
                const own = drawn.get(column.id)?.renderHeader;
                return (
                  <th
                    key={column.id}
                    role="columnheader"
                    className="nui-grid-header"
                    data-row="-1"
                    data-col={lead + c}
                    data-column={column.id}
                    aria-colindex={lead + c + 1}
                    aria-sort={ariaSort(column)}
                    aria-labelledby={headerId(column.id)}
                    data-align={column.align}
                    data-pinned={column.pinned ?? undefined}
                    data-edge={column.edge || undefined}
                    data-sortable={column.column.sortable !== false || undefined}
                    data-drop={drop?.id === column.id ? drop.side : undefined}
                    style={{ '--_offset': pinnedOffset(column) } as Style}
                    tabIndex={tab(-1, lead + c)}
                    onClick={(event) => onHeaderClick(column, event)}
                    onPointerDown={(event) => onHeaderPointerDown(column, event)}
                  >
                    <span className="nui-grid-header-label" id={headerId(column.id)}>
                      {own ? own(drawn.get(column.id)!) : column.column.header}
                    </span>
                    {column.sort && (
                      <span
                        className="nui-grid-sort"
                        aria-hidden="true"
                        data-direction={column.sort.direction}
                      >
                        {sort.length > 1 ? column.sort.priority : null}
                      </span>
                    )}
                    {column.filtered && <span className="nui-grid-filtered" aria-hidden="true" />}
                    <button
                      type="button"
                      className="nui-grid-menu-button"
                      tabIndex={-1}
                      aria-haspopup="dialog"
                      aria-expanded={panelOpen && !panelPick && panelColumn === column.id}
                      aria-label={text.columnOptions(column.column.header)}
                      onClick={(event) => openPanel(column.id, event)}
                    />
                    {column.column.resizable !== false && (
                      <span
                        className="nui-grid-resize"
                        aria-hidden="true"
                        onPointerDown={(event) => startResize(column, event)}
                        onDoubleClick={() => fit(column.id)}
                      />
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {loading && !lines.length ? (
              // Placeholders while the first rows load; the progress bar speaks for them.
              [0, 1, 2, 3, 4].map((i) => (
                <tr key={`skeleton-${i}`} className="nui-grid-row" aria-hidden="true">
                  {Array.from({ length: colCount }, (_, c) => (
                    <td key={c} className="nui-grid-cell">
                      <span className="nui-skeleton" />
                    </td>
                  ))}
                </tr>
              ))
            ) : !lines.length ? (
              <tr role="row" aria-rowindex={2}>
                <td role="gridcell" className="nui-grid-empty" colSpan={colCount}>
                  {renderEmpty ? (
                    renderEmpty(narrowed)
                  ) : narrowed ? (
                    <>
                      {text.noMatches}{' '}
                      <button type="button" className="nui-grid-clear" onClick={clearFilters}>
                        {text.clearFilters}
                      </button>
                    </>
                  ) : (
                    text.empty
                  )}
                </td>
              </tr>
            ) : null}
            {items.map(drawRow)}
          </tbody>

          {showTotals && lines.length > 0 && (
            <tfoot>
              <tr role="row" className="nui-grid-row nui-grid-totals" aria-rowindex={total + 2}>
                {selectable && (
                  <td
                    role="gridcell"
                    className="nui-grid-select"
                    aria-colindex={1}
                    data-col="0"
                    data-pinned="start"
                    data-row={lines.length}
                    tabIndex={tab(lines.length, 0)}
                  />
                )}
                {hasDetails && (
                  <td
                    role="gridcell"
                    className="nui-grid-select"
                    data-pinned="start"
                    aria-colindex={detailCol + 1}
                    data-col={detailCol}
                    data-row={lines.length}
                    style={{ '--_offset': `${detailCol * LEAD}px` } as Style}
                    tabIndex={tab(lines.length, detailCol)}
                  />
                )}
                {columnsLaid.map((column, c) => {
                  const value = totalsRow.get(column.id);
                  return (
                    <td
                      key={column.id}
                      role="gridcell"
                      className="nui-grid-cell"
                      data-row={lines.length}
                      data-col={lead + c}
                      data-type={column.type}
                      data-align={c === 0 && !value ? 'start' : column.align}
                      data-pinned={column.pinned ?? undefined}
                      data-edge={column.edge || undefined}
                      data-label={column.column.header}
                      aria-colindex={lead + c + 1}
                      style={{ '--_offset': pinnedOffset(column) } as Style}
                      tabIndex={tab(lines.length, lead + c)}
                    >
                      {c === 0 && !value ? (
                        text.total
                      ) : value ? (
                        <>
                          <span className="nui-grid-hidden">
                            {c === 0 ? `${text.total}, ` : ''}
                            {aggregateLabel(column.column)}:{' '}
                          </span>
                          {value}
                        </>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          )}
        </table>
      </div>

      {paged && (
        <div className="nui-grid-pager" role="group" aria-label={text.pager}>
          <label className="nui-grid-page-size">
            {text.rowsPerPage}
            <select value={pageSize} onChange={(event) => changePageSize(+event.target.value)}>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
          <span className="nui-grid-range">{pageRange}</span>
          {/* One group, so the buttons wrap together on a narrow grid. */}
          <span className="nui-grid-page-nav">
            <button
              type="button"
              className="nui-grid-page"
              data-icon="first"
              aria-label={text.firstPage}
              disabled={currentPage === 0}
              onClick={() => goToPage(0)}
            />
            <button
              type="button"
              className="nui-grid-page"
              data-icon="previous"
              aria-label={text.previousPage}
              disabled={currentPage === 0}
              onClick={() => goToPage(currentPage - 1)}
            />
            <button
              type="button"
              className="nui-grid-page"
              data-icon="next"
              aria-label={text.nextPage}
              disabled={currentPage >= pageCount - 1}
              onClick={() => goToPage(currentPage + 1)}
            />
            <button
              type="button"
              className="nui-grid-page"
              data-icon="last"
              aria-label={text.lastPage}
              disabled={currentPage >= pageCount - 1}
              onClick={() => goToPage(pageCount - 1)}
            />
          </span>
        </div>
      )}

      <div
        ref={panel}
        id={panelId}
        className="nui-popover nui-grid-panel"
        popover="auto"
        role="dialog"
        aria-label={panelHeader === null ? undefined : text.columnOptions(panelHeader)}
      >
        {panelColumn && byId.has(panelColumn) && (
          <GridPanel
            model={panelModel}
            columnId={panelColumn}
            onColumnIdChange={setPanelColumn}
            labels={text}
            locale={locale}
            pick={panelPick}
            cards={cards}
            onFit={() => fit(panelColumn)}
            onHide={() => hideColumn(panelColumn)}
          />
        )}
      </div>

      <div className="nui-grid-hidden" role="status">
        {status}
      </div>
    </div>
  );
}

const objectKeys = new WeakMap<object, number>();
let objectCount = 0;

/** A React key for a row's key, which may be a number, a string or the row itself. */
function reactKey(value: unknown): string {
  if (typeof value === 'object' && value !== null) {
    let at = objectKeys.get(value);
    if (at === undefined) objectKeys.set(value, (at = ++objectCount));
    return `object:${at}`;
  }
  return `${typeof value}:${String(value)}`;
}

/**
 * A native checkbox the grid sets: `indeterminate` is a property only, and the
 * toolbar's also writes `checked` as an attribute, so the server's HTML has it.
 */
function Checkbox(props: {
  checked: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  label?: string;
  attribute?: boolean;
  /** A tab stop of its own; the table's checkboxes are reached through their cells. */
  focusable?: boolean;
  onClick(event: ReactMouseEvent<HTMLInputElement>): void;
}): ReactNode {
  const input = useRef<HTMLInputElement>(null);
  const { checked, indeterminate = false, attribute = false } = props;
  useLayoutEffect(() => {
    const element = input.current!;
    element.indeterminate = indeterminate;
    if (attribute) element.toggleAttribute('checked', checked);
  }, [checked, indeterminate, attribute]);
  return (
    <input
      ref={input}
      type="checkbox"
      tabIndex={props.focusable ? undefined : -1}
      checked={checked}
      disabled={props.disabled}
      aria-label={props.label}
      onChange={() => undefined}
      onClick={props.onClick}
    />
  );
}
