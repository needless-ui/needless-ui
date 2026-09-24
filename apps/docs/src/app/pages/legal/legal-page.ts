import { Component, computed, effect, inject, input } from '@angular/core';
import { I18n } from '../../i18n/i18n';
import { Seo } from '../../seo/seo';
import { InAppLinks } from '../../shared/in-app-links';
import { OPERATOR } from '../../site';

/** The legal notice and the privacy policy; the route's data picks which one. */
@Component({
  selector: 'docs-legal-page',
  imports: [InAppLinks],
  template: `
    @let legal = i18n.t().legal;
    <div class="container page">
      <header class="page-header">
        <h1>{{ legal[doc()].title }}</h1>
        @if (i18n.locale() !== 'en') {
          <p class="legal-note">{{ legal.translationNote }}</p>
        }
      </header>
      <article class="doc-article prose" docsInAppLinks>
        @if (doc() === 'notice') {
          <h2 id="operator">{{ legal.notice.operator }}</h2>
          <dl class="legal-facts">
            <dt>{{ legal.labels.name }}</dt>
            <dd>{{ operator.name }}, {{ legal.notice.legalForm }}</dd>
            <dt>{{ legal.labels.address }}</dt>
            <dd>
              {{ operator.street }}<br />{{ operator.postcode }} {{ operator.city }}<br />{{
                legal.notice.country
              }}
            </dd>
            <dt>{{ legal.labels.email }}</dt>
            <dd>
              <a [href]="'mailto:' + operator.email">{{ operator.email }}</a>
            </dd>
          </dl>
          <h2 id="register">{{ legal.notice.register }}</h2>
          <p>{{ legal.notice.registerEntry }}</p>
          <dl class="legal-facts">
            <dt>CH-ID</dt>
            <dd>{{ operator.chId }}</dd>
            <dt>{{ legal.labels.uid }}</dt>
            <dd>{{ operator.uid }}</dd>
            <dt>{{ legal.labels.vat }}</dt>
            <dd>{{ operator.uid }} {{ legal.notice.vatSuffix }}</dd>
          </dl>
        }
        @for (block of blocks(); track $index) {
          @switch (block.kind) {
            @case ('p') {
              <p [innerHTML]="block.html"></p>
            }
            @case ('h2') {
              <h2 [id]="block.id">{{ block.text }}</h2>
            }
          }
        }
        @if (doc() === 'privacy') {
          <p class="legal-updated">{{ legal.privacy.updated }}</p>
        }
      </article>
    </div>
  `,
})
export class LegalPage {
  readonly doc = input.required<'notice' | 'privacy'>();

  protected readonly i18n = inject(I18n);
  protected readonly operator = OPERATOR;

  /** The prose, with `{email}` turned into a link to the operator's address. */
  protected readonly blocks = computed(() => {
    const email = `<a href="mailto:${OPERATOR.email}">${OPERATOR.email}</a>`;
    return this.i18n
      .t()
      .legal[this.doc()].blocks.map((block) =>
        block.kind === 'p' ? { ...block, html: block.html.replaceAll('{email}', email) } : block,
      );
  });

  constructor() {
    const seo = inject(Seo);
    effect(() => {
      const page = this.i18n.t().legal[this.doc()];
      const path = this.doc() === 'notice' ? '/legal' : '/privacy';
      seo.set({
        title: page.title,
        description: page.description,
        path,
        type: 'page',
        breadcrumbs: [{ name: page.title, path }],
      });
    });
  }
}
