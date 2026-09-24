import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NuiButton } from '@needless-ui/angular/button';
import { I18n } from '../../i18n/i18n';
import { Seo } from '../../seo/seo';

@Component({
  selector: 'docs-not-found-page',
  imports: [RouterLink, NuiButton],
  template: `
    @let page = i18n.t().notFound;
    <div class="container page not-found">
      <p class="not-found-code" aria-hidden="true">404</p>
      <h1>{{ page.title }}</h1>
      <p class="lead">{{ page.text }}</p>
      <div class="hero-actions">
        <a nuiButton [routerLink]="i18n.link('/')">{{ page.home }}</a>
        <a nuiButton variant="outline" tone="neutral" [routerLink]="i18n.link('/components')">
          {{ page.components }}
        </a>
      </div>
    </div>
  `,
})
export class NotFoundPage {
  protected readonly i18n = inject(I18n);

  constructor() {
    const seo = inject(Seo);
    effect(() => {
      const page = this.i18n.t().notFound;
      seo.set({ title: page.title, description: page.description, path: '/404', noindex: true });
    });
  }
}
