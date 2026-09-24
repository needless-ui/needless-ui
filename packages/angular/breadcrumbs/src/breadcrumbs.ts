import { afterNextRender, Directive, ElementRef, inject, input } from '@angular/core';

/**
 * A trail of links to the current page, on a native `<nav>` and list:
 *
 * ```html
 * <nav nuiBreadcrumbs>
 *   <ol>
 *     <li><a routerLink="/">Home</a></li>
 *     <li><a routerLink="/docs">Docs</a></li>
 *     <li><span aria-current="page">Button</span></li>
 *   </ol>
 * </nav>
 * ```
 *
 * CSS draws the separators, mirrored in right-to-left text. A trail longer than
 * its container scrolls sideways and starts scrolled to the end, so the current
 * page is in view.
 */
@Directive({
  selector: 'nav[nuiBreadcrumbs]',
  host: {
    class: 'nui-breadcrumbs',
    '[attr.aria-label]': 'label()',
  },
})
export class NuiBreadcrumbs {
  /** Accessible name of the navigation landmark. */
  readonly label = input('Breadcrumb');

  constructor() {
    const nav = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    afterNextRender(() => {
      const list = nav.querySelector('ol, ul');
      // Negative in right-to-left text, where the end is on the left.
      const rtl = list && nav.ownerDocument.defaultView?.getComputedStyle(list).direction === 'rtl';
      if (list) list.scrollLeft = rtl ? -list.scrollWidth : list.scrollWidth;
    });
  }
}
