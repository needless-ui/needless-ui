import {
  afterNextRender,
  booleanAttribute,
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
  untracked,
} from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { CODE, type CodeFile, GUIDE_CODE_LINES } from '../generated/code';
import { I18n } from '../i18n/i18n';
import { TrustedHtml } from './trusted';

/**
 * Code maps a page doesn't carry: example sources load on “Show code”, and the files
 * only a guide shows (`guide-code/`) once that guide is in the browser.
 */
const LAZY = {
  'examples/': () => import('../generated/examples-code').then((m) => m.EXAMPLES_CODE),
  'guide-code/': () => import('../generated/guide-code').then((m) => m.GUIDE_CODE),
};
const lazyMap = (key: string) =>
  (Object.keys(LAZY) as (keyof typeof LAZY)[]).find((prefix) => key.startsWith(prefix));

/** A file highlighted at build time (see scripts/generate-code.ts), with a copy button. */
@Component({
  selector: 'docs-code',
  imports: [NuiButton, TrustedHtml],
  template: `
    @if (file(); as code) {
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
        <pre tabindex="0"><code [innerHTML]="(code.html) | trusted"></code></pre>
      </div>
    } @else if (blank(); as lines) {
      <!-- The same bar and button, so nothing moves when the code takes its place. -->
      <div class="code" aria-hidden="true">
        <div class="code-bar">
          <span class="code-name">{{ name() }}</span>
          <button
            nuiButton
            type="button"
            variant="ghost"
            tone="neutral"
            size="sm"
            disabled
            tabindex="-1"
          >
            {{ labels().copy }}
          </button>
        </div>
        <pre><code>{{ lines }}</code></pre>
      </div>
    }
  `,
})
export class CodeBlock {
  /** Key into the generated code map, e.g. `snippets/install.sh`. */
  readonly key = input.required<string>();
  /**
   * Renders the code in the browser only, after the first render, so a long block stays
   * out of the prerendered page. Until then, blank lines of the same height hold its place.
   */
  readonly lazy = input(false, { transform: booleanAttribute });

  private readonly i18n = inject(I18n);
  private timer: ReturnType<typeof setTimeout> | undefined;

  protected readonly labels = computed(() => this.i18n.t().components.example);
  protected readonly copied = signal(false);
  /** Set after the first render in the browser; never on the server. */
  private readonly rendered = signal(false);
  /** Files from the lazy maps, loaded the first time one of theirs is shown. */
  private readonly loaded = signal<Readonly<Record<string, CodeFile>>>({});

  protected readonly file = computed(() => {
    const key = this.key();
    if (this.lazy() && !this.rendered()) return null;
    if (!lazyMap(key)) {
      const file = CODE[key];
      if (!file) throw new Error(`No generated code for "${key}". Run pnpm docs:generate.`);
      return file;
    }
    return this.loaded()[key] ?? null;
  });

  protected readonly name = computed(() => this.key().split('/').pop());
  /** One zero-width space per line, so the blank block is exactly as tall as the code. */
  protected readonly blank = computed(() => {
    if (!this.lazy() || this.file()) return null;
    const key = this.key();
    const lines = CODE[key] ? CODE[key].source.split('\n').length - 1 : GUIDE_CODE_LINES[key];
    return lines ? Array.from({ length: lines }, () => '​').join('\n') : null;
  });

  constructor() {
    afterNextRender(() => this.rendered.set(true));
    effect(() => {
      const key = this.key();
      const map = lazyMap(key);
      if (!map || untracked(this.loaded)[key]) return;
      // Guide-only files wait for the browser; example sources load when their code is shown.
      if (map === 'guide-code/' && !this.rendered()) return;
      LAZY[map]().then((files) => this.loaded.update((all) => ({ ...all, ...files })));
    });
  }

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
