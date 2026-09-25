import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { userEvent } from 'vitest/browser';
import { NuiGrid } from './grid';
import type { NuiGridColumn, NuiGridEdit, NuiGridQuery, NuiGridSort } from './types';

interface Person {
  id: number;
  name: string;
  age: number;
  team: 'core' | 'docs';
  active: boolean;
}

const people: Person[] = [
  { id: 1, name: 'Grace', age: 85, team: 'core', active: true },
  { id: 2, name: 'Ada', age: 36, team: 'docs', active: false },
  { id: 3, name: 'Alan', age: 41, team: 'core', active: true },
];

const columns: NuiGridColumn<Person>[] = [
  {
    id: 'name',
    header: 'Name',
    editable: true,
    validate: (value: string) => (value.trim() ? null : 'A name is needed'),
  },
  { id: 'age', header: 'Age', type: 'number', editable: true },
  {
    id: 'team',
    header: 'Team',
    type: 'enum',
    options: [
      { value: 'core', label: 'Core' },
      { value: 'docs', label: 'Docs' },
    ],
  },
  { id: 'active', header: 'Active', type: 'boolean', editable: true },
];

@Component({
  imports: [NuiGrid],
  template: `
    <nui-grid
      label="People"
      selection="multiple"
      [(rows)]="rows"
      [columns]="columns"
      [(selected)]="selected"
      [(sort)]="sort"
      [pageSize]="pageSize()"
      [height]="height()"
      [mode]="mode()"
      [total]="total()"
      (cellEdit)="edits.push($event)"
      (rowActivate)="activated.push($event)"
      (queryChange)="queries.push($event)"
    />
  `,
})
class Host {
  readonly rows = signal<readonly Person[]>(people);
  readonly columns = columns;
  readonly selected = signal<readonly unknown[]>([]);
  readonly sort = signal<readonly NuiGridSort[]>([]);
  readonly pageSize = signal(0);
  readonly height = signal<string | null>(null);
  readonly mode = signal<'client' | 'server'>('client');
  readonly total = signal<number | null>(null);
  readonly edits: NuiGridEdit<Person>[] = [];
  readonly activated: Person[] = [];
  readonly queries: NuiGridQuery[] = [];
}

async function setup(change?: (host: Host) => void) {
  const fixture = TestBed.createComponent(Host);
  change?.(fixture.componentInstance);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const settle = async () => {
    await new Promise((resolve) => setTimeout(resolve, 20));
    await fixture.whenStable();
  };
  await settle();
  const table = root.querySelector<HTMLTableElement>('table')!;
  return {
    fixture,
    host: fixture.componentInstance,
    grid: fixture.debugElement.children[0].componentInstance as NuiGrid<Person>,
    root,
    table,
    settle,
    names: () =>
      [...table.querySelectorAll('tbody tr[data-index]')].map((row) =>
        row.querySelectorAll('td')[1].textContent!.trim(),
      ),
    header: (name: string) =>
      [...table.querySelectorAll<HTMLElement>('th.nui-grid-header')].find((th) =>
        th.textContent!.includes(name),
      )!,
    focused: () => document.activeElement as HTMLElement,
    status: () => root.querySelector('[role="status"]')!.textContent!.trim(),
  };
}

describe('NuiGrid', () => {
  it('is a native table with grid roles, counts, formatted cells and one tab stop', async () => {
    const { table } = await setup();
    expect(table.getAttribute('role')).toBe('grid');
    expect(table.getAttribute('aria-label')).toBe('People');
    expect(table.getAttribute('aria-rowcount')).toBe('4');
    expect(table.getAttribute('aria-colcount')).toBe('5');
    expect(table.getAttribute('aria-multiselectable')).toBe('true');
    const first = table.querySelector('tbody tr')!;
    expect(first.getAttribute('aria-rowindex')).toBe('2');
    expect([...first.querySelectorAll('td')].map((td) => td.textContent!.trim())).toEqual([
      '',
      'Grace',
      '85',
      'Core',
      'Yes',
    ]);
    expect(table.querySelectorAll('[tabindex="0"]').length).toBe(1);
    // A header's name is its label, not its buttons.
    const name = table.querySelector<HTMLElement>('th.nui-grid-header')!;
    expect(
      document.getElementById(name.getAttribute('aria-labelledby')!)!.textContent!.trim(),
    ).toBe('Name');
  });

  it('moves between cells with the arrows, Home, End and Ctrl+End', async () => {
    const { table, settle, focused } = await setup();
    table.querySelector<HTMLElement>('[tabindex="0"]')!.focus();
    await userEvent.keyboard('{ArrowDown}{ArrowRight}');
    await settle();
    expect(focused().textContent!.trim()).toBe('Grace');
    await userEvent.keyboard('{End}');
    await settle();
    expect(focused().getAttribute('aria-colindex')).toBe('5');
    await userEvent.keyboard('{Control>}{End}{/Control}');
    await settle();
    expect(focused().closest('tr')!.getAttribute('aria-rowindex')).toBe('4');
    await userEvent.keyboard('{Control>}{Home}{/Control}');
    await settle();
    expect(focused().closest('thead')).not.toBeNull();
    expect(table.querySelectorAll('[tabindex="0"]').length).toBe(1);
  });

  it('sorts from the header, by several columns with Shift, and announces it', async () => {
    const { host, settle, names, header, status } = await setup();
    header('Name').focus();
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(names()).toEqual(['Ada', 'Alan', 'Grace']);
    expect(header('Name').getAttribute('aria-sort')).toBe('ascending');
    expect(status()).toBe('Sorted by Name, ascending');

    await userEvent.click(header('Team'), { modifiers: ['Shift'] } as never);
    await settle();
    expect(host.sort()).toEqual([
      { column: 'name', direction: 'asc' },
      { column: 'team', direction: 'asc' },
    ]);
    // Only the first sorted column carries aria-sort; the others show their place.
    expect(header('Team').hasAttribute('aria-sort')).toBe(false);
    expect(header('Team').querySelector('.nui-grid-sort')!.textContent!.trim()).toBe('2');
  });

  it('selects rows with checkboxes, Space, Shift+Space and Ctrl+A', async () => {
    const { host, table, settle } = await setup();
    const boxes = () => [
      ...table.querySelectorAll<HTMLInputElement>('tbody input[type="checkbox"]'),
    ];
    await userEvent.click(boxes()[0]);
    await settle();
    expect(host.selected()).toEqual([1]);
    const all = table.querySelector<HTMLInputElement>('thead input[type="checkbox"]')!;
    expect(all.indeterminate).toBe(true);

    // Space on a cell of the third row, then Shift+Space back on the second.
    table.querySelector<HTMLElement>('td[data-row="2"][data-col="1"]')!.focus();
    await userEvent.keyboard(' ');
    await settle();
    expect(host.selected()).toEqual([1, 3]);
    await userEvent.keyboard('{Control>}a{/Control}');
    await settle();
    expect([...host.selected()].sort()).toEqual([1, 2, 3]);
    expect(all.checked).toBe(true);
    expect(table.querySelector('tbody tr')!.getAttribute('aria-selected')).toBe('true');
  });

  it('edits cells: Enter and typing start, Enter commits, validation keeps the editor', async () => {
    const { host, table, settle, focused } = await setup();
    table.querySelector<HTMLElement>('td[data-row="1"][data-col="1"]')!.focus();
    await userEvent.keyboard('{Enter}');
    await settle();
    const editor = () => table.querySelector<HTMLInputElement>('.nui-grid-editor')!;
    expect(focused()).toBe(editor());
    expect(editor().value).toBe('Ada');

    await userEvent.fill(editor(), '  ');
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(editor().getAttribute('aria-invalid')).toBe('true');
    expect(document.getElementById(editor().getAttribute('aria-describedby')!)!.textContent).toBe(
      'A name is needed',
    );

    await userEvent.fill(editor(), 'Augusta Ada');
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(table.querySelector('.nui-grid-editor')).toBeNull();
    expect(host.rows()[1].name).toBe('Augusta Ada');
    expect(people[1].name).toBe('Ada');
    expect(host.edits[0]).toMatchObject({ column: 'name', value: 'Augusta Ada' });
    expect(focused().textContent!.trim()).toBe('Augusta Ada');

    // Typing starts editing with what's typed; Escape cancels.
    await userEvent.keyboard('{ArrowRight}7');
    await settle();
    expect(editor().value).toBe('7');
    await userEvent.keyboard('{Escape}');
    await settle();
    expect(host.rows()[1].age).toBe(36);

    // A boolean cell flips with Enter.
    await userEvent.keyboard('{ArrowRight}{ArrowRight}{Enter}');
    await settle();
    expect(host.rows()[1].active).toBe(true);
  });

  it('opens a row with Enter on a cell that cannot be edited', async () => {
    const { host, table } = await setup();
    table.querySelector<HTMLElement>('td[data-row="0"][data-col="3"]')!.focus();
    await userEvent.keyboard('{Enter}');
    expect(host.activated).toEqual([people[0]]);
  });

  it('pages, with the range and page buttons', async () => {
    const { host, root, settle, names } = await setup((h) => h.pageSize.set(2));
    const pager = root.querySelector('.nui-grid-pager')!;
    expect(pager.querySelector('.nui-grid-range')!.textContent).toBe('1–2 of 3');
    expect(names()).toEqual(['Grace', 'Ada']);
    await userEvent.click(pager.querySelector<HTMLElement>('[data-icon="next"]')!);
    await settle();
    expect(names()).toEqual(['Alan']);
    expect(root.querySelector('tbody tr')!.getAttribute('aria-rowindex')).toBe('4');
    expect(pager.querySelector<HTMLButtonElement>('[data-icon="last"]')!.disabled).toBe(true);
    host.pageSize.set(0);
  });

  it('renders only the rows in view of 5,000, and keeps the active one rendered', async () => {
    const many = Array.from({ length: 5000 }, (_, i) => ({
      id: i,
      name: `Person ${i}`,
      age: 20 + (i % 50),
      team: 'core' as const,
      active: i % 2 === 0,
    }));
    // The scroll container's bounds come from @needless-ui/css, which unit tests don't load.
    const style = document.head.appendChild(document.createElement('style'));
    style.textContent = '.nui-grid-scroll { overflow: auto; max-block-size: var(--_height) }';
    onTestFinished(() => style.remove());
    const { table, settle, focused } = await setup((h) => {
      h.rows.set(many);
      h.height.set('300px');
    });
    const rendered = () => table.querySelectorAll('tbody tr[data-index]').length;
    expect(rendered()).toBeGreaterThan(3);
    expect(rendered()).toBeLessThan(60);
    expect(table.getAttribute('aria-rowcount')).toBe('5001');

    table.querySelector<HTMLElement>('[tabindex="0"]')!.focus();
    await userEvent.keyboard('{ArrowDown}{Control>}{End}{/Control}');
    await settle();
    expect(focused().closest('tr')!.getAttribute('aria-rowindex')).toBe('5001');
    expect(rendered()).toBeLessThan(80);
  });

  it('opens the column panel from the header, filters, hides, and gives focus back', async () => {
    const { table, root, settle, names, header, focused } = await setup();
    header('Team').focus();
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');
    await settle();
    const panel = root.querySelector<HTMLElement>('.nui-grid-panel')!;
    expect(panel.matches(':popover-open')).toBe(true);
    expect(panel.getAttribute('role')).toBe('dialog');
    expect(panel.getAttribute('aria-label')).toBe('Team column options');
    expect(panel.contains(focused())).toBe(true);

    await userEvent.click(
      [...panel.querySelectorAll('label')].find((label) => label.textContent!.includes('Docs'))!,
    );
    await settle();
    expect(names()).toEqual(['Ada']);
    expect(header('Team').querySelector('.nui-grid-filtered')).not.toBeNull();

    await userEvent.keyboard('{Escape}');
    await settle();
    expect(panel.matches(':popover-open')).toBe(false);
    expect(focused()).toBe(header('Team'));

    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');
    await settle();
    await userEvent.click(
      [...panel.querySelectorAll('button')].find((b) => b.textContent!.includes('Hide column'))!,
    );
    await settle();
    expect(
      [...table.querySelectorAll('th.nui-grid-header')].map((th) => th.textContent!.trim()),
    ).toEqual(['Name', 'Age', 'Active']);
  });

  it('resizes and moves columns from the keyboard', async () => {
    const { grid, settle, header, focused } = await setup();
    header('Age').focus();
    const before = grid.engine.widthOf('age');
    await userEvent.keyboard('{Alt>}{ArrowRight}{/Alt}');
    await settle();
    expect(grid.engine.widthOf('age')).toBe(before + 16);
    await userEvent.keyboard('{Alt>}{Shift>}{ArrowRight}{/Shift}{/Alt}');
    await settle();
    expect(grid.engine.layout().map((c) => c.id)).toEqual(['name', 'team', 'age', 'active']);
    expect(focused()).toBe(header('Age'));
    expect(grid.columnState().map((c) => c.id)).toEqual(['name', 'team', 'age', 'active']);
  });

  it('leaves sorting to the server in server mode, and reports every query', async () => {
    const { host, settle, names, header, table } = await setup((h) => {
      h.mode.set('server');
      h.total.set(120);
    });
    expect(host.queries[0]).toMatchObject({ sort: [], page: 0 });
    await userEvent.click(header('Name'));
    await settle();
    expect(names()).toEqual(['Grace', 'Ada', 'Alan']);
    expect(host.queries.at(-1)!.sort).toEqual([{ column: 'name', direction: 'asc' }]);
    expect(table.getAttribute('aria-rowcount')).toBe('121');
  });

  it('exports the rows as CSV', async () => {
    const { grid } = await setup();
    expect(grid.exportCsv().split('\r\n')).toEqual([
      'Name,Age,Team,Active',
      'Grace,85,Core,Yes',
      'Ada,36,Docs,No',
      'Alan,41,Core,Yes',
    ]);
  });
});
