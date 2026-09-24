import { Component, computed, inject, input, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { CODE } from '../generated/code';
import { I18n } from '../i18n/i18n';

/** A file highlighted at build time (see scripts/generate-code.ts), with a copy button. */
@Component({
  selector: 'docs-code',
  imports: [NuiButton],
  template: `
    @let code = file();
    <div class="code">
      <div class="code-bar">
        <span class="code-name">{{ code.name }}</span>
        <button
          nuiButton
          type="button"
          variant="ghost"
          tone="neutral"
          size="sm"
          (click)="copy(code.source)"
        >
          {{ copied() ? labels().copied : labels().copy }}
          <span class="visually-hidden">{{ code.name }}</span>
        </button>
        <span class="visually-hidden" aria-live="polite">{{
          copied() ? labels().copied : ''
        }}</span>
      </div>
      <pre tabindex="0"><code [innerHTML]="code.html"></code></pre>
    </div>
  `,
})
export class CodeBlock {
  /** Key into the generated code map, e.g. `snippets/install.sh`. */
  readonly key = input.required<string>();

  private readonly i18n = inject(I18n);
  private timer: ReturnType<typeof setTimeout> | undefined;

  protected readonly labels = computed(() => this.i18n.t().components.example);
  protected readonly copied = signal(false);
  protected readonly file = computed(() => {
    const file = CODE[this.key()];
    if (!file) throw new Error(`No generated code for "${this.key()}". Run pnpm docs:generate.`);
    return file;
  });

  protected async copy(source: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(source);
      this.copied.set(true);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Clipboard access can be denied; the code stays selectable.
    }
  }
}
