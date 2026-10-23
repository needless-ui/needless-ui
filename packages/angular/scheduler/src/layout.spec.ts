import {
  nuiSchedulerDays,
  type NuiSchedulerEvent,
  nuiSchedulerLanes,
  nuiSchedulerMinutes,
  nuiSchedulerOccurrences,
  nuiSchedulerPage,
  nuiSchedulerPlace,
  nuiSchedulerResources,
  nuiSchedulerSpan,
  nuiSchedulerStack,
  nuiSchedulerValue,
  nuiSchedulerVisible,
  nuiSchedulerWorking,
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

  it('knows the days of a timeline, by its day, its week or its month', () => {
    expect(nuiSchedulerDays('timeline', '2026-09-25', 1)).toEqual(['2026-09-25']);
    expect(nuiSchedulerDays('timeline', '2026-09-25', 1, 30, 'week').length).toBe(7);
    const month = nuiSchedulerDays('timeline', '2026-09-25', 1, 30, 'month');
    expect([month.length, month[0], month[29]]).toEqual([30, '2026-09-01', '2026-09-30']);
    expect(nuiSchedulerPage('timeline', '2026-09-25', 1, 30, 'month')).toBe('2026-10-25');
    expect(nuiSchedulerPage('timeline', '2026-09-25', -1)).toBe('2026-09-24');
  });

  it('lays bars across days that skip the weekend', () => {
    // Monday to Friday of two weeks, without the weekend between them.
    const days = [
      ...nuiSchedulerDays('week', '2026-09-21', 1).slice(0, 5),
      ...nuiSchedulerDays('week', '2026-09-28', 1).slice(0, 5),
    ];
    const spans = nuiSchedulerVisible(
      [
        event('fair', '2026-09-24', '2026-09-29'),
        event('weekend', '2026-09-26', '2026-09-27'),
        event('saturday', '2026-09-26', '2026-09-28'),
      ],
      days[0],
      days[9],
    );
    const bars = Object.fromEntries(
      nuiSchedulerLanes(spans, days).map((b) => [b.span.event.id, b]),
    );
    expect(bars['fair']).toMatchObject({ from: 3, to: 6, before: false, after: false });
    // Only on the weekend, it has no day to show on.
    expect(bars['weekend']).toBeUndefined();
    // Begun on the weekend, it starts on Monday, cut.
    expect(bars['saturday']).toMatchObject({ from: 5, to: 5, before: true });
  });

  it('cuts timed events to the hours shown', () => {
    const spans = nuiSchedulerVisible(
      [
        event('early', '2026-09-25T06:00', '2026-09-25T09:00'),
        event('night', '2026-09-25T21:00', '2026-09-25T22:00'),
        event('late', '2026-09-25T17:00', '2026-09-25T19:00'),
      ],
      '2026-09-25',
      '2026-09-25',
    );
    const placed = nuiSchedulerPlace(spans, '2026-09-25', 8 * 60, 18 * 60);
    expect(placed.map((p) => [p.span.event.id, p.start, p.end, p.before, p.after])).toEqual([
      ['early', 480, 540, true, false],
      ['late', 1020, 1080, false, true],
    ]);
  });

  it('stacks events along a stretch of time, as the timeline does', () => {
    const spans = nuiSchedulerVisible(
      [
        event('a', '2026-09-25T09:00', '2026-09-25T10:00'),
        event('b', '2026-09-25T09:30', '2026-09-25T11:00'),
        event('c', '2026-09-25T10:00', '2026-09-25T10:05'),
        event('d', '2026-09-25T10:10', '2026-09-25T10:30'),
        event('e', '2026-09-24T22:00', '2026-09-25T08:30'),
      ],
      '2026-09-25',
      '2026-09-25',
    );
    const day = nuiSchedulerMinutes('2026-09-25');
    const stacked = Object.fromEntries(
      nuiSchedulerStack(spans, day + 8 * 60, day + 18 * 60).map((s) => [s.span.event.id, s]),
    );
    expect(stacked['a'].lane).toBe(0);
    expect(stacked['b'].lane).toBe(1);
    expect(stacked['c'].lane).toBe(0);
    // Five minutes take a quarter hour of room: the next one waits for it.
    expect(stacked['d'].lane).toBe(2);
    expect(stacked['e']).toMatchObject({ start: day + 480, before: true, after: false });
  });

  it('knows working hours, and an event’s resources', () => {
    const hours = [{ days: [1, 2, 3, 4, 5], start: '09:00', end: '17:00' }];
    expect(nuiSchedulerWorking(hours, '2026-09-25', 9 * 60, 9 * 60 + 30)).toBe(true);
    expect(nuiSchedulerWorking(hours, '2026-09-25', 8 * 60, 8 * 60 + 30)).toBe(false);
    expect(nuiSchedulerWorking(hours, '2026-09-25', 17 * 60, 17 * 60 + 30)).toBe(false);
    expect(nuiSchedulerWorking(hours, '2026-09-26')).toBe(false);
    expect(nuiSchedulerWorking(null, '2026-09-26')).toBe(true);
    expect(
      nuiSchedulerResources(event('a', '2026-09-25', '2026-09-25', { resource: 'x' })),
    ).toEqual(['x']);
    expect(nuiSchedulerResources(event('a', '2026-09-25', '2026-09-25'))).toEqual([]);
  });

  it('gives the occurrences of a repeating event, each with its own times', () => {
    const standup = event('standup', '2026-09-21T09:00', '2026-09-21T09:15', {
      rrule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
      exdate: ['2026-09-23'],
    });
    const occurrences = nuiSchedulerOccurrences(standup, '2026-09-21', '2026-09-27');
    expect(occurrences.map((o) => [o.start, o.end, o.recurrenceId])).toEqual([
      ['2026-09-21T09:00', '2026-09-21T09:15', '2026-09-21T09:00'],
      ['2026-09-25T09:00', '2026-09-25T09:15', '2026-09-25T09:00'],
    ]);
    const spans = nuiSchedulerVisible([standup], '2026-09-24', '2026-09-30');
    expect(spans.map((s) => s.key)).toEqual([
      'standup@2026-09-25T09:00',
      'standup@2026-09-28T09:00',
      'standup@2026-09-30T09:00',
    ]);
    // An all-day event repeats its days; one that began before the days shown still shows.
    const trip = event('trip', '2026-09-04', '2026-09-06', { rrule: 'FREQ=MONTHLY' });
    expect(
      nuiSchedulerOccurrences(trip, '2026-10-05', '2026-10-31').map((o) => [o.start, o.end]),
    ).toEqual([['2026-10-04', '2026-10-06']]);
    // Without a rule, an event is its only occurrence.
    expect(
      nuiSchedulerOccurrences(event('a', '2026-09-25', '2026-09-25'), '2026-09-25', '2026-09-25'),
    ).toEqual([event('a', '2026-09-25', '2026-09-25')]);
  });

  it('gives no occurrences for a start that isn’t a real date, and an agenda at least a day', () => {
    const rule = { rrule: 'FREQ=WEEKLY;COUNT=3' };
    expect(
      nuiSchedulerVisible(
        [event('bad', '2026-02-30T09:00', '2026-02-30T10:00', rule)],
        '2026-02-01',
        '2026-03-31',
      ),
    ).toEqual([]);
    expect(
      nuiSchedulerVisible(
        [event('iso', '2026-09-25T09:00:00.000Z', '2026-09-25T10:00:00.000Z', rule)],
        '2026-09-01',
        '2026-09-30',
      ),
    ).toEqual([]);
    expect(nuiSchedulerDays('agenda', '2026-09-25', 1, 0)).toEqual(['2026-09-25']);
  });
});
