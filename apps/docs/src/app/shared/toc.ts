import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../i18n/i18n';

export interface TocItem {
  id: string;
  label: string;
}

/** "On this page": links to the page's own sections. */
@Component({
  selector: 'docs-toc',
  imports: [RouterLink],
  template: `
    @if (items().length) {
      <nav class="toc" aria-labelledby="toc-title">
        <p class="toc-title" id="toc-title">{{ i18n.t().components.onThisPage }}</p>
        <ul>
          @for (item of items(); track item.id) {
            <li>
              <a [routerLink]="[]" [fragment]="item.id">{{ item.label }}</a>
            </li>
          }
        </ul>
      </nav>
    }
  `,
})
export class Toc {
  readonly items = input.required<TocItem[]>();
  protected readonly i18n = inject(I18n);
}
