import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { userEvent } from 'vitest/browser';
import { NuiDateField, NuiTimeField } from './field';
import { nuiReadDigits, nuiSegmentPlaceholders } from './segments';

@Component({
  imports: [NuiDateField, NuiTimeField, ReactiveFormsModule],
  template: `
    <nui-date-field
      id="date"
      aria-label="Birthday"
      [(value)]="date"
      [locale]="locale()"
      [granularity]="granularity()"
      min="2000-01-01"
      max="2030-12-31"
      placeholder="2026-06-15"
    />
    <nui-time-field
      id="time"
      aria-label="Start"
      [(value)]="time"
      [locale]="locale()"
      minuteStep="15"
    />
    <nui-date-field id="form" aria-label="Form" [formControl]="control" locale="en-US" />
  `,
})
class Host {
  readonly date = signal<string | null>(null);
  readonly time = signal<string | null>(null);
  readonly locale = signal('en-US');
  readonly granularity = signal<'day' | 'minute'>('day');
  readonly control = new FormControl<string | null>('2026-01-31');
}

async function setup(change?: (host: Host) => void) {
  const fixture = TestBed.createComponent(Host);
  change?.(fixture.componentInstance);
  document.body.append(fixture.nativeElement);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const segments = (id: string) => [
    ...root.querySelectorAll<HTMLElement>(`#${id} [role="spinbutton"]`),
  ];
  const text = (id: string) =>
    root.querySelector<HTMLElement>(`#${id}`)!.textContent!.replace(/\s+/g, '');
  return {
    fixture,
    host: fixture.componentInstance,
    root,
    segments,
    text,
    stable: () => fixture.whenStable(),
  };
}

describe('NuiDateField', () => {
  it('shows spin buttons in the locale’s order, with its separators', async () => {
    const { root, segments, text } = await setup();
    const group = root.querySelector('#date')!;
    expect(group.getAttribute('role')).toBe('group');
    expect(segments('date').map((s) => s.getAttribute('aria-label'))).toEqual([
      'Month',
      'Day',
      'Year',
    ]);
    expect(text('date')).toBe('mm/dd/yyyy');
    const [month] = segments('date');
    expect(month.getAttribute('aria-valuetext')).toBe('Empty');
    expect(month.getAttribute('aria-valuemax')).toBe('12');
    expect(month.getAttribute('inputmode')).toBe('numeric');
  });

  it('takes typed digits, moving on as each segment fills', async () => {
    const { host, segments, text, stable } = await setup();
    segments('date')[0].focus();
    await userEvent.keyboard('09252026');
    await stable();
    expect(host.date()).toBe('2026-09-25');
    expect(text('date')).toBe('09/25/2026');
    expect(segments('date')[0].getAttribute('aria-valuetext')).toBe('9 – September');

    // A month that can't take a second digit moves on at once.
    segments('date')[0].focus();
    await userEvent.keyboard('2');
    await stable();
    expect(document.activeElement).toBe(segments('date')[1]);
    expect(host.date()).toBe('2026-02-25');
  });

  it('fits the day to its month, and keeps a year whole while it’s typed', async () => {
    const { host, segments, stable } = await setup((h) => h.date.set('2024-01-31'));
    segments('date')[0].focus();
    await userEvent.keyboard('2');
    await stable();
    expect(host.date()).toBe('2024-02-29');
    segments('date')[2].focus();
    await userEvent.keyboard('20');
    await stable();
    expect(host.date()).toBe('2024-02-29');
    await userEvent.keyboard('23');
    await stable();
    expect(host.date()).toBe('2023-02-28');
  });

  it('steps with the arrow keys, from the placeholder when empty', async () => {
    const { host, segments, stable } = await setup();
    segments('date')[2].focus();
    await userEvent.keyboard('{ArrowUp}');
    segments('date')[0].focus();
    await userEvent.keyboard('{ArrowUp}');
    segments('date')[1].focus();
    // The first press shows the placeholder's day; the second steps from it.
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    await stable();
    expect(host.date()).toBe('2026-06-14');
    segments('date')[0].focus();
    await userEvent.keyboard('{End}{ArrowUp}');
    await stable();
    expect(host.date()).toBe('2026-01-14');
  });

  it('clears with Backspace, and a second one goes back a segment', async () => {
    const { host, segments, stable } = await setup((h) => h.date.set('2026-09-25'));
    segments('date')[1].focus();
    await userEvent.keyboard('{Backspace}');
    await stable();
    expect(host.date()).toBeNull();
    expect(segments('date')[1].hasAttribute('data-placeholder')).toBe(true);
    await userEvent.keyboard('{Backspace}');
    expect(document.activeElement).toBe(segments('date')[0]);
    // The rest stays as typed, and filling the gap completes the date.
    segments('date')[1].focus();
    await userEvent.keyboard('07');
    await stable();
    expect(host.date()).toBe('2026-09-07');
  });

  it('reads pasted dates, ISO or in the locale’s own format', async () => {
    const { host, segments, stable } = await setup((h) => h.locale.set('de-DE'));
    expect(segments('date').map((s) => s.getAttribute('aria-label'))).toEqual([
      'Day',
      'Month',
      'Year',
    ]);
    const paste = (text: string) => {
      const data = new DataTransfer();
      data.setData('text', text);
      segments('date')[0].dispatchEvent(
        new ClipboardEvent('paste', { clipboardData: data, bubbles: true }),
      );
    };
    paste('24.12.2025');
    await stable();
    expect(host.date()).toBe('2025-12-24');
    paste('2026-09-25');
    await stable();
    expect(host.date()).toBe('2026-09-25');
    expect(nuiReadDigits('٢٠٢٦')).toBe('2026');
  });

  it('shows placeholders from the locale’s names for the fields', async () => {
    const { text, stable, fixture } = await setup((h) => h.locale.set('de-DE'));
    expect(text('date')).toBe('TT.MM.JJJJ');
    fixture.componentInstance.locale.set('fr-FR');
    await stable();
    expect(text('date')).toBe('jj/mm/aaaa');
    const ja = nuiSegmentPlaceholders('ja');
    expect([ja.year, ja.month, ja.day]).toEqual(['年', '月', '日']);
    expect(nuiSegmentPlaceholders('ar').year).toBe('––––');
  });

  it('marks values outside min and max as invalid', async () => {
    const { root, segments, stable } = await setup((h) => h.date.set('1999-12-31'));
    expect(root.querySelector('#date')!.hasAttribute('data-invalid')).toBe(true);
    expect(segments('date')[0].getAttribute('aria-invalid')).toBe('true');
    void stable;
  });

  it('adds time segments with granularity', async () => {
    const { host, segments, stable } = await setup((h) => h.granularity.set('minute'));
    expect(segments('date').map((s) => s.getAttribute('data-type'))).toEqual([
      'month',
      'day',
      'year',
      'hour',
      'minute',
      'dayPeriod',
    ]);
    segments('date')[0].focus();
    await userEvent.keyboard('092520260730p');
    await stable();
    expect(host.date()).toBe('2026-09-25T19:30');
  });

  it('works with forms', async () => {
    const { host, segments, text, stable } = await setup();
    expect(text('form')).toBe('01/31/2026');
    segments('form')[1].focus();
    await userEvent.keyboard('15');
    await stable();
    expect(host.control.value).toBe('2026-01-15');
    host.control.disable();
    await stable();
    expect(segments('form')[0].getAttribute('aria-disabled')).toBe('true');
    expect(segments('form')[0].hasAttribute('contenteditable')).toBe(false);
  });
});

describe('NuiTimeField', () => {
  it('uses the locale’s clock, and stores 24-hour times', async () => {
    const { host, segments, text, stable } = await setup();
    expect(segments('time').map((s) => s.getAttribute('data-type'))).toEqual([
      'hour',
      'minute',
      'dayPeriod',
    ]);
    segments('time')[0].focus();
    await userEvent.keyboard('0930p');
    await stable();
    expect(host.time()).toBe('21:30');
    expect(text('time')).toBe('09:30PM');
    // The minutes step by 15, snapping.
    segments('time')[1].focus();
    await userEvent.keyboard('{ArrowUp}');
    await stable();
    expect(host.time()).toBe('21:45');
  });

  it('shows 24 hours where the locale does', async () => {
    const { host, segments, text, stable } = await setup((h) => h.locale.set('de-DE'));
    expect(segments('time').map((s) => s.getAttribute('data-type'))).toEqual(['hour', 'minute']);
    segments('time')[0].focus();
    await userEvent.keyboard('1405');
    await stable();
    expect(host.time()).toBe('14:05');
    expect(text('time')).toBe('14:05');
  });
});
