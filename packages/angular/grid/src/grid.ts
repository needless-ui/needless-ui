import { _IdGenerator } from '@angular/cdk/a11y';
import { isPlatformBrowser, NgTemplateOutlet } from '@angular/common';
import {
  afterNextRender,
  afterRenderEffect,
  ApplicationRef,
  booleanAttribute,
  Component,
  computed,
  contentChild,
  contentChildren,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  LOCALE_ID,
  model,
  output,
  PLATFORM_ID,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { NuiPersonality, NuiVirtualizer } from '@needless-ui/angular';
import { nuiParseNumber } from '@needless-ui/angular/number-field';
import { NuiPopover } from '@needless-ui/angular/popover';
import { NuiGridEngine, type NuiGridLayoutColumn } from './engine';
import { nuiGridDate, nuiGridEmpty, nuiGridFilterActive } from './format';
import { NuiGridPanel } from './panel';
import { NuiGridCell, NuiGridDetail, NuiGridEmpty, NuiGridHeader } from './templates';
import {
  NUI_GRID_LABELS,
  type NuiGridColumn,
  type NuiGridColumnState,
  type NuiGridEdit,
  type NuiGridFilter,
  type NuiGridItem,
  type NuiGridLabels,
  type NuiGridQuery,
  type NuiGridSort,
} from './types';
import { nuiXlsx } from './xlsx';
import type { NuiCsvOptions } from './format';

/** Width of the checkbox column, in pixels; the CSS draws it the same. */
const LEAD = 44;
/** Pixels per Alt+arrow when resizing from the keyboard. */
const STEP = 16;
/** Rows past which `virtual: 'auto'` renders only the ones in view. */
const AUTO_VIRTUAL = 100;
/** A row's height before it's measured. */
const ESTIMATE = 40;

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

const defaultId = (row: unknown) => (row as { id?: unknown } | null)?.id ?? row;
const pad = (n: number) => String(n).padStart(2, '0');

/**
 * A data grid on a native table: sorting (by several columns), filters and search,
 * pages or virtual scrolling, row selection, editing, and columns you can resize,
 * move, pin and hide. Every cell is reachable from the keyboard.
 *
 * ```html
 * <nui-grid label="Orders" [(rows)]="orders" [columns]="columns" selection="multiple"
 *           [(selected)]="picked" [pageSize]="25" />
 * ```
 *
 * State lives in models (`sort`, `filters`, `search`, `page`, `columnState`,
 * `selected`), so it can be saved, restored and sent to a server.
 */
@Component({
  selector: 'nui-grid',
  imports: [NgTemplateOutlet, NuiPopover, NuiGridPanel],
  hostDirectives: [{ directive: NuiPersonality, inputs: ['density', 'corners', 'radius'] }],
  host: { class: 'nui-grid', '[attr.data-cards]': 'cards() || null' },
  templateUrl: './grid.html',
})
export class NuiGrid<T> {
  /** The data. Edits replace rows (immutably), so bind with `[(rows)]` to keep them. */
  readonly rows = model.required<readonly T[]>();
  readonly columns = input.required<readonly NuiGridColumn<T>[]>();
  /** A row's key, for selection and tracking. Defaults to `row.id`, or the row itself. */
  readonly rowId = input<(row: T) => unknown>(defaultId);
  /** The grid's accessible name. */
  readonly label = input('');
  readonly selection = input<'none' | 'single' | 'multiple'>('none');
  /** The keys of the selected rows. */
  readonly selected = model<readonly unknown[]>([]);
  readonly sort = model<readonly NuiGridSort[]>([]);
  /** A filter per column id. */
  readonly filters = model<Readonly<Record<string, NuiGridFilter>>>({});
  /** Words that must all appear in a row's visible cells. */
  readonly search = model('');
  /** Rows per page, or 0 for one scrolling list. */
  readonly pageSize = model(0);
  /** The page shown, from 0. */
  readonly page = model(0);
  readonly pageSizes = input<readonly number[]>([10, 25, 50, 100]);
  /** Render only the rows in view: always, never, or past 100 rows without pages. */
  readonly virtual = input<boolean | 'auto'>('auto');
  /** A CSS length that bounds the grid's height; it scrolls inside. */
  readonly height = input<string | null>(null);
  /** Each column's order, width, pinning and visibility, as changed. Save it to restore it. */
  readonly columnState = model<readonly NuiGridColumnState[]>([]);
  /** `server`: rows come sorted, filtered and paged; the grid only emits what's asked for. */
  readonly mode = input<'client' | 'server'>('client');
  /** The number of rows on the server, in `server` mode. */
  readonly total = input<number | null>(null);
  readonly loading = input(false, { transform: booleanAttribute });
  /** Formats numbers and dates, and reads typed numbers. Defaults to the app's locale. */
  readonly locale = input(inject(LOCALE_ID));
  /** Texts to replace, for translation. */
  readonly labels = input<Partial<NuiGridLabels>>({});
  /** A row was opened: Enter on a cell that can't be edited, or a double click. */
  readonly rowActivate = output<T>();
  /** An edit was committed; `rows` already has it. */
  readonly cellEdit = output<NuiGridEdit<T>>();
  /** The sort, filters, search or page changed (and once at the start), for fetching. */
  readonly queryChange = output<NuiGridQuery>();
  /** Columns to group rows by, outermost first. Groups are rows of their own, with totals. */
  readonly groupBy = model<readonly string[]>([]);
  /** Keys of the groups closed; groups start open. */
  readonly collapsed = model<readonly string[]>([]);
  /** A row's children: the grid shows tree data, rows open to show theirs. */
  readonly children = input<((row: T) => readonly T[] | null | undefined) | null>(null);
  /** Keys of the rows open in tree data; they start closed. */
  readonly expanded = model<readonly unknown[]>([]);
  /** Keys of the rows whose details are open, with an `nuiGridDetail` template. */
  readonly details = model<readonly unknown[]>([]);
  /** A row after the data with each column's aggregate over every row that passes the filters. */
  readonly totals = input(false, { transform: booleanAttribute });
  /** Cells whose text changes when `rows` do flash for a moment. */
  readonly flash = input(false, { transform: booleanAttribute });
  /** `table`; `list` shows each row as a card; `auto` does below a width. */
  readonly layout = input<'table' | 'list' | 'auto'>('table');

  protected readonly text = computed<NuiGridLabels>(() => {
    const labels = this.labels();
    return {
      ...NUI_GRID_LABELS,
      ...labels,
      operators: { ...NUI_GRID_LABELS.operators, ...labels.operators },
    };
  });
  protected readonly selectable = computed(() => this.selection() !== 'none');
  protected readonly detailDef = contentChild(NuiGridDetail);
  protected readonly hasDetails = computed(() => !!this.detailDef());
  /** How many columns come before the data: the checkboxes and the details' toggles. */
  protected readonly lead = computed(
    () => (this.selectable() ? 1 : 0) + (this.hasDetails() ? 1 : 0),
  );
  protected readonly showTotals = computed(() => this.totals() && this.engine.aggregated());
  /** Rows show as cards: always with `list`, and below 36rem with `auto`. */
  protected readonly cards = computed(() => {
    const layout = this.layout();
    return (
      layout === 'list' ||
      (layout === 'auto' && this.engine.containerWidth() > 0 && this.engine.containerWidth() < 576)
    );
  });

  /** The model: filtering, sorting, paging, selection, columns and the active cell. */
  readonly engine: NuiGridEngine<T> = new NuiGridEngine<T>({
    rows: this.rows,
    columns: this.columns,
    rowId: this.rowId,
    sort: this.sort,
    filters: this.filters,
    search: this.search,
    page: this.page,
    pageSize: this.pageSize,
    columnState: this.columnState,
    selected: this.selected,
    selection: this.selection,
    mode: this.mode,
    total: this.total,
    locale: this.locale,
    words: computed(() => ({ yes: this.text().yes, no: this.text().no })),
    leading: computed(() => this.lead() * LEAD),
    leadingCount: this.lead,
    groupBy: this.groupBy,
    collapsed: this.collapsed,
    expanded: this.expanded,
    details: this.details,
    children: this.children,
    hasDetails: this.hasDetails,
    footerRows: computed(() => (this.showTotals() ? 1 : 0)),
  });

  private readonly cellDefs = contentChildren(NuiGridCell);
  private readonly headerDefs = contentChildren(NuiGridHeader);
  protected readonly emptyDef = contentChild(NuiGridEmpty);
  protected readonly cellTemplates = computed(
    () => new Map(this.cellDefs().map((def) => [def.column(), def.template])),
  );
  protected readonly headerTemplates = computed(
    () => new Map(this.headerDefs().map((def) => [def.column(), def.template])),
  );

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly injector = inject(Injector);
  private readonly scrollRef = viewChild.required<ElementRef<HTMLElement>>('scroll');
  private readonly headRef = viewChild.required<ElementRef<HTMLElement>>('head');
  private readonly panelRef = viewChild.required(NuiPopover);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  /** Prefix for the ids the grid's ARIA references use. */
  protected readonly id = inject(_IdGenerator).getId('nui-grid-');
  protected readonly errorId = `${this.id}-error`;

  // Rendering ----------------------------------------------------------------

  private readonly scrollTop = signal(0);
  private readonly viewport = signal(0);
  private readonly headerHeight = signal(0);
  private readonly measured = signal(0);

  /** Printing: every line, on one page, with nothing virtual. */
  protected readonly printing = signal(false);

  protected readonly virtualized = computed(() => {
    if (this.printing()) return false;
    const virtual = this.virtual();
    if (virtual !== 'auto') return virtual;
    return !this.engine.paged() && this.engine.shown().length > AUTO_VIRTUAL;
  });

  private readonly virtualizer = computed(
    () => new NuiVirtualizer({ count: this.engine.shown().length, estimate: ESTIMATE }),
  );

  /** The lines in view (and the active one wherever it is), with gaps for the rest. */
  protected readonly items = computed<Item<T>[]>(() => {
    const lines = this.printing() ? this.engine.display() : this.engine.shown();
    if (!this.virtualized()) return lines.map((line, index) => ({ key: line.key, line, index }));
    this.measured();
    const active = this.engine.active().row;
    const top = Math.max(0, this.scrollTop() - this.headerHeight());
    return this.virtualizer()
      .slice(top, this.viewport() || 480, active >= 0 && active < lines.length ? [active] : [])
      .map((item) =>
        'gap' in item
          ? { key: `gap:${item.at}`, gap: item.gap }
          : { key: lines[item.index].key, line: lines[item.index], index: item.index },
      );
  });

  /** Cells flashing after their text changed, by row key and column. */
  protected readonly flashing = signal<ReadonlyMap<unknown, ReadonlySet<string>>>(new Map());

  /** A virtual list needs a bounded height: 32rem unless `height` says otherwise. */
  protected readonly maxHeight = computed(
    () => this.height() ?? (this.virtualized() ? '32rem' : null),
  );

  protected readonly filtered = computed(
    () =>
      !!this.engine.search().trim() ||
      Object.values(this.engine.filters()).some((filter) => nuiGridFilterActive(filter)),
  );

  /** One per column, for the skeleton rows. */
  protected readonly skeleton = computed(() =>
    Array.from({ length: this.engine.colCount() }, (_, i) => i),
  );

  // Editing, panel, drag and announcements -------------------------------------

  protected readonly editing = signal<Editing<T> | null>(null);
  protected readonly panelColumn = signal<string | null>(null);
  protected readonly drop = signal<{ id: string; side: 'before' | 'after' } | null>(null);
  protected readonly status = signal('');
  private dragged = false;
  private pendingFocus: 'cell' | 'editor' | 'panel' | null = null;
  private readonly focusTick = signal(0);

  /** The pager's choices, with the current size among them even when it isn't one. */
  protected readonly sizes = computed(() =>
    [...new Set([...this.pageSizes(), this.pageSize()])].sort((a, b) => a - b),
  );

  protected readonly pageRange = computed(() => {
    const total = this.engine.total();
    const size = this.pageSize();
    const page = this.engine.currentPage();
    return this.text().range(
      total ? page * size + 1 : 0,
      Math.min(total, (page + 1) * size),
      total,
    );
  });

  constructor() {
    const engine = this.engine;
    const destroyRef = inject(DestroyRef);

    // Emit the query at the start and on every change, so a server can fetch.
    effect(() => {
      const query = engine.query();
      untracked(() => this.queryChange.emit(query));
    });

    // Keep the active cell inside the grid when rows or columns go.
    effect(() => {
      engine.shown();
      engine.colCount();
      untracked(() => engine.setActive(engine.active().row, engine.active().col));
    });

    // Measure the rows that rendered; a row taller or shorter than guessed re-lays the list.
    afterRenderEffect(() => {
      this.items();
      if (!this.virtualized()) return;
      const list = untracked(this.virtualizer);
      let changed = false;
      for (const row of this.scrollRef().nativeElement.querySelectorAll<HTMLElement>(
        'tbody > tr[data-index]',
      )) {
        changed = list.measure(Number(row.dataset['index']), row.offsetHeight) || changed;
      }
      if (changed) this.measured.update((n) => n + 1);
    });

    // Move focus where it was asked to go, once that's rendered.
    afterRenderEffect(() => {
      this.focusTick();
      const pending = this.pendingFocus;
      if (!pending) return;
      this.pendingFocus = null;
      untracked(() => this.applyFocus(pending));
    });

    // Printing, from the page's menu too: every line, rendered before the page is laid out.
    const appRef = inject(ApplicationRef);
    afterNextRender(() => {
      const view = this.host.ownerDocument.defaultView!;
      const before = () => {
        this.printing.set(true);
        appRef.tick();
      };
      const after = () => this.printing.set(false);
      view.addEventListener('beforeprint', before);
      view.addEventListener('afterprint', after);
      destroyRef.onDestroy(() => {
        view.removeEventListener('beforeprint', before);
        view.removeEventListener('afterprint', after);
      });
    });

    // Cells that changed in new rows flash, among the ones drawn.
    let previous = new Map<unknown, T>();
    effect(() => {
      const rows = this.rows();
      const on = this.flash();
      untracked(() => {
        const before = previous;
        previous = new Map(rows.map((row) => [engine.key(row), row]));
        if (!on || !before.size || !this.browser) return;
        const changed = new Map<unknown, Set<string>>();
        for (const item of this.items()) {
          if ('gap' in item || item.line.kind !== 'row') continue;
          const key = item.line.key;
          const now = previous.get(key);
          const old = before.get(key);
          if (!now || !old || now === old) continue;
          for (const column of engine.layout()) {
            if (engine.text(column.column, old) === engine.text(column.column, now)) continue;
            (changed.get(key) ?? changed.set(key, new Set()).get(key)!).add(column.id);
          }
        }
        if (!changed.size) return;
        this.flashing.update((current) => {
          const next = new Map(current);
          for (const [key, ids] of changed)
            next.set(key, new Set([...(next.get(key) ?? []), ...ids]));
          return next;
        });
        setTimeout(() => {
          this.flashing.update((current) => {
            const next = new Map(current);
            for (const [key, ids] of changed) {
              const left = [...(next.get(key) ?? [])].filter((id) => !ids.has(id));
              if (left.length) next.set(key, new Set(left));
              else next.delete(key);
            }
            return next;
          });
        }, 1200);
      });
    });

    afterNextRender(() => {
      const scroller = this.scrollRef().nativeElement;
      const head = this.headRef().nativeElement;
      const observer = new ResizeObserver(() => {
        this.viewport.set(scroller.clientHeight);
        engine.containerWidth.set(scroller.clientWidth);
        this.headerHeight.set(head.offsetHeight);
      });
      observer.observe(scroller);
      observer.observe(head);
      destroyRef.onDestroy(() => observer.disconnect());
    });

    // Announce how many rows are left once filtering or searching settles.
    if (this.browser) {
      let timer: ReturnType<typeof setTimeout> | undefined;
      let first = true;
      effect(() => {
        const total = engine.total();
        engine.filters();
        engine.search();
        if (first) {
          first = false;
          return;
        }
        clearTimeout(timer);
        timer = setTimeout(() => this.announce(untracked(this.text).rows(total)), 700);
      });
      destroyRef.onDestroy(() => clearTimeout(timer));
    }
  }

  /** The filtered, sorted rows (every page) of the visible columns, as CSV. */
  exportCsv(options?: NuiCsvOptions & { formatted?: boolean }): string {
    return this.engine.csv(options);
  }

  /**
   * The filtered, sorted rows (every page) of the visible columns, as a
   * spreadsheet (.xlsx): typed cells (numbers, dates, booleans) with the
   * columns' number formats, and a bold, frozen header with filters.
   */
  exportXlsx(options: { sheet?: string } = {}): Blob {
    const engine = this.engine;
    const layout = engine.layout();
    const rows = this.mode() === 'server' ? this.rows() : engine.sorted();
    const cell = (column: NuiGridColumn<T>, row: T): unknown => {
      const value = engine.value(column, row);
      switch (column.type ?? 'text') {
        case 'number':
          return typeof value === 'number' ? value : null;
        case 'date':
          return nuiGridDate(value);
        case 'boolean':
          return nuiGridEmpty(value) ? null : !!value;
        default:
          return engine.text(column, row);
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
    const bytes = nuiXlsx({
      name: options.sheet ?? (this.label() || 'Sheet1'),
      columns: layout.map((column) => ({
        header: column.column.header,
        width: Math.max(8, Math.round(column.width / 7)),
        format: format(column.column),
      })),
      rows: rows.map((row) => layout.map((column) => cell(column.column, row))),
    });
    return new Blob([bytes as BlobPart], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
  }

  /** Prints the grid: every row that passes the filters, on as many pages as it takes. */
  print(): void {
    if (!this.browser) return;
    this.printing.set(true);
    afterNextRender(
      () => {
        this.host.ownerDocument.defaultView!.print();
      },
      { injector: this.injector },
    );
  }

  /** Opens every group and every row with children, or closes them all. */
  expandAll(open = true): void {
    this.engine.expandAll(open);
  }

  /** Focuses a cell: `row` -1 is the header, `col` counts the checkbox column. */
  focusCell(row: number, col: number): void {
    this.go(row, col);
  }

  /** Clears every filter and the search. */
  clearFilters(): void {
    this.engine.clearFilters();
  }

  // Template helpers -----------------------------------------------------------

  protected tab(row: number, col: number): number {
    const active = this.engine.active();
    return active.row === row && active.col === col ? 0 : -1;
  }

  /** A detail row's one cell takes the tab stop on any column of its row. */
  protected tabRow(row: number): number {
    return this.engine.active().row === row ? 0 : -1;
  }

  protected columnAt(col: number): NuiGridLayoutColumn<T> | null {
    return this.engine.layout()[col - this.lead()] ?? null;
  }

  /** Only the first sorted column carries `aria-sort`, as ARIA asks. */
  protected ariaSort(column: NuiGridLayoutColumn<T>): string | null {
    if (!column.sort || column.sort.priority !== 1) return null;
    return column.sort.direction === 'asc' ? 'ascending' : 'descending';
  }

  protected isFlashing(key: unknown, column: string): boolean {
    return !!this.flashing().get(key)?.has(column);
  }

  /** The words read before an aggregate. */
  protected aggregateLabel(column: NuiGridColumn<T>): string {
    const kind = column.aggregate;
    return this.text().aggregates[typeof kind === 'function' ? 'custom' : (kind ?? 'custom')];
  }

  protected groupHeader(line: NuiGridItem<T> & { kind: 'group' }): string {
    const column = this.engine.byId().get(line.column)!;
    const text = line.rows.length ? this.engine.text(column, line.rows[0]) : '';
    return this.text().group(column.header, text || '—', line.rows.length);
  }

  protected onToggle(line: NuiGridItem<T>, event: Event): void {
    event.stopPropagation();
    this.engine.toggleItem(line);
  }

  protected onDetailToggle(row: T, event: Event): void {
    event.stopPropagation();
    this.engine.toggleDetails(row);
  }

  protected onGroupCheck(line: NuiGridItem<T> & { kind: 'group' }, event: Event): void {
    event.stopPropagation();
    this.engine.toggleGroupRows(line.rows);
  }

  protected isEditing(row: T, column: string): boolean {
    const editing = this.editing();
    return !!editing && editing.column === column && editing.key === this.engine.key(row);
  }

  /** An id for a header's label; column ids may hold spaces, which ARIA references can't. */
  protected headerId(column: string): string {
    return `${this.id}-header-${column.replace(/\s+/g, '_')}`;
  }

  // Pointer ------------------------------------------------------------------------

  protected onFocusIn(event: FocusEvent): void {
    const cell = (event.target as HTMLElement).closest<HTMLElement>('[data-row][data-col]');
    if (!cell || !this.host.contains(cell)) return;
    const row = Number(cell.dataset['row']);
    const col = Number(cell.dataset['col']);
    const active = this.engine.active();
    if (active.row !== row || active.col !== col) this.engine.active.set({ row, col });
  }

  protected onHeaderClick(column: NuiGridLayoutColumn<T>, event: MouseEvent): void {
    if (this.dragged) {
      this.dragged = false;
      return;
    }
    if ((event.target as HTMLElement).closest('.nui-grid-menu-button, .nui-grid-resize')) return;
    this.sortColumn(column, event.shiftKey);
  }

  protected onRowClick(row: T, event: MouseEvent): void {
    if ((event.target as HTMLElement).closest('input, button, a, select, textarea, label')) return;
    const mode = this.selection();
    if (mode === 'single') this.engine.toggle(row, true);
    else if (mode === 'multiple' && event.shiftKey) this.engine.selectRange(row);
    else if (mode === 'multiple' && (event.ctrlKey || event.metaKey)) this.engine.toggle(row);
  }

  protected onCellDblclick(row: T, index: number, col: number): void {
    if (!this.startEdit(index, col)) this.rowActivate.emit(row);
  }

  protected onCheck(row: T, event: MouseEvent): void {
    event.stopPropagation();
    if (event.shiftKey) this.engine.selectRange(row);
    else this.engine.toggle(row);
  }

  protected openPanel(id: string, event?: Event): void {
    event?.stopPropagation();
    const header = this.headerCell(id);
    if (!header) return;
    this.panelColumn.set(id);
    this.panelRef().show(header);
    this.requestFocus('panel');
  }

  /** When the panel closes, focus goes back to its column's header if it was inside. */
  protected onPanelChange(open: boolean): void {
    if (open) return;
    const focus = this.host.ownerDocument.activeElement;
    const inside =
      !focus || focus === this.host.ownerDocument.body || this.panelRef().element.contains(focus);
    const id = this.panelColumn();
    if (inside && id) {
      const index = this.engine.layout().findIndex((column) => column.id === id);
      if (index >= 0) this.go(-1, this.lead() + index);
    }
  }

  protected hideColumn(id: string): void {
    this.panelRef().hide();
    const { col } = this.engine.active();
    this.engine.hide(id);
    this.go(-1, col);
  }

  /** Drag the header to move the column among its pinned group. */
  protected onHeaderPointerDown(column: NuiGridLayoutColumn<T>, event: PointerEvent): void {
    if (event.button !== 0 || column.column.reorderable === false) return;
    if ((event.target as HTMLElement).closest('.nui-grid-menu-button, .nui-grid-resize')) return;
    const header = event.currentTarget as HTMLElement;
    const view = header.ownerDocument.defaultView!;
    const startX = event.clientX;
    let dragging = false;
    const move = (e: PointerEvent) => {
      if (!dragging && Math.abs(e.clientX - startX) < 6) return;
      if (!dragging) {
        dragging = true;
        header.dataset['dragging'] = '';
      }
      this.drop.set(this.dropTarget(column, e.clientX));
    };
    const end = () => {
      view.removeEventListener('pointermove', move);
      view.removeEventListener('pointerup', end);
      view.removeEventListener('pointercancel', end);
      delete header.dataset['dragging'];
      const drop = this.drop();
      this.drop.set(null);
      if (!dragging) return;
      // The click that follows the drop isn't a sort.
      this.dragged = true;
      view.setTimeout(() => (this.dragged = false));
      if (drop) this.engine.moveTo(column.id, drop.id, drop.side);
    };
    view.addEventListener('pointermove', move);
    view.addEventListener('pointerup', end);
    view.addEventListener('pointercancel', end);
  }

  protected startResize(column: NuiGridLayoutColumn<T>, event: PointerEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const handle = event.target as HTMLElement;
    // A pointer that isn't live (a synthetic event, one already lifted) can't be captured.
    try {
      handle.setPointerCapture(event.pointerId);
    } catch {}
    const startX = event.clientX;
    const start = column.width;
    const sign = this.rtl() ? -1 : 1;
    const move = (e: PointerEvent) =>
      this.engine.resize(column.id, start + (e.clientX - startX) * sign);
    const end = () => {
      handle.removeEventListener('pointermove', move);
      handle.removeEventListener('pointerup', end);
      handle.removeEventListener('pointercancel', end);
    };
    handle.addEventListener('pointermove', move);
    handle.addEventListener('pointerup', end);
    handle.addEventListener('pointercancel', end);
  }

  /** Fits a column to the widest of its rendered cells. */
  fit(id: string): void {
    const index = this.engine.layout().findIndex((column) => column.id === id);
    if (index < 0 || !this.browser) return;
    const scroller = this.scrollRef().nativeElement;
    const range = scroller.ownerDocument.createRange();
    let widest = 0;
    for (const cell of scroller.querySelectorAll<HTMLElement>(
      `[data-col="${this.lead() + index}"]`,
    )) {
      const style = getComputedStyle(cell);
      const padding = parseFloat(style.paddingInlineStart) + parseFloat(style.paddingInlineEnd);
      const content = cell.querySelector('.nui-grid-header-label') ?? cell;
      range.selectNodeContents(content);
      // Headers also hold the sort mark and the panel button.
      const extra = content === cell ? 0 : 56;
      widest = Math.max(widest, range.getBoundingClientRect().width + padding + extra);
    }
    this.engine.resize(id, Math.ceil(widest) + 2);
  }

  protected onScroll(): void {
    this.scrollTop.set(this.scrollRef().nativeElement.scrollTop);
  }

  // Keyboard -----------------------------------------------------------------------

  protected onKeydown(event: KeyboardEvent): void {
    if (this.editing() || event.isComposing) return;
    const target = event.target as HTMLElement;
    // Keys typed into a field of a custom cell stay there.
    if (target.matches('input:not([type="checkbox"]), textarea, select, [contenteditable]')) return;
    const engine = this.engine;
    const { row, col } = engine.active();
    const column = this.columnAt(col);
    const header = row < 0;
    const mod = event.ctrlKey || event.metaKey;
    const lines = engine.shown();
    const line = lines[row] as NuiGridItem<T> | undefined;
    const data = line?.kind === 'row' ? line.row : undefined;
    const last = lines.length - 1 + (lines.length && this.showTotals() ? 1 : 0);
    // Groups and rows with children open and close from their first data cell.
    const toggles =
      !!line &&
      (line.kind === 'group' || (line.kind === 'row' && line.expandable)) &&
      col <= this.lead();
    switch (event.key) {
      case 'ArrowDown':
        if (header && event.altKey) {
          if (column) this.openPanel(column.id);
          break;
        }
        this.go(row + 1, col);
        break;
      case 'ArrowUp':
        this.go(row - 1, col);
        break;
      case 'ArrowLeft':
      case 'ArrowRight': {
        const forward = (event.key === 'ArrowRight') !== this.rtl();
        if (header && event.altKey && column) {
          const delta = forward ? 1 : -1;
          if (event.shiftKey) {
            if (!engine.canMove(column.id, delta)) break;
            engine.move(column.id, delta);
            this.go(-1, col + delta);
          } else if (column.column.resizable !== false) {
            engine.resize(column.id, column.width + delta * STEP);
          }
          break;
        }
        if (!header && line && (line.kind === 'group' || toggles)) {
          const expandable = line.kind === 'group' || (line.kind === 'row' && line.expandable);
          const open = line.expanded;
          if (forward && expandable && !open) {
            engine.toggleItem(line, true);
            break;
          }
          if (!forward && expandable && open) {
            engine.toggleItem(line, false);
            break;
          }
          if (!forward && line.level > 0 && col <= this.lead()) {
            // Left again: up to the group or row this one is in.
            for (let i = row - 1; i >= 0; i--) {
              const above = lines[i];
              if (above.kind !== 'detail' && above.level < line.level) {
                this.go(i, col);
                break;
              }
            }
            break;
          }
        }
        this.go(row, col + (forward ? 1 : -1));
        break;
      }
      case 'Home':
        this.go(mod ? -1 : row, 0);
        break;
      case 'End':
        this.go(mod ? last : row, engine.colCount() - 1);
        break;
      case 'PageDown':
        this.go(Math.min(last, row + this.pageRows()), col);
        break;
      case 'PageUp':
        this.go(header ? -1 : Math.max(0, row - this.pageRows()), col);
        break;
      case 'Enter':
      case ' ':
        if (header) {
          if (column) this.sortColumn(column, event.shiftKey);
          else if (this.selection() === 'multiple') engine.toggleAll();
          break;
        }
        if (line?.kind === 'group') {
          if (event.key === ' ' && this.selection() === 'multiple')
            engine.toggleGroupRows(line.rows);
          else engine.toggleItem(line);
          break;
        }
        if (
          data &&
          this.hasDetails() &&
          col === (this.selectable() ? 1 : 0) &&
          event.key === 'Enter'
        ) {
          engine.toggleDetails(data);
          break;
        }
        if (!data) return;
        if (event.key === ' ') {
          if (!this.selectable()) return;
          if (event.shiftKey) engine.selectRange(data);
          else engine.toggle(data);
          break;
        }
        if (!column) {
          if (this.selectable()) engine.toggle(data);
        } else if (!this.startEdit(row, col)) {
          this.rowActivate.emit(data);
        }
        break;
      case 'F2':
        if (!data || !this.startEdit(row, col)) return;
        break;
      case 'ContextMenu':
        if (!header || !column) return;
        this.openPanel(column.id);
        break;
      case 'F10':
        if (!event.shiftKey || !header || !column) return;
        this.openPanel(column.id);
        break;
      case 'a':
      case 'A':
        if (!mod || this.selection() !== 'multiple') return;
        if (!engine.allSelected()) engine.toggleAll();
        break;
      default:
        // Typing on a cell that can be edited starts editing with what's typed.
        if (!data || event.key.length !== 1 || mod || event.altKey) return;
        if (!this.startEdit(row, col, event.key)) return;
    }
    event.preventDefault();
  }

  // Editing ------------------------------------------------------------------------

  /** Starts editing a cell; a boolean cell just flips. Returns whether it could. */
  private startEdit(index: number, col: number, typed?: string): boolean {
    const column = this.columnAt(col);
    const line = this.engine.shown()[index];
    const row = line?.kind === 'row' ? line.row : null;
    if (!column || !row || !this.engine.editable(column.column, row)) return false;
    if (column.type === 'boolean') {
      if (typed !== undefined) return false;
      this.commitValue(row, column.column, !this.engine.value(column.column, row));
      return true;
    }
    this.editing.set({
      key: this.engine.key(row),
      row,
      index,
      column: column.id,
      text:
        typed !== undefined && column.type !== 'enum' ? typed : this.editText(column.column, row),
      error: null,
    });
    this.requestFocus('editor');
    return true;
  }

  protected onEditorInput(text: string): void {
    const editing = this.editing();
    if (editing) this.editing.set({ ...editing, text, error: null });
  }

  protected onEditorKeydown(event: KeyboardEvent): void {
    // The editor has the keys now: the grid's navigation waits.
    event.stopPropagation();
    if (event.isComposing) return;
    const { row, col } = this.engine.active();
    if (event.key === 'Enter') {
      event.preventDefault();
      if (this.commitEdit()) this.requestFocus('cell');
    } else if (event.key === 'Escape') {
      event.preventDefault();
      this.editing.set(null);
      this.requestFocus('cell');
    } else if (event.key === 'Tab') {
      event.preventDefault();
      if (this.commitEdit()) this.go(row, col + (event.shiftKey ? -1 : 1));
    }
  }

  /** Leaving the editor commits a valid value and drops an invalid one. */
  protected onEditorBlur(): void {
    if (this.editing() && !this.commitEdit()) this.editing.set(null);
  }

  /** Commits the edit if its value is valid; otherwise shows why. */
  private commitEdit(): boolean {
    const editing = this.editing();
    if (!editing) return true;
    const column = this.engine.byId().get(editing.column)!;
    const previous = this.engine.value(column, editing.row);
    const parsed = this.parse(column, editing.text, previous);
    const error =
      'error' in parsed ? parsed.error : (column.validate?.(parsed.value, editing.row) ?? null);
    if (error) {
      this.editing.set({ ...editing, error });
      this.announce(error);
      return false;
    }
    this.editing.set(null);
    this.commitValue(editing.row, column, (parsed as { value: unknown }).value);
    return true;
  }

  private commitValue(row: T, column: NuiGridColumn<T>, value: unknown): void {
    const previous = this.engine.value(column, row);
    const same =
      previous === value ||
      (previous instanceof Date &&
        value instanceof Date &&
        previous.getTime() === value.getTime()) ||
      (nuiGridEmpty(previous) && nuiGridEmpty(value));
    if (same) return;
    const error = column.validate?.(value, row);
    if (error) {
      this.announce(error);
      return;
    }
    const result = this.engine.commit(row, column, value);
    this.cellEdit.emit({ ...result, column: column.id, value });
  }

  /** A value as the editor shows it. */
  private editText(column: NuiGridColumn<T>, row: T): string {
    const value = this.engine.value(column, row);
    switch (column.type ?? 'text') {
      case 'number':
        return typeof value === 'number' && isFinite(value)
          ? new Intl.NumberFormat(this.locale(), {
              useGrouping: false,
              maximumFractionDigits: 20,
            }).format(value)
          : '';
      case 'date': {
        const date = nuiGridDate(value);
        return date
          ? `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
          : '';
      }
      case 'enum':
        return String(column.options?.findIndex((option) => option.value === value) ?? -1);
      default:
        return nuiGridEmpty(value) ? '' : String(value);
    }
  }

  /** What the editor's text means, in the same shape as the value it replaces. */
  private parse(
    column: NuiGridColumn<T>,
    text: string,
    previous: unknown,
  ): { value: unknown } | { error: string } {
    switch (column.type ?? 'text') {
      case 'number': {
        if (!text.trim()) return { value: null };
        const number = nuiParseNumber(text, this.locale());
        return number === null ? { error: this.text().invalidNumber } : { value: number };
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

  // Pages ----------------------------------------------------------------------------

  protected goToPage(page: number): void {
    this.page.set(Math.max(0, Math.min(this.engine.pageCount() - 1, page)));
    this.scrollRef().nativeElement.scrollTop = 0;
    this.announce(this.pageRange());
  }

  protected setPageSize(size: number): void {
    this.pageSize.set(size);
    this.page.set(0);
  }

  // Focus --------------------------------------------------------------------------

  private go(row: number, col: number): void {
    this.engine.setActive(row, col);
    this.requestFocus('cell');
  }

  private requestFocus(kind: 'cell' | 'editor' | 'panel'): void {
    this.pendingFocus = kind;
    this.focusTick.update((n) => n + 1);
  }

  private applyFocus(kind: 'cell' | 'editor' | 'panel'): void {
    if (kind === 'panel') {
      this.panelRef()
        .element.querySelector<HTMLElement>('button:not(:disabled), select, input')
        ?.focus();
      return;
    }
    if (kind === 'editor') {
      const editor = this.scrollRef().nativeElement.querySelector<HTMLElement>('.nui-grid-editor');
      editor?.focus();
      if (editor instanceof HTMLInputElement && editor.type === 'text') {
        editor.setSelectionRange(editor.value.length, editor.value.length);
      }
      return;
    }
    const { row, col } = this.engine.active();
    const scroller = this.scrollRef().nativeElement;
    // A detail row has one cell: whatever the column, focus goes there.
    const cell =
      scroller.querySelector<HTMLElement>(`[data-row="${row}"][data-col="${col}"]`) ??
      scroller.querySelector<HTMLElement>(`[data-row="${row}"][data-col]`);
    if (!cell) return;
    cell.focus({ preventScroll: true });
    this.reveal(cell);
  }

  /** Scrolls a cell into view: below the header, and clear of pinned columns. */
  private reveal(cell: HTMLElement): void {
    const scroller = this.scrollRef().nativeElement;
    const view = scroller.getBoundingClientRect();
    const box = cell.getBoundingClientRect();
    const inHeader = !!cell.closest('thead');
    let dy = 0;
    if (!inHeader) {
      const top = view.top + scroller.clientTop + this.headerHeight();
      const bottom = view.top + scroller.clientTop + scroller.clientHeight;
      if (box.top < top) dy = box.top - top;
      else if (box.bottom > bottom) dy = box.bottom - bottom;
    }
    let dx = 0;
    if (!cell.dataset['pinned']) {
      const layout = this.engine.layout();
      const width = (pinned: 'start' | 'end') =>
        layout.filter((c) => c.pinned === pinned).reduce((sum, c) => sum + c.width, 0);
      const start = this.engine.leading() + width('start');
      const end = width('end');
      const rtl = this.rtl();
      const left = view.left + scroller.clientLeft + (rtl ? end : start);
      const right = view.left + scroller.clientLeft + scroller.clientWidth - (rtl ? start : end);
      if (box.left < left) dx = box.left - left;
      else if (box.right > right) dx = box.right - right;
    }
    if (dx || dy) scroller.scrollBy({ top: dy, left: dx, behavior: 'instant' });
  }

  // Helpers ------------------------------------------------------------------------

  private sortColumn(column: NuiGridLayoutColumn<T>, add: boolean): void {
    if (column.column.sortable === false) return;
    this.engine.toggleSort(column.id, add);
    const sort = this.engine.sort().find((s) => s.column === column.id);
    const text = this.text();
    this.announce(
      !sort
        ? text.sortCleared
        : sort.direction === 'asc'
          ? text.sortedAscending(column.column.header)
          : text.sortedDescending(column.column.header),
    );
  }

  private headerCell(id: string): HTMLElement | null {
    return this.headRef().nativeElement.querySelector<HTMLElement>(
      `th[data-column="${CSS.escape(id)}"]`,
    );
  }

  private dropTarget(
    column: NuiGridLayoutColumn<T>,
    x: number,
  ): { id: string; side: 'before' | 'after' } | null {
    const rtl = this.rtl();
    for (const other of this.engine.layout()) {
      if (other.id === column.id || other.pinned !== column.pinned) continue;
      if (other.column.reorderable === false) continue;
      const box = this.headerCell(other.id)?.getBoundingClientRect();
      if (!box || x < box.left || x > box.right) continue;
      const firstHalf = x < box.left + box.width / 2;
      return { id: other.id, side: firstHalf !== rtl ? 'before' : 'after' };
    }
    return null;
  }

  private pageRows(): number {
    return Math.max(1, Math.floor((this.viewport() - this.headerHeight()) / ESTIMATE));
  }

  private rtl(): boolean {
    return this.host.ownerDocument.defaultView?.getComputedStyle(this.host).direction === 'rtl';
  }

  /** Says something through the polite status region, even the same thing twice. */
  private announce(message: string): void {
    this.status.set(this.status() === message ? `${message} ` : message);
  }
}
