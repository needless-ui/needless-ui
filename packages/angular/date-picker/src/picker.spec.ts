import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import type { NuiDateRange } from '@needless-ui/angular/calendar';
import { page, userEvent } from 'vitest/browser';
import { NuiDatePicker, NuiDateRangePicker, type NuiDateRangePreset } from './picker';

@Component({
  imports: [NuiDatePicker, NuiDateRangePicker],
  template: `
    <nui-date-picker
      id="single"
      aria-label="Departure"
      [(value)]="date"
      [granularity]="granularity()"
      locale="en-US"
    />
    <nui-date-range-picker
      id="range"
      aria-label="Stay"
      [(value)]="range"
      [presets]="presets"
      locale="en-US"
    />
  `,
})
class Host {
  readonly date = signal<string | null>('2026-09-25');
  readonly range = signal<NuiDateRange | null>(null);
  readonly granularity = signal<'day' | 'minute'>('day');
  readonly presets: NuiDateRangePreset[] = [
    { label: 'Launch week', range: { start: '2026-10-05', end: '2026-10-11' } },
  ];
}

async function setup(change?: (host: Host) => void) {
  const fixture = TestBed.createComponent(Host);
  change?.(fixture.componentInstance);
  document.body.append(fixture.nativeElement);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const settle = async () => {
    await fixture.whenStable();
    await new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve)));
    await fixture.whenStable();
  };
  return { fixture, host: fixture.componentInstance, root, settle };
}

describe('NuiDatePicker', () => {
  it('opens a calendar on the chosen day, and a pick closes it', async () => {
    const { host, root, settle } = await setup();
    const button = root.querySelector<HTMLButtonElement>('#single .nui-date-picker-button')!;
    expect(button.getAttribute('aria-label')).toBe('Choose a date');
    button.click();
    await settle();
    const popover = root.querySelector('#single .nui-date-picker-popover')!;
    expect(popover.matches(':popover-open')).toBe(true);
    expect(popover.getAttribute('role')).toBe('dialog');
    expect(document.activeElement?.getAttribute('data-date')).toBe('2026-09-25');

    await userEvent.keyboard('{ArrowRight}{Enter}');
    await settle();
    expect(host.date()).toBe('2026-09-26');
    expect(popover.matches(':popover-open')).toBe(false);
    expect(document.activeElement).toBe(button);
  });

  it('keeps the time when the calendar picks the date', async () => {
    const { host, root, settle } = await setup((h) => {
      h.granularity.set('minute');
      h.date.set('2026-09-25T18:45');
    });
    root.querySelector<HTMLButtonElement>('#single .nui-date-picker-button')!.click();
    await settle();
    root.querySelector<HTMLElement>('#single [data-date="2026-09-30"]')!.click();
    await settle();
    expect(host.date()).toBe('2026-09-30T18:45');
  });
});

describe('NuiDateRangePicker', () => {
  // Vitest's default viewport, for the tests after these.
  afterEach(() => page.viewport(414, 896));

  it('takes both ends typed, in order', async () => {
    const { host, root, settle } = await setup();
    const [start, end] = [...root.querySelectorAll<HTMLElement>('#range nui-date-field')];
    expect(start.getAttribute('aria-label')).toBe('Start date');
    start.querySelector<HTMLElement>('[role="spinbutton"]')!.focus();
    await userEvent.keyboard('10012026');
    await settle();
    expect(host.range()).toBeNull();
    end.querySelector<HTMLElement>('[role="spinbutton"]')!.focus();
    await userEvent.keyboard('09302026');
    await settle();
    expect(host.range()).toBeNull();
    expect(root.querySelector('#range')!.hasAttribute('data-invalid')).toBe(true);
    end.querySelector<HTMLElement>('[role="spinbutton"]')!.focus();
    await userEvent.keyboard('10');
    await settle();
    expect(host.range()).toEqual({ start: '2026-10-01', end: '2026-10-30' });
  });

  it('picks a range in two months, or from a preset', async () => {
    await page.viewport(1024, 768);
    const { host, root, settle } = await setup();
    root.querySelector<HTMLButtonElement>('#range .nui-date-picker-button')!.click();
    await settle();
    expect(root.querySelectorAll('#range .nui-calendar-grid').length).toBe(2);
    const preset = root.querySelector<HTMLButtonElement>('#range .nui-date-range-preset')!;
    expect(preset.getAttribute('aria-pressed')).toBe('false');
    preset.click();
    await settle();
    expect(host.range()).toEqual({ start: '2026-10-05', end: '2026-10-11' });
    expect(root.querySelector('#range .nui-date-picker-popover')!.matches(':popover-open')).toBe(
      false,
    );
  });

  it('shows one month where two side by side would not fit', async () => {
    await page.viewport(390, 700);
    const { root, settle } = await setup();
    root.querySelector<HTMLButtonElement>('#range .nui-date-picker-button')!.click();
    await settle();
    expect(root.querySelectorAll('#range .nui-calendar-grid').length).toBe(1);
  });
});
