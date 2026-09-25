import { NgComponentOutlet } from '@angular/common';
import {
  Component,
  computed,
  inject,
  Injector,
  input,
  LOCALE_ID,
  signal,
  type Type,
} from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import type { ExampleEntry } from '../docs/registry';
import type { ComponentId } from '../docs/ids';
import { EXAMPLE_FILES } from '../generated/code';
import { I18n } from '../i18n/i18n';
import { CodeBlock } from './code-block';
import { TrustedHtml } from './trusted';

/** A live example with its title, explanation and source files. */
@Component({
  selector: 'docs-example',
  imports: [NgComponentOutlet, NuiButton, CodeBlock, TrustedHtml],
  template: `
    <section class="example">
      <h2 [id]="example().id">{{ text().title }}</h2>
      <p class="example-text" [innerHTML]="text().text | trusted"></p>
      <div class="example-frame">
        <div class="example-demo">
          @if (example().defer; as height) {
            <!-- Heavy examples render in the browser, near the viewport. -->
            @defer (on viewport) {
              <ng-container *ngComponentOutlet="type(); injector: injector()" />
            } @placeholder {
              <div class="example-placeholder" [style.min-height.px]="height"></div>
            }
          } @else {
            <ng-container *ngComponentOutlet="type(); injector: injector()" />
          }
        </div>
        <div class="example-bar">
          <button
            nuiButton
            type="button"
            variant="ghost"
            tone="neutral"
            size="sm"
            [attr.aria-expanded]="showCode()"
            [attr.aria-controls]="codeId()"
            (click)="showCode.set(!showCode())"
          >
            {{ showCode() ? labels().hideCode : labels().showCode }}
            <span class="visually-hidden">: {{ text().title }}</span>
          </button>
        </div>
        <div class="example-code" [id]="codeId()" [hidden]="!showCode()">
          @if (showCode()) {
            @for (file of files(); track file) {
              <docs-code [key]="file" />
            }
          }
        </div>
      </div>
    </section>
  `,
})
export class ExampleViewer {
  readonly component = input.required<ComponentId>();
  readonly example = input.required<ExampleEntry>();
  /** The example's component, loaded by the route. */
  readonly type = input<Type<unknown> | null>(null);

  private readonly i18n = inject(I18n);
  private readonly parent = inject(Injector);
  /** Examples format dates and numbers in the page's language. */
  protected readonly injector = computed(() =>
    Injector.create({
      providers: [{ provide: LOCALE_ID, useValue: this.i18n.locale() }],
      parent: this.parent,
    }),
  );
  protected readonly showCode = signal(false);
  protected readonly labels = computed(() => this.i18n.t().components.example);
  protected readonly text = computed(
    () => this.i18n.t().components.items[this.component()].examples[this.example().id],
  );
  protected readonly codeId = computed(() => `${this.example().id}-code`);
  protected readonly files = computed(() =>
    ['html', 'ts', 'css']
      .map((ext) => `examples/${this.component()}/${this.example().id}.${ext}`)
      .filter((key) => EXAMPLE_FILES.includes(key)),
  );
}
