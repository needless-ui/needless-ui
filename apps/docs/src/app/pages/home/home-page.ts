import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NuiButton } from '@needless-ui/angular/button';
import { COMPONENT_IDS } from '../../docs/ids';
import { I18n } from '../../i18n/i18n';
import { Seo } from '../../seo/seo';
import { CodeBlock } from '../../shared/code-block';
import { InAppLinks } from '../../shared/in-app-links';
import { ComponentPreview } from '../../shared/component-preview';

@Component({
  selector: 'docs-home-page',
  imports: [RouterLink, NuiButton, CodeBlock, ComponentPreview, InAppLinks],
  template: `
    @let home = i18n.t().home;
    <div class="home">
      <section class="hero container" aria-labelledby="hero-title">
        <div class="hero-text">
          <p class="eyebrow">{{ home.eyebrow }}</p>
          <h1 id="hero-title">{{ home.heading }}</h1>
          <p class="hero-lead" [innerHTML]="home.lead"></p>
          <div class="hero-actions">
            <a nuiButton size="lg" [routerLink]="i18n.link('/guides/getting-started')">
              {{ home.getStarted }}
            </a>
            <a
              nuiButton
              size="lg"
              variant="outline"
              tone="neutral"
              [routerLink]="i18n.link('/components')"
            >
              {{ home.browse }}
            </a>
          </div>
        </div>
        <div class="hero-showcase">
          @for (id of components; track id) {
            <docs-preview [id]="id" />
          }
        </div>
      </section>

      <section class="container home-section" aria-labelledby="features-title">
        <h2 id="features-title">{{ home.featuresTitle }}</h2>
        <ul class="features" docsInAppLinks>
          @for (feature of home.features; track feature.title) {
            <li class="feature">
              <h3>{{ feature.title }}</h3>
              <p [innerHTML]="feature.text"></p>
            </li>
          }
        </ul>
      </section>

      <section class="container home-section" aria-labelledby="code-title">
        <h2 id="code-title">{{ home.codeTitle }}</h2>
        <p class="section-lead">{{ home.codeText }}</p>
        <div class="home-code">
          <docs-code key="snippets/install.sh" />
          <docs-code key="snippets/usage.ts" />
        </div>
      </section>
    </div>
  `,
})
export class HomePage {
  protected readonly i18n = inject(I18n);
  protected readonly components = COMPONENT_IDS;

  constructor() {
    const seo = inject(Seo);
    effect(() => {
      const home = this.i18n.t().home;
      seo.set({
        title: home.title,
        fullTitle: true,
        description: home.description,
        path: '/',
        type: 'website',
      });
    });
  }
}
