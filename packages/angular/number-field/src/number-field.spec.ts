import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { userEvent } from 'vitest/browser';
import { NuiNumberField, NuiNumberInput, NuiNumberStep, nuiParseNumber } from './number-field';

@Component({
  imports: [NuiNumberField, NuiNumberInput, NuiNumberStep],
  template: `
    <div nuiNumberField>
      <button nuiNumberStep="-1"></button>
      <input nuiNumberInput aria-label="Guests" [min]="1" [max]="5" [(value)]="guests" />
      <button nuiNumberStep="1"></button>
    </div>
    <div nuiNumberField>
      <input
        nuiNumberInput
        aria-label="Price"
        locale="de-DE"
        [step]="0.01"
        [format]="{ style: 'currency', currency: 'EUR' }"
        [(value)]="price"
      />
    </div>
  `,
})
class Host {
  readonly guests = signal<number | null>(2);
  readonly price = signal<number | null>(1234.5);
}

async function setup() {
  const fixture = TestBed.createComponent(Host);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const [guests, price] = Array.from(root.querySelectorAll('input'));
  const [down, up] = Array.from(root.querySelectorAll('button'));
  return { fixture, host: fixture.componentInstance, guests, price, down, up };
}

describe('nuiParseNumber', () => {
  it('reads numbers the way Intl writes them', () => {
    expect(nuiParseNumber('1.234,5', 'de-DE')).toBe(1234.5);
    expect(nuiParseNumber('1 234,5', 'fr-FR')).toBe(1234.5);
    expect(nuiParseNumber('−12', 'sv-SE')).toBe(-12);
    expect(nuiParseNumber('١٬٢٣٤٫٥', 'ar-EG')).toBe(1234.5);
    expect(nuiParseNumber('15 %', 'de-DE', { style: 'percent' })).toBe(0.15);
    expect(nuiParseNumber('abc', 'en-US')).toBeNull();
  });
});

describe('NuiNumberField', () => {
  it('is a spinbutton with its range', async () => {
    const { guests } = await setup();
    expect(guests.getAttribute('role')).toBe('spinbutton');
    expect(guests.getAttribute('aria-valuenow')).toBe('2');
    expect(guests.getAttribute('aria-valuemin')).toBe('1');
    expect(guests.getAttribute('aria-valuemax')).toBe('5');
    expect(guests.value).toBe('2');
  });

  it('steps with the keyboard and stops at the limits', async () => {
    const { fixture, host, guests, up } = await setup();
    guests.focus();
    await userEvent.keyboard('{ArrowUp}');
    expect(host.guests()).toBe(3);
    await userEvent.keyboard('{End}');
    await fixture.whenStable();
    expect(host.guests()).toBe(5);
    expect(up.disabled).toBe(true);
    await userEvent.keyboard('{ArrowUp}{PageDown}');
    await fixture.whenStable();
    expect(host.guests()).toBe(1);
  });

  it('steps with the buttons, without taking focus', async () => {
    const { fixture, host, down, up } = await setup();
    await userEvent.click(up);
    await fixture.whenStable();
    expect(host.guests()).toBe(3);
    await userEvent.click(down);
    await userEvent.click(down);
    await fixture.whenStable();
    expect(host.guests()).toBe(1);
    expect(down.disabled).toBe(true);
    expect(down.getAttribute('aria-label')).toBe('Decrease');
    expect(down.tabIndex).toBe(-1);
  });

  it('formats for its locale, reads typed numbers, and snaps them on blur', async () => {
    const { fixture, host, price } = await setup();
    expect(price.value).toBe('1.234,50\u00a0€');

    await userEvent.clear(price);
    await userEvent.type(price, '99,999');
    expect(host.price()).toBe(99.999);
    price.blur();
    await fixture.whenStable();
    expect(host.price()).toBe(100);
    expect(price.value).toBe('100,00\u00a0€');
  });
});
