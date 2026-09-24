import { NgComponentOutlet } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import type { ExampleEntry } from '../docs/registry';
import type { ComponentId } from '../docs/ids';
import { CODE } from '../generated/code';
import { I18n } from '../i18n/i18n';
import { CodeBlock } from './code-block';

/** A live example with its title, explanation and source files. */
@Component({
  selector: 'docs-example',
  imports: [NgComponentOutlet, NuiButton, CodeBlock],
  template: `
    <section class="example">
      <h2 [id]="example().id">{{ text().title }}</h2>
      <p class="example-text" [innerHTML]="text().text"></p>
      <div class="example-frame">
        <div class="example-demo">
          <ng-container *ngComponentOutlet="example().component" />
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

  private readonly i18n = inject(I18n);
  protected readonly showCode = signal(false);
  protected readonly labels = computed(() => this.i18n.t().components.example);
  protected readonly text = computed(
    () => this.i18n.t().components.items[this.component()].examples[this.example().id],
  );
  protected readonly codeId = computed(() => `${this.example().id}-code`);
  protected readonly files = computed(() =>
    ['html', 'ts', 'css']
      .map((ext) => `examples/${this.component()}/${this.example().id}.${ext}`)
      .filter((key) => key in CODE),
  );
}
