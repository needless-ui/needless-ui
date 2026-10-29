import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, signal, viewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { nuiToday } from '@needless-ui/angular';
import { userEvent } from 'vitest/browser';
import type {
  NuiSchedulerEvent,
  NuiSchedulerHours,
  NuiSchedulerResource,
  NuiSchedulerTimelineSpan,
  NuiSchedulerView,
} from './layout';
import {
  NuiScheduler,
  type NuiSchedulerChange,
  NuiSchedulerResourceTemplate,
  type NuiSchedulerSlot,
} from './scheduler';

@Component({
  imports: [NuiScheduler],
  template: `
    <nui-scheduler
      style="display: block; block-size: 600px"
      [events]="events()"
      [(view)]="view"
      [(date)]="date"
      locale="en-US"
      editable
      selectable
      (eventClick)="clicked.push($event.id)"
      (eventChange)="changes.push($event)"
      (slotSelect)="slots.push($event)"
      (rangeChange)="ranges.push($event.start + '/' + $event.end)"
    />
  `,
})
class Host {
  readonly view = signal<NuiSchedulerView>('week');
  readonly date = signal('2026-09-25');
  readonly events = signal<NuiSchedulerEvent[]>([
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
  ]);
  readonly clicked: string[] = [];
  readonly changes: NuiSchedulerChange[] = [];
  readonly slots: NuiSchedulerSlot[] = [];
  readonly ranges: string[] = [];
}

async function setup(change?: (host: Host) => void) {
  const announcements: string[] = [];
  TestBed.configureTestingModule({
    providers: [
      { provide: LiveAnnouncer, useValue: { announce: (t: string) => void announcements.push(t) } },
    ],
  });
  const fixture = TestBed.createComponent(Host);
  change?.(fixture.componentInstance);
  document.body.append(fixture.nativeElement);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const cell = (key: string) => root.querySelector<HTMLElement>(`[data-cell="${key}"]`)!;
  const event = (id: string) =>
    root.querySelector<HTMLElement>(`[data-event-id="${id}"]:not([data-ghost])`)!;
  const title = () => root.querySelector('.nui-scheduler-title')!.textContent!.trim();
  return {
    fixture,
    host: fixture.componentInstance,
    root,
    cell,
    event,
    title,
    announcements,
    stable: () => fixture.whenStable(),
  };
}

describe('NuiScheduler', () => {
  it('lays a week out as a grid of days and times, with an all-day row', async () => {
    const { root, host, cell, event, title } = await setup();
    expect(title()).toBe('Sep 20 – 26, 2026');
    expect(host.ranges).toEqual(['2026-09-20/2026-09-26']);
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
    expect(event('standup').getAttribute('aria-label')).toBe(
      'Standup, Friday, September 25, 9:00 – 9:30 AM',
    );
    // All-day events run across the all-day row.
    expect(cell('2026-09-22|all').contains(event('offsite'))).toBe(true);
    expect(event('offsite').style.getPropertyValue('--_span')).toBe('3');
    expect(event('offsite').getAttribute('aria-label')).toBe('Offsite, Sep 22 – 24, 2026, All day');
  });

  it('pages, goes to today, and switches views from its toolbar', async () => {
    const { root, host, title, stable } = await setup();
    root.querySelector<HTMLButtonElement>('[data-direction="next"]')!.click();
    await stable();
    expect(host.date()).toBe('2026-10-02');
    expect(title()).toBe('Sep 27 – Oct 3, 2026');
    const views = [...root.querySelectorAll<HTMLButtonElement>('.nui-scheduler-view')];
    expect(views.map((b) => b.getAttribute('aria-pressed'))).toEqual([
      'false',
      'true',
      'false',
      'false',
    ]);
    views[0].click();
    await stable();
    expect(host.view()).toBe('month');
    expect(title()).toBe('October 2026');
    expect(root.querySelectorAll('tbody td[data-cell]').length).toBe(35 + 7);
  });

  it('moves through the grid with the arrow keys, and chooses time with Enter', async () => {
    const { host, cell, stable } = await setup();
    const start = cell('2026-09-25|480');
    expect(start.getAttribute('tabindex')).toBe('0');
    start.focus();
    await userEvent.keyboard('{ArrowDown}{ArrowRight}');
    await stable();
    expect(document.activeElement).toBe(cell('2026-09-26|510'));
    await userEvent.keyboard('{Shift>}{ArrowDown}{ArrowDown}{/Shift}{Enter}');
    await stable();
    expect(host.slots).toEqual([
      { start: '2026-09-26T08:30', end: '2026-09-26T10:00', allDay: false },
    ]);
    // Up from the first slot reaches the all-day row.
    await userEvent.keyboard('{Control>}{Home}{/Control}');
    await stable();
    expect(document.activeElement).toBe(cell('2026-09-26|all'));
  });

  it('goes into a cell’s events with Enter, and moves them with Alt and the arrows', async () => {
    const { host, cell, event, announcements, stable } = await setup();
    cell('2026-09-25|540').focus();
    await userEvent.keyboard('{Enter}');
    expect(document.activeElement?.getAttribute('data-event-id')).toBe('review');
    await userEvent.keyboard('{ArrowDown}');
    expect(document.activeElement).toBe(event('standup'));
    await userEvent.keyboard('{Enter}');
    expect(host.clicked).toEqual(['standup']);

    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');
    await stable();
    expect(host.changes.at(-1)).toMatchObject({
      start: '2026-09-25T09:30',
      end: '2026-09-25T10:00',
    });
    expect(announcements.at(-1)).toBe('Standup: Friday, September 25, 9:30 – 10:00 AM');
    await userEvent.keyboard('{Alt>}{Shift>}{ArrowDown}{/Shift}{/Alt}');
    expect(host.changes.at(-1)).toMatchObject({
      start: '2026-09-25T09:00',
      end: '2026-09-25T10:00',
    });
    await userEvent.keyboard('{Escape}');
    expect(document.activeElement).toBe(cell('2026-09-25|540'));
  });

  it('drags an event to another day', async () => {
    const { host, cell, event, stable } = await setup((h) => h.view.set('month'));
    const from = event('lunch').getBoundingClientRect();
    const target = cell('2026-09-30').getBoundingClientRect();
    const at = (rect: DOMRect) => ({
      clientX: rect.x + rect.width / 2,
      clientY: rect.y + rect.height / 2,
      bubbles: true,
      button: 0,
    });
    event('lunch').dispatchEvent(new PointerEvent('pointerdown', at(from)));
    document.dispatchEvent(new PointerEvent('pointermove', at(target)));
    await stable();
    expect(host.changes.length).toBe(0);
    document.dispatchEvent(new PointerEvent('pointerup', at(target)));
    await stable();
    expect(host.changes).toEqual([
      expect.objectContaining({ start: '2026-09-30T12:00', end: '2026-09-30T13:00' }),
    ]);
  });

  it('shows more in a month cell than fits, and lists what’s coming in the agenda', async () => {
    const { root, host, cell, stable } = await setup((h) => {
      h.view.set('month');
      h.events.update((events) => [
        ...events,
        ...[1, 2, 3].map((i) => ({
          id: `extra${i}`,
          title: `Extra ${i}`,
          start: '2026-09-25',
          end: '2026-09-25',
        })),
      ]);
    });
    const more = cell('2026-09-25').querySelector<HTMLButtonElement>('.nui-scheduler-more')!;
    expect(more.textContent!.trim()).toBe('2 more');
    expect(cell('2026-09-25').textContent).toContain('Friday, September 25, 2026, 5 events');
    more.click();
    await stable();
    expect(host.view()).toBe('day');

    host.view.set('agenda');
    await stable();
    const days = [...root.querySelectorAll('.nui-scheduler-agenda-date')].map((d) =>
      d.textContent!.trim(),
    );
    expect(days).toEqual(['Friday, September 25']);
    expect(root.querySelectorAll('.nui-scheduler-agenda li').length).toBe(5);
  });
});

@Component({
  imports: [NuiScheduler, NuiSchedulerResourceTemplate],
  template: `
    <nui-scheduler
      #scheduler="nuiScheduler"
      style="display: block; block-size: 600px"
      [events]="events()"
      [resources]="resources()"
      [(view)]="view"
      [(date)]="date"
      [timelineSpan]="span()"
      [businessHours]="hours()"
      [weekends]="weekends()"
      [weekNumbers]="weekNumbers()"
      [dayStart]="dayStart()"
      [dayEnd]="dayEnd()"
      [scrollHour]="scrollHour()"
      [snapMinutes]="snap()"
      [allow]="allow()"
      [toolbar]="toolbar()"
      locale="en-US"
      firstDay="1"
      editable
      [selectable]="selectable()"
      (eventClick)="clicked.push($event)"
      (eventChange)="change($event)"
      (slotSelect)="slots.push($event)"
    >
      <ng-template nuiSchedulerResource let-resource>
        <span class="room">{{ resource.title }} ({{ resource.data }})</span>
      </ng-template>
    </nui-scheduler>
  `,
})
class Rooms {
  readonly scheduler = viewChild.required<NuiScheduler>('scheduler');
  readonly view = signal<NuiSchedulerView>('timeline');
  readonly date = signal('2026-09-25');
  readonly span = signal<NuiSchedulerTimelineSpan>('day');
  readonly hours = signal<NuiSchedulerHours[] | null>(null);
  readonly weekends = signal(true);
  readonly weekNumbers = signal(false);
  readonly dayStart = signal(0);
  readonly dayEnd = signal(24);
  readonly scrollHour = signal(8);
  readonly snap = signal<number | undefined>(undefined);
  readonly allow = signal<((time: NuiSchedulerChange | NuiSchedulerSlot) => boolean) | null>(null);
  readonly toolbar = signal(true);
  readonly selectable = signal(true);
  readonly resources = signal<NuiSchedulerResource[]>([
    { id: 'atlas', title: 'Atlas', data: 8, color: '#7c3aed' },
    { id: 'boreal', title: 'Boreal', data: 4, tone: 'success' },
  ]);
  readonly events = signal<NuiSchedulerEvent[]>([
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
  ]);
  readonly clicked: NuiSchedulerEvent[] = [];
  readonly changes: NuiSchedulerChange[] = [];
  readonly slots: NuiSchedulerSlot[] = [];
  /** Keeps changes as the docs do: a moved occurrence leaves its series for an event of its own. */
  readonly apply = signal(false);

  change(change: NuiSchedulerChange): void {
    this.changes.push(change);
    if (!this.apply()) return;
    const { event, start, end } = change;
    const id = event.recurrenceId;
    this.events.update((events) =>
      id === undefined
        ? events.map((e) => (e.id === event.id ? { ...e, start, end } : e))
        : [
            ...events.map((e) =>
              e.id === event.id ? { ...e, exdate: [...(e.exdate ?? []), id] } : e,
            ),
            { id: `${event.id}-${id}`, title: event.title, start, end },
          ],
    );
  }
}

async function rooms(change?: (host: Rooms) => void) {
  const announcements: string[] = [];
  TestBed.configureTestingModule({
    providers: [
      { provide: LiveAnnouncer, useValue: { announce: (t: string) => void announcements.push(t) } },
    ],
  });
  const fixture = TestBed.createComponent(Rooms);
  change?.(fixture.componentInstance);
  document.body.append(fixture.nativeElement);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  return {
    host: fixture.componentInstance,
    root,
    announcements,
    cell: (key: string) => root.querySelector<HTMLElement>(`[data-cell="${key}"]`)!,
    events: (id: string) => [
      ...root.querySelectorAll<HTMLElement>(`[data-event-id="${id}"]:not([data-ghost])`),
    ],
    stable: () => fixture.whenStable(),
  };
}

describe('NuiScheduler with resources', () => {
  it('lays resources out as rows of the timeline, with events along their day', async () => {
    const { root, cell, events } = await rooms();
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
    const { host, cell, events, stable } = await rooms();
    const start = cell('2026-09-25|480|0');
    expect(start.getAttribute('tabindex')).toBe('0');
    start.focus();
    await userEvent.keyboard('{ArrowDown}{ArrowRight}{ArrowRight}');
    await stable();
    expect(document.activeElement).toBe(cell('2026-09-25|540|1'));
    await userEvent.keyboard('{Control>}{Home}{/Control}');
    await stable();
    expect(document.activeElement).toBe(cell('2026-09-25|540|0'));

    events('kickoff')[0].focus();
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');
    expect(host.changes.at(-1)).toEqual({
      event: host.events()[0],
      start: '2026-09-25T09:00',
      end: '2026-09-25T10:00',
      resource: 'boreal',
    });
    await userEvent.keyboard('{Alt>}{ArrowRight}{/Alt}');
    expect(host.changes.at(-1)).toMatchObject({
      start: '2026-09-25T09:30',
      end: '2026-09-25T10:30',
    });
    // Across, Shift changes the length.
    await userEvent.keyboard('{Alt>}{Shift>}{ArrowRight}{/Shift}{/Alt}');
    expect(host.changes.at(-1)).toMatchObject({
      start: '2026-09-25T09:00',
      end: '2026-09-25T10:30',
    });
    // The last move focuses its event again after the render: wait for it.
    await stable();
    // An event of two resources leaves one for the other.
    events('planning')[1].focus();
    await userEvent.keyboard('{Alt>}{ArrowUp}{/Alt}');
    expect(host.changes.at(-1)!.resource).toEqual(['atlas']);
  });

  it('drags an event to another resource', async () => {
    // A few hours, so every cell is on screen: unit tests have no styles to scroll the grid.
    const { host, cell, events, stable } = await rooms((h) => {
      h.dayStart.set(8);
      h.dayEnd.set(12);
    });
    const at = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      return {
        clientX: rect.x + rect.width / 2,
        clientY: rect.y + rect.height / 2,
        bubbles: true,
        button: 0,
      };
    };
    events('kickoff')[0].dispatchEvent(
      new PointerEvent('pointerdown', at(cell('2026-09-25|540|0'))),
    );
    document.dispatchEvent(new PointerEvent('pointermove', at(cell('2026-09-25|540|1'))));
    await stable();
    expect(host.changes.length).toBe(0);
    document.dispatchEvent(new PointerEvent('pointerup', at(cell('2026-09-25|540|1'))));
    await stable();
    expect(host.changes).toEqual([
      expect.objectContaining({
        start: '2026-09-25T09:00',
        end: '2026-09-25T10:00',
        resource: 'boreal',
      }),
    ]);
  });

  it('splits the day and the week into columns per resource', async () => {
    const { root, host, cell, events, stable } = await rooms((h) => h.view.set('day'));
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
    expect(host.changes.at(-1)).toMatchObject({ start: '2026-09-25T09:00', resource: 'boreal' });

    host.view.set('week');
    await stable();
    // The week heads each resource's seven days with its name.
    const groups = root.querySelectorAll('thead th.nui-scheduler-resource');
    expect([...groups].map((th) => th.getAttribute('colspan'))).toEqual(['7', '7']);
    expect(root.querySelectorAll('tbody tr:first-child td').length).toBe(14);
    expect(cell('2026-09-21|all|1').getAttribute('data-group')).toBe('true');
  });

  it('shows the hours asked for, shades time off, and leaves out the weekend', async () => {
    const { root, host, cell, stable } = await rooms((h) => {
      h.view.set('week');
      h.resources.set([]);
      h.dayStart.set(8);
      h.dayEnd.set(18);
      h.hours.set([{ days: [1, 2, 3, 4, 5], start: '09:00', end: '17:00' }]);
      h.weekends.set(false);
      h.weekNumbers.set(true);
    });
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
    await stable();
    expect(document.activeElement).toBe(cell('2026-09-28|540'));

    host.view.set('month');
    await stable();
    expect(root.querySelectorAll('thead th').length).toBe(6);
    expect(
      [...root.querySelectorAll('tbody th.nui-scheduler-week')].map((th) => th.textContent!.trim()),
    ).toEqual(['36', '37', '38', '39', '40', '41']);
  });

  it('repeats events by their rule, and reports which occurrence people act on', async () => {
    const { host, root, cell, events, stable } = await rooms((h) => {
      h.view.set('week');
      h.resources.set([]);
      h.events.set([
        {
          id: 'standup',
          title: 'Standup',
          start: '2026-09-01T09:00',
          end: '2026-09-01T09:15',
          rrule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
          exdate: ['2026-09-23'],
        },
      ]);
    });
    expect(root.querySelectorAll('.nui-scheduler-event:not([data-ghost])').length).toBe(2);
    const friday = events('standup@2026-09-25T09:00')[0];
    expect(cell('2026-09-25|540').contains(friday)).toBe(true);
    expect(friday.getAttribute('aria-label')).toBe(
      'Standup, Friday, September 25, 9:00 – 9:15 AM, Repeats',
    );
    friday.click();
    expect(host.clicked.at(-1)).toMatchObject({
      id: 'standup',
      start: '2026-09-25T09:00',
      recurrenceId: '2026-09-25T09:00',
    });
    friday.focus();
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');
    expect(host.changes.at(-1)).toMatchObject({
      event: { recurrenceId: '2026-09-25T09:00' },
      start: '2026-09-25T09:30',
    });
    host.date.set('2026-10-02');
    await stable();
    expect(root.querySelectorAll('.nui-scheduler-event:not([data-ghost])').length).toBe(3);
  });

  it('moves by snapMinutes, and asks allow before anything changes', async () => {
    const { host, cell, events, announcements, stable } = await rooms((h) => {
      h.view.set('day');
      h.snap.set(15);
    });
    events('kickoff')[0].focus();
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');
    expect(host.changes.at(-1)).toMatchObject({
      start: '2026-09-25T09:15',
      end: '2026-09-25T10:15',
    });

    host.allow.set((time) => !('event' in time) || time.start >= '2026-09-25T09:00');
    await stable();
    await userEvent.keyboard('{Alt>}{ArrowUp}{/Alt}');
    expect(host.changes.length).toBe(1);
    expect(announcements.at(-1)).toBe('Not available');

    host.allow.set(() => false);
    await stable();
    cell('2026-09-25|480|0').focus();
    await userEvent.keyboard('{Enter}');
    expect(host.slots).toEqual([]);
    expect(announcements.at(-1)).toBe('Not available');
  });

  it('pages from a toolbar of your own', async () => {
    const { root, host, stable } = await rooms((h) => {
      h.toolbar.set(false);
      h.span.set('month');
    });
    expect(root.querySelector('.nui-scheduler-toolbar')).toBeNull();
    const scheduler = host.scheduler();
    expect(scheduler.title()).toBe('September 2026');
    expect(root.querySelectorAll('thead th.nui-scheduler-day').length).toBe(30);
    scheduler.next();
    await stable();
    expect(host.date()).toBe('2026-10-25');
    expect(scheduler.title()).toBe('October 2026');
    scheduler.goToday();
    await stable();
    expect(host.date()).toBe(nuiToday());
  });
});

describe('NuiScheduler edges', () => {
  it('moves all-day events by whole days, and reports nothing a key leaves the same', async () => {
    const { host, events } = await rooms((h) =>
      h.events.set([
        {
          id: 'vacation',
          title: 'Vacation',
          start: '2026-09-25',
          end: '2026-09-25',
          resource: 'atlas',
        },
      ]),
    );
    events('vacation')[0].focus();
    await userEvent.keyboard('{Alt>}{ArrowRight}{/Alt}');
    expect(host.changes.at(-1)).toMatchObject({ start: '2026-09-26', end: '2026-09-26' });
    await userEvent.keyboard('{Alt>}{Shift>}{ArrowLeft}{/Shift}{/Alt}');
    expect(host.changes.length).toBe(1);
  });

  it('never lengthens an event it shortens', async () => {
    const { host, events } = await rooms((h) => {
      h.view.set('month');
      h.resources.set([]);
    });
    events('kickoff')[0].focus();
    await userEvent.keyboard('{Alt>}{Shift>}{ArrowLeft}{/Shift}{/Alt}');
    expect(host.changes).toEqual([]);
    await userEvent.keyboard('{Alt>}{Shift>}{ArrowRight}{/Shift}{/Alt}');
    expect(host.changes.at(-1)).toMatchObject({
      start: '2026-09-25T09:00',
      end: '2026-09-26T10:00',
    });
  });

  it('pages and moves past a hidden weekend', async () => {
    const { root, host, cell, events, stable } = await rooms((h) => {
      h.view.set('day');
      h.resources.set([]);
      h.weekends.set(false);
      h.date.set('2026-09-28');
    });
    cell('2026-09-28|480').focus();
    await userEvent.keyboard('{PageUp}');
    await stable();
    expect(host.date()).toBe('2026-09-25');
    expect(document.activeElement).toBe(cell('2026-09-25|480'));
    root.querySelector<HTMLButtonElement>('[data-direction="next"]')!.click();
    await stable();
    expect(host.date()).toBe('2026-09-28');
    // A weekend day shows the Monday after it.
    host.date.set('2026-09-26');
    await stable();
    expect(host.scheduler().title()).toBe('Monday, September 28, 2026');

    // Alt and Right move Friday's event on to Monday.
    host.view.set('week');
    host.date.set('2026-09-25');
    await stable();
    events('kickoff')[0].focus();
    await userEvent.keyboard('{Alt>}{ArrowRight}{/Alt}');
    expect(host.changes.at(-1)).toMatchObject({
      start: '2026-09-28T09:00',
      end: '2026-09-28T10:00',
    });

    // A month pages to the next month, even when its day falls on a weekend there.
    host.view.set('month');
    host.date.set('2026-04-30');
    await stable();
    cell('2026-04-30').focus();
    await userEvent.keyboard('{PageDown}');
    await stable();
    expect(host.date()).toBe('2026-05-29');
  });

  it('keeps chosen time to one resource', async () => {
    const { host, cell, stable } = await rooms((h) => h.view.set('week'));
    cell('2026-09-27|480|0').focus();
    await userEvent.keyboard('{Shift>}{ArrowRight}{/Shift}');
    await stable();
    expect(document.activeElement).toBe(cell('2026-09-27|480|0'));
    await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}{Enter}');
    expect(host.slots).toEqual([
      { start: '2026-09-27T08:00', end: '2026-09-27T09:00', allDay: false, resource: 'atlas' },
    ]);
  });

  it('keeps focus in the grid when the app replaces a moved occurrence', async () => {
    const { cell, events, stable } = await rooms((h) => {
      h.view.set('week');
      h.resources.set([]);
      h.apply.set(true);
      h.events.set([
        {
          id: 'standup',
          title: 'Standup',
          start: '2026-09-21T09:00',
          end: '2026-09-21T09:15',
          rrule: 'FREQ=DAILY',
        },
      ]);
    });
    events('standup@2026-09-23T09:00')[0].focus();
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');
    await stable();
    expect(events('standup-2026-09-23T09:00').length).toBe(1);
    expect(document.activeElement).toBe(cell('2026-09-23|570'));
  });

  it('leaves focus where people put it after a key that moved nothing', async () => {
    const { root, cell, stable } = await rooms((h) => {
      h.view.set('week');
      h.resources.set([]);
    });
    cell('2026-09-25|480').focus();
    await userEvent.keyboard('{Control>}{End}{/Control}');
    await stable();
    expect(document.activeElement).toBe(cell('2026-09-25|1410'));
    await userEvent.keyboard('{ArrowDown}');
    await stable();
    const next = root.querySelector<HTMLButtonElement>('[data-direction="next"]')!;
    next.focus();
    await userEvent.keyboard('{Enter}');
    await stable();
    expect(document.activeElement).toBe(next);
  });

  it('chooses nothing with Enter when time can’t be chosen', async () => {
    const { host, cell, stable } = await rooms((h) => {
      h.view.set('week');
      h.resources.set([]);
      h.selectable.set(false);
    });
    cell('2026-09-25|480').focus();
    await userEvent.keyboard('{Enter}');
    await stable();
    expect(host.slots).toEqual([]);
    expect(cell('2026-09-25|480').hasAttribute('data-selected')).toBe(false);
    expect(cell('2026-09-25|480').hasAttribute('aria-selected')).toBe(false);
  });
});

/**
 * The rules of @needless-ui/css that make the grid scroll as on a phone, which unit tests
 * don't load: a body inside a border that scrolls both ways, a head and a column of times
 * or names that stay put, rows of a height, and hours that read on their line. Columns are
 * whole pixels wide, since WebKit scrolls by whole pixels.
 */
function phone() {
  const style = document.head.appendChild(document.createElement('style'));
  style.textContent = `
    .nui-scheduler-body { overflow: auto; inline-size: 320px; block-size: 400px; border: 1px solid; }
    .nui-scheduler-grid { inline-size: 1680px; border-collapse: separate; border-spacing: 0; table-layout: fixed; }
    .nui-scheduler-grid :is(th, td) { padding: 0; }
    .nui-scheduler-grid thead { position: sticky; inset-block-start: 0; z-index: 4; background: Canvas; }
    .nui-scheduler-corner, tbody :is(.nui-scheduler-time, .nui-scheduler-resource) {
      position: sticky; inset-inline-start: 0; z-index: 3; inline-size: 80px; background: Canvas;
    }
    tbody .nui-scheduler-cell { block-size: 24px; }
    tbody .nui-scheduler-time > span { display: inline-block; translate: 0 -0.55lh; }
    :is(.nui-scheduler-hidden, .nui-scheduler-status) {
      position: absolute; inline-size: 1px; block-size: 1px; overflow: hidden; clip-path: inset(50%);
    }`;
  onTestFinished(() => style.remove());
}

describe('NuiScheduler on a phone', () => {
  it('takes the click that ends a tap on free time for no click on the event booked there', async () => {
    const { host, cell, event, stable } = await setup();
    const at = (element: Element) => {
      const rect = element.getBoundingClientRect();
      return {
        clientX: rect.x + rect.width / 2,
        clientY: rect.y + rect.height / 2,
        bubbles: true,
        button: 0,
      };
    };
    const finger = (type: string, element: Element) =>
      new PointerEvent(type, { ...at(element), pointerId: 7, pointerType: 'touch' });
    const tap = (element: Element) => {
      element.dispatchEvent(finger('pointerdown', element));
      document.dispatchEvent(finger('pointerup', element));
    };
    // Chrome on Android sends a tap's click to what's under the finger once the page has
    // drawn it: here, the event the app books on `slotSelect`.
    const click = (element: Element, detail = 1) =>
      element.dispatchEvent(new MouseEvent('click', { ...at(element), detail }));
    tap(cell('2026-09-24|60'));
    expect(host.slots).toEqual([
      expect.objectContaining({ start: '2026-09-24T01:00', end: '2026-09-24T01:30' }),
    ]);
    host.events.update((events) => [
      ...events,
      { id: 'new', title: 'New', start: '2026-09-24T01:00', end: '2026-09-24T01:30' },
    ]);
    await stable();
    click(event('new'));
    expect(host.clicked).toEqual([]);

    // The next tap on it is a click on it, and so is a key's click right after a tap on
    // free time: it ends no press.
    tap(event('new'));
    click(event('new'));
    tap(cell('2026-09-24|120'));
    click(event('standup'), 0);
    expect(host.clicked).toEqual(['new', 'standup']);
  });

  it('opens the day at its start across, wherever the week was scrolled', async () => {
    phone();
    const { root, host, stable } = await rooms((h) => h.view.set('week'));
    const body = root.querySelector<HTMLElement>('.nui-scheduler-body')!;
    body.scrollLeft = 600;
    expect(body.scrollLeft).toBe(600);
    host.view.set('day');
    await stable();
    // The week and the day share their body.
    expect(root.querySelector('.nui-scheduler-body')).toBe(body);
    expect(body.scrollLeft).toBe(0);
  });

  it('opens a day’s timeline at its hour, right after the names', async () => {
    phone();
    const { root, host, stable } = await rooms((h) => h.dayStart.set(8));
    expect(root.querySelector('.nui-scheduler-body')!.scrollLeft).toBe(0);

    host.view.set('week');
    await stable();
    host.scrollHour.set(10);
    host.view.set('timeline');
    await stable();
    const names = root.querySelector('.nui-scheduler-corner')!.getBoundingClientRect();
    const hour = root.querySelector('th[data-slot="600"]')!.getBoundingClientRect();
    expect(hour.left - names.right).toBeCloseTo(0, 0);
  });

  it('opens a day’s timeline at its hour from the right, right to left', async () => {
    phone();
    document.documentElement.dir = 'rtl';
    onTestFinished(() => document.documentElement.removeAttribute('dir'));
    const { root } = await rooms((h) => {
      h.dayStart.set(8);
      h.scrollHour.set(10);
    });
    const names = root.querySelector('.nui-scheduler-corner')!.getBoundingClientRect();
    const hour = root.querySelector('th[data-slot="600"]')!.getBoundingClientRect();
    expect(names.left - hour.right).toBeCloseTo(0, 0);
  });

  it('opens the week with the label of its hour in view, under the head', async () => {
    phone();
    const { root } = await rooms((h) => h.view.set('week'));
    const head = root.querySelector('thead')!.getBoundingClientRect();
    const label = root
      .querySelector('[data-slot-row="480"] .nui-scheduler-time > span')!
      .getBoundingClientRect();
    expect(label.top).toBeGreaterThanOrEqual(head.bottom - 0.5);
  });
});
