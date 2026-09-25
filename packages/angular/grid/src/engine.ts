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
  NuiGridItem,
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

  /** The search words and active filters, or null when nothing narrows the rows. */
  private readonly narrowing = computed(() => {
    const words = nuiGridNormalize(this.search()).split(/\s+/).filter(Boolean);
    const filters = Object.entries(this.filters()).filter(
      ([id, filter]) => this.byId().has(id) && nuiGridFilterActive(filter),
    );
    return words.length || filters.length ? { words, filters } : null;
  });

  /** Whether a row passes the search and the filters; `haystack` is its searchable text, if known. */
  private passes(row: T, haystack?: string): boolean {
    const narrowing = this.narrowing();
    if (!narrowing) return true;
    const { words, filters } = narrowing;
    if (words.length) {
      const text =
        haystack ??
        nuiGridNormalize(
          this.searchable()
            .map((column) => this.text(column, row))
            .join('\n'),
        );
      if (!words.every((word) => text.includes(word))) return false;
    }
    const byId = this.byId();
    return filters.every(([id, filter]) => {
      const column = byId.get(id)!;
      return nuiGridMatches(column, filter, nuiGridValue(column, row), this.text(column, row));
    });
  }

  /** The rows that pass the search and the filters (in tree data, the top-level ones). */
  readonly filtered = computed<readonly T[]>(() => {
    const rows = this.rows();
    if (this.mode() === 'server') return rows;
    const forest = this.forest();
    if (forest) return forest.roots;
    const narrowing = this.narrowing();
    if (!narrowing) return rows;
    const haystacks = narrowing.words.length ? this.haystacks() : null;
    return rows.filter((row, i) => this.passes(row, haystacks?.[i]));
  });

  /**
   * Tree data, filtered: a row stays when it passes, or when a row under it does.
   * Its children are the ones that stay.
   */
  private readonly forest = computed(() => {
    const children = this.children();
    if (!children || this.mode() === 'server') return null;
    const narrowed = !!this.narrowing();
    const kept = new Map<T, readonly T[]>();
    const keep = (row: T): boolean => {
      const under = (children(row) ?? []).filter(keep);
      kept.set(row, under);
      return !narrowed || under.length > 0 || this.passes(row);
    };
    return { roots: this.rows().filter(keep), kept, narrowed };
  });

  /** The sort's columns, ready to compare with. */
  private readonly sortKeys = computed(() => {
    const byId = this.byId();
    return this.sort()
      .map((sort) => ({
        column: byId.get(sort.column),
        direction: sort.direction === 'desc' ? -1 : 1,
        compare: this.comparators().get(sort.column),
      }))
      .filter((key) => key.column && key.column.sortable !== false && key.compare);
  });

  /** Filtered rows in sort order. Sorting is stable, and empty values go last. */
  readonly sorted = computed<readonly T[]>(() => this.sortRows(this.filtered()));

  /** Rows in sort order: the data, or the children of a row in tree data. */
  private sortRows(rows: readonly T[]): readonly T[] {
    const keys = this.sortKeys();
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
  }

  // Groups, trees and details ----------------------------------------------------

  /** The columns rows are grouped by, that exist; none in tree data or server mode. */
  readonly grouping = computed(() => {
    if (this.children() || this.mode() === 'server') return [];
    const byId = this.byId();
    return this.groupBy().filter((id) => byId.has(id));
  });

  /** Rows nest: grouped, or tree data. The table is a treegrid then. */
  readonly nested = computed(() => this.grouping().length > 0 || !!this.children());

  private readonly collapsedKeys = computed(() => new Set(this.collapsed()));
  private readonly expandedKeys = computed(() => new Set(this.expanded()));
  private readonly detailKeys = computed(() => new Set(this.details()));

  /** Every line to draw, before paging: groups, rows and details, in order. */
  readonly display = computed<readonly NuiGridItem<T>[]>(() => {
    const out: NuiGridItem<T>[] = [];
    const details = this.hasDetails() ? this.detailKeys() : null;
    const children = this.children();
    const forest = this.forest();
    const expanded = this.expandedKeys();
    const push = (row: T, level: number, size: number, position: number, under: readonly T[]) => {
      const key = this.key(row);
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
        const sorted = this.sortRows(under);
        sorted.forEach((child, i) =>
          push(child, level + 1, sorted.length, i + 1, forest?.kept.get(child) ?? []),
        );
      }
    };
    const grouping = this.grouping();
    if (grouping.length) {
      this.groupRows(this.sorted(), grouping, 0, [], out, push);
      return out;
    }
    const rows = this.sorted();
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
  });

  /** Groups rows by a column, then by the next, adding each group's line and, if it's open, its rows. */
  private groupRows(
    rows: readonly T[],
    grouping: readonly string[],
    level: number,
    path: readonly [string, string][],
    out: NuiGridItem<T>[],
    push: (row: T, level: number, size: number, position: number, under: readonly T[]) => void,
  ): void {
    const id = grouping[level];
    const column = this.byId().get(id)!;
    const buckets = new Map<string, { value: unknown; rows: T[] }>();
    for (const row of rows) {
      const value = nuiGridValue(column, row);
      const key = valueKey(value);
      const bucket = buckets.get(key);
      if (bucket) bucket.rows.push(row);
      else buckets.set(key, { value, rows: [row] });
    }
    // Groups in the column's sort order (ascending unless the sort says otherwise); empty last.
    const compare = this.comparators().get(id)!;
    const direction = this.sort().find((sort) => sort.column === id)?.direction === 'desc' ? -1 : 1;
    const groups = [...buckets.entries()].sort(([, a], [, b]) => {
      const [emptyA, emptyB] = [nuiGridEmpty(a.value), nuiGridEmpty(b.value)];
      if (emptyA || emptyB) return emptyA === emptyB ? 0 : emptyA ? 1 : -1;
      return compare(a.value, b.value) * direction;
    });
    const collapsed = this.collapsedKeys();
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
        this.groupRows(group.rows, grouping, level + 1, at, out, push);
      } else {
        group.rows.forEach((row, j) => push(row, level + 1, group.rows.length, j + 1, []));
      }
    });
  }

  /** Opens or closes a group, a row's children or a row's details. */
  toggleItem(item: NuiGridItem<T>, open?: boolean): void {
    if (item.kind === 'group') {
      const now = open ?? !item.expanded;
      this.collapsed.update((keys) =>
        now ? keys.filter((k) => k !== item.key) : [...keys, item.key],
      );
    } else if (item.kind === 'row' && item.expandable) {
      const now = open ?? !item.expanded;
      this.expanded.update((keys) =>
        now
          ? [...keys.filter((k) => k !== item.key), item.key]
          : keys.filter((k) => k !== item.key),
      );
    }
  }

  /** Opens or closes a row's details. */
  toggleDetails(row: T, open?: boolean): void {
    const key = this.key(row);
    const now = open ?? !this.detailKeys().has(key);
    this.details.update((keys) =>
      now ? [...keys.filter((k) => k !== key), key] : keys.filter((k) => k !== key),
    );
  }

  detailsOpen(row: T): boolean {
    return this.detailKeys().has(this.key(row));
  }

  /** Opens every group and every row with children, or closes them all. */
  expandAll(open = true): void {
    if (this.grouping().length) {
      if (open) this.collapsed.set([]);
      else {
        this.collapsed.set(this.allGroupKeys());
      }
      return;
    }
    const children = this.children();
    if (!children) return;
    if (!open) {
      this.expanded.set([]);
      return;
    }
    const keys: unknown[] = [];
    const walk = (rows: readonly T[]) => {
      for (const row of rows) {
        const under = children(row) ?? [];
        if (under.length) {
          keys.push(this.key(row));
          walk(under);
        }
      }
    };
    walk(this.rows());
    this.expanded.set(keys);
  }

  private allGroupKeys(): string[] {
    const keys: string[] = [];
    const grouping = this.grouping();
    const walk = (rows: readonly T[], level: number, path: [string, string][]) => {
      const id = grouping[level];
      const column = this.byId().get(id)!;
      const seen = new Map<string, T[]>();
      for (const row of rows) {
        const valueId = valueKey(nuiGridValue(column, row));
        (seen.get(valueId) ?? seen.set(valueId, []).get(valueId)!).push(row);
      }
      for (const [valueId, group] of seen) {
        const at: [string, string][] = [...path, [id, valueId]];
        keys.push(JSON.stringify(at));
        if (level + 1 < grouping.length) walk(group, level + 1, at);
      }
    };
    if (grouping.length) walk(this.sorted(), 0, []);
    return keys;
  }

  /** A column's aggregate over rows, as the column shows it; empty when it has none. */
  aggregate(column: NuiGridColumn<T>, rows: readonly T[]): string {
    const kind = column.aggregate;
    if (!kind) return '';
    const values = rows.map((row) => nuiGridValue(column, row)).filter((v) => !nuiGridEmpty(v));
    let result: unknown;
    if (typeof kind === 'function') result = kind(values, rows);
    else if (kind === 'count') {
      return new Intl.NumberFormat(this.locale()).format(values.length);
    } else if (!values.length) return '';
    else if (kind === 'sum' || kind === 'avg') {
      const sum = values.reduce<number>((total, value) => total + Number(value), 0);
      result = kind === 'sum' ? sum : sum / values.length;
    } else {
      const compare = this.comparators().get(column.id)!;
      result = values.reduce((best, value) =>
        (kind === 'min' ? compare(value, best) < 0 : compare(value, best) > 0) ? value : best,
      );
    }
    if (nuiGridEmpty(result)) return '';
    const format = this.formatters().get(column.id);
    return format &&
      (typeof result === 'number' || result instanceof Date || typeof kind !== 'function')
      ? format(result, rows[0])
      : String(result);
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
  readonly pageCount = computed(() =>
    this.paged() ? Math.max(1, Math.ceil(this.total() / this.pageSize())) : 1,
  );
  /** The page shown: the model's, kept inside the pages there are. */
  readonly currentPage = computed(() => Math.min(Math.max(0, this.page()), this.pageCount() - 1));

  /** The lines to draw: one page, or all of them. */
  readonly shown = computed<readonly NuiGridItem<T>[]>(() => {
    const items = this.display();
    if (this.mode() === 'server' || !this.paged()) return items;
    const start = this.currentPage() * this.pageSize();
    return items.slice(start, start + this.pageSize());
  });

  /** The rows drawn, without groups or details. */
  readonly view = computed<readonly T[]>(() =>
    this.shown().flatMap((item) => (item.kind === 'row' ? [item.row] : [])),
  );

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

  /** Selects every row of a group, or clears them. */
  toggleGroupRows(rows: readonly T[], selected?: boolean): void {
    if (this.selection() !== 'multiple') return;
    const keys = rows.map((row) => this.key(row));
    const now = selected ?? !keys.every((key) => this.selectedKeys().has(key));
    const inGroup = new Set(keys);
    const rest = this.selected().filter((key) => !inGroup.has(key));
    this.selected.set(now ? [...rest, ...keys] : rest);
  }

  /** Whether all of a group's rows are selected, some, or none. */
  groupSelection(rows: readonly T[]): 'all' | 'some' | 'none' {
    const selected = this.selectedKeys();
    let count = 0;
    for (const row of rows) if (selected.has(this.key(row))) count++;
    return count === 0 ? 'none' : count === rows.length ? 'all' : 'some';
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

  /** Moves the active cell, kept inside the grid: in the rows when the header isn't drawn. */
  setActive(row: number, col: number): void {
    const lastRow = this.shown().length - 1 + (this.shown().length ? this.footerRows() : 0);
    const firstRow = this.header() || lastRow < 0 ? -1 : 0;
    const lastCol = this.colCount() - 1;
    this.active.set({
      row: Math.max(firstRow, Math.min(lastRow, row)),
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

/** A value as a group's key: dates by their time, empty ones as one. */
function valueKey(value: unknown): string {
  if (nuiGridEmpty(value)) return '\u0000';
  if (value instanceof Date) return value.toISOString();
  return typeof value === 'object' ? JSON.stringify(value) : String(value);
}
