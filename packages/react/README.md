# @needless-ui/react

React components for [Needless UI](https://github.com/needless-ui/needless-ui), the Needlessly Engineered Styling Toolkit, styled by [`@needless-ui/css`](https://www.npmjs.com/package/@needless-ui/css). They render on the server, hydrate, and work with the Next.js App Router.

This first release has the two components other libraries charge for, with everything included and MIT licensed:

- **Scheduler** (`@needless-ui/react/scheduler`): month, week, day, agenda and a **resource timeline**, **repeating events** (RFC 5545 rules with exceptions), drag and keyboard moves, iCalendar import and export.
- **Data grid** (`@needless-ui/react/grid`): sorting, filters, paging or virtual scrolling, editing, column resizing, moving, pinning and hiding, **grouping with aggregates**, **tree data**, row details, a totals row, and **Excel export**.

The other components are coming. Both components follow the same specs as [`@needless-ui/angular`](https://www.npmjs.com/package/@needless-ui/angular) and set the same classes and attributes, so they look and behave the same: the keyboard, ARIA, touch and every state.

Requires React 19 (`react` and `react-dom` 19.0 or later). ESM only.

## Install

```bash
pnpm add @needless-ui/react @needless-ui/css
```

The components ship no styles: import the stylesheet once, from a CSS file of your app.

## Quick start: Next.js (App Router)

In `app/globals.css`, imported by `app/layout.tsx`:

```css
@layer reset, nui, app; /* optional: keeps your resets from overriding components */
@import '@needless-ui/css';
```

The components are client components (`'use client'` is in the package), so a Server Component can render them with props that serialize, and the pure helpers run on the server:

```tsx
// app/calendar/page.tsx: a Server Component
import { NuiScheduler, nuiSchedulerFromIcs } from '@needless-ui/react/scheduler';

export default async function Calendar() {
  const ics = await fetch('https://example.com/team.ics').then((response) => response.text());
  const events = nuiSchedulerFromIcs(ics, { timeZone: 'Europe/Rome' });
  return <NuiScheduler events={events} defaultDate="2026-09-25" style={{ height: 600 }} />;
}
```

Functions don't cross from the server to the client, so a component that takes callbacks goes in a client component of your own:

```tsx
// app/calendar/planner.tsx
'use client';

import { NuiScheduler, type NuiSchedulerEvent } from '@needless-ui/react/scheduler';
import { useState } from 'react';

export function Planner({ initial }: { initial: NuiSchedulerEvent[] }) {
  const [events, setEvents] = useState(initial);
  return (
    <NuiScheduler
      events={events}
      defaultDate="2026-09-25"
      editable
      selectable
      style={{ height: 600 }}
      onEventChange={({ event, start, end }) =>
        setEvents((list) => list.map((e) => (e.id === event.id ? { ...e, start, end } : e)))
      }
      onSlotSelect={({ start, end }) =>
        setEvents((list) => [...list, { id: crypto.randomUUID(), title: 'New event', start, end }])
      }
    />
  );
}
```

## Quick start: Vite

In `src/index.css`, imported by `src/main.tsx`:

```css
@layer reset, nui, app;
@import '@needless-ui/css';
```

```tsx
// src/Orders.tsx
import { NuiGrid, type NuiGridColumn, type NuiGridHandle } from '@needless-ui/react/grid';
import { useRef, useState } from 'react';

interface Order {
  id: number;
  customer: string;
  region: string;
  total: number;
  shipped: boolean;
}

// Outside the component (or memoized), so the grid doesn't redo its work on every render.
const columns: NuiGridColumn<Order>[] = [
  { id: 'customer', header: 'Customer', flex: 1, editable: true },
  { id: 'region', header: 'Region' },
  {
    id: 'total',
    header: 'Total',
    type: 'number',
    format: { style: 'currency', currency: 'EUR' },
    aggregate: 'sum',
  },
  { id: 'shipped', header: 'Shipped', type: 'boolean', editable: true },
];

export function Orders({ initial }: { initial: Order[] }) {
  const [orders, setOrders] = useState<readonly Order[]>(initial);
  const grid = useRef<NuiGridHandle>(null);
  const download = () => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(grid.current!.exportXlsx({ sheet: 'Orders' }));
    link.download = 'orders.xlsx';
    link.click();
  };
  return (
    <>
      <button onClick={download}>Excel</button>
      <NuiGrid
        ref={grid}
        label="Orders"
        rows={orders}
        onRowsChange={setOrders}
        columns={columns}
        selection="multiple"
        groupBy={['region']}
        totals
        pageSize={25}
      />
    </>
  );
}
```

## How the API reads

The props follow the specs ([scheduler](https://github.com/needless-ui/needless-ui/blob/main/specs/scheduler.md), [data grid](https://github.com/needless-ui/needless-ui/blob/main/specs/grid.md)), in React's terms:

- **State** can be yours or the component's, as with React's own inputs: `view` with `onViewChange` (controlled), or `defaultView` (uncontrolled). The same goes for the scheduler's `date`, and the grid's `sort`, `filters`, `search`, `page`, `pageSize`, `selected`, `columnState`, `collapsed`, `expanded` and `details`. The grid's `rows` are edited in place: a committed edit calls `onRowsChange` with new rows, and the next `rows` you pass replace them.
- **Events** are callbacks: `onEventClick`, `onEventChange`, `onSlotSelect`, `onRangeChange`; `onRowActivate`, `onCellEdit`, `onQueryChange`.
- **Your own drawing** goes through render functions: the scheduler's `renderEvent` and `renderResource`, a column's `renderCell` and `renderHeader`, and the grid's `renderEmpty` and `renderDetail` (which adds the column of toggles). The scheduler's `toolbar` can be a function that draws a toolbar of your own from the title and paging it's given.
- **Methods** are on the `ref`: the scheduler's `previous()`, `next()`, `goToday()` and `title`; the grid's `exportCsv()`, `exportXlsx()`, `print()`, `expandAll()`, `focusCell()`, `clearFilters()` and `fit()`.
- **Tree data** comes from `getChildren` (Angular's `children`, a name React keeps for elements).
- **Customization**: `corners`, `radius` and `density` set the `data-nui-*` presets on one component; the same attributes on any element style everything inside it.
- **Words** are English by default and replaced through `labels`. Dates and numbers follow `locale`, `en-US` unless you pass one.

## Server rendering

Both components render on the server without touching the DOM. What depends on the reader waits for the browser: the scheduler's line for now, and which day is today, appear once it hydrates. Pass `defaultDate` (or `date`) when you render the scheduler on a server, whose today may not be the reader's. Node formats times with other spaces than browsers do; the scheduler writes plain ones, so its HTML hydrates as is.

The framework-free logic (dates, repeat rules, iCalendar, the grid's model and spreadsheet writer) is in [`@needless-ui/core`](https://www.npmjs.com/package/@needless-ui/core), which the Angular and React packages share.

## License

[MIT](https://github.com/needless-ui/needless-ui/blob/main/LICENSE)
