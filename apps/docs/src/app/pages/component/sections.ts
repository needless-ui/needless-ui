import { Component, computed, Directive, effect, inject, input, type Type } from '@angular/core';
import { type ComponentId, isComponentId, isReactId } from '../../docs/ids';
import { type ApiEntry, COMPONENT_DOCS, REACT_DOCS, reactApi } from '../../docs/registry';
import { I18n } from '../../i18n/i18n';
import { Seo } from '../../seo/seo';
import { CodeBlock } from '../../shared/code-block';
import { ExampleViewer } from '../../shared/example-viewer';
import { InAppLinks } from '../../shared/in-app-links';
import { Toc } from '../../shared/toc';
import { TrustedHtml } from '../../shared/trusted';
import { NotFoundPage } from '../not-found/not-found-page';

/** `react` is the API tab of a component's React twin, `/components/<id>/api/react`. */
type Section = 'overview' | 'api' | 'accessibility' | 'react';

/** Shared state and SEO for the three tabs of a component page, and React's API tab. */
@Directive()
abstract class ComponentSection {
  readonly id = input.required<string>();

  protected readonly i18n = inject(I18n);
  protected readonly component = computed<ComponentId>(() => {
    const id = this.id();
    return isComponentId(id) ? id : 'button';
  });
  protected readonly doc = computed(() => COMPONENT_DOCS[this.component()]);
  protected readonly text = computed(() => this.i18n.t().components.items[this.component()]);

  protected abstract readonly section: Section;

  constructor() {
    const seo = inject(Seo);
    effect(() => {
      if (!isComponentId(this.id())) return; // the page shows "not found" and sets its own tags
      const page = this.i18n.t().components;
      const text = this.text();
      const id = this.component();
      const base = `/components/${id}`;
      if (this.section === 'react') {
        if (!isReactId(id)) return; // so does a component that isn't in React
        const path = `${base}/api/react`;
        seo.set({
          title: this.i18n.t().react.title(text.name),
          description: this.i18n.t().react.items[id].apiDescription,
          path,
          breadcrumbs: [
            { name: page.title, path: '/components' },
            { name: text.name, path: base },
            { name: page.tabs.api, path: `${base}/api` },
            { name: 'React', path },
          ],
        });
        return;
      }
      const titles = {
        overview: text.title,
        api: page.titles.api(text.name),
        accessibility: page.titles.accessibility(text.name),
      };
      const descriptions = {
        overview: text.description,
        api: text.apiDescription,
        accessibility: text.a11yDescription,
      };
      const path = this.section === 'overview' ? base : `${base}/${this.section}`;
      seo.set({
        title: titles[this.section],
        description: descriptions[this.section],
        path,
        breadcrumbs: [
          { name: page.title, path: '/components' },
          { name: text.name, path: base },
          ...(this.section === 'overview' ? [] : [{ name: page.tabs[this.section], path }]),
        ],
      });
    });
  }
}

@Component({
  selector: 'docs-component-overview',
  imports: [ExampleViewer, Toc, TrustedHtml],
  template: `
    <div class="doc-grid">
      <article class="doc-article">
        <div class="prose">
          @for (paragraph of text().overview; track $index) {
            <p [innerHTML]="paragraph | trusted"></p>
          }
          @if (react(); as react) {
            <p class="react-note" [innerHTML]="react | trusted"></p>
          }
        </div>
        @for (example of doc().examples; track example.id) {
          <docs-example
            [component]="component()"
            [example]="example"
            [type]="examples()[example.id] ?? null"
          />
        }
      </article>
      <docs-toc [items]="toc()" />
    </div>
  `,
})
export class OverviewSection extends ComponentSection {
  /** The page's example components, loaded by the route (see `examplesResolver`). */
  readonly examples = input<Record<string, Type<unknown>>>({});
  protected readonly section = 'overview';
  /** That the component is in React too, where it is. */
  protected readonly react = computed(() => {
    const id = this.component();
    return isReactId(id) ? this.i18n.t().react.items[id].overview : null;
  });
  protected readonly toc = computed(() =>
    this.doc().examples.map((example) => ({
      id: example.id,
      label: this.text().examples[example.id].title,
    })),
  );
}

@Component({
  selector: 'docs-component-api',
  imports: [CodeBlock, InAppLinks, Toc, TrustedHtml],
  template: `
    @let labels = i18n.t().components.api;
    <div class="doc-grid">
      <article class="doc-article" docsInAppLinks>
        <!-- Angular or React, for components that are in both. Styled as the tabs above, so
             it adds no CSS to the page; the article's docsInAppLinks routes the links. -->
        @if (inReact()) {
          <nav class="tabs" [attr.aria-label]="i18n.t().react.framework">
            <a class="active" [attr.href]="i18n.link(api())" aria-current="page">Angular</a>
            <a [attr.href]="i18n.link(api() + '/react')">React</a>
          </nav>
        }
        <h2 id="import">{{ labels.import }}</h2>
        <docs-code [key]="doc().importFile" />

        @for (entry of doc().api; track entry.name) {
          @let entryText = text().api[entry.name];
          <section class="api-entry">
            <h2 [id]="entry.name">{{ entry.name }}</h2>
            <p [innerHTML]="entryText.summary | trusted"></p>
            @if (entry.selector) {
              <dl class="api-meta">
                <dt>{{ labels.selector }}</dt>
                <dd>
                  <code>{{ entry.selector }}</code>
                </dd>
                @if (entry.exportAs) {
                  <dt>{{ labels.exportAs }}</dt>
                  <dd>
                    <code>{{ entry.exportAs }}</code>
                  </dd>
                }
              </dl>
            }
            @if (entry.members.length) {
              <div
                class="table-wrap"
                tabindex="0"
                role="region"
                [attr.aria-labelledby]="entry.name"
              >
                <table>
                  <caption class="visually-hidden">
                    {{
                      entry.name
                    }}:
                    {{
                      labels.members
                    }}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">{{ labels.name }}</th>
                      <th scope="col">{{ labels.type }}</th>
                      <th scope="col">{{ labels.default }}</th>
                      <th scope="col">{{ labels.description }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (member of entry.members; track member.name) {
                      <tr>
                        <th scope="row">
                          <code>{{ member.name }}</code>
                          <span class="member-kind">{{ labels.kinds[member.kind] }}</span>
                        </th>
                        <td>
                          <code>{{ member.type }}</code>
                        </td>
                        <!-- No control flow in a row: identical rows hydrate from one entry.
                             The class is an attribute: a class binding leaves class="" on every default. -->
                        <td>
                          <code
                            [attr.class]="member.default ? null : 'api-none'"
                            [attr.aria-hidden]="member.default ? null : 'true'"
                            >{{ member.default || '—' }}</code
                          >
                        </td>
                        <td
                          [innerHTML]="
                            (member.customization
                              ? labels.customization.members[member.customization]
                              : entryText.members[member.name]
                            ) | trusted
                          "
                        ></td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
              @if (hasCustomization(entry)) {
                <p class="api-note" [innerHTML]="labels.customization.note | trusted"></p>
              }
              @if (entry.texts; as texts) {
                <p class="api-note">
                  {{ labels.texts }}
                  <!-- Spaces between tags alone are dropped, so the one after each name is spelled out. -->
                  @for (name of texts; track name) {
                    <code>{{ name }}</code
                    >{{ ' ' }}
                  }
                </p>
              }
            }
          </section>
        }
      </article>
      <docs-toc [items]="toc()" />
    </div>
  `,
})
export class ApiSection extends ComponentSection {
  protected readonly section = 'api';
  protected readonly inReact = computed(() => isReactId(this.component()));
  protected readonly api = computed(() => `/components/${this.component()}/api`);
  protected hasCustomization(entry: ApiEntry): boolean {
    return entry.members.some((member) => member.customization);
  }
  protected readonly toc = computed(() => [
    { id: 'import', label: this.i18n.t().components.api.import },
    ...this.doc().api.map((entry) => ({ id: entry.name, label: entry.name })),
  ]);
}

/**
 * The API of a component's React twin. Members that mean what an Angular member
 * means share its description; the locale's `react` words hold the others.
 */
@Component({
  selector: 'docs-component-react-api',
  imports: [CodeBlock, InAppLinks, NotFoundPage, Toc, TrustedHtml],
  template: `
    @let labels = i18n.t().components.api;
    @let words = i18n.t().react;
    @if (react(); as react) {
      <div class="doc-grid">
        <article class="doc-article" docsInAppLinks>
          <nav class="tabs" [attr.aria-label]="words.framework">
            <a [attr.href]="i18n.link(api())">Angular</a>
            <a class="active" [attr.href]="i18n.link(api() + '/react')" aria-current="page"
              >React</a
            >
          </nav>
          <h2 id="import">{{ labels.import }}</h2>
          <docs-code [key]="react.importFile" />

          @for (entry of entries(); track entry.name) {
            <section class="api-entry">
              <h2 [id]="entry.name">{{ entry.name }}</h2>
              <p [innerHTML]="entry.summary | trusted"></p>
              <div
                class="table-wrap"
                tabindex="0"
                role="region"
                [attr.aria-labelledby]="entry.name"
              >
                <table>
                  <caption class="visually-hidden">
                    {{
                      entry.name
                    }}:
                    {{
                      labels.members
                    }}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">{{ labels.name }}</th>
                      <th scope="col">{{ labels.type }}</th>
                      <th scope="col">{{ labels.default }}</th>
                      <th scope="col">{{ labels.description }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (member of entry.members; track member.key) {
                      <tr>
                        <!-- State names its default and its callback too, one under another. -->
                        <th scope="row" [innerHTML]="member.head | trusted"></th>
                        <td>
                          <code>{{ member.type }}</code>
                        </td>
                        <td>
                          <code
                            [attr.class]="member.default ? null : 'api-none'"
                            [attr.aria-hidden]="member.default ? null : 'true'"
                            >{{ member.default || '—' }}</code
                          >
                        </td>
                        <td [innerHTML]="member.description | trusted"></td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
              @if (entry.state) {
                <p class="api-note" [innerHTML]="words.state | trusted"></p>
              }
              @if (entry.customization) {
                <p class="api-note" [innerHTML]="words.customization | trusted"></p>
              }
            </section>
          }
        </article>
        <docs-toc [items]="toc()" />
      </div>
    } @else {
      <docs-not-found-page />
    }
  `,
})
export class ReactApiSection extends ComponentSection {
  protected readonly section = 'react';
  protected readonly api = computed(() => `/components/${this.component()}/api`);
  protected readonly react = computed(() => {
    const id = this.component();
    return isReactId(id) ? REACT_DOCS[id] : null;
  });
  protected readonly entries = computed(() => {
    const id = this.component();
    if (!isReactId(id)) return [];
    const t = this.i18n.t();
    const kinds = { ...t.components.api.kinds, ...t.react.kinds };
    return reactApi(id, t).map((entry) => ({
      name: entry.name,
      summary: entry.summary,
      state: entry.members.some((member) => member.kind === 'state'),
      customization: entry.members.some((member) => member.customization),
      members: entry.members.map((member) => ({
        key: member.name,
        head: `${member.names.map((name) => `<code>${name}</code>`).join('<br>')}<span class="member-kind">${kinds[member.kind]}</span>`,
        type: member.type,
        default: member.default,
        description: member.description,
      })),
    }));
  });
  protected readonly toc = computed(() => [
    { id: 'import', label: this.i18n.t().components.api.import },
    ...this.entries().map((entry) => ({ id: entry.name, label: entry.name })),
  ]);
}

@Component({
  selector: 'docs-component-accessibility',
  imports: [Toc, TrustedHtml],
  template: `
    @let labels = i18n.t().components.a11y;
    <div class="doc-grid">
      <article class="doc-article">
        <!-- Components you only look at (an avatar, a skeleton) have no keys to list. -->
        @if (text().keyboard.length) {
          <h2 id="keyboard">{{ labels.keyboard }}</h2>
          <div class="table-wrap" tabindex="0" role="region" aria-labelledby="keyboard">
            <table>
              <thead>
                <tr>
                  <th scope="col">{{ labels.key }}</th>
                  <th scope="col">{{ labels.action }}</th>
                </tr>
              </thead>
              <tbody>
                @for (row of text().keyboard; track row[0]) {
                  <tr>
                    <th scope="row">
                      <kbd>{{ row[0] }}</kbd>
                    </th>
                    <td>{{ row[1] }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }

        <h2 id="notes">{{ labels.notes }}</h2>
        <ul class="notes">
          @for (note of text().notes; track $index) {
            <li [innerHTML]="note | trusted"></li>
          }
        </ul>
      </article>
      <docs-toc [items]="toc()" />
    </div>
  `,
})
export class AccessibilitySection extends ComponentSection {
  protected readonly section = 'accessibility';
  protected readonly toc = computed(() => {
    const labels = this.i18n.t().components.a11y;
    return [
      ...(this.text().keyboard.length ? [{ id: 'keyboard', label: labels.keyboard }] : []),
      { id: 'notes', label: labels.notes },
    ];
  });
}
