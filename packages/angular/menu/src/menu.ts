import { MENU_COMPONENT, Menu, MenuBar, MenuItem, MenuTrigger } from '@angular/aria/menu';
import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  afterRenderEffect,
  DestroyRef,
  Directive,
  DOCUMENT,
  effect,
  ElementRef,
  inject,
  input,
  output,
  PLATFORM_ID,
} from '@angular/core';
import { nuiOnCloseRequest, NuiPersonality } from '@needless-ui/angular';
import { positionMenu } from './position';

const VIEWPORT_MARGIN = 8;

/**
 * Opens a menu. Pass the menu's `ngMenu` reference:
 *
 * ```html
 * <button nuiButton [nuiMenuTrigger]="actions">Actions</button>
 *
 * <div nuiMenu #actions="ngMenu">
 *   <div nuiMenuItem value="rename" (selected)="rename()">Rename</div>
 *   <div nuiMenuItem value="delete" tone="danger" (selected)="remove()">Delete</div>
 * </div>
 * ```
 *
 * Keyboard, focus and ARIA behavior come from Angular Aria's `MenuTrigger`:
 * Enter, Space or ↓ open the menu on its first item, ↑ on its last, and Escape
 * closes it and returns focus here.
 */
@Directive({
  selector: '[nuiMenuTrigger]',
  exportAs: 'nuiMenuTrigger',
  hostDirectives: [{ directive: MenuTrigger, inputs: ['menu: nuiMenuTrigger'] }],
  host: { '(click)': 'onClick()' },
})
export class NuiMenuTrigger {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  /**
   * Safari doesn't focus a button it clicks. Focused, the trigger hands focus
   * on to the menu as it opens, so its keys work after a click too.
   */
  protected onClick(): void {
    if (this.element.ownerDocument.activeElement !== this.element) {
      this.element.focus({ preventScroll: true });
    }
  }
}

/**
 * A menu of actions. It renders as a popover in the top layer, placed next to its
 * trigger (or beside its parent item, for a submenu), and it stays inside the
 * viewport while the page scrolls or resizes. Android's back gesture closes the
 * innermost open menu, where the browser has the CloseWatcher API.
 *
 * The `ngMenu` export is the Angular Aria `Menu` that triggers and `[submenu]` take.
 *
 * `enter`, `motion` and `spring` set how it arrives, growing out of the side it
 * opens on; `corners`, `radius` and `density` how it looks. Submenus inherit them.
 */
@Directive({
  selector: '[nuiMenu]',
  hostDirectives: [
    {
      directive: Menu,
      inputs: ['wrap', 'typeaheadDelay', 'disabled'],
      outputs: ['itemSelected'],
    },
    {
      directive: NuiPersonality,
      inputs: ['enter', 'motion', 'spring', 'corners', 'radius', 'density'],
    },
  ],
  host: { class: 'nui-menu', popover: 'manual' },
})
export class NuiMenu {
  private readonly menu = inject(Menu);
  private readonly document = inject(DOCUMENT);

  constructor() {
    const element = this.menu.element;
    // Server DOMs have a window without animation frames; follow the page only in browsers.
    const view = isPlatformBrowser(inject(PLATFORM_ID)) ? this.document.defaultView : null;
    let shown = false;
    let frame = 0;
    let unwatch: (() => void) | null = null;

    // Focus leaving the menu closes it. So does a press anywhere else, for touch
    // screens: a tapped trigger doesn't always take focus, and then focus never
    // enters the menu to leave it.
    const onPress = (event: PointerEvent) => {
      const target = event.target as Node;
      const opener = this.menu.parent()?.element;
      if (this.menu.element.contains(target) || opener?.contains(target)) return;
      this.menu.close();
    };

    const reposition = () => {
      view?.cancelAnimationFrame(frame);
      frame = view?.requestAnimationFrame(() => this.position()) ?? 0;
    };
    const follow = (on: boolean) => {
      // Submenus close with the menu they open from (a menubar's menus are roots).
      const root = !this.menu.parent()?.element.closest('.nui-menu');
      if (on) {
        view?.addEventListener('resize', reposition);
        view?.addEventListener('scroll', reposition, { capture: true, passive: true });
        if (root) this.document.addEventListener('pointerdown', onPress, true);
      } else {
        view?.removeEventListener('resize', reposition);
        view?.removeEventListener('scroll', reposition, { capture: true });
        this.document.removeEventListener('pointerdown', onPress, true);
      }
    };

    afterRenderEffect(() => {
      const visible = this.menu.visible();
      if (visible === shown) return;
      shown = visible;
      if (visible) {
        element.showPopover?.();
        this.position();
        this.focusActiveItem();
        follow(true);
        // A menu without a trigger or item to open it never closes.
        if (this.menu.parent()) unwatch = nuiOnCloseRequest(() => this.onCloseRequest());
      } else {
        unwatch?.();
        unwatch = null;
        follow(false);
        element.hidePopover?.();
      }
    });

    inject(DestroyRef).onDestroy(() => {
      follow(false);
      unwatch?.();
      view?.cancelAnimationFrame(frame);
    });
  }

  /**
   * A close request (Android's back gesture, or an Escape nothing else handled)
   * goes to the innermost open menu, and closes only that one. A submenu closes
   * as the collapse key closes it, focus back on its item, and the menu it opens
   * from stays open. A menu closes as Escape closes it, focus back on its trigger
   * (or as its menubar closes it). An Escape pressed in the menu or on its trigger
   * never gets here: Angular Aria prevents the key's default, so no watcher sees
   * it and nothing closes twice.
   */
  private onCloseRequest(): void {
    const parent = this.menu.parent();
    if (parent instanceof MenuTrigger) {
      parent.close();
      parent.element.focus();
    } else if (parent?.parent instanceof MenuBar) {
      parent.parent.close();
    } else if (parent) {
      parent.close();
      parent.element.focus();
    }
  }

  /**
   * Aria picks the item to focus (first, last, or the one typed) while the menu
   * is still hidden, when focusing can't work. Once the popover is showing, move
   * focus there, but only if it's still on the trigger or parent item that
   * opened the menu, so hover-opened submenus don't steal focus.
   */
  private focusActiveItem(): void {
    const opener = this.menu.parent()?.element;
    if (!opener || this.document.activeElement !== opener) return;
    this.menu.element
      .querySelector<HTMLElement>(':scope > [data-active="true"]')
      ?.focus({ preventScroll: true });
  }

  private position(): void {
    const parent = this.menu.parent();
    const root = this.document.documentElement;
    if (!parent) return;

    const element = this.menu.element;
    element.style.maxHeight = '';
    const anchor = parent.element.getBoundingClientRect();
    const isSubmenu = parent instanceof MenuItem;
    const style = getComputedStyle(element);
    // Shifting a submenu up by its border and padding lines up its first item with the parent item.
    const inset = parseFloat(style.borderTopWidth) + parseFloat(style.paddingTop);
    const { top, left, maxHeight, side } = positionMenu({
      anchor: { top: anchor.top, left: anchor.left, width: anchor.width, height: anchor.height },
      menu: { width: element.offsetWidth, height: element.offsetHeight },
      viewport: { width: root.clientWidth, height: root.clientHeight },
      placement: isSubmenu ? 'beside' : 'below',
      direction: this.menu.textDirection(),
      offset: isSubmenu ? 2 : 4,
      crossOffset: isSubmenu ? -inset : 0,
      margin: VIEWPORT_MARGIN,
    });
    element.style.top = `${top}px`;
    element.style.left = `${left}px`;
    element.style.maxHeight = `${maxHeight}px`;
    element.dataset['side'] = side;
  }
}

/**
 * An item in a `nuiMenu`. Give it a `value` that's unique across the whole menu
 * tree: the root menu's `(itemSelected)` emits it (for submenu items too), and so
 * does the item's own `(selected)`.
 *
 * For checkable items set `role="menuitemcheckbox"` or `role="menuitemradio"` and
 * bind `[checked]`; the menu shows the indicator and announces the state.
 */
@Directive({
  selector: '[nuiMenuItem]',
  hostDirectives: [
    {
      directive: MenuItem,
      inputs: ['value', 'disabled', 'submenu', 'role', 'searchTerm'],
    },
  ],
  host: {
    class: 'nui-menu-item',
    '[attr.data-tone]': 'tone() === "danger" ? "danger" : null',
    '[attr.aria-checked]': 'checked() ?? null',
  },
})
export class NuiMenuItem<V = unknown> {
  /** `danger` for destructive actions. */
  readonly tone = input<'neutral' | 'danger'>('neutral');
  /** Checked state of a `menuitemcheckbox` or `menuitemradio`. */
  readonly checked = input<boolean | undefined>(undefined);
  /** Emits the item's value when it's chosen with the mouse or keyboard. */
  readonly selected = output<V>();

  private readonly item = inject<MenuItem<V>>(MenuItem);

  constructor() {
    // Aria reports every choice in a menu tree through the root menu (or menubar),
    // never through submenus, so listen there. The root is found through signals
    // and the subscription moves if it changes.
    const menu = inject<Menu<V> | MenuBar<V>>(MENU_COMPONENT, { optional: true });
    if (menu) {
      effect((onCleanup) => {
        const subscription = selectionRoot(menu).itemSelected.subscribe((value) => {
          if (value !== undefined && value === this.item.value()) this.selected.emit(value);
        });
        onCleanup(() => subscription.unsubscribe());
      });
    }

    // Typeahead matches the visible label unless a searchTerm is bound.
    afterNextRender(() => {
      if (!this.item.searchTerm()) {
        this.item.searchTerm.set(this.item.element.textContent?.trim() ?? '');
      }
    });
  }
}

/** Walks up from a (sub)menu to the menu or menubar that emits `itemSelected`. */
function selectionRoot<V>(menu: Menu<V> | MenuBar<V>): Menu<V> | MenuBar<V> {
  let current = menu;
  while (current instanceof Menu) {
    const parent = current.parent();
    if (!(parent instanceof MenuItem) || !parent.parent) return current;
    current = parent.parent;
  }
  return current;
}

/** A line between groups of menu items. */
@Directive({
  selector: '[nuiMenuSeparator]',
  host: { class: 'nui-menu-separator', role: 'separator' },
})
export class NuiMenuSeparator {}

/** A keyboard shortcut hint, aligned to the end of a menu item. */
@Directive({
  selector: '[nuiMenuShortcut]',
  host: { class: 'nui-menu-shortcut' },
})
export class NuiMenuShortcut {}
