import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { userEvent } from 'vitest/browser';
import type { NuiDate } from '@needless-ui/angular';
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
  const stable = () => fixture.whenStable();
  return { fixture, host: fixture.componentInstance, root, cell, title, stable };
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
    const { host, cell, stable } = await setup((h) => {
      h.selection.set('range');
      h.value.set(null);
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
    const { host, cell, stable } = await setup((h) => h.selection.set('multiple'));
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
