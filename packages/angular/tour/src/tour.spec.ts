import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { nuiOnCloseRequest } from '@needless-ui/angular';
import { userEvent } from 'vitest/browser';
import { closeRequest, hasCloseWatcher, withoutCloseWatcher } from '../../src/testing';
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

  it('dims the whole window when a pinch zoom shrinks what innerHeight says', async () => {
    const { host, dialog, settle } = await setup();
    // The spotlight fills the window, as @needless-ui/css lays it out.
    const style = document.createElement('style');
    style.textContent = '.nui-tour-spotlight { position: fixed; inset: 0; }';
    document.head.appendChild(style);
    // Safari on iPhone reports a pinch-zoomed window as the zoomed-in part.
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 100 });
    try {
      host.open.set(true);
      await settle();
      const spotlight = dialog.querySelector<HTMLElement>('.nui-tour-spotlight')!;
      const outer = spotlight.style.clipPath.match(/M\s*0\s+0\s*H\s*([\d.]+)\s*V\s*([\d.]+)/);
      expect(outer).not.toBeNull();
      expect(Number(outer![1])).toBe(spotlight.offsetWidth);
      expect(Number(outer![2])).toBe(spotlight.offsetHeight);
      expect(spotlight.offsetHeight).toBeGreaterThan(100);
    } finally {
      Reflect.deleteProperty(window, 'innerHeight');
      style.remove();
    }
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

  /** Starts the tour from the keyboard, and goes on to its interactive step. */
  async function toInteractiveStep(root: HTMLElement, settle: () => Promise<void>) {
    const start = root.querySelector<HTMLButtonElement>('#start')!;
    start.focus();
    await userEvent.keyboard('{Enter}');
    await settle();
    await userEvent.keyboard('{Enter}');
    await settle();
    return start;
  }

  it.runIf(hasCloseWatcher)(
    'ends on a close request as on Escape, on an interactive step too, focus going back',
    async () => {
      const { host, root, dialog, settle } = await setup();
      const start = await toInteractiveStep(root, settle);
      expect(dialog.matches(':popover-open')).toBe(true);

      await closeRequest();
      await settle();
      expect(host.events).toEqual(['dismissed 1']);
      expect(host.open()).toBe(false);
      expect(dialog.matches(':popover-open')).toBe(false);
      expect(document.activeElement).toBe(start);
    },
  );

  it.runIf(hasCloseWatcher)(
    'ends once per close request or Escape, and lets go of its watcher',
    async () => {
      // A watcher behind the tour, as a dialog it's in has.
      let behind = 0;
      const stop = nuiOnCloseRequest(() => behind++);
      try {
        const { host, root, dialog, settle } = await setup();
        await toInteractiveStep(root, settle);
        await userEvent.keyboard('{Escape}');
        await settle();
        expect(host.events).toEqual(['dismissed 1']);
        expect(behind).toBe(0);

        // Back to a modal step: its dialog takes close requests itself.
        host.step.set(0);
        await toInteractiveStep(root, settle);
        dialog.querySelector<HTMLButtonElement>('.nui-tour-footer button')!.click();
        await settle();
        expect(dialog.matches(':modal')).toBe(true);
        await closeRequest();
        await settle();
        expect(host.events).toEqual(['dismissed 1', 'dismissed 0']);
        expect(host.open()).toBe(false);

        await closeRequest();
        expect(behind).toBe(1);
        expect(host.events).toEqual(['dismissed 1', 'dismissed 0']);
      } finally {
        stop();
      }
    },
  );

  it('ends on Escape alone on an interactive step where the browser has no CloseWatcher', async () => {
    await withoutCloseWatcher(async () => {
      const { host, root, dialog, settle } = await setup();
      await toInteractiveStep(root, settle);

      await closeRequest();
      await settle();
      expect(dialog.matches(':popover-open')).toBe(true);
      expect(host.events).toEqual([]);
      await userEvent.keyboard('{Escape}');
      await settle();
      expect(host.events).toEqual(['dismissed 1']);
    });
  });
});
