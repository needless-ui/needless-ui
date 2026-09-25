import {
  nuiSchedulerDays,
  type NuiSchedulerEvent,
  nuiSchedulerLanes,
  nuiSchedulerPage,
  nuiSchedulerPlace,
  nuiSchedulerSpan,
  nuiSchedulerValue,
  nuiSchedulerVisible,
} from './layout';

const event = (id: string, start: string, end: string, extra: Partial<NuiSchedulerEvent> = {}) => ({
  id,
  title: id,
  start,
  end,
  ...extra,
});

describe('scheduler layout', () => {
  it('reads timed and all-day events, and turns minutes back into times', () => {
    const timed = nuiSchedulerSpan(event('a', '2026-09-25T09:00', '2026-09-25T09:30'));
    expect(timed.allDay).toBe(false);
    expect(timed.end - timed.start).toBe(30);
    const allDay = nuiSchedulerSpan(event('b', '2026-09-25', '2026-09-26'));
    expect(allDay.allDay).toBe(true);
    expect(allDay.end - allDay.start).toBe(2 * 1440);
    expect(nuiSchedulerValue(timed.start)).toBe('2026-09-25T09:00');
  });

  it('knows the days each view shows, and how far a page goes', () => {
    expect(nuiSchedulerDays('week', '2026-09-25', 1)).toEqual([
      '2026-09-21',
      '2026-09-22',
      '2026-09-23',
      '2026-09-24',
      '2026-09-25',
      '2026-09-26',
      '2026-09-27',
    ]);
    expect(nuiSchedulerDays('month', '2026-09-25', 7).length).toBe(42);
    expect(nuiSchedulerDays('agenda', '2026-09-25', 1, 3)).toEqual([
      '2026-09-25',
      '2026-09-26',
      '2026-09-27',
    ]);
    expect(nuiSchedulerPage('month', '2026-01-31', 1)).toBe('2026-02-28');
    expect(nuiSchedulerPage('week', '2026-09-25', -1)).toBe('2026-09-18');
  });

  it('keeps only the events that touch the days shown, in order', () => {
    const visible = nuiSchedulerVisible(
      [
        event('late', '2026-09-26T10:00', '2026-09-26T11:00'),
        event('early', '2026-09-25T08:00', '2026-09-25T09:00'),
        event('before', '2026-09-20T08:00', '2026-09-20T09:00'),
        event('overnight', '2026-09-24T23:00', '2026-09-25T01:00'),
      ],
      '2026-09-25',
      '2026-09-26',
    );
    expect(visible.map((s) => s.event.id)).toEqual(['overnight', 'early', 'late']);
  });

  it('places overlapping events side by side, stretching where they can', () => {
    const spans = nuiSchedulerVisible(
      [
        event('a', '2026-09-25T09:00', '2026-09-25T11:00'),
        event('b', '2026-09-25T09:30', '2026-09-25T10:00'),
        event('c', '2026-09-25T10:00', '2026-09-25T10:30'),
        event('d', '2026-09-25T13:00', '2026-09-25T14:00'),
        event('e', '2026-09-24T23:00', '2026-09-25T00:30'),
      ],
      '2026-09-25',
      '2026-09-25',
    );
    const placed = Object.fromEntries(
      nuiSchedulerPlace(spans, '2026-09-25').map((p) => [p.span.event.id, p]),
    );
    expect(placed['a']).toMatchObject({ column: 0, columns: 2, width: 1 });
    expect(placed['b']).toMatchObject({ column: 1, columns: 2, width: 1 });
    expect(placed['c']).toMatchObject({ column: 1, columns: 2 });
    expect(placed['d']).toMatchObject({ column: 0, columns: 1, width: 1 });
    // The overnight event shows its part of the day, marked as begun before.
    expect(placed['e']).toMatchObject({ start: 0, end: 30, before: true, after: false });
  });

  it('stacks bars into lanes across a week', () => {
    const days = nuiSchedulerDays('week', '2026-09-25', 1);
    const spans = nuiSchedulerVisible(
      [
        event('trip', '2026-09-22', '2026-09-24'),
        event('launch', '2026-09-23', '2026-09-23'),
        event('fair', '2026-09-24', '2026-09-30'),
        event('call', '2026-09-22T09:00', '2026-09-22T10:00'),
      ],
      days[0],
      days[6],
    );
    const bars = Object.fromEntries(
      nuiSchedulerLanes(spans, days).map((b) => [b.span.event.id, b]),
    );
    expect(bars['trip']).toMatchObject({ from: 1, to: 3, lane: 0 });
    expect(bars['call']).toMatchObject({ from: 1, to: 1, lane: 1 });
    expect(bars['launch']).toMatchObject({ from: 2, to: 2, lane: 1 });
    expect(bars['fair']).toMatchObject({ from: 3, to: 6, lane: 1, after: true });
  });
});
