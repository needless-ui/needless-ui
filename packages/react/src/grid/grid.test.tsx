import type {
  NuiGridColumnState,
  NuiGridEdit,
  NuiGridQuery,
  NuiGridSort,
} from '@needless-ui/core/grid';
import { createRef, useState } from 'react';
import { userEvent } from 'vitest/browser';
import { render, settle } from '../../test/render.js';
import { NuiGrid, type NuiGridColumn, type NuiGridHandle, type NuiGridProps } from './grid.js';

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

type Settings = Partial<NuiGridProps<Person>> & { rows: readonly Person[] };

/** A grid as an app keeps it: rows, selection, sort and column state follow it back. */
async function setup(patch: Partial<Settings> = {}) {
  const edits: NuiGridEdit<Person>[] = [];
  const activated: Person[] = [];
  const queries: NuiGridQuery[] = [];
  const pages: number[] = [];
  const handle = createRef<NuiGridHandle>();
  const host = {
    settings: { rows: people, selected: [], sort: [], columnState: [], ...patch } as Settings,
    set: (_patch: Partial<Settings>) => undefined as void,
  };
  function Host() {
    const [settings, setSettings] = useState(host.settings);
    host.settings = settings;
    host.set = (next) => setSettings((current) => ({ ...current, ...next }));
    return (
      <NuiGrid
        ref={handle}
        label="People"
        selection="multiple"
        columns={columns}
        {...settings}
        onRowsChange={(rows) => host.set({ rows })}
        onSelectedChange={(selected) => host.set({ selected })}
        onSortChange={(sort: readonly NuiGridSort[]) => host.set({ sort })}
        onColumnStateChange={(columnState: readonly NuiGridColumnState[]) =>
          host.set({ columnState })
        }
        onCellEdit={(edit) => edits.push(edit)}
        onRowActivate={(row) => activated.push(row)}
        onQueryChange={(query) => queries.push(query)}
        onPageChange={(page) => pages.push(page)}
      />
    );
  }
  const { container: root } = await render(<Host />);
  const table = root.querySelector<HTMLTableElement>('table')!;
  return {
    host,
    handle,
    root,
    table,
    edits,
    activated,
    queries,
    pages,
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
    const { root, table } = await setup();
    expect(root.firstElementChild!.className).toBe('nui-grid');
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
    expect(first.querySelectorAll('td')[2].getAttribute('data-align')).toBe('end');
    expect(table.querySelectorAll('[tabindex="0"]').length).toBe(1);
    // A header's name is its label, not its buttons.
    const name = table.querySelector<HTMLElement>('th.nui-grid-header')!;
    expect(
      document.getElementById(name.getAttribute('aria-labelledby')!)!.textContent!.trim(),
    ).toBe('Name');
  });

  it('moves between cells with the arrows, Home, End and Ctrl+End', async () => {
    const { table, focused } = await setup();
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
    const { host, names, header, status } = await setup();
    header('Name').focus();
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(names()).toEqual(['Ada', 'Alan', 'Grace']);
    expect(header('Name').getAttribute('aria-sort')).toBe('ascending');
    expect(status()).toBe('Sorted by Name, ascending');

    await userEvent.click(header('Team'), { modifiers: ['Shift'] } as never);
    await settle();
    expect(host.settings.sort).toEqual([
      { column: 'name', direction: 'asc' },
      { column: 'team', direction: 'asc' },
    ]);
    // Only the first sorted column carries aria-sort; the others show their place.
    expect(header('Team').hasAttribute('aria-sort')).toBe(false);
    expect(header('Team').querySelector('.nui-grid-sort')!.textContent!.trim()).toBe('2');
  });

  it('selects rows with checkboxes, Space, Shift+Space and Ctrl+A', async () => {
    const { host, table } = await setup();
    const boxes = () => [
      ...table.querySelectorAll<HTMLInputElement>('tbody input[type="checkbox"]'),
    ];
    await userEvent.click(boxes()[0]);
    await settle();
    expect(host.settings.selected).toEqual([1]);
    const all = table.querySelector<HTMLInputElement>('thead input[type="checkbox"]')!;
    expect(all.indeterminate).toBe(true);

    // Space on a cell of the third row.
    table.querySelector<HTMLElement>('td[data-row="2"][data-col="1"]')!.focus();
    await userEvent.keyboard(' ');
    await settle();
    expect(host.settings.selected).toEqual([1, 3]);
    await userEvent.keyboard('{Control>}a{/Control}');
    await settle();
    expect([...host.settings.selected!].sort()).toEqual([1, 2, 3]);
    expect(all.checked).toBe(true);
    expect(table.querySelector('tbody tr')!.getAttribute('aria-selected')).toBe('true');
  });

  it('edits cells: Enter and typing start, Enter commits, validation keeps the editor', async () => {
    const { host, table, edits, focused, status } = await setup();
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
    expect(status()).toBe('A name is needed');

    await userEvent.fill(editor(), 'Augusta Ada');
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(table.querySelector('.nui-grid-editor')).toBeNull();
    expect(host.settings.rows[1].name).toBe('Augusta Ada');
    expect(people[1].name).toBe('Ada');
    expect(edits[0]).toMatchObject({ column: 'name', value: 'Augusta Ada' });
    expect(focused().textContent!.trim()).toBe('Augusta Ada');

    // Typing starts editing with what's typed; Escape cancels.
    await userEvent.keyboard('{ArrowRight}7');
    await settle();
    expect(editor().value).toBe('7');
    await userEvent.keyboard('{Escape}');
    await settle();
    expect(host.settings.rows[1].age).toBe(36);

    // A number is read in the grid's locale.
    await userEvent.keyboard('{Enter}');
    await settle();
    await userEvent.fill(editor(), '37');
    await userEvent.keyboard('{Tab}');
    await settle();
    expect(host.settings.rows[1].age).toBe(37);

    // A boolean cell flips with Enter.
    await userEvent.keyboard('{ArrowRight}{Enter}');
    await settle();
    expect(host.settings.rows[1].active).toBe(true);
  });

  it('opens a row with Enter on a cell that cannot be edited', async () => {
    const { table, activated } = await setup();
    table.querySelector<HTMLElement>('td[data-row="0"][data-col="3"]')!.focus();
    await userEvent.keyboard('{Enter}');
    expect(activated).toEqual([people[0]]);
  });

  it('pages, with the range and page buttons', async () => {
    const { root, names, host } = await setup({ pageSize: 2 });
    const pager = root.querySelector('.nui-grid-pager')!;
    expect(pager.querySelector('.nui-grid-range')!.textContent).toBe('1–2 of 3');
    expect(names()).toEqual(['Grace', 'Ada']);
    await userEvent.click(pager.querySelector<HTMLElement>('[data-icon="next"]')!);
    await settle();
    expect(names()).toEqual(['Alan']);
    expect(root.querySelector('tbody tr')!.getAttribute('aria-rowindex')).toBe('4');
    expect(pager.querySelector<HTMLButtonElement>('[data-icon="last"]')!.disabled).toBe(true);
    host.set({ pageSize: 0 });
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
    const { table, focused } = await setup({ rows: many, height: '300px' });
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
    const { table, root, names, header, focused } = await setup();
    header('Team').focus();
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');
    await settle();
    const panel = root.querySelector<HTMLElement>('.nui-grid-panel')!;
    expect(panel.matches(':popover-open')).toBe(true);
    expect(panel.getAttribute('role')).toBe('dialog');
    expect(panel.getAttribute('aria-label')).toBe('Team column options');
    expect(panel.contains(focused())).toBe(true);
    expect(
      header('Team').querySelector('.nui-grid-menu-button')!.getAttribute('aria-expanded'),
    ).toBe('true');

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

  it('filters numbers from the panel as typed in the locale', async () => {
    const { root, names, header } = await setup();
    header('Age').focus();
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');
    await settle();
    const panel = root.querySelector<HTMLElement>('.nui-grid-panel')!;
    await userEvent.selectOptions(panel.querySelector('select')!, 'gt');
    await userEvent.fill(panel.querySelector<HTMLInputElement>('.nui-grid-panel-input')!, '40');
    await settle();
    expect(names()).toEqual(['Grace', 'Alan']);
    // What's typed stays as it is while the filter follows it.
    await userEvent.fill(panel.querySelector<HTMLInputElement>('.nui-grid-panel-input')!, '40.');
    await settle();
    expect(panel.querySelector<HTMLInputElement>('.nui-grid-panel-input')!.value).toBe('40.');
  });

  it('resizes and moves columns from the keyboard', async () => {
    const { host, header, focused } = await setup();
    header('Age').focus();
    await userEvent.keyboard('{Alt>}{ArrowRight}{/Alt}');
    await settle();
    // A number column starts 120 pixels wide.
    expect(host.settings.columnState!.find((c) => c.id === 'age')!.width).toBe(136);
    await userEvent.keyboard('{Alt>}{Shift>}{ArrowRight}{/Shift}{/Alt}');
    await settle();
    expect(
      [...document.querySelectorAll('th.nui-grid-header')].map((th) => th.textContent!.trim()),
    ).toEqual(['Name', 'Team', 'Age', 'Active']);
    expect(focused()).toBe(header('Age'));
    expect(host.settings.columnState!.map((c) => c.id)).toEqual(['name', 'team', 'age', 'active']);
  });

  it('leaves sorting to the server in server mode, and reports every query', async () => {
    const { names, header, table, queries } = await setup({ mode: 'server', total: 120 });
    expect(queries.length).toBe(1);
    expect(queries[0]).toMatchObject({ sort: [], page: 0 });
    await userEvent.click(header('Name'));
    await settle();
    expect(names()).toEqual(['Grace', 'Ada', 'Alan']);
    expect(queries.at(-1)!.sort).toEqual([{ column: 'name', direction: 'asc' }]);
    expect(table.getAttribute('aria-rowcount')).toBe('121');
  });

  it('fits every column from one loop over its ref, and reports only what changes', async () => {
    const { host, handle, header, pages } = await setup();
    for (const column of columns) handle.current!.fit(column.id);
    await settle();
    expect(host.settings.columnState!.map((entry) => typeof entry.width)).toEqual([
      'number',
      'number',
      'number',
      'number',
    ]);
    // Sorting goes back to the first page, which it's on already: no page to report.
    await userEvent.click(header('Name'));
    await settle();
    expect(pages).toEqual([]);
  });

  it('exports the rows as CSV', async () => {
    const { handle } = await setup();
    expect(handle.current!.exportCsv().split('\r\n')).toEqual([
      'Name,Age,Team,Active',
      'Grace,85,Core,Yes',
      'Ada,36,Docs,No',
      'Alan,41,Core,Yes',
    ]);
  });

  it('draws cells and headers the app’s way, and its own empty message', async () => {
    const { root, host } = await setup({
      columns: columns.map((column) =>
        column.id === 'team'
          ? {
              ...column,
              renderCell: ({ row, text }) => <b data-team={row.team}>{text}!</b>,
              renderHeader: (own) => <i>{own.header}?</i>,
            }
          : column,
      ),
      renderEmpty: (filtered) => (filtered ? 'None match' : 'Nobody yet'),
    });
    expect(root.querySelector('[data-team="docs"]')!.textContent).toBe('Docs!');
    expect(root.querySelector('th[data-column="team"] i')!.textContent).toBe('Team?');
    host.set({ rows: [] });
    await settle();
    expect(root.querySelector('.nui-grid-empty')!.textContent).toBe('Nobody yet');
  });
});
