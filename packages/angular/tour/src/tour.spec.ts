import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { userEvent } from 'vitest/browser';
import { NuiTour, type NuiTourStep } from './tour';

@Component({
  imports: [NuiTour],
  template: `
    <button id="start" (click)="open.set(true)">Start</button>
    <button id="search">Search</button>
    <button id="save" (click)="saved = true">Save</button>
    <nui-tour
      [steps]="steps"
      [(open)]="open"
      [(step)]="step"
      (finished)="events.push('finished')"
      (dismissed)="events.push('dismissed ' + $event)"
    />
  `,
})
class Host {
  readonly open = signal(false);
  readonly step = signal(0);
  readonly events: string[] = [];
  saved = false;
  prepared = false;
  readonly steps: NuiTourStep[] = [
    { target: '#search', title: 'Search', content: 'Find anything here.' },
    { target: '#save', title: 'Save', content: 'Try it now.', interactive: true },
    {
      title: 'All set',
      content: 'That’s the tour.',
      beforeShow: async () => {
        await new Promise((resolve) => setTimeout(resolve, 20));
        this.prepared = true;
      },
    },
  ];
}

async function setup() {
  const fixture = TestBed.createComponent(Host);
  document.body.append(fixture.nativeElement);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const dialog = root.querySelector<HTMLDialogElement>('dialog')!;
  const settle = async () => {
    for (let i = 0; i < 5; i++) {
      await fixture.whenStable();
      await new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 10)));
    }
  };
  return { fixture, host: fixture.componentInstance, root, dialog, settle };
}

describe('NuiTour', () => {
  it('points at each step’s target in a modal card, dimming the rest', async () => {
    const { host, root, dialog, settle } = await setup();
    root.querySelector<HTMLButtonElement>('#start')!.focus();
    host.open.set(true);
    await settle();
    expect(dialog.matches(':modal')).toBe(true);
    expect(dialog.getAttribute('aria-labelledby')).toBe(dialog.querySelector('h2')!.id);
    expect(dialog.querySelector('h2')!.textContent).toBe('Search');
    expect(dialog.querySelector('.nui-tour-progress')!.textContent).toBe('1 of 3');
    expect(document.activeElement?.textContent?.trim()).toBe('Next');
    expect(dialog.querySelector<HTMLElement>('.nui-tour-spotlight')!.style.clipPath).toContain(
      'evenodd',
    );
  });

  it('lets an interactive step’s target be used, and walks back and forth', async () => {
    const { host, root, dialog, settle } = await setup();
    host.open.set(true);
    await settle();
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(host.step()).toBe(1);
    expect(dialog.matches(':modal')).toBe(false);
    expect(dialog.matches(':popover-open')).toBe(true);
    root.querySelector<HTMLButtonElement>('#save')!.click();
    expect(host.saved).toBe(true);
    dialog.querySelector<HTMLButtonElement>('.nui-tour-footer button')!.click();
    await settle();
    expect(host.step()).toBe(0);
    expect(dialog.matches(':modal')).toBe(true);
  });

  it('waits for beforeShow, centers a step without a target, and finishes', async () => {
    const { host, root, dialog, settle } = await setup();
    root.querySelector<HTMLButtonElement>('#start')!.focus();
    host.step.set(2);
    host.open.set(true);
    await settle();
    expect(host.prepared).toBe(true);
    expect(dialog.querySelector('.nui-tour-card')!.hasAttribute('data-centered')).toBe(true);
    expect(dialog.querySelector('.nui-tour-spotlight')!.getAttribute('style') ?? '').not.toContain(
      'evenodd',
    );
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(host.events).toEqual(['finished']);
    expect(host.open()).toBe(false);
    expect(dialog.open).toBe(false);
    expect(document.activeElement).toBe(root.querySelector('#start'));
  });

  it('ends early with Escape', async () => {
    const { host, settle } = await setup();
    host.open.set(true);
    await settle();
    await userEvent.keyboard('{Escape}');
    await settle();
    expect(host.events).toEqual(['dismissed 0']);
    expect(host.open()).toBe(false);
  });
});
