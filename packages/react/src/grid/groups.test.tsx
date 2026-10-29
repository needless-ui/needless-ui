import { createRef, useState } from 'react';
import { userEvent } from 'vitest/browser';
import { render, settle } from '../../test/render.js';
import { NuiGrid, type NuiGridColumn, type NuiGridHandle, type NuiGridProps } from './grid.js';

interface Sale {
  id: number;
  region: string;
  city: string;
  amount: number;
  children?: Sale[];
}

const sales: Sale[] = [
  { id: 1, region: 'Europe', city: 'Milan', amount: 100 },
  { id: 2, region: 'Asia', city: 'Tokyo', amount: 300 },
  { id: 3, region: 'Europe', city: 'Paris', amount: 50 },
  { id: 4, region: 'Asia', city: 'Seoul', amount: 25 },
];

const columns: NuiGridColumn<Sale>[] = [
  { id: 'city', header: 'City' },
  { id: 'region', header: 'Region' },
  { id: 'amount', header: 'Amount', type: 'number', aggregate: 'sum' },
];

type Settings = Partial<NuiGridProps<Sale>> & { rows: readonly Sale[] };

async function setup(patch: Partial<Settings> = {}) {
  const handle = createRef<NuiGridHandle>();
  const host = {
    settings: { rows: sales, ...patch } as Settings,
    set: (_patch: Partial<Settings>) => undefined as void,
  };
  function Host() {
    const [settings, setSettings] = useState(host.settings);
    host.settings = settings;
    host.set = (next) => setSettings((current) => ({ ...current, ...next }));
    return (
      <NuiGrid
        ref={handle}
        label="Sales"
        columns={columns}
        flash
        {...settings}
        onRowsChange={(rows) => host.set({ rows })}
      />
    );
  }
  const { container: root } = await render(<Host />);
  const rows = () =>
    [...root.querySelectorAll<HTMLElement>('tbody tr[role="row"]')].map((tr) =>
      [...tr.querySelectorAll<HTMLElement>('[role="gridcell"]')].map((td) =>
        td.textContent!.trim(),
      ),
    );
  return { host, handle, root, rows };
}

describe('NuiGrid groups, trees, details and totals', () => {
  it('groups rows, with totals per group, as a treegrid', async () => {
    const { root, rows } = await setup({ groupBy: ['region'] });
    const table = root.querySelector('table')!;
    expect(table.getAttribute('role')).toBe('treegrid');
    expect(rows()).toEqual([
      ['Region: Asia (2)', '', 'Sum: 325'],
      ['Tokyo', 'Asia', '300'],
      ['Seoul', 'Asia', '25'],
      ['Region: Europe (2)', '', 'Sum: 150'],
      ['Milan', 'Europe', '100'],
      ['Paris', 'Europe', '50'],
    ]);
    const group = root.querySelector<HTMLElement>('tr.nui-grid-group')!;
    expect(group.getAttribute('aria-level')).toBe('1');
    expect(group.getAttribute('aria-expanded')).toBe('true');
    expect(group.getAttribute('aria-setsize')).toBe('2');
    expect(
      root.querySelector('tr.nui-grid-row:not(.nui-grid-group)')!.getAttribute('aria-level'),
    ).toBe('2');
    // Left on a group closes it; Right opens it again.
    const cell = group.querySelector<HTMLElement>('[role="gridcell"]')!;
    cell.focus();
    await userEvent.keyboard('{ArrowLeft}');
    await settle();
    expect(rows().length).toBe(4);
    await userEvent.keyboard('{ArrowRight}');
    await settle();
    expect(rows().length).toBe(6);
  });

  it('selects a group’s rows from its checkbox', async () => {
    const { root } = await setup({ groupBy: ['region'], selection: 'multiple' });
    const box = root.querySelector<HTMLInputElement>('tr.nui-grid-group input[type="checkbox"]')!;
    await userEvent.click(box);
    await settle();
    expect(root.querySelectorAll('tr[aria-selected="true"]').length).toBe(2);
    expect(box.checked).toBe(true);
  });

  it('shows tree data, and keeps the rows above a match', async () => {
    const tree: Sale[] = [
      {
        id: 10,
        region: 'World',
        city: 'All',
        amount: 475,
        children: [
          { id: 11, region: 'Europe', city: 'Milan', amount: 100 },
          { id: 12, region: 'Asia', city: 'Tokyo', amount: 300 },
        ],
      },
    ];
    const { host, root, rows, handle } = await setup({
      rows: tree,
      getChildren: (row) => row.children,
    });
    expect(rows()).toEqual([['All', 'World', '475']]);
    const first = root.querySelector<HTMLElement>('tbody [role="gridcell"]')!;
    first.focus();
    await userEvent.keyboard('{ArrowRight}');
    await settle();
    expect(rows().map((r) => r[0])).toEqual(['All', 'Milan', 'Tokyo']);
    expect(root.querySelectorAll('tbody tr')[1].getAttribute('aria-level')).toBe('2');
    await userEvent.keyboard('{ArrowLeft}');
    await settle();
    expect(rows().length).toBe(1);
    // A search opens the rows above what it finds.
    host.set({ search: 'tokyo' });
    await settle();
    expect(rows().map((r) => r[0])).toEqual(['All', 'Tokyo']);
    expect(host.settings.rows).toBe(tree);
    host.set({ search: '' });
    await settle();
    handle.current!.expandAll();
    await settle();
    expect(rows().length).toBe(3);
  });

  it('opens a row’s details under it', async () => {
    const { root, rows } = await setup({ renderDetail: (sale) => `Detail of ${sale.city}` });
    const toggle = root.querySelector<HTMLButtonElement>('tbody .nui-grid-toggle')!;
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    await userEvent.click(toggle);
    await settle();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(root.querySelector('.nui-grid-detail-cell')!.textContent!.trim()).toBe(
      'Detail of Milan',
    );
    expect(rows()[1]).toEqual(['Detail of Milan']);
  });

  it('adds a totals row the keyboard reaches', async () => {
    const { root } = await setup({ totals: true });
    const totals = root.querySelector('tfoot tr')!;
    expect([...totals.querySelectorAll('td')].map((td) => td.textContent!.trim())).toEqual([
      'Total',
      '',
      'Sum: 475',
    ]);
    root.querySelector<HTMLElement>('tbody [role="gridcell"]')!.focus();
    const mod = navigator.platform.includes('Mac') ? 'Meta' : 'Control';
    await userEvent.keyboard(`{${mod}>}{End}{/${mod}}`);
    await settle();
    expect(document.activeElement?.closest('tfoot')).not.toBeNull();
  });

  it('flashes the cells that change', async () => {
    const { host, root } = await setup();
    host.set({ rows: sales.map((row) => (row.id === 2 ? { ...row, amount: 999 } : row)) });
    await settle();
    const flashing = [...root.querySelectorAll('[data-flash]')].map((cell) =>
      cell.textContent!.trim(),
    );
    expect(flashing).toEqual(['999']);
  });

  it('writes a spreadsheet', async () => {
    const { handle } = await setup();
    const blob = handle.current!.exportXlsx();
    expect(blob.type).toContain('spreadsheetml');
    const bytes = new Uint8Array(await blob.arrayBuffer());
    expect(String.fromCharCode(bytes[0], bytes[1])).toBe('PK');
    const text = new TextDecoder().decode(bytes);
    expect(text).toContain('xl/worksheets/sheet1.xml');
    expect(text).toContain('<t xml:space="preserve">Milan</t>');
    expect(text).toContain('<v>300</v>');
    expect(text).toContain('state="frozen"');
  });

  it('shows rows as cards', async () => {
    const { root } = await setup({ layout: 'list' });
    expect(root.querySelector('.nui-grid')!.hasAttribute('data-cards')).toBe(true);
    expect(root.querySelector('tbody td')!.getAttribute('data-label')).toBe('City');
  });
});
