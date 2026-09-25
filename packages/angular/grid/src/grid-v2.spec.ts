import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { userEvent } from 'vitest/browser';
import { NuiGrid } from './grid';
import { NuiGridDetail } from './templates';
import type { NuiGridColumn } from './types';

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

@Component({
  imports: [NuiGrid, NuiGridDetail],
  template: `
    <nui-grid
      label="Sales"
      [selection]="selection()"
      [(rows)]="rows"
      [columns]="columns"
      [(groupBy)]="groupBy"
      [children]="children()"
      [totals]="totals()"
      [flash]="true"
      [layout]="layout()"
    >
      @if (details()) {
        <ng-template nuiGridDetail let-sale>Detail of {{ sale.city }}</ng-template>
      }
    </nui-grid>
  `,
})
class Host {
  readonly rows = signal<readonly Sale[]>(sales);
  readonly columns = columns;
  readonly groupBy = signal<readonly string[]>([]);
  readonly children = signal<((row: Sale) => readonly Sale[] | undefined) | null>(null);
  readonly totals = signal(false);
  readonly details = signal(false);
  readonly selection = signal<'none' | 'multiple'>('none');
  readonly layout = signal<'table' | 'list'>('table');
}

async function setup(change?: (host: Host) => void) {
  const fixture = TestBed.createComponent(Host);
  change?.(fixture.componentInstance);
  document.body.append(fixture.nativeElement);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const rows = () =>
    [...root.querySelectorAll<HTMLElement>('tbody tr[role="row"]')].map((tr) =>
      [...tr.querySelectorAll<HTMLElement>('[role="gridcell"]')].map((td) =>
        td.textContent!.trim(),
      ),
    );
  return {
    fixture,
    host: fixture.componentInstance,
    root,
    rows,
    stable: () => fixture.whenStable(),
  };
}

describe('NuiGrid v2', () => {
  it('groups rows, with totals per group, as a treegrid', async () => {
    const { root, rows, fixture } = await setup((h) => h.groupBy.set(['region']));
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
    expect(
      root.querySelector('tr.nui-grid-row:not(.nui-grid-group)')!.getAttribute('aria-level'),
    ).toBe('2');
    // Left on a group closes it; Right opens it again.
    const cell = group.querySelector<HTMLElement>('[role="gridcell"]')!;
    cell.focus();
    await userEvent.keyboard('{ArrowLeft}');
    await fixture.whenStable();
    expect(rows().length).toBe(4);
    await userEvent.keyboard('{ArrowRight}');
    await fixture.whenStable();
    expect(rows().length).toBe(6);
  });

  it('selects a group’s rows from its checkbox', async () => {
    const { root, fixture } = await setup((h) => {
      h.groupBy.set(['region']);
      h.selection.set('multiple');
    });
    const box = root.querySelector<HTMLInputElement>('tr.nui-grid-group input[type="checkbox"]')!;
    await userEvent.click(box);
    await fixture.whenStable();
    const selected = [...root.querySelectorAll('tr[aria-selected="true"]')].length;
    expect(selected).toBe(2);
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
    const { host, root, rows, fixture } = await setup((h) => {
      h.rows.set(tree);
      h.children.set((row) => row.children);
    });
    expect(rows()).toEqual([['All', 'World', '475']]);
    const first = root.querySelector<HTMLElement>('tbody [role="gridcell"]')!;
    first.focus();
    await userEvent.keyboard('{ArrowRight}');
    await fixture.whenStable();
    expect(rows().map((r) => r[0])).toEqual(['All', 'Milan', 'Tokyo']);
    expect(root.querySelectorAll('tbody tr')[1].getAttribute('aria-level')).toBe('2');
    await userEvent.keyboard('{ArrowLeft}');
    await fixture.whenStable();
    expect(rows().length).toBe(1);
    // A search opens the rows above what it finds.
    root.querySelector('nui-grid')!;
    (fixture.debugElement.children[0].componentInstance as NuiGrid<Sale>).engine.setSearch('tokyo');
    await fixture.whenStable();
    expect(rows().map((r) => r[0])).toEqual(['All', 'Tokyo']);
    expect(host.rows()).toBe(tree);
  });

  it('opens a row’s details under it', async () => {
    const { root, rows, fixture } = await setup((h) => h.details.set(true));
    const toggle = root.querySelector<HTMLButtonElement>('tbody .nui-grid-toggle')!;
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    await userEvent.click(toggle);
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(root.querySelector('.nui-grid-detail-cell')!.textContent!.trim()).toBe(
      'Detail of Milan',
    );
    expect(rows()[1]).toEqual(['Detail of Milan']);
  });

  it('adds a totals row the keyboard reaches', async () => {
    const { root, fixture } = await setup((h) => h.totals.set(true));
    const totals = root.querySelector('tfoot tr')!;
    expect([...totals.querySelectorAll('td')].map((td) => td.textContent!.trim())).toEqual([
      'Total',
      '',
      'Sum: 475',
    ]);
    root.querySelector<HTMLElement>('tbody [role="gridcell"]')!.focus();
    await userEvent.keyboard(
      `{${navigator.platform.includes('Mac') ? 'Meta' : 'Control'}>}{End}{/${navigator.platform.includes('Mac') ? 'Meta' : 'Control'}}`,
    );
    await fixture.whenStable();
    expect(document.activeElement?.closest('tfoot')).not.toBeNull();
  });

  it('flashes the cells that change', async () => {
    const { host, root, fixture } = await setup();
    host.rows.update((rows) => rows.map((row) => (row.id === 2 ? { ...row, amount: 999 } : row)));
    await fixture.whenStable();
    const flashing = [...root.querySelectorAll('[data-flash]')].map((cell) =>
      cell.textContent!.trim(),
    );
    expect(flashing).toEqual(['999']);
  });

  it('writes a spreadsheet', async () => {
    const { fixture } = await setup();
    const grid = fixture.debugElement.children[0].componentInstance as NuiGrid<Sale>;
    const blob = grid.exportXlsx();
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
    const { root } = await setup((h) => h.layout.set('list'));
    expect(root.querySelector('nui-grid')!.hasAttribute('data-cards')).toBe(true);
    expect(root.querySelector('tbody td')!.getAttribute('data-label')).toBe('City');
  });
});
