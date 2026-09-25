import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { describe, expect, it } from 'vitest';
import { userEvent } from 'vitest/browser';
import { nuiCardMask } from './card';
import { NuiMask } from './mask';

@Component({
  imports: [NuiMask, ReactiveFormsModule],
  template: `
    <input aria-label="Date" nuiMask="00/00/0000" [(value)]="date" />
    <input aria-label="Card" [nuiMask]="card" unmask [formControl]="control" />
    <input aria-label="Code" nuiMask="AA-000" inputmode="text" />
  `,
})
class Host {
  readonly date = signal('');
  readonly card = nuiCardMask;
  readonly control = new FormControl('');
}

async function setup() {
  const fixture = TestBed.createComponent(Host);
  document.body.append(fixture.nativeElement);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const [date, card, code] = [...root.querySelectorAll('input')];
  return { fixture, host: fixture.componentInstance, date, card, code };
}

describe('NuiMask', () => {
  it('formats as it goes, and the value is what shows', async () => {
    const { fixture, host, date } = await setup();
    await userEvent.type(date, '1203x1999');
    await fixture.whenStable();
    expect(date.value).toBe('12/03/1999');
    expect(host.date()).toBe('12/03/1999');
    // Full: another digit stays out.
    await userEvent.type(date, '9');
    expect(date.value).toBe('12/03/1999');
  });

  it('deletes across literals with Backspace', async () => {
    const { fixture, host, date } = await setup();
    await userEvent.type(date, '1203');
    expect(date.value).toBe('12/03/');
    await userEvent.keyboard('{Backspace}');
    await fixture.whenStable();
    expect(date.value).toBe('12/0');
    await userEvent.keyboard('{Backspace}{Backspace}');
    expect(date.value).toBe('1');
    expect(host.date()).toBe('1');
  });

  it('keeps the caret in the data when typing in the middle', async () => {
    const { date } = await setup();
    await userEvent.type(date, '1203199');
    date.setSelectionRange(1, 1);
    await userEvent.keyboard('9');
    expect(date.value).toBe('19/20/3199');
    expect(date.selectionStart).toBe(3);
  });

  it('writes a value from outside, and sends only the data with unmask', async () => {
    const { fixture, host, card } = await setup();
    host.control.setValue('4111111111111111');
    await fixture.whenStable();
    expect(card.value).toBe('4111 1111 1111 1111');
    await userEvent.clear(card);
    await userEvent.type(card, '378282246310005');
    await fixture.whenStable();
    expect(card.value).toBe('3782 822463 10005');
    expect(host.control.value).toBe('378282246310005');
    expect(host.control.valid).toBe(true);
    await userEvent.keyboard('{Backspace}');
    expect(host.control.errors).toEqual({ nuiMask: { actual: 14, expected: 15 } });
  });

  it('asks for a numeric keyboard only when the mask takes only digits', async () => {
    const { date, card, code } = await setup();
    expect(date.getAttribute('inputmode')).toBe('numeric');
    expect(card.getAttribute('inputmode')).toBe('numeric');
    expect(code.getAttribute('inputmode')).toBe('text');
    await userEvent.type(code, 'ab123');
    expect(code.value).toBe('AB-123');
  });
});
