import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { userEvent } from 'vitest/browser';
import { NuiMenu, NuiMenuItem, NuiMenuSeparator, NuiMenuTrigger } from './menu';

@Component({
  imports: [NuiMenuTrigger, NuiMenu, NuiMenuItem, NuiMenuSeparator],
  template: `
    <button id="trigger" [nuiMenuTrigger]="menu">Actions</button>
    <div nuiMenu #menu="ngMenu" (itemSelected)="picked.set($event)">
      <div nuiMenuItem value="rename" (selected)="renamed.set(renamed() + 1)">Rename</div>
      <div nuiMenuItem value="grid" role="menuitemcheckbox" [checked]="grid()">Show grid</div>
      <div nuiMenuSeparator></div>
      <div nuiMenuItem value="delete" tone="danger">Delete</div>
      <div nuiMenuItem value="more" [submenu]="more">More</div>

      <div nuiMenu #more="ngMenu">
        <div nuiMenuItem value="archive" (selected)="archived.set(true)">Archive</div>
      </div>
    </div>
  `,
})
class Host {
  readonly picked = signal<string | undefined>(undefined);
  readonly renamed = signal(0);
  readonly archived = signal(false);
  readonly grid = signal(true);
}

async function setup() {
  const fixture = TestBed.createComponent(Host);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const trigger = root.querySelector<HTMLButtonElement>('#trigger')!;
  const menu = root.querySelector<HTMLElement>('.nui-menu')!;
  const items = Array.from(root.querySelectorAll<HTMLElement>('.nui-menu-item'));
  const isOpen = () => menu.matches(':popover-open');
  const settle = async () => {
    await fixture.whenStable();
    await new Promise((resolve) => requestAnimationFrame(resolve));
  };
  /** Opens the menu with a click, and waits until focus has moved into it. */
  const clickOpen = async () => {
    await userEvent.click(trigger);
    await expect.poll(() => isOpen() && menu.contains(document.activeElement)).toBe(true);
  };
  return {
    fixture,
    host: fixture.componentInstance,
    trigger,
    menu,
    items,
    isOpen,
    settle,
    clickOpen,
  };
}

describe('NuiMenu', () => {
  it('renders items with their roles, tone and checked state', async () => {
    const { menu, items, trigger } = await setup();
    const [rename, grid, remove] = items;

    expect(menu.getAttribute('role')).toBe('menu');
    expect(rename.getAttribute('role')).toBe('menuitem');
    expect(grid.getAttribute('role')).toBe('menuitemcheckbox');
    expect(grid.getAttribute('aria-checked')).toBe('true');
    expect(rename.hasAttribute('aria-checked')).toBe(false);
    expect(remove.dataset['tone']).toBe('danger');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
  });

  it('opens below the trigger on click and focuses the first item', async () => {
    const { trigger, menu, items, isOpen, settle, clickOpen } = await setup();
    await clickOpen();

    expect(isOpen()).toBe(true);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    expect(document.activeElement).toBe(items[0]);
    expect(menu.getBoundingClientRect().top).toBeGreaterThanOrEqual(
      trigger.getBoundingClientRect().bottom,
    );
    expect(menu.dataset['side']).toBe('bottom');
  });

  it('moves with the arrow keys and selects with Enter', async () => {
    const { host, trigger, items, isOpen, settle } = await setup();
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    await settle();
    expect(document.activeElement).toBe(items[0]);

    await userEvent.keyboard('{ArrowDown}');
    expect(document.activeElement).toBe(items[1]);

    await userEvent.keyboard('{Enter}');
    await settle();
    expect(host.picked()).toBe('grid');
    expect(isOpen()).toBe(false);
  });

  it('opens on the last item with the up arrow', async () => {
    const { trigger, items, settle } = await setup();
    trigger.focus();
    await userEvent.keyboard('{ArrowUp}');
    await settle();
    expect(document.activeElement).toBe(items[3]);
  });

  it('opens submenus with the right arrow and reports their choices through the root', async () => {
    const { host, trigger, items, isOpen, settle, clickOpen } = await setup();
    const [, , , more, archive] = items;
    await clickOpen();

    await userEvent.keyboard('{End}');
    expect(document.activeElement).toBe(more);
    await userEvent.keyboard('{ArrowRight}');
    await settle();
    expect(document.activeElement).toBe(archive);
    expect(archive.getBoundingClientRect().left).toBeGreaterThanOrEqual(
      more.getBoundingClientRect().right,
    );

    await userEvent.keyboard('{Enter}');
    await settle();
    expect(host.picked()).toBe('archive');
    expect(host.archived()).toBe(true);
    expect(isOpen()).toBe(false);
  });

  it('jumps to an item by typing its first letter', async () => {
    const { trigger, items, settle, clickOpen } = await setup();
    await clickOpen();

    await userEvent.keyboard('d');
    expect(document.activeElement).toBe(items[2]);
  });

  it('closes on Escape and returns focus to the trigger', async () => {
    const { trigger, isOpen, settle, clickOpen } = await setup();
    await clickOpen();

    await userEvent.keyboard('{Escape}');
    await settle();
    expect(isOpen()).toBe(false);
    expect(document.activeElement).toBe(trigger);
  });

  it("emits the item's own (selected) output on click", async () => {
    const { host, trigger, items, isOpen, settle, clickOpen } = await setup();
    await clickOpen();

    await userEvent.click(items[0]);
    await settle();
    expect(host.renamed()).toBe(1);
    expect(host.picked()).toBe('rename');
    expect(isOpen()).toBe(false);
  });
});
