import { nuiSchedulerFromIcs, nuiSchedulerToIcs } from './ics';
import { type NuiSchedulerEvent, nuiSchedulerOccurrences } from './layout';

const stamp = new Date('2026-10-23T08:00:00Z');

describe('scheduler iCalendar files', () => {
  it('writes events, all-day and timed, with their rules', () => {
    const ics = nuiSchedulerToIcs(
      [
        {
          id: 'offsite',
          title: 'Offsite, Lisbon; day one',
          start: '2026-09-22',
          end: '2026-09-24',
        },
        {
          id: 'standup',
          title: 'Standup',
          start: '2026-09-21T09:00',
          end: '2026-09-21T09:15',
          rrule: 'FREQ=WEEKLY;BYDAY=MO,WE',
          exdate: ['2026-09-23'],
        },
      ],
      {
        name: 'Team',
        stamp,
        details: (event) => (event.id === 'offsite' ? { location: 'Lisbon\nPortugal' } : undefined),
      },
    );
    const lines = ics.split('\r\n');
    expect(lines.slice(0, 5)).toEqual([
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Needless UI//Scheduler//EN',
      'CALSCALE:GREGORIAN',
      'X-WR-CALNAME:Team',
    ]);
    expect(lines).toContain('DTSTAMP:20261023T080000Z');
    expect(lines).toContain('DTSTART;VALUE=DATE:20260922');
    // The file's end is the day after the last one.
    expect(lines).toContain('DTEND;VALUE=DATE:20260925');
    expect(lines).toContain('SUMMARY:Offsite\\, Lisbon\\; day one');
    expect(lines).toContain('LOCATION:Lisbon\\nPortugal');
    expect(lines).toContain('DTSTART:20260921T090000');
    expect(lines).toContain('RRULE:FREQ=WEEKLY;BYDAY=MO,WE');
    // A day skipped of a timed event is its occurrence at the start's time.
    expect(lines).toContain('EXDATE:20260923T090000');
    expect(ics.endsWith('END:VCALENDAR\r\n')).toBe(true);
  });

  it('folds long lines at 75 bytes without splitting a character', () => {
    const title = 'Réunion '.repeat(20);
    const ics = nuiSchedulerToIcs(
      [{ id: 'a', title, start: '2026-09-25T09:00', end: '2026-09-25T10:00' }],
      { stamp },
    );
    const lines = ics.split('\r\n');
    const summary = lines.findIndex((line) => line.startsWith('SUMMARY:'));
    expect(lines[summary + 1].startsWith(' ')).toBe(true);
    for (const line of lines) expect(new TextEncoder().encode(line).length).toBeLessThanOrEqual(75);
    // Unfolded, the title comes back whole.
    expect(nuiSchedulerFromIcs(ics)[0].title).toBe(title);
  });

  it('reads events back, moving times in UTC and other zones to the one asked for', () => {
    const events = nuiSchedulerFromIcs(
      [
        'BEGIN:VCALENDAR',
        'BEGIN:VEVENT',
        'UID:call',
        'DTSTART:20260925T070000Z',
        'DTEND:20260925T080000Z',
        'SUMMARY:Call with\\, Ada',
        'DESCRIPTION:Bring the\\nslides',
        'BEGIN:VALARM',
        'TRIGGER:-PT15M',
        'DESCRIPTION:Reminder',
        'END:VALARM',
        'END:VEVENT',
        'BEGIN:VEVENT',
        'UID:ny',
        'DTSTART;TZID=America/New_York:20260925T090000',
        'DURATION:PT1H30M',
        'SUMMARY:New York',
        'END:VEVENT',
        'BEGIN:VEVENT',
        'UID:trip',
        'DTSTART;VALUE=DATE:20261005',
        'DTEND;VALUE=DATE:20261008',
        'SUMMARY:Trip',
        'URL:https://example.com/trip',
        'END:VEVENT',
        'BEGIN:VEVENT',
        'UID:floating',
        'DTSTART:20260925T120000',
        'DTEND:20260925T130000',
        'SUMMARY:Lunch',
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'BEGIN:VEVENT',
        'UID:gone',
        'DTSTART:20260925T120000',
        'STATUS:CANCELLED',
        'SUMMARY:Gone',
        'END:VEVENT',
        'END:VCALENDAR',
      ].join('\r\n'),
      { timeZone: 'Europe/Rome' },
    );
    expect(events).toEqual([
      {
        id: 'call',
        title: 'Call with, Ada',
        start: '2026-09-25T09:00',
        end: '2026-09-25T10:00',
        allDay: false,
        data: { description: 'Bring the\nslides' },
      },
      // 9:00 in New York is 15:00 in Rome, in September.
      {
        id: 'ny',
        title: 'New York',
        start: '2026-09-25T15:00',
        end: '2026-09-25T16:30',
        allDay: false,
      },
      {
        id: 'trip',
        title: 'Trip',
        start: '2026-10-05',
        end: '2026-10-07',
        allDay: true,
        data: { url: 'https://example.com/trip' },
      },
      {
        id: 'floating',
        title: 'Lunch',
        start: '2026-09-25T12:00',
        end: '2026-09-25T13:00',
        allDay: false,
      },
    ]);
  });

  it('reads rules, their exceptions, and changed or cancelled occurrences', () => {
    const events = nuiSchedulerFromIcs(
      [
        'BEGIN:VCALENDAR',
        'BEGIN:VEVENT',
        'UID:standup',
        'DTSTART:20260921T090000',
        'DTEND:20260921T091500',
        'RRULE:FREQ=DAILY;UNTIL=20261002T070000Z',
        'EXDATE:20260922T090000,20260923T090000',
        'SUMMARY:Standup',
        'END:VEVENT',
        'BEGIN:VEVENT',
        'UID:standup',
        'RECURRENCE-ID:20260924T090000',
        'DTSTART:20260924T100000',
        'DTEND:20260924T101500',
        'SUMMARY:Standup, later',
        'END:VEVENT',
        'BEGIN:VEVENT',
        'UID:standup',
        'RECURRENCE-ID:20260925T090000',
        'DTSTART:20260925T090000',
        'STATUS:CANCELLED',
        'END:VEVENT',
        'END:VCALENDAR',
      ].join('\n'),
      { timeZone: 'Europe/Rome' },
    );
    expect(events).toEqual([
      {
        id: 'standup',
        title: 'Standup',
        start: '2026-09-21T09:00',
        end: '2026-09-21T09:15',
        allDay: false,
        // UNTIL in UTC, in Rome's time.
        rrule: 'FREQ=DAILY;UNTIL=20261002T090000',
        exdate: ['2026-09-22T09:00', '2026-09-23T09:00', '2026-09-24T09:00', '2026-09-25T09:00'],
      },
      {
        id: 'standup@2026-09-24T09:00',
        title: 'Standup, later',
        start: '2026-09-24T10:00',
        end: '2026-09-24T10:15',
        allDay: false,
        recurrenceId: '2026-09-24T09:00',
      },
    ]);
  });

  it('round-trips events through a file', () => {
    const events: NuiSchedulerEvent[] = [
      {
        id: 'a',
        title: 'Design review',
        start: '2026-09-22T10:00',
        end: '2026-09-22T11:30',
        allDay: false,
      },
      {
        id: 'b',
        title: 'Retro',
        start: '2026-09-25',
        end: '2026-09-25',
        allDay: true,
        rrule: 'FREQ=MONTHLY;BYDAY=-1FR',
        exdate: ['2026-10-30'],
      },
    ];
    expect(nuiSchedulerFromIcs(nuiSchedulerToIcs(events, { stamp }))).toEqual(events);
  });

  it('keeps exceptions and changed occurrences on their series across a change of clocks', () => {
    const [sync, weekly, later] = nuiSchedulerFromIcs(
      [
        'BEGIN:VCALENDAR',
        'BEGIN:VEVENT',
        'UID:sync',
        'DTSTART:20260115T170000Z',
        'DTEND:20260115T180000Z',
        'RRULE:FREQ=WEEKLY',
        'EXDATE:20260716T170000Z',
        'SUMMARY:Sync',
        'END:VEVENT',
        'BEGIN:VEVENT',
        'UID:ny',
        'DTSTART;TZID=America/New_York:20260108T090000',
        'DTEND;TZID=America/New_York:20260108T100000',
        'RRULE:FREQ=WEEKLY',
        'SUMMARY:Weekly',
        'END:VEVENT',
        'BEGIN:VEVENT',
        'UID:ny',
        'RECURRENCE-ID;TZID=America/New_York:20260312T090000',
        'DTSTART;TZID=America/New_York:20260312T100000',
        'DTEND;TZID=America/New_York:20260312T110000',
        'SUMMARY:Weekly, later',
        'END:VEVENT',
        'END:VCALENDAR',
      ].join('\r\n'),
      { timeZone: 'Europe/Rome' },
    );
    // A series shows its first time of day all year: the July exception is that occurrence.
    expect(sync).toMatchObject({ start: '2026-01-15T18:00', exdate: ['2026-07-16T18:00'] });
    expect(nuiSchedulerOccurrences(sync, '2026-07-13', '2026-07-19')).toEqual([]);
    // New York changes its clocks before Rome: the changed occurrence still replaces its own.
    expect(weekly).toMatchObject({ start: '2026-01-08T15:00', exdate: ['2026-03-12T15:00'] });
    expect(nuiSchedulerOccurrences(weekly, '2026-03-09', '2026-03-15')).toEqual([]);
    expect(later).toMatchObject({
      id: 'ny@2026-03-12T15:00',
      recurrenceId: '2026-03-12T15:00',
      start: '2026-03-12T15:00',
    });
  });

  it('reads back the ids it escapes', () => {
    const ics = nuiSchedulerToIcs(
      [{ id: 'room-1,2;3', title: 'A', start: '2026-09-25', end: '2026-09-25' }],
      { stamp },
    );
    expect(nuiSchedulerFromIcs(ics)[0].id).toBe('room-1,2;3');
  });
});
