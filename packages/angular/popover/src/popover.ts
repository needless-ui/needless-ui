import { _IdGenerator } from '@angular/cdk/a11y';
import { isPlatformBrowser } from '@angular/common';
import {
  booleanAttribute,
  DestroyRef,
  Directive,
  DOCUMENT,
  ElementRef,
  HostAttributeToken,
  inject,
  input,
  numberAttribute,
  output,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { type NuiAlign, nuiFollow, NuiPersonality, type NuiSide } from '@needless-ui/angular';

const PERSONALITY = {
  directive: NuiPersonality,
  inputs: ['enter', 'motion', 'spring', 'corners', 'radius', 'density'],
};

/** What placed floating elements share: an id, a side, an anchor to follow. */
@Directive()
abstract class Floating {
  /** Side of the anchor it opens on. Start and end follow the text direction. */
  readonly side = input<NuiSide>('bottom');
  readonly align = input<NuiAlign>('start');
  /** Gap from the anchor, in pixels. */
  readonly offset = input(8, { transform: numberAttribute });
  /** Draws an arrow pointing at the anchor. */
  readonly arrow = input(false, { transform: booleanAttribute });
  /** Emits when it opens or closes. */
  readonly openChange = output<boolean>();
  /** Whether it's open. */
  readonly open = signal(false);

  readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  readonly id =
    inject(new HostAttributeToken('id'), { optional: true }) ??
    inject(_IdGenerator).getId('nui-popover-');
  protected readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  protected anchor: HTMLElement | null = null;
  private stop: (() => void) | null = null;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.stop?.());
  }

  /** @internal Follows the native popover's toggle event. */
  protected onToggle(event: ToggleEvent): void {
    const open = event.newState === 'open';
    this.stop?.();
    this.stop = null;
    if (open && this.anchor) {
      this.stop = nuiFollow(this.anchor, this.element, {
        side: this.side(),
        align: this.align(),
        offset: this.offset(),
      });
    }
    if (open !== this.open()) {
      this.open.set(open);
      this.openChange.emit(open);
    }
  }
}

/**
 * A native popover (`popover="auto"`) placed next to the element that opened it:
 * a non-modal dialog for interactive content. The browser closes it on Escape and
 * outside clicks, returns focus, and puts it right after its trigger in the tab
 * order.
 *
 * ```html
 * <button nuiButton [nuiPopoverTrigger]="filters">Filters</button>
 * <div nuiPopover #filters="nuiPopover" aria-label="Filters" arrow>…</div>
 * ```
 */
@Directive({
  selector: '[nuiPopover]',
  exportAs: 'nuiPopover',
  hostDirectives: [PERSONALITY],
  host: {
    class: 'nui-popover',
    popover: 'auto',
    role: 'dialog',
    '[id]': 'id',
    '[attr.data-arrow]': 'arrow() ? "" : null',
    '(toggle)': 'onToggle($event)',
  },
})
export class NuiPopover extends Floating {
  /** Opens next to `anchor`. */
  show(anchor: HTMLElement): void {
    this.anchor = anchor;
    if (this.browser && !this.element.matches(':popover-open')) this.element.showPopover();
  }

  hide(): void {
    if (this.browser && this.element.matches(':popover-open')) this.element.hidePopover();
  }

  /** @internal Called by the trigger before the browser toggles the popover. */
  setAnchor(anchor: HTMLElement): void {
    this.anchor = anchor;
  }
}

/**
 * Opens a `nuiPopover`. It uses the native `popovertarget`, so the browser handles
 * the toggle, `aria-expanded` and focus order; this only tells the popover where
 * to appear.
 */
@Directive({
  selector: 'button[nuiPopoverTrigger]',
  host: {
    '[attr.popovertarget]': 'popover().id',
    'aria-haspopup': 'dialog',
    '(click)': 'popover().setAnchor(element)',
  },
})
export class NuiPopoverTrigger {
  readonly popover = input.required<NuiPopover>({ alias: 'nuiPopoverTrigger' });
  protected readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
}

/**
 * A rich tooltip: text that describes its trigger, shown after a short hover or
 * on focus. It stays open while the pointer travels to it (through the triangle
 * between the pointer and the card), and Escape hides it without moving focus or
 * the pointer (WCAG 1.4.13). Keep it free of controls; use a popover for those.
 *
 * ```html
 * <a href="/u/ada" [nuiHovercardTrigger]="ada">@ada</a>
 * <div nuiHovercard #ada="nuiHovercard">Ada Lovelace, first programmer.</div>
 * ```
 */
@Directive({
  selector: '[nuiHovercard]',
  exportAs: 'nuiHovercard',
  hostDirectives: [PERSONALITY],
  host: {
    class: 'nui-hovercard',
    popover: 'manual',
    role: 'tooltip',
    '[id]': 'id',
    '[attr.data-arrow]': 'arrow() ? "" : null',
    '(toggle)': 'onToggle($event)',
    '(pointerenter)': 'cancel()',
    '(pointerleave)': 'hideSoon()',
  },
})
export class NuiHovercard extends Floating {
  /** Milliseconds of hovering before it opens. */
  readonly openDelay = input(500, { transform: numberAttribute });
  /** Milliseconds before it closes once the pointer has left. */
  readonly closeDelay = input(300, { transform: numberAttribute });

  private readonly document = inject(DOCUMENT);
  private timer?: ReturnType<typeof setTimeout>;
  private stopTracking?: () => void;

  constructor() {
    super();
    if (!this.browser) return;
    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && this.open()) this.hide();
    };
    this.document.addEventListener('keydown', onKeydown);
    inject(DestroyRef).onDestroy(() => {
      this.document.removeEventListener('keydown', onKeydown);
      this.cancel();
    });
  }

  /** Opens next to `anchor` after `delay` milliseconds (the open delay by default). */
  showSoon(anchor: HTMLElement, delay = this.openDelay()): void {
    this.cancel();
    this.anchor = anchor;
    this.timer = setTimeout(() => this.show(anchor), delay);
  }

  show(anchor: HTMLElement): void {
    this.cancel();
    this.anchor = anchor;
    if (this.browser && !this.element.matches(':popover-open')) this.element.showPopover();
  }

  hide(): void {
    this.cancel();
    if (this.browser && this.element.matches(':popover-open')) this.element.hidePopover();
  }

  /**
   * Closes after the close delay, unless the pointer is on its way to the card:
   * while it stays inside the triangle between where it left and the card's near
   * edge, the card waits.
   */
  hideSoon(from?: PointerEvent): void {
    this.cancel();
    if (from && this.open()) this.trackTowardCard(from.clientX, from.clientY);
    this.timer = setTimeout(() => this.hide(), this.closeDelay());
  }

  cancel(): void {
    clearTimeout(this.timer);
    this.timer = undefined;
    this.stopTracking?.();
    this.stopTracking = undefined;
  }

  private trackTowardCard(x: number, y: number): void {
    const card = this.element.getBoundingClientRect();
    const side = this.element.dataset['side'];
    // The card's edge nearest the pointer, as two corners.
    const edge: [number, number][] =
      side === 'top'
        ? [
            [card.left, card.bottom],
            [card.right, card.bottom],
          ]
        : side === 'left'
          ? [
              [card.right, card.top],
              [card.right, card.bottom],
            ]
          : side === 'right'
            ? [
                [card.left, card.top],
                [card.left, card.bottom],
              ]
            : [
                [card.left, card.top],
                [card.right, card.top],
              ];
    const move = (event: PointerEvent) => {
      if (inTriangle([event.clientX, event.clientY], [x, y], edge[0], edge[1])) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.hide(), this.closeDelay());
      } else {
        this.hide();
      }
    };
    this.document.addEventListener('pointermove', move);
    this.stopTracking = () => this.document.removeEventListener('pointermove', move);
  }
}

/** Whether point p is inside the triangle a, b, c (edges included). */
function inTriangle(
  p: [number, number],
  a: [number, number],
  b: [number, number],
  c: [number, number],
): boolean {
  const sign = (p1: [number, number], p2: [number, number], p3: [number, number]) =>
    (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);
  const d1 = sign(p, a, b);
  const d2 = sign(p, b, c);
  const d3 = sign(p, c, a);
  const negative = d1 < 0 || d2 < 0 || d3 < 0;
  const positive = d1 > 0 || d2 > 0 || d3 > 0;
  return !(negative && positive);
}

/**
 * Shows a `nuiHovercard` on hover (after its delay) and on keyboard focus (at
 * once), and names it as this element's description.
 */
@Directive({
  selector: '[nuiHovercardTrigger]',
  host: {
    '[attr.aria-describedby]': 'card().id',
    '(pointerenter)': 'onEnter($event)',
    '(pointerleave)': 'card().hideSoon($event)',
    '(focus)': 'onFocus()',
    '(blur)': 'card().hideSoon()',
  },
})
export class NuiHovercardTrigger {
  readonly card = input.required<NuiHovercard>({ alias: 'nuiHovercardTrigger' });
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  protected onEnter(event: PointerEvent): void {
    // Touch has no hover; a tap on a link should follow it, not open a card.
    if (event.pointerType === 'touch') return;
    this.card().showSoon(this.element);
  }

  protected onFocus(): void {
    if (this.element.matches(':focus-visible')) this.card().show(this.element);
  }
}
