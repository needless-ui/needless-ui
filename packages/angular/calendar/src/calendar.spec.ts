import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { userEvent } from 'vitest/browser';
import { type NuiDate, nuiMonthOf, nuiToday } from '@needless-ui/angular';
import { NuiCalendar, type NuiCalendarSelection, type NuiDateRange } from './calendar';

@Component({
  imports: [NuiCalendar],
  template: `
    <nui-calendar
      [selection]="selection()"
      [(value)]="value"
      [(values)]="values"
      [(range)]="range"
      [(month)]="month"
      [min]="min()"
      [max]="max()"
      [months]="months()"
      [weekNumbers]="weekNumbers()"
      [unavailable]="unavailable"
      locale="en-US"
      (picked)="picked.push($event)"
    />
  `,
})
class Host {
  readonly selection = signal<NuiCalendarSelection>('single');
  readonly value = signal<NuiDate | null>('2026-09-25');
  readonly values = signal<readonly NuiDate[]>([]);
  readonly range = signal<NuiDateRange | null>(null);
  readonly month = signal<string | null>(null);
  readonly min = signal<NuiDate | null>(null);
  readonly max = signal<NuiDate | null>(null);
  readonly months = signal(1);
  readonly weekNumbers = signal(false);
  readonly picked: unknown[] = [];
  readonly unavailable = (date: NuiDate) => date === '2026-09-10';
}

async function setup(change?: (host: Host) => void) {
  const fixture = TestBed.createComponent(Host);
  change?.(fixture.componentInstance);
  document.body.append(fixture.nativeElement);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const cell = (date: string) => root.querySelector<HTMLElement>(`[data-date="${date}"]`)!;
  const title = () => root.querySelector('.nui-calendar-title')!.textContent!.trim();
  // The cells in the tab order: days, months or years.
  const stops = () =>
    [...root.querySelectorAll<HTMLElement>('[role="grid"] [tabindex="0"]')].map(
      (stop) => stop.dataset['date'] ?? stop.dataset['month'] ?? stop.dataset['year'],
    );
  const stable = () => fixture.whenStable();
  return { fixture, host: fixture.componentInstance, root, cell, title, stops, stable };
}

describe('NuiCalendar', () => {
  it('shows the chosen day’s month in six whole weeks, from the locale’s first day', async () => {
    const { root, cell, title } = await setup();
    expect(title()).toBe('September 2026');
    const grid = root.querySelector('[role="grid"]')!;
    expect(grid.getAttribute('aria-labelledby')).toBe(
      root.querySelector('.nui-calendar-title')!.id,
    );
    expect([...grid.querySelectorAll('th')].map((th) => th.textContent!.trim())[0]).toBe('Sun');
    expect(grid.querySelector('th')!.getAttribute('abbr')).toBe('Sunday');
    expect(grid.querySelectorAll('tbody tr').length).toBe(6);
    expect(cell('2026-08-30').hasAttribute('data-outside')).toBe(true);

    const chosen = cell('2026-09-25');
    expect(chosen.getAttribute('aria-selected')).toBe('true');
    expect(chosen.getAttribute('tabindex')).toBe('0');
    expect(chosen.getAttribute('aria-label')).toContain('Friday, September 25, 2026');
    expect(cell('2026-09-10').getAttribute('aria-disabled')).toBe('true');
    expect(cell('2026-09-10').getAttribute('aria-label')).toContain('unavailable');
  });

  it('chooses a day with a click, but never an unavailable one', async () => {
    const { host, cell, stable } = await setup();
    cell('2026-09-10').click();
    await stable();
    expect(host.value()).toBe('2026-09-25');
    cell('2026-09-12').click();
    await stable();
    expect(host.value()).toBe('2026-09-12');
    expect(host.picked).toEqual(['2026-09-12']);
    // A day of the next month shows its month.
    cell('2026-10-02').click();
    await stable();
    expect(host.month()).toBe('2026-10');
  });

  it('moves by day, week, month and year from the keyboard', async () => {
    const { host, cell, title, stable } = await setup();
    cell('2026-09-25').focus();
    await userEvent.keyboard('{ArrowRight}');
    await stable();
    expect(document.activeElement).toBe(cell('2026-09-26'));
    await userEvent.keyboard('{ArrowDown}');
    await stable();
    expect(document.activeElement).toBe(cell('2026-10-03'));
    expect(title()).toBe('October 2026');
    await userEvent.keyboard('{Home}');
    await stable();
    expect(document.activeElement).toBe(cell('2026-09-27'));
    await userEvent.keyboard('{End}');
    await stable();
    expect(document.activeElement).toBe(cell('2026-10-03'));
    await userEvent.keyboard('{PageUp}');
    await stable();
    expect(document.activeElement).toBe(cell('2026-09-03'));
    await userEvent.keyboard('{Shift>}{PageDown}{/Shift}');
    await stable();
    expect(document.activeElement).toBe(cell('2027-09-03'));
    await userEvent.keyboard('{Enter}');
    await stable();
    expect(host.value()).toBe('2027-09-03');
  });

  it('keeps to min and max', async () => {
    const { root, cell, stable } = await setup((h) => {
      h.min.set('2026-09-05');
      h.max.set('2026-09-28');
    });
    expect(cell('2026-09-04').getAttribute('aria-disabled')).toBe('true');
    const [previous, next] = root.querySelectorAll('.nui-calendar-nav');
    expect(previous.getAttribute('aria-disabled')).toBe('true');
    expect(next.getAttribute('aria-disabled')).toBe('true');
    cell('2026-09-25').focus();
    await userEvent.keyboard('{PageDown}');
    await stable();
    expect(document.activeElement).toBe(cell('2026-09-28'));
  });

  it('chooses a range in two picks, previewing it in between', async () => {
    // With nothing chosen, the calendar would open on today's month.
    const { host, cell, stable } = await setup((h) => {
      h.selection.set('range');
      h.value.set(null);
      h.month.set('2026-09');
    });
    cell('2026-09-20').click();
    await stable();
    expect(host.range()).toBeNull();
    cell('2026-09-14').dispatchEvent(new PointerEvent('pointerenter'));
    await stable();
    expect(cell('2026-09-16').hasAttribute('data-in-range')).toBe(true);
    expect(cell('2026-09-14').hasAttribute('data-range-start')).toBe(true);
    cell('2026-09-14').click();
    await stable();
    expect(host.range()).toEqual({ start: '2026-09-14', end: '2026-09-20' });
    expect(host.picked).toEqual([{ start: '2026-09-14', end: '2026-09-20' }]);
    expect(cell('2026-09-14').getAttribute('aria-label')).toContain('start of the range');

    // Escape drops a half-chosen range.
    cell('2026-09-02').click();
    await stable();
    cell('2026-09-02').focus();
    await userEvent.keyboard('{Escape}');
    await stable();
    expect(cell('2026-09-02').hasAttribute('data-range-start')).toBe(false);
    expect(host.range()).toEqual({ start: '2026-09-14', end: '2026-09-20' });
  });

  it('toggles days with selection="multiple"', async () => {
    const { host, cell, stable } = await setup((h) => {
      h.selection.set('multiple');
      h.month.set('2026-09');
    });
    cell('2026-09-03').click();
    cell('2026-09-01').click();
    await stable();
    expect(host.values()).toEqual(['2026-09-01', '2026-09-03']);
    cell('2026-09-03').click();
    await stable();
    expect(host.values()).toEqual(['2026-09-01']);
  });

  it('zooms out to months and years through its title', async () => {
    const { root, host, title, stable } = await setup();
    root.querySelector<HTMLButtonElement>('.nui-calendar-title')!.click();
    await stable();
    expect(title()).toBe('2026');
    root.querySelector<HTMLButtonElement>('.nui-calendar-title')!.click();
    await stable();
    expect(title()).toBe('2020 – 2039');
    root.querySelector<HTMLElement>('[data-year="1990"]')?.click();
    expect(root.querySelector('[data-year="1990"]')).toBeNull();
    root.querySelector<HTMLElement>('[data-year="2031"]')!.click();
    await stable();
    expect(title()).toBe('2031');
    root.querySelector<HTMLElement>('[data-month="2031-02"]')!.click();
    await stable();
    expect(title()).toBe('February 2031');
    expect(host.month()).toBe('2031-02');
    expect(document.activeElement?.getAttribute('data-date')).toBe('2031-02-25');
  });

  it('keeps one day in the tab order when month comes from outside', async () => {
    // A month gone by, with neither the chosen day nor today in it.
    const { root, host, cell, stops, stable } = await setup((h) => h.month.set('2020-03'));
    expect(stops()).toEqual(['2020-03-01']);
    root.querySelector<HTMLElement>('.nui-calendar-nav[data-direction="next"]')!.focus();
    await userEvent.tab();
    expect(document.activeElement).toBe(cell('2020-03-01'));
    await userEvent.keyboard('{ArrowRight}');
    await stable();
    expect(document.activeElement).toBe(cell('2020-03-02'));

    // The chosen day takes the tab stop back once its month shows.
    host.month.set('2026-09');
    await stable();
    expect(stops()).toEqual(['2026-09-25']);
    // A day chosen out of sight leaves it where it is.
    host.value.set('2026-12-05');
    await stable();
    expect(stops()).toEqual(['2026-09-25']);
  });

  it('gives the tab stop to a chosen day in sight, today, or the first day to choose', async () => {
    // The range starts in September, which October's grid shows only muted.
    const range = await setup((h) => {
      h.selection.set('range');
      h.range.set({ start: '2026-09-28', end: '2026-10-03' });
      h.month.set('2026-10');
    });
    expect(range.stops()).toEqual(['2026-10-03']);
    const several = await setup((h) => {
      h.selection.set('multiple');
      h.values.set(['2026-09-03', '2026-11-05']);
      h.month.set('2026-11');
    });
    expect(several.stops()).toEqual(['2026-11-05']);
    const today = nuiToday();
    const now = await setup((h) => h.month.set(nuiMonthOf(today)));
    expect(now.stops()).toEqual([today]);
    // September 2026 has gone by, so it can't hold today; before min, and the
    // unavailable 10th, no day can be chosen.
    const late = await setup((h) => {
      h.value.set(null);
      h.min.set('2026-09-10');
      h.month.set('2026-09');
    });
    expect(late.stops()).toEqual(['2026-09-11']);
  });

  it('keeps one day in the tab order side by side', async () => {
    const { host, cell, stops, stable } = await setup((h) => {
      h.months.set(2);
      h.month.set('2020-03');
    });
    expect(stops()).toEqual(['2020-03-01']);
    host.month.set('2026-08');
    await stable();
    expect(stops()).toEqual(['2026-09-25']);
    host.month.set('2026-09');
    await stable();
    cell('2026-10-20').focus();
    await stable();
    expect(stops()).toEqual(['2026-10-20']);
    // Down to one month, the day the keyboard was on is out of sight.
    host.months.set(1);
    await stable();
    expect(stops()).toEqual(['2026-09-25']);
  });

  it('zooms out to the year of the month shown', async () => {
    const { root, host, title, stops, stable } = await setup((h) => h.month.set('2001-05'));
    const zoomOut = async () => {
      root.querySelector<HTMLButtonElement>('.nui-calendar-title')!.click();
      await stable();
    };
    await zoomOut();
    expect(title()).toBe('2001');
    expect(stops()).toEqual(['2001-05']);
    await zoomOut();
    expect(title()).toBe('2000 – 2019');
    expect(stops()).toEqual(['2001']);
    host.month.set('1987-06');
    await stable();
    expect(title()).toBe('1980 – 1999');
    expect(stops()).toEqual(['1987']);
  });

  it('zooms back in on the month the keyboard is on', async () => {
    const { root, cell, title, stops, stable } = await setup();
    const zoomOut = async () => {
      root.querySelector<HTMLButtonElement>('.nui-calendar-title')!.click();
      await stable();
    };
    await zoomOut();
    root.querySelector<HTMLButtonElement>('.nui-calendar-nav[data-direction="next"]')!.click();
    await stable();
    expect(title()).toBe('2027');
    root.querySelector<HTMLElement>('[data-month="2027-09"]')!.focus();
    await userEvent.keyboard('{Escape}');
    await stable();
    expect(title()).toBe('September 2027');
    expect(document.activeElement).toBe(cell('2027-09-25'));

    await zoomOut();
    await zoomOut();
    root.querySelector<HTMLElement>('[data-year="2031"]')!.click();
    await stable();
    expect(document.activeElement?.getAttribute('data-month')).toBe('2031-09');
    await userEvent.keyboard('{Escape}');
    await stable();
    expect(title()).toBe('September 2031');
    expect(document.activeElement).toBe(cell('2031-09-25'));
    expect(stops()).toEqual(['2031-09-25']);
  });

  it('keeps the keyboard on the day it picks', async () => {
    const { host, cell, stops, stable } = await setup((h) => {
      h.selection.set('range');
      h.value.set(null);
      h.month.set('2026-09');
    });
    const press = async (key: string) => {
      await userEvent.keyboard(key);
      await stable();
    };
    cell('2026-09-14').focus();
    await press('{Enter}');
    await press('{ArrowRight}');
    await press('{Enter}');
    expect(host.range()).toEqual({ start: '2026-09-14', end: '2026-09-15' });
    // The range now starts on the other end, but the keyboard stays.
    expect(stops()).toEqual(['2026-09-15']);
    await press('{ArrowRight}');
    expect(document.activeElement).toBe(cell('2026-09-16'));

    // Putting back the first of several days.
    const several = await setup((h) => {
      h.selection.set('multiple');
      h.values.set(['2026-09-03', '2026-09-17']);
    });
    several.cell('2026-09-03').focus();
    await userEvent.keyboard('{Enter}');
    await several.stable();
    expect(several.host.values()).toEqual(['2026-09-17']);
    expect(several.stops()).toEqual(['2026-09-03']);
  });

  it('keeps its tab stop when a script focuses a day on its way out', async () => {
    const { root, cell, stops, stable } = await setup();
    const leaving = cell('2026-09-12');
    root.querySelector<HTMLButtonElement>('.nui-calendar-nav[data-direction="next"]')!.click();
    // Until the next render, September's days are still there to focus.
    leaving.focus();
    await stable();
    expect(stops()).toEqual(['2026-10-25']);
  });

  it('shows months side by side, and week numbers', async () => {
    const { root } = await setup((h) => {
      h.months.set(2);
      h.weekNumbers.set(true);
    });
    const titles = [...root.querySelectorAll('.nui-calendar-title')].map((t) =>
      t.textContent!.trim(),
    );
    expect(titles).toEqual(['September 2026', 'October 2026']);
    expect(root.querySelectorAll('[data-date="2026-10-01"]').length).toBe(1);
    const week = root.querySelector('tbody th')!;
    expect(week.textContent!.trim()).toBe('36');
    expect(week.getAttribute('aria-label')).toBe('Week 36');
  });

  it('mirrors left and right in right-to-left text', async () => {
    const { root, cell, stable } = await setup();
    root.setAttribute('dir', 'rtl');
    cell('2026-09-25').focus();
    await userEvent.keyboard('{ArrowLeft}');
    await stable();
    expect(document.activeElement).toBe(cell('2026-09-26'));
  });
});
