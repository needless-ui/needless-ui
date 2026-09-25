import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { userEvent } from 'vitest/browser';
import { NuiOtp, NuiOtpInput } from './otp';

@Component({
  imports: [NuiOtp, NuiOtpInput, FormsModule],
  template: `
    <div nuiOtp [groups]="[3, 3]" (completed)="completed.push($event)">
      <input nuiOtpInput aria-label="Verification code" [(ngModel)]="code" />
    </div>
  `,
})
class Host {
  readonly code = signal('');
  readonly completed: string[] = [];
}

async function setup() {
  const fixture = TestBed.createComponent(Host);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const input = root.querySelector('input')!;
  const slots = () => Array.from(root.querySelectorAll<HTMLElement>('.nui-otp-slot'));
  const text = () =>
    slots()
      .map((slot) => slot.textContent)
      .join('');
  return { fixture, host: fixture.componentInstance, root, input, slots, text };
}

describe('NuiOtp', () => {
  it('draws one hidden slot per character, split into groups, over a one-time-code input', async () => {
    const { root, input, slots } = await setup();
    expect(slots()).toHaveLength(6);
    expect(root.querySelectorAll('.nui-otp-separator')).toHaveLength(1);
    expect(root.querySelector('.nui-otp-slots')!.getAttribute('aria-hidden')).toBe('true');
    expect(input.getAttribute('autocomplete')).toBe('one-time-code');
    expect(input.getAttribute('inputmode')).toBe('numeric');
    expect(input.getAttribute('maxlength')).toBe('6');
  });

  it('fills slots as digits are typed, refuses letters, and emits the complete code once', async () => {
    const { fixture, host, input, text } = await setup();
    await userEvent.click(input);
    await userEvent.keyboard('12a3456');
    await fixture.whenStable();
    expect(text()).toBe('123456');
    expect(host.code()).toBe('123456');
    expect(host.completed).toEqual(['123456']);
  });

  it('cleans up a pasted code', async () => {
    const { fixture, host, input, text } = await setup();
    input.focus();
    const clipboardData = new DataTransfer();
    clipboardData.setData('text', ' 987-654 ');
    // Firefox ignores `clipboardData` given to the event's constructor.
    const paste = new ClipboardEvent('paste', { bubbles: true, cancelable: true });
    Object.defineProperty(paste, 'clipboardData', { value: clipboardData });
    input.dispatchEvent(paste);
    // The browser inserts the text itself (a synthetic event inserts nothing); the cleanup follows.
    expect(paste.defaultPrevented).toBe(false);
    await new Promise((resolve) => setTimeout(resolve));
    await fixture.whenStable();
    expect(text()).toBe('987654');
    expect(host.code()).toBe('987654');
  });

  it('follows values set by a form', async () => {
    const { fixture, host, text } = await setup();
    host.code.set('42');
    await fixture.whenStable();
    expect(text()).toBe('42');
  });

  it('marks the slot being edited, with a caret while it is empty', async () => {
    const { fixture, input, slots } = await setup();
    await userEvent.click(input);
    await userEvent.keyboard('12');
    await fixture.whenStable();
    expect(slots()[2].hasAttribute('data-active')).toBe(true);
    expect(slots()[2].hasAttribute('data-caret')).toBe(true);

    await userEvent.keyboard('{ArrowLeft}');
    await fixture.whenStable();
    expect(slots()[1].hasAttribute('data-active')).toBe(true);
    expect(input.selectionStart).toBe(1);
    expect(input.selectionEnd).toBe(2);

    await userEvent.keyboard('9');
    await fixture.whenStable();
    expect(input.value).toBe('19');
  });
});
