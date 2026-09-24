import { Component, computed, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { COMPONENT_IDS, isComponentId } from '../../docs/ids';
import { I18n } from '../../i18n/i18n';
import { NotFoundPage } from '../not-found/not-found-page';

/** Shell of a component's docs: sidenav, title, tabs. Sections render in the outlet. */
@Component({
  selector: 'docs-component-page',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NotFoundPage],
  template: `
    @let page = i18n.t().components;
    @if (componentId(); as id) {
      <div class="docs-layout">
        <nav class="sidenav" [attr.aria-label]="page.sidenavLabel">
          <p class="sidenav-title">{{ page.sidenavLabel }}</p>
          <ul>
            @for (other of ids; track other) {
              <li>
                <a
                  [routerLink]="i18n.link('/components/' + other)"
                  routerLinkActive="active"
                  ariaCurrentWhenActive="page"
                  >{{ page.items[other].name }}</a
                >
              </li>
            }
          </ul>
        </nav>

        <div class="docs-content">
          <header class="page-header">
            <p class="eyebrow">
              <a [routerLink]="i18n.link('/components')">{{ page.title }}</a>
            </p>
            <h1>{{ page.items[id].name }}</h1>
            <p class="lead">{{ page.items[id].summary }}</p>
            <nav class="tabs" [attr.aria-label]="page.tabsLabel">
              <a
                [routerLink]="base()"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                ariaCurrentWhenActive="page"
                >{{ page.tabs.overview }}</a
              >
              <a
                [routerLink]="base() + '/api'"
                routerLinkActive="active"
                ariaCurrentWhenActive="page"
                >{{ page.tabs.api }}</a
              >
              <a
                [routerLink]="base() + '/accessibility'"
                routerLinkActive="active"
                ariaCurrentWhenActive="page"
                >{{ page.tabs.accessibility }}</a
              >
            </nav>
          </header>
          <router-outlet />
        </div>
      </div>
    } @else {
      <docs-not-found-page />
    }
  `,
})
export class ComponentPage {
  readonly id = input.required<string>();

  protected readonly i18n = inject(I18n);
  protected readonly ids = COMPONENT_IDS;
  protected readonly componentId = computed(() => {
    const id = this.id();
    return isComponentId(id) ? id : null;
  });
  protected readonly base = computed(() => this.i18n.link(`/components/${this.id()}`));
}
