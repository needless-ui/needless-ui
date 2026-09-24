import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GUIDE_IDS, isGuideId } from '../../docs/ids';
import { I18n } from '../../i18n/i18n';
import { Seo } from '../../seo/seo';
import { CodeBlock } from '../../shared/code-block';
import { InAppLinks } from '../../shared/in-app-links';
import { NestedThemesDemo } from '../../shared/nested-themes-demo';
import { Toc } from '../../shared/toc';
import { NotFoundPage } from '../not-found/not-found-page';

@Component({
  selector: 'docs-guide-page',
  imports: [
    RouterLink,
    RouterLinkActive,
    CodeBlock,
    InAppLinks,
    NestedThemesDemo,
    Toc,
    NotFoundPage,
  ],
  template: `
    @let guides = i18n.t().guides;
    @if (guide(); as guide) {
      <div class="docs-layout">
        <nav class="sidenav" [attr.aria-label]="guides.title">
          <p class="sidenav-title">{{ guides.title }}</p>
          <ul>
            @for (other of ids; track other) {
              <li>
                <a
                  [routerLink]="i18n.link('/guides/' + other)"
                  routerLinkActive="active"
                  ariaCurrentWhenActive="page"
                  >{{ guides.items[other].title }}</a
                >
              </li>
            }
          </ul>
        </nav>

        <div class="docs-content">
          <header class="page-header">
            <p class="eyebrow">{{ guides.title }}</p>
            <h1>{{ guide.title }}</h1>
          </header>
          <div class="doc-grid">
            <article class="doc-article prose" docsInAppLinks>
              @for (block of guide.blocks; track $index) {
                @switch (block.kind) {
                  @case ('p') {
                    <p [innerHTML]="block.html"></p>
                  }
                  @case ('h2') {
                    <h2 [id]="block.id">{{ block.text }}</h2>
                  }
                  @case ('code') {
                    <docs-code [key]="block.file" />
                  }
                  @case ('demo') {
                    <docs-nested-themes />
                  }
                }
              }
            </article>
            <docs-toc [items]="toc()" />
          </div>
        </div>
      </div>
    } @else {
      <docs-not-found-page />
    }
  `,
})
export class GuidePage {
  readonly id = input.required<string>();

  protected readonly i18n = inject(I18n);
  protected readonly ids = GUIDE_IDS;

  protected readonly guide = computed(() => {
    const id = this.id();
    return isGuideId(id) ? this.i18n.t().guides.items[id] : null;
  });
  protected readonly toc = computed(() =>
    (this.guide()?.blocks ?? []).flatMap((block) =>
      block.kind === 'h2' ? [{ id: block.id, label: block.text }] : [],
    ),
  );

  constructor() {
    const seo = inject(Seo);
    effect(() => {
      const guide = this.guide();
      if (!guide) return;
      const path = `/guides/${this.id()}`;
      seo.set({
        title: guide.title,
        description: guide.description,
        path,
        breadcrumbs: [{ name: guide.title, path }],
      });
    });
  }
}
