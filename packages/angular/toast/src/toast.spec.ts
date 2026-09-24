import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { userEvent } from 'vitest/browser';
import { NuiToaster, NuiToasterRegion } from './toast';

@Component({
  imports: [NuiToasterRegion],
  template: `<nui-toaster position="top-end" />`,
})
class Host {}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function setup() {
  const fixture = TestBed.createComponent(Host);
  await fixture.whenStable();
  const region: HTMLElement = fixture.nativeElement.querySelector('nui-toaster');
  const settle = async () => {
    await fixture.whenStable();
    await new Promise((resolve) => requestAnimationFrame(resolve));
  };
  return {
    toaster: TestBed.inject(NuiToaster),
    region,
    settle,
    toasts: () =>
      Array.from(region.querySelectorAll<HTMLElement>('.nui-toast:not(.nui-toast-leave)')),
  };
}

describe('NuiToaster', () => {
  it('renders toasts newest first, in a labelled region in the top layer', async () => {
    const { toaster, region, toasts, settle } = await setup();
    toaster.show('First');
    toaster.success('Second', { description: 'All saved.' });
    await settle();

    expect(region.getAttribute('role')).toBe('region');
    expect(region.getAttribute('aria-label')).toBe('Notifications (Alt+T)');
    expect(region.dataset['position']).toBe('top-end');
    expect(region.matches(':popover-open')).toBe(true);
    const [second, first] = toasts();
    expect(second.textContent).toContain('All saved.');
    expect(second.dataset['tone']).toBe('success');
    expect(second.style.getPropertyValue('--_index')).toBe('0');
    expect(first.dataset['tone']).toBeUndefined();
    expect(first.style.getPropertyValue('--_index')).toBe('1');
  });

  it('announces each toast, assertively for danger', async () => {
    const { toaster } = await setup();
    const announce = vi.spyOn(TestBed.inject(LiveAnnouncer), 'announce').mockResolvedValue();
    toaster.show({ title: 'Saved', description: 'Everything is up to date' });
    toaster.danger('Could not save');
    expect(announce).toHaveBeenNthCalledWith(1, 'Saved. Everything is up to date', 'polite');
    expect(announce).toHaveBeenNthCalledWith(2, 'Could not save', 'assertive');
  });

  it('leaves after its duration, but waits while the stack is hovered', async () => {
    const { toaster, region, settle } = await setup();
    toaster.show({ title: 'Brief', duration: 80 });
    await settle();
    region.dispatchEvent(new PointerEvent('pointerenter'));
    await settle();
    await wait(160);
    expect(toaster.toasts()).toHaveLength(1);
    expect(region.hasAttribute('data-paused')).toBe(true);

    region.dispatchEvent(new PointerEvent('pointerleave'));
    await settle();
    await wait(160);
    expect(toaster.toasts()).toHaveLength(0);
  });

  it('turns a promise toast into its result, in place', async () => {
    const { toaster, toasts, settle } = await setup();
    let finish!: (url: string) => void;
    const upload = toaster.promise(new Promise<string>((resolve) => (finish = resolve)), {
      loading: 'Uploading…',
      success: (url) => `Uploaded ${url}`,
      danger: 'Upload failed',
    });
    await settle();
    expect(toasts()[0].hasAttribute('data-loading')).toBe(true);
    expect(toaster.toasts()[0].duration).toBe(Infinity);

    finish('cat.png');
    await upload;
    await settle();
    expect(toasts()).toHaveLength(1);
    expect(toasts()[0].textContent).toContain('Uploaded cat.png');
    expect(toasts()[0].dataset['tone']).toBe('success');
    expect(toasts()[0].hasAttribute('data-loading')).toBe(false);
  });

  it('runs its action and closes', async () => {
    const { toaster, toasts, settle } = await setup();
    const undo = vi.fn();
    toaster.show({ title: 'Deleted', action: { label: 'Undo', run: undo } });
    await settle();
    toasts()[0].querySelector<HTMLButtonElement>('.nui-button')!.click();
    await settle();
    expect(undo).toHaveBeenCalledOnce();
    expect(toaster.toasts()).toHaveLength(0);
  });

  it('takes focus with Alt+T, and Escape dismisses the focused toast', async () => {
    const { toaster, toasts, settle } = await setup();
    toaster.show('Older');
    toaster.show('Newer');
    await settle();
    const opener = document.createElement('button');
    document.body.append(opener);
    opener.focus();

    await userEvent.keyboard('{Alt>}t{/Alt}');
    expect(document.activeElement).toBe(toasts()[0]);

    await userEvent.keyboard('{Escape}');
    await settle();
    expect(toaster.toasts().map((toast) => toast.title)).toEqual(['Older']);
    expect(document.activeElement).toBe(toasts()[0]);

    await userEvent.keyboard('{Escape}');
    await settle();
    expect(toaster.toasts()).toHaveLength(0);
    expect(document.activeElement).toBe(opener);
    opener.remove();
  });
});
