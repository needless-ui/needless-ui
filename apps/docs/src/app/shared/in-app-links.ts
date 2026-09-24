import { Directive, inject } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Routes clicks on plain same-site links (inside translated prose, which can't
 * use `routerLink`) through the router instead of reloading the page.
 */
@Directive({
  selector: '[docsInAppLinks]',
  host: { '(click)': 'follow($event)' },
})
export class InAppLinks {
  private readonly router = inject(Router);

  protected follow(event: MouseEvent): void {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    const anchor = (event.target as Element).closest('a');
    const href = anchor?.getAttribute('href');
    if (!href?.startsWith('/') || anchor?.target) return;
    event.preventDefault();
    void this.router.navigateByUrl(href);
  }
}
