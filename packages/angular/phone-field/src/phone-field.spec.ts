import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { describe, expect, it } from 'vitest';
import { userEvent } from 'vitest/browser';
import { NuiPhoneField } from './phone-field';

@Component({
  imports: [NuiPhoneField, ReactiveFormsModule],
  template: ` <nui-phone-field label="Phone" [(country)]="country" [formControl]="control" /> `,
})
class Host {
  readonly country = signal('');
  readonly control = new FormControl('');
}

async function setup(locale = 'en-US') {
  const announcements: string[] = [];
  TestBed.configureTestingModule({
    providers: [
      { provide: LOCALE_ID, useValue: locale },
      { provide: LiveAnnouncer, useValue: { announce: (t: string) => void announcements.push(t) } },
    ],
  });
  const fixture = TestBed.createComponent(Host);
  document.body.append(fixture.nativeElement);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const input = root.querySelector<HTMLInputElement>('.nui-phone-input')!;
  const trigger = root.querySelector<HTMLButtonElement>('.nui-select-trigger')!;
  return { fixture, host: fixture.componentInstance, input, trigger, announcements };
}

describe('NuiPhoneField', () => {
  it("starts from the locale's country and sends E.164", async () => {
    const { fixture, host, input, trigger } = await setup('it-IT');
    expect(trigger.textContent).toContain('+39');
    await userEvent.type(input, '3331234567');
    await fixture.whenStable();
    expect(input.value).toBe('333 123 4567');
    expect(host.control.value).toBe('+393331234567');
    expect(host.control.valid).toBe(true);
  });

  it('takes a trunk prefix, and leaves it out of the value', async () => {
    const { fixture, host, input } = await setup('en-GB');
    await userEvent.type(input, '07400123456');
    await fixture.whenStable();
    expect(input.value).toBe('07400 123456');
    expect(host.control.value).toBe('+447400123456');
  });

  it('picks the country from a calling code typed or pasted', async () => {
    const { fixture, host, input, trigger, announcements } = await setup('en-US');
    await userEvent.type(input, '+3');
    expect(input.value).toBe('+3');
    await userEvent.type(input, '3');
    await fixture.whenStable();
    expect(host.country()).toBe('FR');
    expect(trigger.textContent).toContain('+33');
    expect(input.value).toBe('');
    expect(announcements).toEqual(['France, +33']);
    await userEvent.type(input, '612345678');
    await fixture.whenStable();
    expect(input.value).toBe('6 12 34 56 78');
    expect(host.control.value).toBe('+33612345678');

    // A paste, as the browser leaves it before the field reformats it.
    input.value = '+1 268 555 0123';
    input.dispatchEvent(new InputEvent('input', { inputType: 'insertFromPaste', bubbles: true }));
    await fixture.whenStable();
    expect(host.country()).toBe('AG');
    expect(input.value).toBe('(268) 555-0123');
    expect(host.control.value).toBe('+12685550123');
  });

  it('shows a value from outside, and reports wrong lengths', async () => {
    const { fixture, host, input } = await setup('en-US');
    host.control.setValue('+5511912345678');
    await fixture.whenStable();
    expect(host.country()).toBe('BR');
    expect(input.value).toBe('11 91234-5678');
    host.control.setValue('+551191234');
    await fixture.whenStable();
    expect(host.control.errors).toEqual({
      nuiPhone: { region: 'BR', actual: 7, min: 10, max: 11 },
    });
  });

  it('regroups the number for a country picked from the list', async () => {
    const { fixture, host, input, trigger } = await setup('en-US');
    await userEvent.type(input, '612345678');
    await userEvent.click(trigger);
    await userEvent.keyboard('Fra');
    await userEvent.keyboard('{Enter}');
    await fixture.whenStable();
    expect(host.country()).toBe('FR');
    expect(input.value).toBe('6 12 34 56 78');
    expect(host.control.value).toBe('+33612345678');
    await new Promise(requestAnimationFrame);
    expect(document.activeElement).toBe(input);
  });
});
