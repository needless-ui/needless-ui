import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPONENT_IDS } from '../../docs/ids';
import { I18n } from '../../i18n/i18n';
import { Seo } from '../../seo/seo';
import { ComponentPreview } from '../../shared/component-preview';

/** Every component as a card, like Material's categories page. */
@Component({
  selector: 'docs-components-page',
  imports: [RouterLink, ComponentPreview],
  template: `
    @let page = i18n.t().components;
    <div class="container page">
      <header class="page-header">
        <h1>{{ page.title }}</h1>
        <p class="lead">{{ page.intro }}</p>
      </header>
      <ul class="card-grid">
        @for (id of ids; track id) {
          @let item = page.items[id];
          <li class="card">
            <docs-preview class="card-preview" [id]="id" />
            <div class="card-body">
              <h2>
                <a [routerLink]="i18n.link('/components/' + id)">{{ item.name }}</a>
              </h2>
              <p>{{ item.summary }}</p>
            </div>
          </li>
        }
      </ul>
    </div>
  `,
})
export class ComponentsPage {
  protected readonly i18n = inject(I18n);
  protected readonly ids = COMPONENT_IDS;

  constructor() {
    const seo = inject(Seo);
    effect(() => {
      const page = this.i18n.t().components;
      seo.set({
        title: page.title,
        description: page.description,
        path: '/components',
        breadcrumbs: [{ name: page.title, path: '/components' }],
      });
    });
  }
}
