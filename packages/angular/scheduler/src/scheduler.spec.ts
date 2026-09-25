import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { userEvent } from 'vitest/browser';
import type { NuiSchedulerEvent, NuiSchedulerView } from './layout';
import { NuiScheduler, type NuiSchedulerChange, type NuiSchedulerSlot } from './scheduler';

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
    expect(cell('2026-09-25|18').contains(event('standup'))).toBe(true);
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
    const start = cell('2026-09-25|16');
    expect(start.getAttribute('tabindex')).toBe('0');
    start.focus();
    await userEvent.keyboard('{ArrowDown}{ArrowRight}');
    await stable();
    expect(document.activeElement).toBe(cell('2026-09-26|17'));
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
    cell('2026-09-25|18').focus();
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
    expect(document.activeElement).toBe(cell('2026-09-25|18'));
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
