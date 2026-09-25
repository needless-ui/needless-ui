import { inject, Pipe, type PipeTransform } from '@angular/core';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';

/**
 * Marks the site's own HTML (the message files and the code highlighted at build
 * time) as safe, so hydration doesn't parse and sanitize every paragraph again.
 * On a phone that parsing costs a long task on text-heavy pages. Never use it on
 * anything a visitor typed or a server sent.
 */
@Pipe({ name: 'trusted' })
export class TrustedHtml implements PipeTransform {
  private readonly sanitizer = inject(DomSanitizer);

  transform(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
