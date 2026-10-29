import { nuiToday } from '@needless-ui/core';
import type {
  NuiSchedulerChange,
  NuiSchedulerEvent,
  NuiSchedulerHours,
  NuiSchedulerResource,
  NuiSchedulerSlot,
  NuiSchedulerTimelineSpan,
  NuiSchedulerView,
} from '@needless-ui/core/scheduler';
import { createRef, useState } from 'react';
import { userEvent } from 'vitest/browser';
import { render, settle } from '../../test/render.js';
import { NuiScheduler, type NuiSchedulerHandle, type NuiSchedulerProps } from './scheduler.js';

/** What a test can set: the scheduler's props, which `view` and `date` follow back. */
type Settings = Omit<NuiSchedulerProps, 'ref'> & {
  view: NuiSchedulerView;
  date: string;
  events: NuiSchedulerEvent[];
};

/** Renders a scheduler as an app would, keeping its view and date, and records what it reports. */
async function setup(initial: Settings, keep?: (change: NuiSchedulerChange) => boolean) {
  const clicked: NuiSchedulerEvent[] = [];
  const changes: NuiSchedulerChange[] = [];
  const slots: NuiSchedulerSlot[] = [];
  const ranges: string[] = [];
  const dates: string[] = [];
  const handle = createRef<NuiSchedulerHandle>();
  const host = {
    settings: initial,
    set: (_patch: Partial<Settings>) => undefined as void,
  };
  function Host() {
    const [settings, setSettings] = useState(initial);
    host.settings = settings;
    host.set = (patch) => setSettings((current) => ({ ...current, ...patch }));
    return (
      <NuiScheduler
        ref={handle}
        style={{ display: 'block', blockSize: '600px' }}
        locale="en-US"
        editable
        selectable
        {...settings}
        onViewChange={(view) => host.set({ view })}
        onDateChange={(date) => {
          dates.push(date);
          host.set({ date });
        }}
        onEventClick={(event) => clicked.push(event)}
        onEventChange={(change) => {
          changes.push(change);
          if (!keep?.(change)) return;
          // Keeps changes as the docs do: a moved occurrence leaves its series for an event of its own.
          const { event, start, end } = change;
          const id = event.recurrenceId;
          setSettings((current) => ({
            ...current,
            events:
              id === undefined
                ? current.events.map((e) => (e.id === event.id ? { ...e, start, end } : e))
                : [
                    ...current.events.map((e) =>
                      e.id === event.id ? { ...e, exdate: [...(e.exdate ?? []), id] } : e,
                    ),
                    { id: `${event.id}-${id}`, title: event.title, start, end },
                  ],
          }));
        }}
        onSlotSelect={(slot) => slots.push(slot)}
        onRangeChange={(range) => ranges.push(`${range.start}/${range.end}`)}
      />
    );
  }
  const { container: root } = await render(<Host />);
  return {
    host,
    root,
    handle,
    clicked,
    changes,
    slots,
    ranges,
    dates,
    update: async (patch: Partial<Settings>) => {
      host.set(patch);
      await settle();
    },
    cell: (key: string) => root.querySelector<HTMLElement>(`[data-cell="${key}"]`)!,
    event: (id: string) =>
      root.querySelector<HTMLElement>(`[data-event-id="${id}"]:not([data-ghost])`)!,
    events: (id: string) => [
      ...root.querySelectorAll<HTMLElement>(`[data-event-id="${id}"]:not([data-ghost])`),
    ],
    title: () => root.querySelector('.nui-scheduler-title')!.textContent!.trim(),
    status: () => root.querySelector('.nui-scheduler-status')!.textContent!.trim(),
  };
}

const week = (patch: Partial<Settings> = {}): Settings => ({
  view: 'week',
  date: '2026-09-25',
  events: [
    { id: 'standup', title: 'Standup', start: '2026-09-25T09:00', end: '2026-09-25T09:30' },
    {
      id: 'review',
      title: 'Review',
      start: '2026-09-25T09:00',
      end: '2026-09-25T10:00',
      tone: 'success',
    },
    { id: 'offsite', title: 'Offsite', start: '2026-09-22', end: '2026-09-24' },
    { id: 'lunch', title: 'Lunch', start: '2026-09-23T12:00', end: '2026-09-23T13:00' },
  ],
  ...patch,
});

const resources: NuiSchedulerResource[] = [
  { id: 'atlas', title: 'Atlas', data: 8, color: '#7c3aed' },
  { id: 'boreal', title: 'Boreal', data: 4, tone: 'success' },
];

const rooms = (patch: Partial<Settings> = {}): Settings => ({
  view: 'timeline',
  date: '2026-09-25',
  timelineSpan: 'day' as NuiSchedulerTimelineSpan,
  firstDay: 1,
  resources,
  renderResource: (resource) => (
    <span className="room">
      {resource.title} ({String(resource.data)})
    </span>
  ),
  events: [
    {
      id: 'kickoff',
      title: 'Kickoff',
      start: '2026-09-25T09:00',
      end: '2026-09-25T10:00',
      resource: 'atlas',
    },
    {
      id: 'pairing',
      title: 'Pairing',
      start: '2026-09-25T09:30',
      end: '2026-09-25T11:00',
      resource: 'boreal',
    },
    {
      id: 'planning',
      title: 'Planning',
      start: '2026-09-25T09:30',
      end: '2026-09-25T10:30',
      resource: ['atlas', 'boreal'],
      class: 'important',
    },
  ],
  ...patch,
});

/** Pointer events at the middle of an element. */
const at = (element: Element) => {
  const rect = element.getBoundingClientRect();
  return {
    clientX: rect.x + rect.width / 2,
    clientY: rect.y + rect.height / 2,
    bubbles: true,
    button: 0,
  };
};

describe('NuiScheduler', () => {
  it('lays a week out as a grid of days and times, with an all-day row', async () => {
    const { root, cell, event, title, ranges } = await setup(week());
    expect(title()).toBe('Sep 20 – 26, 2026');
    expect(ranges).toEqual(['2026-09-20/2026-09-26']);
    expect(root.querySelector('.nui-scheduler')!.getAttribute('data-view')).toBe('week');
    const grid = root.querySelector('[role="grid"]')!;
    expect(grid.getAttribute('aria-label')).toBe('Sep 20 – 26, 2026');
    const days = [...grid.querySelectorAll('thead th.nui-scheduler-day')];
    expect(days.length).toBe(7);
    expect(days[5].getAttribute('aria-label')).toBe('Friday, September 25, 2026');
    expect(grid.querySelectorAll('tbody tr').length).toBe(48);

    // Timed events sit in the cell they start in, side by side where they overlap.
    expect(cell('2026-09-25|540').contains(event('standup'))).toBe(true);
    expect(event('review').style.getPropertyValue('--_column')).not.toBe(
      event('standup').style.getPropertyValue('--_column'),
    );
    expect(event('review').getAttribute('data-tone')).toBe('success');
    expect(event('standup').getAttribute('aria-label')).toBe(
      'Standup, Friday, September 25, 9:00 – 9:30 AM',
    );
    // All-day events run across the all-day row.
    expect(cell('2026-09-22|all').contains(event('offsite'))).toBe(true);
    expect(event('offsite').style.getPropertyValue('--_span')).toBe('3');
    expect(event('offsite').getAttribute('data-kind')).toBe('bar');
    expect(event('offsite').getAttribute('aria-label')).toBe('Offsite, Sep 22 – 24, 2026, All day');
  });

  it('pages, goes to today, and switches views from its toolbar', async () => {
    const { root, host, title, status } = await setup(week());
    root.querySelector<HTMLButtonElement>('[data-direction="next"]')!.click();
    await settle();
    expect(host.settings.date).toBe('2026-10-02');
    expect(title()).toBe('Sep 27 – Oct 3, 2026');
    expect(status()).toBe('Sep 27 – Oct 3, 2026');
    const views = [...root.querySelectorAll<HTMLButtonElement>('.nui-scheduler-view')];
    expect(views.map((b) => b.getAttribute('aria-pressed'))).toEqual([
      'false',
      'true',
      'false',
      'false',
    ]);
    views[0].click();
    await settle();
    expect(host.settings.view).toBe('month');
    expect(title()).toBe('October 2026');
    expect(root.querySelectorAll('tbody td[data-cell]').length).toBe(35 + 7);

    root.querySelector<HTMLButtonElement>('.nui-scheduler-toolbar .nui-button')!.click();
    await settle();
    expect(host.settings.date).toBe(nuiToday());
  });

  it('moves through the grid with the arrow keys, and chooses time with Enter', async () => {
    const { cell, slots } = await setup(week());
    const start = cell('2026-09-25|480');
    expect(start.getAttribute('tabindex')).toBe('0');
    start.focus();
    await userEvent.keyboard('{ArrowDown}{ArrowRight}');
    await settle();
    expect(document.activeElement).toBe(cell('2026-09-26|510'));
    await userEvent.keyboard('{Shift>}{ArrowDown}{ArrowDown}{/Shift}');
    await settle();
    expect(cell('2026-09-26|540').getAttribute('aria-selected')).toBe('true');
    expect(cell('2026-09-26|540').hasAttribute('data-selected')).toBe(true);
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(slots).toEqual([{ start: '2026-09-26T08:30', end: '2026-09-26T10:00', allDay: false }]);
    // Up from the first slot reaches the all-day row.
    await userEvent.keyboard('{Control>}{Home}{/Control}');
    await settle();
    expect(document.activeElement).toBe(cell('2026-09-26|all'));
  });

  it('goes into a cell’s events with Enter, and moves them with Alt and the arrows', async () => {
    const { cell, event, clicked, changes, status } = await setup(week());
    cell('2026-09-25|540').focus();
    await userEvent.keyboard('{Enter}');
    expect(document.activeElement?.getAttribute('data-event-id')).toBe('review');
    await userEvent.keyboard('{ArrowDown}');
    expect(document.activeElement).toBe(event('standup'));
    await userEvent.keyboard('{Enter}');
    expect(clicked.map((e) => e.id)).toEqual(['standup']);

    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');
    await settle();
    expect(changes.at(-1)).toMatchObject({
      start: '2026-09-25T09:30',
      end: '2026-09-25T10:00',
    });
    expect(status()).toBe('Standup: Friday, September 25, 9:30 – 10:00 AM');
    await userEvent.keyboard('{Alt>}{Shift>}{ArrowDown}{/Shift}{/Alt}');
    await settle();
    expect(changes.at(-1)).toMatchObject({
      start: '2026-09-25T09:00',
      end: '2026-09-25T10:00',
    });
    await userEvent.keyboard('{Escape}');
    expect(document.activeElement).toBe(cell('2026-09-25|540'));
  });

  it('drags an event to another day', async () => {
    const { cell, event, changes } = await setup(week({ view: 'month' }));
    event('lunch').dispatchEvent(new PointerEvent('pointerdown', at(event('lunch'))));
    document.dispatchEvent(new PointerEvent('pointermove', at(cell('2026-09-30'))));
    await settle();
    expect(changes.length).toBe(0);
    expect(document.querySelector('.nui-scheduler')!.getAttribute('data-dragging')).toBe('move');
    expect(cell('2026-09-30').querySelector('[data-ghost]')!.textContent).toBe('Lunch');
    document.dispatchEvent(new PointerEvent('pointerup', at(cell('2026-09-30'))));
    await settle();
    expect(changes).toEqual([
      expect.objectContaining({ start: '2026-09-30T12:00', end: '2026-09-30T13:00' }),
    ]);
    expect(document.querySelector('[data-ghost]')).toBeNull();
  });

  it('picks an event up with a long press of a finger, and lets a moving finger scroll', async () => {
    const { cell, event, changes } = await setup(week({ view: 'month' }));
    const finger = (type: string, element: Element) =>
      new PointerEvent(type, { ...at(element), pointerId: 7, pointerType: 'touch' });
    // A finger that moves at once scrolls: nothing is picked up.
    event('lunch').dispatchEvent(finger('pointerdown', event('lunch')));
    document.dispatchEvent(finger('pointermove', cell('2026-09-30')));
    document.dispatchEvent(finger('pointerup', cell('2026-09-30')));
    await settle();
    expect(changes).toEqual([]);

    // Held still for a long press, it picks the event up, and the finger drags it.
    event('lunch').dispatchEvent(finger('pointerdown', event('lunch')));
    await new Promise((resolve) => setTimeout(resolve, 450));
    await settle();
    expect(event('lunch').hasAttribute('data-moving')).toBe(true);
    document.dispatchEvent(finger('pointermove', cell('2026-09-30')));
    await settle();
    document.dispatchEvent(finger('pointerup', cell('2026-09-30')));
    await settle();
    expect(changes).toEqual([expect.objectContaining({ start: '2026-09-30T12:00' })]);

    // A gesture the browser takes back changes nothing.
    event('lunch').dispatchEvent(finger('pointerdown', event('lunch')));
    await new Promise((resolve) => setTimeout(resolve, 450));
    document.dispatchEvent(finger('pointermove', cell('2026-10-01')));
    document.dispatchEvent(finger('pointercancel', cell('2026-10-01')));
    await settle();
    expect(changes.length).toBe(1);
    expect(document.querySelector('[data-ghost]')).toBeNull();
  });

  it('shows more in a month cell than fits, and lists what’s coming in the agenda', async () => {
    const { root, host, cell, update } = await setup(
      week({
        view: 'month',
        events: [
          ...week().events,
          ...[1, 2, 3].map((i) => ({
            id: `extra${i}`,
            title: `Extra ${i}`,
            start: '2026-09-25',
            end: '2026-09-25',
          })),
        ],
      }),
    );
    const more = cell('2026-09-25').querySelector<HTMLButtonElement>('.nui-scheduler-more')!;
    expect(more.textContent!.trim()).toBe('2 more');
    expect(cell('2026-09-25').textContent).toContain('Friday, September 25, 2026, 5 events');
    more.click();
    await settle();
    expect(host.settings.view).toBe('day');

    await update({ view: 'agenda' });
    const days = [...root.querySelectorAll('.nui-scheduler-agenda-date')].map((d) =>
      d.textContent!.trim(),
    );
    expect(days).toEqual(['Friday, September 25']);
    expect(root.querySelector('.nui-scheduler-agenda-date')!.getAttribute('aria-level')).toBe('3');
    expect(root.querySelectorAll('.nui-scheduler-agenda li').length).toBe(5);
  });

  it('draws events and the toolbar the app’s way', async () => {
    const { root } = await setup(
      week({
        renderEvent: (event, { time }) => (
          <b className="mine">
            {event.title} at {time}
          </b>
        ),
        toolbar: ({ title, next }) => (
          <nav className="my-toolbar">
            <h3>{title}</h3>
            <button type="button" onClick={next}>
              On
            </button>
          </nav>
        ),
      }),
    );
    expect(root.querySelector('.nui-scheduler-toolbar')).toBeNull();
    expect(root.querySelector('.my-toolbar h3')!.textContent).toBe('Sep 20 – 26, 2026');
    expect(root.querySelector('[data-event-id="standup"] .mine')!.textContent).toBe(
      'Standup at 9:00 – 9:30 AM',
    );
    root.querySelector<HTMLButtonElement>('.my-toolbar button')!.click();
    await settle();
    expect(root.querySelector('.my-toolbar h3')!.textContent).toBe('Sep 27 – Oct 3, 2026');
  });
});

describe('NuiScheduler with resources', () => {
  it('lays resources out as rows of the timeline, with events along their day', async () => {
    const { root, cell, events } = await setup(rooms());
    const grid = root.querySelector('[role="grid"]')!;
    expect(grid.getAttribute('data-view')).toBe('timeline');
    const heads = [...grid.querySelectorAll('tbody th')].map((th) => th.textContent!.trim());
    expect(heads).toEqual(['Atlas (8)', 'Boreal (4)']);
    // A column per slot of the day, its hours named.
    expect(grid.querySelectorAll('thead th[data-slot]').length).toBe(48);
    expect(grid.querySelector('thead th[data-slot="540"]')!.textContent!.trim()).toBe('9:00 AM');
    expect(cell('2026-09-25|540|0').contains(events('kickoff')[0])).toBe(true);
    expect(events('kickoff')[0].style.getPropertyValue('--_span')).toBe('2');
    // Overlapping events stack in lanes; an event of two resources shows in both rows.
    expect(events('planning').length).toBe(2);
    expect(events('planning')[0].style.getPropertyValue('--_lane')).toBe('1');
    expect(events('planning')[0].style.getPropertyValue('--_offset')).toBe('0');
    expect(events('planning')[0].classList).toContain('important');
    expect(events('kickoff')[0].getAttribute('aria-label')).toBe(
      'Kickoff, Atlas, Friday, September 25, 9:00 – 10:00 AM',
    );
    // Events take their resource's color, unless they have their own.
    expect(events('kickoff')[0].hasAttribute('data-color')).toBe(true);
    expect(events('kickoff')[0].style.getPropertyValue('--_color')).toBe('#7c3aed');
    expect(events('pairing')[0].getAttribute('data-tone')).toBe('success');
    const views = [...root.querySelectorAll('.nui-scheduler-view')].map((b) =>
      b.textContent!.trim(),
    );
    expect(views).toEqual(['Month', 'Week', 'Day', 'Agenda', 'Timeline']);
  });

  it('moves through resources and time from the keyboard, and moves events between them', async () => {
    const { host, cell, events, changes } = await setup(rooms());
    const start = cell('2026-09-25|480|0');
    expect(start.getAttribute('tabindex')).toBe('0');
    start.focus();
    await userEvent.keyboard('{ArrowDown}{ArrowRight}{ArrowRight}');
    await settle();
    expect(document.activeElement).toBe(cell('2026-09-25|540|1'));
    await userEvent.keyboard('{Control>}{Home}{/Control}');
    await settle();
    expect(document.activeElement).toBe(cell('2026-09-25|540|0'));

    events('kickoff')[0].focus();
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');
    await settle();
    expect(changes.at(-1)).toEqual({
      event: host.settings.events[0],
      start: '2026-09-25T09:00',
      end: '2026-09-25T10:00',
      resource: 'boreal',
    });
    await userEvent.keyboard('{Alt>}{ArrowRight}{/Alt}');
    await settle();
    expect(changes.at(-1)).toMatchObject({
      start: '2026-09-25T09:30',
      end: '2026-09-25T10:30',
    });
    // Across, Shift changes the length.
    await userEvent.keyboard('{Alt>}{Shift>}{ArrowRight}{/Shift}{/Alt}');
    await settle();
    expect(changes.at(-1)).toMatchObject({
      start: '2026-09-25T09:00',
      end: '2026-09-25T10:30',
    });
    // An event of two resources leaves one for the other.
    events('planning')[1].focus();
    await userEvent.keyboard('{Alt>}{ArrowUp}{/Alt}');
    await settle();
    expect(changes.at(-1)!.resource).toEqual(['atlas']);
  });

  it('drags an event to another resource', async () => {
    // A few hours, so every cell is on screen: unit tests have no styles to scroll the grid.
    const { cell, events, changes } = await setup(rooms({ dayStart: 8, dayEnd: 12 }));
    events('kickoff')[0].dispatchEvent(
      new PointerEvent('pointerdown', at(cell('2026-09-25|540|0'))),
    );
    document.dispatchEvent(new PointerEvent('pointermove', at(cell('2026-09-25|540|1'))));
    await settle();
    expect(changes.length).toBe(0);
    document.dispatchEvent(new PointerEvent('pointerup', at(cell('2026-09-25|540|1'))));
    await settle();
    expect(changes).toEqual([
      expect.objectContaining({
        start: '2026-09-25T09:00',
        end: '2026-09-25T10:00',
        resource: 'boreal',
      }),
    ]);
  });

  it('splits the day and the week into columns per resource', async () => {
    const { root, cell, events, changes, update } = await setup(rooms({ view: 'day' }));
    const heads = [...root.querySelectorAll('thead th.nui-scheduler-resource')].map((th) =>
      th.textContent!.trim(),
    );
    expect(heads).toEqual(['Atlas (8)', 'Boreal (4)']);
    expect(cell('2026-09-25|540|0').contains(events('kickoff')[0])).toBe(true);
    expect(cell('2026-09-25|540|1').contains(events('pairing')[0])).toBe(false);
    expect(cell('2026-09-25|570|1').contains(events('pairing')[0])).toBe(true);
    // Across the day's columns, Alt moves an event to the next resource.
    events('kickoff')[0].focus();
    await userEvent.keyboard('{Alt>}{ArrowRight}{/Alt}');
    expect(changes.at(-1)).toMatchObject({ start: '2026-09-25T09:00', resource: 'boreal' });

    await update({ view: 'week' });
    // The week heads each resource's seven days with its name.
    const groups = root.querySelectorAll('thead th.nui-scheduler-resource');
    expect([...groups].map((th) => th.getAttribute('colspan'))).toEqual(['7', '7']);
    expect(root.querySelectorAll('tbody tr:first-child td').length).toBe(14);
    expect(cell('2026-09-21|all|1').getAttribute('data-group')).toBe('true');
  });

  it('shows the hours asked for, shades time off, and leaves out the weekend', async () => {
    const hours: NuiSchedulerHours[] = [{ days: [1, 2, 3, 4, 5], start: '09:00', end: '17:00' }];
    const { root, cell, update } = await setup(
      rooms({
        view: 'week',
        resources: [],
        dayStart: 8,
        dayEnd: 18,
        businessHours: hours,
        weekends: false,
        weekNumbers: true,
      }),
    );
    const rows = root.querySelectorAll('tbody tr');
    expect(rows.length).toBe(20);
    expect(rows[0].getAttribute('data-slot-row')).toBe('480');
    expect(root.querySelectorAll('thead th.nui-scheduler-day').length).toBe(5);
    expect(cell('2026-09-25|480').hasAttribute('data-off')).toBe(true);
    expect(cell('2026-09-25|540').hasAttribute('data-off')).toBe(false);
    expect(root.querySelector('.nui-scheduler-week-number')!.textContent!.trim()).toBe('Week 39');
    // Right from Friday goes on to Monday.
    cell('2026-09-25|540').focus();
    await userEvent.keyboard('{ArrowRight}');
    await settle();
    expect(document.activeElement).toBe(cell('2026-09-28|540'));

    await update({ view: 'month' });
    expect(root.querySelectorAll('thead th').length).toBe(6);
    expect(
      [...root.querySelectorAll('tbody th.nui-scheduler-week')].map((th) => th.textContent!.trim()),
    ).toEqual(['36', '37', '38', '39', '40', '41']);
  });

  it('repeats events by their rule, and reports which occurrence people act on', async () => {
    const { root, cell, events, clicked, changes, update } = await setup(
      rooms({
        view: 'week',
        resources: [],
        events: [
          {
            id: 'standup',
            title: 'Standup',
            start: '2026-09-01T09:00',
            end: '2026-09-01T09:15',
            rrule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
            exdate: ['2026-09-23'],
          },
        ],
      }),
    );
    expect(root.querySelectorAll('.nui-scheduler-event:not([data-ghost])').length).toBe(2);
    const friday = events('standup@2026-09-25T09:00')[0];
    expect(cell('2026-09-25|540').contains(friday)).toBe(true);
    expect(friday.getAttribute('data-recurring')).toBe('');
    expect(friday.getAttribute('aria-label')).toBe(
      'Standup, Friday, September 25, 9:00 – 9:15 AM, Repeats',
    );
    friday.click();
    expect(clicked.at(-1)).toMatchObject({
      id: 'standup',
      start: '2026-09-25T09:00',
      recurrenceId: '2026-09-25T09:00',
    });
    friday.focus();
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');
    expect(changes.at(-1)).toMatchObject({
      event: { recurrenceId: '2026-09-25T09:00' },
      start: '2026-09-25T09:30',
    });
    await update({ date: '2026-10-02' });
    expect(root.querySelectorAll('.nui-scheduler-event:not([data-ghost])').length).toBe(3);
  });

  it('moves by snapMinutes, and asks allow before anything changes', async () => {
    const { root, cell, events, changes, slots, status, update } = await setup(
      rooms({ view: 'day', snapMinutes: 15 }),
    );
    events('kickoff')[0].focus();
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');
    expect(changes.at(-1)).toMatchObject({
      start: '2026-09-25T09:15',
      end: '2026-09-25T10:15',
    });

    await update({
      allow: (time) => !('event' in time) || time.start >= '2026-09-25T09:00',
    });
    events('kickoff')[0].focus();
    await userEvent.keyboard('{Alt>}{ArrowUp}{/Alt}');
    await settle();
    expect(changes.length).toBe(1);
    expect(status()).toBe('Not available');

    // A drag it turns down shows as not allowed, and drops nothing.
    events('kickoff')[0].dispatchEvent(
      new PointerEvent('pointerdown', at(cell('2026-09-25|540|0'))),
    );
    document.dispatchEvent(new PointerEvent('pointermove', at(cell('2026-09-25|480|0'))));
    await settle();
    expect(root.querySelector('.nui-scheduler')!.getAttribute('data-invalid')).toBe('true');
    document.dispatchEvent(new PointerEvent('pointerup', at(cell('2026-09-25|480|0'))));
    await settle();
    expect(changes.length).toBe(1);

    await update({ allow: () => false });
    cell('2026-09-25|480|0').focus();
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(slots).toEqual([]);
    expect(status()).toBe('Not available');
  });

  it('pages from a toolbar of your own', async () => {
    const { root, host, handle, update } = await setup(
      rooms({ toolbar: false, timelineSpan: 'month' }),
    );
    expect(root.querySelector('.nui-scheduler-toolbar')).toBeNull();
    expect(handle.current!.title).toBe('September 2026');
    expect(root.querySelectorAll('thead th.nui-scheduler-day').length).toBe(30);
    handle.current!.next();
    await settle();
    expect(host.settings.date).toBe('2026-10-25');
    expect(handle.current!.title).toBe('October 2026');
    handle.current!.goToday();
    await settle();
    expect(host.settings.date).toBe(nuiToday());
    await update({});
  });

  it('chains calls on its ref and on a toolbar of its own, as signals would', async () => {
    const { host, handle, root, update } = await setup(
      week({
        toolbar: ({ setView, next }) => (
          <button
            type="button"
            className="day-after"
            onClick={() => {
              setView('day');
              next();
            }}
          >
            The day after
          </button>
        ),
      }),
    );
    handle.current!.next();
    handle.current!.next();
    await settle();
    expect(host.settings.date).toBe('2026-10-09');
    await update({ date: '2026-09-25' });
    root.querySelector<HTMLButtonElement>('.day-after')!.click();
    await settle();
    expect(host.settings.view).toBe('day');
    expect(host.settings.date).toBe('2026-09-26');
  });

  it('reports a date or a view only when it changes, as Angular models do', async () => {
    const { root, cell, dates } = await setup(week());
    cell('2026-09-25|480').focus();
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    await settle();
    expect(document.activeElement).toBe(cell('2026-09-25|540'));
    expect(dates).toEqual([]);
    root.querySelector<HTMLButtonElement>('.nui-scheduler-view[aria-pressed="true"]')!.click();
    await settle();
    expect(dates).toEqual([]);
    await userEvent.keyboard('{ArrowRight}');
    await settle();
    expect(dates).toEqual(['2026-09-26']);
  });
});

describe('NuiScheduler edges', () => {
  it('moves all-day events by whole days, and reports nothing a key leaves the same', async () => {
    const { events, changes } = await setup(
      rooms({
        events: [
          {
            id: 'vacation',
            title: 'Vacation',
            start: '2026-09-25',
            end: '2026-09-25',
            resource: 'atlas',
          },
        ],
      }),
    );
    events('vacation')[0].focus();
    await userEvent.keyboard('{Alt>}{ArrowRight}{/Alt}');
    expect(changes.at(-1)).toMatchObject({ start: '2026-09-26', end: '2026-09-26' });
    await userEvent.keyboard('{Alt>}{Shift>}{ArrowLeft}{/Shift}{/Alt}');
    expect(changes.length).toBe(1);
  });

  it('never lengthens an event it shortens', async () => {
    const { events, changes } = await setup(rooms({ view: 'month', resources: [] }));
    events('kickoff')[0].focus();
    await userEvent.keyboard('{Alt>}{Shift>}{ArrowLeft}{/Shift}{/Alt}');
    expect(changes).toEqual([]);
    await userEvent.keyboard('{Alt>}{Shift>}{ArrowRight}{/Shift}{/Alt}');
    expect(changes.at(-1)).toMatchObject({
      start: '2026-09-25T09:00',
      end: '2026-09-26T10:00',
    });
  });

  it('pages and moves past a hidden weekend', async () => {
    const { root, host, cell, events, changes, handle, update } = await setup(
      rooms({ view: 'day', resources: [], weekends: false, date: '2026-09-28' }),
    );
    cell('2026-09-28|480').focus();
    await userEvent.keyboard('{PageUp}');
    await settle();
    expect(host.settings.date).toBe('2026-09-25');
    expect(document.activeElement).toBe(cell('2026-09-25|480'));
    root.querySelector<HTMLButtonElement>('[data-direction="next"]')!.click();
    await settle();
    expect(host.settings.date).toBe('2026-09-28');
    // A weekend day shows the Monday after it.
    await update({ date: '2026-09-26' });
    expect(handle.current!.title).toBe('Monday, September 28, 2026');

    // Alt and Right move Friday's event on to Monday.
    await update({ view: 'week', date: '2026-09-25' });
    events('kickoff')[0].focus();
    await userEvent.keyboard('{Alt>}{ArrowRight}{/Alt}');
    expect(changes.at(-1)).toMatchObject({
      start: '2026-09-28T09:00',
      end: '2026-09-28T10:00',
    });

    // A month pages to the next month, even when its day falls on a weekend there.
    await update({ view: 'month', date: '2026-04-30' });
    cell('2026-04-30').focus();
    await userEvent.keyboard('{PageDown}');
    await settle();
    expect(host.settings.date).toBe('2026-05-29');
  });

  it('keeps chosen time to one resource', async () => {
    const { cell, slots } = await setup(rooms({ view: 'week' }));
    cell('2026-09-27|480|0').focus();
    await userEvent.keyboard('{Shift>}{ArrowRight}{/Shift}');
    await settle();
    expect(document.activeElement).toBe(cell('2026-09-27|480|0'));
    await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}{Enter}');
    await settle();
    expect(slots).toEqual([
      { start: '2026-09-27T08:00', end: '2026-09-27T09:00', allDay: false, resource: 'atlas' },
    ]);
  });

  it('keeps focus in the grid when the app replaces a moved occurrence', async () => {
    const { cell, events } = await setup(
      rooms({
        view: 'week',
        resources: [],
        events: [
          {
            id: 'standup',
            title: 'Standup',
            start: '2026-09-21T09:00',
            end: '2026-09-21T09:15',
            rrule: 'FREQ=DAILY',
          },
        ],
      }),
      () => true,
    );
    events('standup@2026-09-23T09:00')[0].focus();
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');
    await settle();
    expect(events('standup-2026-09-23T09:00').length).toBe(1);
    expect(document.activeElement).toBe(cell('2026-09-23|570'));
  });

  it('leaves focus where people put it after a key that moved nothing', async () => {
    const { root, cell } = await setup(rooms({ view: 'week', resources: [] }));
    cell('2026-09-25|480').focus();
    await userEvent.keyboard('{Control>}{End}{/Control}');
    await settle();
    expect(document.activeElement).toBe(cell('2026-09-25|1410'));
    await userEvent.keyboard('{ArrowDown}');
    await settle();
    const next = root.querySelector<HTMLButtonElement>('[data-direction="next"]')!;
    next.focus();
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(document.activeElement).toBe(next);
  });

  it('chooses nothing with Enter when time can’t be chosen', async () => {
    const { cell, slots } = await setup(rooms({ view: 'week', resources: [], selectable: false }));
    cell('2026-09-25|480').focus();
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(slots).toEqual([]);
    expect(cell('2026-09-25|480').hasAttribute('data-selected')).toBe(false);
    expect(cell('2026-09-25|480').hasAttribute('aria-selected')).toBe(false);
  });
});
