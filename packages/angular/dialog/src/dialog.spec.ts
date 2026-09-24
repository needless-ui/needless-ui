import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { userEvent } from 'vitest/browser';
import {
  NuiDialog,
  NuiDialogActions,
  NuiDialogClose,
  NuiDialogDescription,
  NuiDialogTitle,
} from './dialog';

@Component({
  imports: [NuiDialog, NuiDialogTitle, NuiDialogDescription, NuiDialogActions, NuiDialogClose],
  template: `
    <button id="opener" (click)="open.set(true)">Open</button>
    <dialog
      nuiDialog
      [(open)]="open"
      [dismissible]="dismissible()"
      size="sm"
      (closed)="closedWith.set($event)"
    >
      <h2 nuiDialogTitle>Delete project?</h2>
      <p nuiDialogDescription>This can't be undone.</p>
      <div nuiDialogActions>
        <button id="cancel" nuiDialogClose>Cancel</button>
        <button id="confirm" nuiDialogClose="delete">Delete</button>
      </div>
    </dialog>
  `,
})
class Host {
  readonly open = signal(false);
  readonly dismissible = signal(true);
  readonly closedWith = signal<string | null>(null);
}

async function setup() {
  const fixture = TestBed.createComponent(Host);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const dialog = root.querySelector('dialog')!;
  const opener = root.querySelector<HTMLButtonElement>('#opener')!;

  async function openWithMouse() {
    await userEvent.click(opener);
    await fixture.whenStable();
  }
  async function settle() {
    // The native close event arrives in a later task; wait until state has synced.
    await vi.waitFor(() => expect(fixture.componentInstance.open()).toBe(dialog.open));
    await fixture.whenStable();
  }
  return { fixture, host: fixture.componentInstance, root, dialog, opener, openWithMouse, settle };
}

describe('NuiDialog', () => {
  it('opens as a modal and moves focus inside', async () => {
    const { dialog, openWithMouse } = await setup();
    await openWithMouse();

    expect(dialog.open).toBe(true);
    expect(dialog.matches(':modal')).toBe(true);
    expect(dialog.contains(document.activeElement)).toBe(true);
    expect(dialog.dataset['size']).toBe('sm');
  });

  it('is labelled and described by its title and description', async () => {
    const { root, dialog } = await setup();
    const title = root.querySelector('h2')!;
    const description = root.querySelector('p')!;

    expect(title.id).toMatch(/^nui-dialog-title-/);
    expect(dialog.getAttribute('aria-labelledby')).toBe(title.id);
    expect(dialog.getAttribute('aria-describedby')).toBe(description.id);
  });

  it('closes with the value of the clicked close button and syncs [(open)]', async () => {
    const { host, root, openWithMouse, settle } = await setup();
    await openWithMouse();

    await userEvent.click(root.querySelector<HTMLButtonElement>('#confirm')!);
    await settle();

    expect(host.open()).toBe(false);
    expect(host.closedWith()).toBe('delete');
  });

  it('closes on Escape with an empty return value and restores focus', async () => {
    const { host, dialog, opener, openWithMouse, settle } = await setup();
    await openWithMouse();

    await userEvent.keyboard('{Escape}');
    await settle();

    expect(dialog.open).toBe(false);
    expect(host.closedWith()).toBe('');
    expect(document.activeElement).toBe(opener);
  });

  it('ignores Escape and backdrop clicks when not dismissible', async () => {
    const { fixture, host, dialog, openWithMouse, settle } = await setup();
    host.dismissible.set(false);
    await fixture.whenStable();
    await openWithMouse();

    await userEvent.keyboard('{Escape}');
    dispatchBackdropClick(dialog);
    await settle();

    expect(dialog.open).toBe(true);
  });

  it('closes on a click on the backdrop, but not on one inside the dialog', async () => {
    const { host, dialog, root, openWithMouse, settle } = await setup();
    await openWithMouse();

    const box = dialog.getBoundingClientRect();
    const inside = { clientX: box.left + 5, clientY: box.top + 5 };
    dialog.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, ...inside }));
    dialog.dispatchEvent(new MouseEvent('click', { bubbles: true, ...inside }));
    await settle();
    expect(dialog.open).toBe(true);

    dispatchBackdropClick(dialog);
    await settle();
    expect(host.open()).toBe(false);
    expect(root.querySelector('dialog')!.open).toBe(false);
  });

  it('opens and closes when [(open)] changes', async () => {
    const { fixture, host, dialog, settle } = await setup();
    host.open.set(true);
    await fixture.whenStable();
    expect(dialog.open).toBe(true);

    host.open.set(false);
    await settle();
    expect(dialog.open).toBe(false);
  });
});

/** Clicks outside the dialog box land on the dialog element itself (its ::backdrop). */
function dispatchBackdropClick(dialog: HTMLDialogElement): void {
  const box = dialog.getBoundingClientRect();
  const outside = { clientX: box.left - 10, clientY: box.top - 10 };
  dialog.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, ...outside }));
  dialog.dispatchEvent(new MouseEvent('click', { bubbles: true, ...outside }));
}
