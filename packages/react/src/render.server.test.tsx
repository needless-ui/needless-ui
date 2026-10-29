import { renderToString } from 'react-dom/server';
import { NuiGrid, type NuiGridColumn } from './grid/index.js';
import { NuiScheduler, nuiSchedulerToIcs } from './scheduler/index.js';

// Node, as on a server: a component that reads the DOM, or the clock, while it renders fails here.

const events = [
  { id: 'standup', title: 'Standup', start: '2026-09-25T09:00', end: '2026-09-25T09:30' },
  { id: 'offsite', title: 'Offsite', start: '2026-09-22', end: '2026-09-24' },
];

describe('server rendering', () => {
  it('renders every view of the scheduler without a DOM', () => {
    expect(typeof document).toBe('undefined');
    for (const view of ['month', 'week', 'day', 'agenda', 'timeline'] as const) {
      const html = renderToString(
        <NuiScheduler
          defaultView={view}
          defaultDate="2026-09-25"
          events={events}
          resources={[{ id: 'atlas', title: 'Atlas' }]}
        />,
      );
      expect(html).toContain('class="nui-scheduler"');
      expect(html).toContain(`data-view="${view}"`);
      if (view !== 'agenda') expect(html).toContain('role="grid"');
    }
    const week = renderToString(<NuiScheduler defaultDate="2026-09-25" events={events} />);
    expect(week).toContain('aria-label="Standup, Friday, September 25, 9:00 – 9:30 AM"');
    // The reader's time isn't the server's: the now line and today wait for the browser.
    expect(week).not.toContain('nui-scheduler-now');
    expect(week).not.toContain('data-today');
  });

  it('renders the grid without a DOM, with its state in the HTML', () => {
    const columns: NuiGridColumn<{ id: number; name: string; done: boolean }>[] = [
      { id: 'name', header: 'Name' },
      { id: 'done', header: 'Done', type: 'boolean' },
    ];
    const html = renderToString(
      <NuiGrid
        label="Tasks"
        rows={[
          { id: 1, name: 'Write', done: true },
          { id: 2, name: 'Ship', done: false },
        ]}
        columns={columns}
        selection="multiple"
        defaultSelected={[1, 2]}
        defaultSort={[{ column: 'name', direction: 'asc' }]}
        layout="list"
        toolbar
      />,
    );
    expect(html).toContain('role="grid"');
    expect(html).toContain('aria-sort="ascending"');
    expect(html).toContain('aria-rowcount="3"');
    // The toolbar's choices are in the HTML, before any script runs.
    expect(html).toMatch(/<option value="name" selected="">Name<\/option>/);
    expect(html).toMatch(/<input type="checkbox" checked=""/);
  });

  it('writes calendar files on the server', () => {
    const ics = nuiSchedulerToIcs(events, { stamp: new Date(Date.UTC(2026, 8, 1)) });
    expect(ics).toContain('SUMMARY:Standup');
    expect(ics).toContain('DTSTART;VALUE=DATE:20260922');
  });
});
