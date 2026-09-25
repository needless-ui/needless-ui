import {
  nuiAddDays,
  nuiAddMinutes,
  nuiAddMonths,
  nuiAddYears,
  nuiDate,
  nuiDateParts,
  nuiFormatDate,
  nuiIsDate,
  nuiIsoWeek,
  nuiMonthNames,
  nuiMonthWeeks,
  nuiStartOfWeek,
  nuiTimeParts,
  nuiUses12Hours,
  nuiWeekday,
  nuiWeekdayNames,
  nuiWeekInfo,
} from './date';

describe('plain dates', () => {
  it('know real dates from strings that only look like them', () => {
    expect(nuiDateParts('2024-02-29')).toEqual({ year: 2024, month: 2, day: 29 });
    expect(nuiDateParts('2023-02-29')).toBeNull();
    expect(nuiDateParts('2026-13-01')).toBeNull();
    expect(nuiIsDate('2026-9-25')).toBe(false);
    expect(nuiTimeParts('23:59:59')).toEqual({ hour: 23, minute: 59, second: 59 });
    expect(nuiTimeParts('24:00')).toBeNull();
  });

  it('add days, months and years across ends of months, leap years and centuries', () => {
    expect(nuiAddDays('2026-12-31', 1)).toBe('2027-01-01');
    expect(nuiAddDays('2024-03-01', -1)).toBe('2024-02-29');
    expect(nuiAddMonths('2026-01-31', 1)).toBe('2026-02-28');
    expect(nuiAddMonths('2026-03-31', -13)).toBe('2025-02-28');
    expect(nuiAddYears('2024-02-29', 1)).toBe('2025-02-28');
    expect(nuiDate(2026, 13, 1)).toBe('2027-01-01');
    // Years below 100 stay themselves, and dates stay between the years 1 and 9999.
    expect(nuiAddDays('0050-01-01', 1)).toBe('0050-01-02');
    expect(nuiAddYears('9999-06-01', 5)).toBe('9999-12-31');
    expect(nuiAddMinutes('2026-09-25T23:45', 30)).toBe('2026-09-26T00:15');
    expect(nuiAddMinutes('2026-03-01T00:10:05', -20)).toBe('2026-02-28T23:50:05');
  });

  it('count weekdays and weeks the ISO way', () => {
    expect(nuiWeekday('1970-01-01')).toBe(4);
    expect(nuiWeekday('2026-09-27')).toBe(7);
    expect(nuiStartOfWeek('2026-09-25', 1)).toBe('2026-09-21');
    expect(nuiStartOfWeek('2026-09-25', 7)).toBe('2026-09-20');
    expect(nuiIsoWeek('2026-01-01')).toBe(1);
    expect(nuiIsoWeek('2027-01-01')).toBe(53);
    expect(nuiIsoWeek('2024-12-30')).toBe(1);
  });

  it('lay a month out in whole weeks', () => {
    const weeks = nuiMonthWeeks('2026-02', 1);
    expect(weeks.length).toBe(6);
    expect(weeks[0][0]).toBe('2026-01-26');
    expect(weeks[5][6]).toBe('2026-03-08');
    // February 2026 starts on a Sunday: four weeks from a Sunday start.
    expect(nuiMonthWeeks('2026-02', 7, true).length).toBe(4);
  });

  it('know how locales write dates and start their weeks', () => {
    expect(nuiWeekInfo('en-US').firstDay).toBe(7);
    expect(nuiWeekInfo('it-IT')).toEqual({ firstDay: 1, weekend: [6, 7] });
    expect(nuiWeekInfo('ar-EG').firstDay).toBe(6);
    expect(nuiUses12Hours('en-US')).toBe(true);
    expect(nuiUses12Hours('de-DE')).toBe(false);
    expect(nuiWeekdayNames('en', 7, 'short')[0]).toBe('Sun');
    expect(nuiMonthNames('it')[8]).toBe('settembre');
    // Plain dates never shift with the time zone, and the calendar is Gregorian.
    expect(nuiFormatDate('2026-09-25', 'en-US')).toBe('Sep 25, 2026');
    expect(nuiFormatDate('2026-09-25', 'th', { year: 'numeric' })).toContain('2026');
  });
});
