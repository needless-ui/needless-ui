import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { userEvent } from 'vitest/browser';
import { NuiHovercard, NuiHovercardTrigger, NuiPopover, NuiPopoverTrigger } from './popover';

@Component({
  imports: [NuiPopover, NuiPopoverTrigger, NuiHovercard, NuiHovercardTrigger],
  template: `
    <button id="trigger" [nuiPopoverTrigger]="panel">Filters</button>
    <div nuiPopover #panel="nuiPopover" aria-label="Filters" side="bottom" arrow>
      <button id="inside">Apply</button>
    </div>
    <a id="link" href="#x" [nuiHovercardTrigger]="card">@ada</a>
    <div nuiHovercard #card="nuiHovercard" [openDelay]="20" [closeDelay]="20">Ada Lovelace</div>
  `,
})
class Host {}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function setup() {
  const fixture = TestBed.createComponent(Host);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  return {
    fixture,
    trigger: root.querySelector<HTMLButtonElement>('#trigger')!,
    popover: root.querySelector<HTMLElement>('.nui-popover')!,
    link: root.querySelector<HTMLAnchorElement>('#link')!,
    card: root.querySelector<HTMLElement>('.nui-hovercard')!,
  };
}

describe('NuiPopover', () => {
  it('is a native auto popover wired to its trigger', async () => {
    const { trigger, popover } = await setup();
    expect(popover.getAttribute('popover')).toBe('auto');
    expect(popover.getAttribute('role')).toBe('dialog');
    expect(trigger.getAttribute('popovertarget')).toBe(popover.id);
    expect(trigger.getAttribute('aria-haspopup')).toBe('dialog');
    expect(popover.hasAttribute('data-arrow')).toBe(true);
  });

  it('opens below its trigger and closes on Escape, returning focus', async () => {
    const { fixture, trigger, popover } = await setup();
    await userEvent.click(trigger);
    await fixture.whenStable();
    expect(popover.matches(':popover-open')).toBe(true);
    expect(popover.dataset['side']).toBe('bottom');
    expect(popover.getBoundingClientRect().top).toBeGreaterThanOrEqual(
      trigger.getBoundingClientRect().bottom,
    );

    // Into the popover: Safari's Tab reaches only text fields by default.
    popover.querySelector<HTMLElement>('#inside')!.focus();
    expect(document.activeElement?.id).toBe('inside');
    await userEvent.keyboard('{Escape}');
    await fixture.whenStable();
    expect(popover.matches(':popover-open')).toBe(false);
    expect(document.activeElement).toBe(trigger);
  });
});

describe('NuiHovercard', () => {
  it('describes its trigger, opens on hover after a delay and closes after leaving', async () => {
    const { link, card } = await setup();
    expect(link.getAttribute('aria-describedby')).toBe(card.id);
    expect(card.getAttribute('role')).toBe('tooltip');

    link.dispatchEvent(new PointerEvent('pointerenter', { pointerType: 'mouse' }));
    expect(card.matches(':popover-open')).toBe(false);
    await wait(60);
    expect(card.matches(':popover-open')).toBe(true);

    link.dispatchEvent(new PointerEvent('pointerleave', { pointerType: 'mouse' }));
    await wait(60);
    expect(card.matches(':popover-open')).toBe(false);
  });

  it('opens at once for keyboard focus and closes on Escape', async () => {
    const { trigger, link, card } = await setup();
    // Tab onto the link: keyboard focus. Safari's Tab skips links without a tabindex.
    link.tabIndex = 0;
    trigger.focus();
    await userEvent.keyboard('{Tab}');
    expect(document.activeElement).toBe(link);
    expect(card.matches(':popover-open')).toBe(true);
    await userEvent.keyboard('{Escape}');
    expect(card.matches(':popover-open')).toBe(false);
    expect(document.activeElement).toBe(link);
  });
});
