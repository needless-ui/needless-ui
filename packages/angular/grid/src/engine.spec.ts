import { signal } from '@angular/core';
import { NuiGridEngine } from './engine';
import type { NuiGridColumn, NuiGridSort } from './types';

interface Order {
  id: number;
  customer: string;
  total: number | null;
  status: 'pending' | 'shipped';
  placed: string;
}

const orders: Order[] = [
  { id: 1, customer: 'Zoë Müller', total: 120, status: 'shipped', placed: '2026-09-01' },
  { id: 2, customer: 'Ada Lovelace', total: 80, status: 'pending', placed: '2026-09-03' },
  { id: 3, customer: 'Grace Hopper', total: null, status: 'shipped', placed: '2026-09-02' },
  { id: 4, customer: 'Alan Turing', total: 80, status: 'shipped', placed: '2026-09-04' },
];

const columns: NuiGridColumn<Order>[] = [
  { id: 'customer', header: 'Customer', flex: 1 },
  { id: 'total', header: 'Total', type: 'number', width: 100 },
  {
    id: 'status',
    header: 'Status',
    type: 'enum',
    options: [
      { value: 'pending', label: 'Pending' },
      { value: 'shipped', label: 'Shipped' },
    ],
  },
  { id: 'placed', header: 'Placed', type: 'date', editable: true },
];

function engine(
  options: { pageSize?: number; selection?: 'single' | 'multiple'; leading?: number } = {},
) {
  return new NuiGridEngine<Order>({
    rows: signal(orders),
    columns: signal(columns),
    pageSize: signal(options.pageSize ?? 0),
    selection: signal(options.selection ?? 'none'),
    leading: signal(options.leading ?? 0),
    leadingCount: signal(options.leading ? 1 : 0),
  });
}

const names = (rows: readonly Order[]) => rows.map((row) => row.customer.split(' ')[0]);

describe('NuiGridEngine', () => {
  it('searches every word in the formatted cells, ignoring case and accents', () => {
    const grid = engine();
    grid.setSearch('zoe');
    expect(names(grid.view())).toEqual(['Zoë']);
    grid.setSearch('shipped 80');
    expect(names(grid.view())).toEqual(['Alan']);
    grid.setSearch('');
    expect(grid.view().length).toBe(4);
  });

  it('filters by column', () => {
    const grid = engine();
    grid.setFilter('total', { op: 'lte', value: 80 });
    expect(names(grid.view())).toEqual(['Ada', 'Alan']);
    grid.setFilter('status', { op: 'in', value: ['shipped'] });
    expect(names(grid.view())).toEqual(['Alan']);
    grid.setFilter('total', null);
    expect(Object.keys(grid.filters())).toEqual(['status']);
    expect(grid.layout().find((c) => c.id === 'status')?.filtered).toBe(true);
  });

  it('sorts stably, keeps empty values last, and cycles through asc, desc and none', () => {
    const grid = engine();
    grid.toggleSort('total');
    expect(names(grid.view())).toEqual(['Ada', 'Alan', 'Zoë', 'Grace']);
    grid.toggleSort('total');
    expect(names(grid.view())).toEqual(['Zoë', 'Ada', 'Alan', 'Grace']);
    grid.toggleSort('total');
    expect(grid.sort()).toEqual([]);

    // Shift adds a column: status first, then total.
    grid.toggleSort('status');
    grid.toggleSort('total', true);
    expect(grid.sort()).toEqual<NuiGridSort[]>([
      { column: 'status', direction: 'asc' },
      { column: 'total', direction: 'asc' },
    ]);
    expect(names(grid.view())).toEqual(['Ada', 'Alan', 'Zoë', 'Grace']);
    expect(grid.layout().find((c) => c.id === 'total')?.sort).toEqual({
      direction: 'asc',
      priority: 2,
    });
    // Without Shift, a click replaces the whole sort.
    grid.toggleSort('customer');
    expect(grid.sort()).toEqual([{ column: 'customer', direction: 'asc' }]);
  });

  it('pages, keeps the page in range, and goes back to the first page when the rows change', () => {
    const grid = engine({ pageSize: 3 });
    expect(grid.pageCount()).toBe(2);
    grid.page.set(1);
    expect(names(grid.view())).toEqual(['Alan']);
    expect(grid.firstIndex()).toBe(3);
    grid.page.set(9);
    expect(grid.currentPage()).toBe(1);
    grid.toggleSort('customer');
    expect(grid.page()).toBe(0);
    expect(grid.total()).toBe(4);
  });

  it('selects by key, across sorting, with ranges and select all', () => {
    const grid = engine({ selection: 'multiple' });
    grid.toggle(orders[1]);
    expect(grid.selected()).toEqual([2]);
    grid.toggleSort('customer');
    // Ada, Alan, Grace, Zoë: a range from Ada to Grace.
    grid.selectRange(orders[2]);
    expect([...grid.selected()].sort()).toEqual([2, 3, 4]);
    expect(grid.someSelected()).toBe(true);

    grid.setFilter('status', { op: 'in', value: ['shipped'] });
    // What select all acts on: the rows that pass, in their order.
    expect(grid.selectableKeys()).toEqual([4, 3, 1]);
    grid.toggleAll();
    expect([...grid.selected()].sort()).toEqual([1, 2, 3, 4]);
    expect(grid.allSelected()).toBe(true);
    grid.toggleAll();
    // Only the filtered rows go; Ada (pending) stays selected.
    expect(grid.selected()).toEqual([2]);

    const single = engine({ selection: 'single' });
    single.toggle(orders[0]);
    single.toggle(orders[1]);
    expect(single.selected()).toEqual([2]);
  });

  it('lays out columns: pinned groups first and last, flex filling the room, sticky offsets', () => {
    const grid = engine({ leading: 40 });
    grid.containerWidth.set(800);
    grid.pin('placed', 'start');
    grid.pin('customer', 'end');
    const layout = grid.layout();
    expect(layout.map((c) => c.id)).toEqual(['placed', 'total', 'status', 'customer']);
    // 800 - 40 leading - 140 placed - 100 total - 140 status = 380 for the flex column.
    expect(layout.map((c) => c.width)).toEqual([140, 100, 140, 380]);
    expect(layout[0]).toMatchObject({ pinned: 'start', offset: 40, edge: true });
    expect(layout[3]).toMatchObject({ pinned: 'end', offset: 0, edge: true });
    expect(grid.width()).toBe(800);
    expect(grid.columnState().map((c) => c.id)).toEqual(['customer', 'total', 'status', 'placed']);
  });

  it('resizes within bounds, moves within a pinned group, and never hides the last column', () => {
    const grid = engine();
    grid.resize('total', 10);
    expect(grid.widthOf('total')).toBe(64);
    grid.move('total', 1);
    expect(grid.layout().map((c) => c.id)).toEqual(['customer', 'status', 'total', 'placed']);
    grid.moveTo('placed', 'customer', 'before');
    expect(grid.layout()[0].id).toBe('placed');
    grid.pin('placed', 'start');
    expect(grid.canMove('placed', 1)).toBe(false);

    for (const id of ['customer', 'total', 'status', 'placed']) grid.hide(id);
    expect(grid.layout().map((c) => c.id)).toEqual(['placed']);
    grid.hide('status', false);
    expect(grid.layout().map((c) => c.id)).toEqual(['placed', 'status']);
  });

  it('commits an edit by replacing the row in rows', () => {
    const grid = engine();
    const placed = columns[3];
    expect(grid.editable(placed, orders[0])).toBe(true);
    expect(grid.editable(columns[0], orders[0])).toBe(false);
    const { row, previous } = grid.commit(orders[0], placed, '2026-10-01');
    expect(previous).toBe(orders[0]);
    expect(row).toEqual({ ...orders[0], placed: '2026-10-01' });
    expect(grid.rows()[0]).toBe(row);
    expect(orders[0].placed).toBe('2026-09-01');
  });

  it('exports the filtered, sorted rows as CSV, formatted or raw', () => {
    const grid = engine();
    grid.toggleSort('customer');
    grid.setFilter('status', { op: 'in', value: ['pending'] });
    expect(grid.csv()).toBe(
      'Customer,Total,Status,Placed\r\nAda Lovelace,80,Pending,"Sep 3, 2026"',
    );
    expect(grid.csv({ formatted: false })).toBe(
      'Customer,Total,Status,Placed\r\nAda Lovelace,80,pending,2026-09-03',
    );
  });

  it('keeps the active cell inside the grid', () => {
    const grid = engine({ leading: 40 });
    grid.moveActive(-5, -5);
    expect(grid.active()).toEqual({ row: -1, col: 0 });
    grid.setActive(99, 99);
    expect(grid.active()).toEqual({ row: 3, col: 4 });
  });

  it('keeps the active cell in the rows when the header row isn’t drawn', () => {
    const header = signal(false);
    const grid = new NuiGridEngine<Order>({
      rows: signal(orders),
      columns: signal(columns),
      header,
    });
    grid.setActive(-1, 2);
    expect(grid.active()).toEqual({ row: 0, col: 2 });
    header.set(true);
    grid.moveActive(-1, 0);
    expect(grid.active()).toEqual({ row: -1, col: 2 });
    // With no rows, there's nowhere else to be.
    header.set(false);
    grid.rows.set([]);
    grid.setActive(3, 0);
    expect(grid.active()).toEqual({ row: -1, col: 0 });
  });
});
