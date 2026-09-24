import { booleanAttribute, DestroyRef, Directive, ElementRef, inject, input } from '@angular/core';
import type { NuiSize, NuiTone } from '@needless-ui/angular';

/** How the button is filled. Mirrors `data-variant` in @needless-ui/css. */
export type NuiButtonVariant = 'solid' | 'soft' | 'outline' | 'ghost';

/**
 * Styles a native `<button>` or `<a>` as a Needless UI button. The element keeps
 * its native semantics, keyboard behavior and form participation; the directive
 * reflects its inputs to the data attributes that `@needless-ui/css` styles.
 *
 * ```html
 * <button nuiButton variant="soft" tone="danger" (click)="remove()">Delete</button>
 * <a nuiButton variant="outline" routerLink="/docs">Read the docs</a>
 * ```
 *
 * `disabled` works on both elements. Anchors can't be disabled natively, so a
 * disabled anchor gets `aria-disabled="true"` and its clicks are stopped before
 * any other listener on it (including `routerLink`) runs.
 */
@Directive({
  selector: 'button[nuiButton], a[nuiButton]',
  exportAs: 'nuiButton',
  host: {
    class: 'nui-button',
    '[attr.data-variant]': 'variant()',
    '[attr.data-tone]': 'tone()',
    '[attr.data-size]': 'size()',
    '[attr.disabled]': 'isAnchor || !disabled() ? null : ""',
    '[attr.aria-disabled]': 'isAnchor && disabled() ? "true" : null',
  },
})
export class NuiButton {
  /** Fill style. */
  readonly variant = input<NuiButtonVariant>('solid');
  /** Color palette. */
  readonly tone = input<NuiTone>('accent');
  /** Height, padding and font size. */
  readonly size = input<NuiSize>('md');
  /** Disables the button. On anchors, sets `aria-disabled` and blocks activation. */
  readonly disabled = input(false, { transform: booleanAttribute });

  protected readonly isAnchor: boolean;

  constructor() {
    const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    this.isAnchor = element.tagName === 'A';

    if (this.isAnchor) {
      // A capture listener on the target runs before its bubble listeners,
      // so this wins over routerLink and any (click) handler.
      const blockWhenDisabled = (event: Event) => {
        if (this.disabled()) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      };
      element.addEventListener('click', blockWhenDisabled, { capture: true });
      inject(DestroyRef).onDestroy(() =>
        element.removeEventListener('click', blockWhenDisabled, { capture: true }),
      );
    }
  }
}
