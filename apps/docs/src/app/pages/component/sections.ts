import { Component, computed, Directive, effect, inject, input } from '@angular/core';
import { type ComponentId, isComponentId } from '../../docs/ids';
import { type ApiEntry, COMPONENT_DOCS } from '../../docs/registry';
import { I18n } from '../../i18n/i18n';
import { Seo } from '../../seo/seo';
import { CodeBlock } from '../../shared/code-block';
import { ExampleViewer } from '../../shared/example-viewer';
import { InAppLinks } from '../../shared/in-app-links';
import { Toc } from '../../shared/toc';

type Section = 'overview' | 'api' | 'accessibility';

/** Shared state and SEO for the three tabs of a component page. */
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
      const base = `/components/${this.component()}`;
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
  imports: [ExampleViewer, Toc],
  template: `
    <div class="doc-grid">
      <article class="doc-article">
        <div class="prose">
          @for (paragraph of text().overview; track $index) {
            <p [innerHTML]="paragraph"></p>
          }
        </div>
        @for (example of doc().examples; track example.id) {
          <docs-example [component]="component()" [example]="example" />
        }
      </article>
      <docs-toc [items]="toc()" />
    </div>
  `,
})
export class OverviewSection extends ComponentSection {
  protected readonly section = 'overview';
  protected readonly toc = computed(() =>
    this.doc().examples.map((example) => ({
      id: example.id,
      label: this.text().examples[example.id].title,
    })),
  );
}

@Component({
  selector: 'docs-component-api',
  imports: [CodeBlock, InAppLinks, Toc],
  template: `
    @let labels = i18n.t().components.api;
    <div class="doc-grid">
      <article class="doc-article" docsInAppLinks>
        <h2 id="import">{{ labels.import }}</h2>
        <docs-code [key]="doc().importFile" />

        @for (entry of doc().api; track entry.name) {
          @let entryText = text().api[entry.name];
          <section class="api-entry">
            <h2 [id]="entry.name">{{ entry.name }}</h2>
            <p [innerHTML]="entryText.summary"></p>
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
                        <td>
                          @if (member.default) {
                            <code>{{ member.default }}</code>
                          } @else {
                            <span aria-hidden="true">—</span>
                          }
                        </td>
                        <td
                          [innerHTML]="
                            member.customization
                              ? labels.customization.members[member.customization]
                              : entryText.members[member.name]
                          "
                        ></td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
              @if (hasCustomization(entry)) {
                <p class="api-note" [innerHTML]="labels.customization.note"></p>
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
  protected hasCustomization(entry: ApiEntry): boolean {
    return entry.members.some((member) => member.customization);
  }
  protected readonly toc = computed(() => [
    { id: 'import', label: this.i18n.t().components.api.import },
    ...this.doc().api.map((entry) => ({ id: entry.name, label: entry.name })),
  ]);
}

@Component({
  selector: 'docs-component-accessibility',
  imports: [Toc],
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
            <li [innerHTML]="note"></li>
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
