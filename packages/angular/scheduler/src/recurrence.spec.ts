import { nuiDayNumber } from '@needless-ui/angular';
import { nuiSchedulerMinutes, nuiSchedulerValue } from './layout';
import { isoValue, nuiSchedulerRepeat, nuiSchedulerRule } from './recurrence';

/** The occurrences of a rule from `start`, on the days from `first` to `last`. */
const repeat = (rule: string, start: string, first: string, last: string) =>
  nuiSchedulerRepeat(
    nuiSchedulerRule(rule)!,
    nuiSchedulerMinutes(start),
    nuiDayNumber(first),
    nuiDayNumber(last),
  ).map((minutes) => nuiSchedulerValue(minutes));

describe('scheduler recurrence', () => {
  it('reads RFC 5545 rules', () => {
    expect(nuiSchedulerRule('RRULE:FREQ=MONTHLY;INTERVAL=2;BYDAY=-1FR,2MO;UNTIL=20261231')).toEqual(
      {
        frequency: 'monthly',
        interval: 2,
        count: null,
        until: '2026-12-31',
        byDay: [
          { day: 5, nth: -1 },
          { day: 1, nth: 2 },
        ],
        byMonthDay: [],
        byMonth: [],
        bySetPos: [],
        weekStart: 1,
      },
    );
    expect(nuiSchedulerRule('freq=weekly;count=3;wkst=su')).toMatchObject({
      frequency: 'weekly',
      count: 3,
      weekStart: 7,
    });
    expect(nuiSchedulerRule('FREQ=HOURLY')).toBeNull();
    expect(nuiSchedulerRule('BYDAY=MO')).toBeNull();
    expect(isoValue('20260925T090000Z')).toBe('2026-09-25T09:00');
    expect(isoValue('2026-09-25')).toBe('2026-09-25');
    expect(isoValue('next week')).toBeNull();
  });

  it('repeats daily and weekly, every few days or weeks', () => {
    expect(
      repeat('FREQ=DAILY;INTERVAL=2;COUNT=3', '2026-09-25T09:00', '2026-09-01', '2026-10-31'),
    ).toEqual(['2026-09-25T09:00', '2026-09-27T09:00', '2026-09-29T09:00']);
    expect(
      repeat('FREQ=WEEKLY;BYDAY=MO,WE,FR', '2026-09-21T10:00', '2026-09-21', '2026-09-27'),
    ).toEqual(['2026-09-21T10:00', '2026-09-23T10:00', '2026-09-25T10:00']);
    // RFC 5545's own example: where the week starts changes which days every other week picks.
    expect(
      repeat(
        'FREQ=WEEKLY;INTERVAL=2;COUNT=4;BYDAY=TU,SU;WKST=MO',
        '1997-08-05T09:00',
        '1997-08-01',
        '1997-09-30',
      ),
    ).toEqual(['1997-08-05T09:00', '1997-08-10T09:00', '1997-08-19T09:00', '1997-08-24T09:00']);
    expect(
      repeat(
        'FREQ=WEEKLY;INTERVAL=2;COUNT=4;BYDAY=TU,SU;WKST=SU',
        '1997-08-05T09:00',
        '1997-08-01',
        '1997-09-30',
      ),
    ).toEqual(['1997-08-05T09:00', '1997-08-17T09:00', '1997-08-19T09:00', '1997-08-31T09:00']);
  });

  it('repeats monthly by weekday, by day of the month, and by position', () => {
    expect(
      repeat('FREQ=MONTHLY;BYDAY=-1FR;COUNT=3', '2026-09-25T16:00', '2026-01-01', '2027-12-31'),
    ).toEqual(['2026-09-25T16:00', '2026-10-30T16:00', '2026-11-27T16:00']);
    // The 31st skips the months that have no 31st.
    expect(repeat('FREQ=MONTHLY', '2026-08-31', '2026-08-01', '2026-12-31')).toEqual([
      '2026-08-31T00:00',
      '2026-10-31T00:00',
      '2026-12-31T00:00',
    ]);
    // The last weekday of each month.
    expect(
      repeat(
        'FREQ=MONTHLY;BYDAY=MO,TU,WE,TH,FR;BYSETPOS=-1',
        '2026-10-30T17:00',
        '2026-10-01',
        '2027-01-31',
      ),
    ).toEqual(['2026-10-30T17:00', '2026-11-30T17:00', '2026-12-31T17:00', '2027-01-29T17:00']);
    expect(
      repeat('FREQ=MONTHLY;BYMONTHDAY=1,-1', '2026-09-30', '2026-10-01', '2026-11-30'),
    ).toEqual(['2026-10-01T00:00', '2026-10-31T00:00', '2026-11-01T00:00', '2026-11-30T00:00']);
  });

  it('repeats yearly, on the start’s day or by month and weekday', () => {
    // February 29 comes back only in leap years.
    expect(repeat('FREQ=YEARLY', '2024-02-29', '2024-01-01', '2032-12-31')).toEqual([
      '2024-02-29T00:00',
      '2028-02-29T00:00',
      '2032-02-29T00:00',
    ]);
    // The fourth Thursday of November.
    expect(
      repeat('FREQ=YEARLY;BYMONTH=11;BYDAY=4TH', '2026-11-26', '2026-01-01', '2028-12-31'),
    ).toEqual(['2026-11-26T00:00', '2027-11-25T00:00', '2028-11-23T00:00']);
  });

  it('ends at UNTIL, counts from the start, and skips to the days asked for', () => {
    expect(
      repeat('FREQ=DAILY;UNTIL=20260927', '2026-09-25T09:00', '2026-09-01', '2026-10-31'),
    ).toEqual(['2026-09-25T09:00', '2026-09-26T09:00', '2026-09-27T09:00']);
    expect(
      repeat('FREQ=DAILY;UNTIL=20260926T085900', '2026-09-25T09:00', '2026-09-01', '2026-10-31'),
    ).toEqual(['2026-09-25T09:00']);
    // COUNT counts the occurrences before the days shown too.
    expect(repeat('FREQ=WEEKLY;COUNT=5', '2026-09-04T09:00', '2026-09-20', '2026-12-31')).toEqual([
      '2026-09-25T09:00',
      '2026-10-02T09:00',
    ]);
    // Years later, a rule without an end gives what a full count would.
    expect(
      repeat('FREQ=WEEKLY;BYDAY=TU,TH', '2020-01-07T08:00', '2026-09-21', '2026-09-27'),
    ).toEqual(['2026-09-22T08:00', '2026-09-24T08:00']);
    // The start is always the first occurrence, even off the rule.
    expect(
      repeat('FREQ=WEEKLY;BYDAY=MO;COUNT=2', '2026-09-23T09:00', '2026-09-01', '2026-10-31'),
    ).toEqual(['2026-09-23T09:00', '2026-09-28T09:00']);
  });
});
