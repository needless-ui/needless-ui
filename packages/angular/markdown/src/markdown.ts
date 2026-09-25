import { NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  contentChild,
  DestroyRef,
  Directive,
  inject,
  input,
  linkedSignal,
  numberAttribute,
  signal,
  TemplateRef,
} from '@angular/core';
import { type NuiMarkdownBlock, nuiMarkdownText, nuiParseMarkdown, nuiSafeUrl } from './parse';

/** Every text the renderer shows or announces. */
export interface NuiMarkdownLabels {
  copy: string;
  copied: string;
  /** The copy button's accessible name. */
  copyCode: string;
  /** Names a table's scroll region, followed by its headers. */
  table: string;
  done: string;
  todo: string;
}

export const NUI_MARKDOWN_LABELS: NuiMarkdownLabels = {
  copy: 'Copy',
  copied: 'Copied',
  copyCode: 'Copy code',
  table: 'Table',
  done: 'Done',
  todo: 'To do',
};

/** What a custom code block template gets. */
export interface NuiMarkdownCodeContext {
  $implicit: string;
  lang: string;
  /** The fence isn't closed yet: the code is still arriving. */
  open: boolean;
}

/**
 * Draws code blocks yourself, to highlight them:
 *
 * ```html
 * <nui-markdown [text]="reply">
 *   <ng-template nuiMarkdownCode let-code let-lang="lang">
 *     <pre [innerHTML]="highlight(code, lang)"></pre>
 *   </ng-template>
 * </nui-markdown>
 * ```
 */
@Directive({ selector: 'ng-template[nuiMarkdownCode]' })
export class NuiMarkdownCode {
  readonly template = inject<TemplateRef<NuiMarkdownCodeContext>>(TemplateRef);

  static ngTemplateContextGuard(
    _directive: NuiMarkdownCode,
    context: unknown,
  ): context is NuiMarkdownCodeContext {
    return true;
  }
}

/** The key of a parsed block: its source, marked when it was still arriving. */
const keyOf = (
  block: NuiMarkdownBlock,
  index: number,
  all: readonly NuiMarkdownBlock[],
  streaming: boolean,
) => (streaming && index === all.length - 1 ? '\u0000' : '') + block.source;

/**
 * Renders Markdown, such as a chat model's reply, safely: the text is parsed into
 * a tree and drawn with elements, never inserted as HTML. Links go only to web,
 * mail and phone addresses.
 *
 * ```html
 * <nui-markdown [text]="reply()" [streaming]="!done()" />
 * ```
 *
 * While `streaming`, an open code fence renders as code and a dangling `**` waits
 * for its partner; blocks that didn't change keep their DOM.
 */
@Component({
  selector: 'nui-markdown',
  imports: [NgTemplateOutlet],
  host: { class: 'nui-markdown', '[attr.data-streaming]': 'streaming() || null' },
  template: `
    <ng-container
      *ngTemplateOutlet="
        blockList;
        context: { $implicit: blocks(), tight: false, caret: streaming() }
      "
    />
    <span class="nui-markdown-status" role="status">{{ copied() ? words().copied : '' }}</span>

    <!-- caret: draw the caret after the last block's text, which is still arriving. -->
    <ng-template #blockList let-blocks let-tight="tight" let-caret="caret">
      @for (block of blocks; track block; let last = $last) {
        @switch (block.type) {
          @case ('paragraph') {
            @if (tight) {
              <ng-container
                *ngTemplateOutlet="
                  inline;
                  context: { $implicit: block.children, caret: caret && last }
                "
              />
            } @else {
              <p dir="auto">
                <ng-container
                  *ngTemplateOutlet="
                    inline;
                    context: { $implicit: block.children, caret: caret && last }
                  "
                />
              </p>
            }
          }
          @case ('heading') {
            @switch (level(block.level)) {
              @case (1) {
                <h1 dir="auto">
                  <ng-container
                    *ngTemplateOutlet="
                      inline;
                      context: { $implicit: block.children, caret: caret && last }
                    "
                  />
                </h1>
              }
              @case (2) {
                <h2 dir="auto">
                  <ng-container
                    *ngTemplateOutlet="
                      inline;
                      context: { $implicit: block.children, caret: caret && last }
                    "
                  />
                </h2>
              }
              @case (3) {
                <h3 dir="auto">
                  <ng-container
                    *ngTemplateOutlet="
                      inline;
                      context: { $implicit: block.children, caret: caret && last }
                    "
                  />
                </h3>
              }
              @case (4) {
                <h4 dir="auto">
                  <ng-container
                    *ngTemplateOutlet="
                      inline;
                      context: { $implicit: block.children, caret: caret && last }
                    "
                  />
                </h4>
              }
              @case (5) {
                <h5 dir="auto">
                  <ng-container
                    *ngTemplateOutlet="
                      inline;
                      context: { $implicit: block.children, caret: caret && last }
                    "
                  />
                </h5>
              }
              @default {
                <h6 dir="auto">
                  <ng-container
                    *ngTemplateOutlet="
                      inline;
                      context: { $implicit: block.children, caret: caret && last }
                    "
                  />
                </h6>
              }
            }
          }
          @case ('code') {
            <div class="nui-markdown-code" [attr.data-open]="block.open || null">
              <div class="nui-markdown-code-bar">
                <span class="nui-markdown-lang">{{ block.lang }}</span>
                <button
                  type="button"
                  class="nui-markdown-copy"
                  [attr.aria-label]="words().copyCode"
                  (click)="copy(block)"
                >
                  {{ copied() === block ? words().copied : words().copy }}
                </button>
              </div>
              @if (code(); as custom) {
                <ng-container
                  *ngTemplateOutlet="
                    custom;
                    context: { $implicit: block.text, lang: block.lang, open: block.open }
                  "
                />
              } @else {
                <pre
                  tabindex="0"
                ><code [attr.data-lang]="block.lang || null">{{ block.text }}@if (caret && last) {<span class="nui-markdown-caret" aria-hidden="true"></span>}</code></pre>
              }
            </div>
          }
          @case ('quote') {
            <blockquote dir="auto">
              <ng-container
                *ngTemplateOutlet="
                  blockList;
                  context: { $implicit: block.children, tight: false, caret: caret && last }
                "
              />
            </blockquote>
          }
          @case ('list') {
            @if (block.ordered) {
              <ol dir="auto" [attr.start]="block.start === 1 ? null : block.start">
                <ng-container
                  *ngTemplateOutlet="items; context: { $implicit: block, caret: caret && last }"
                />
              </ol>
            } @else {
              <ul dir="auto">
                <ng-container
                  *ngTemplateOutlet="items; context: { $implicit: block, caret: caret && last }"
                />
              </ul>
            }
          }
          @case ('table') {
            <div
              class="nui-markdown-table"
              dir="auto"
              tabindex="0"
              role="region"
              [attr.aria-label]="tableLabel(block)"
            >
              <table>
                <thead>
                  <tr>
                    @for (cell of block.head; track $index; let lastHead = $last) {
                      <th scope="col" [style.text-align]="block.align[$index]">
                        <ng-container
                          *ngTemplateOutlet="
                            inline;
                            context: {
                              $implicit: cell,
                              caret: caret && last && lastHead && !block.rows.length,
                            }
                          "
                        />
                      </th>
                    }
                  </tr>
                </thead>
                <tbody>
                  @for (row of block.rows; track $index; let lastRow = $last) {
                    <tr>
                      @for (cell of row; track $index; let lastCell = $last) {
                        <td [style.text-align]="block.align[$index]">
                          <ng-container
                            *ngTemplateOutlet="
                              inline;
                              context: {
                                $implicit: cell,
                                caret: caret && last && lastRow && lastCell,
                              }
                            "
                          />
                        </td>
                      }
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }
          @case ('rule') {
            <hr />
          }
        }
      }
    </ng-template>

    <ng-template #items let-list let-caret="caret">
      @for (item of list.items; track $index; let last = $last) {
        <li [class.nui-markdown-task]="item.checked !== null">
          @if (item.checked !== null) {
            <span
              class="nui-markdown-check"
              role="img"
              [attr.data-checked]="item.checked || null"
              [attr.aria-label]="item.checked ? words().done : words().todo"
            ></span>
          }
          <ng-container
            *ngTemplateOutlet="
              blockList;
              context: { $implicit: item.children, tight: list.tight, caret: caret && last }
            "
          />
        </li>
      }
    </ng-template>

    <ng-template #inline let-nodes let-caret="caret">
      @for (node of nodes; track $index) {
        @switch (node.type) {
          @case ('text') {
            <ng-container>{{ node.text }}</ng-container>
          }
          @case ('strong') {
            <strong
              ><ng-container *ngTemplateOutlet="inline; context: { $implicit: node.children }"
            /></strong>
          }
          @case ('em') {
            <em
              ><ng-container *ngTemplateOutlet="inline; context: { $implicit: node.children }"
            /></em>
          }
          @case ('del') {
            <del
              ><ng-container *ngTemplateOutlet="inline; context: { $implicit: node.children }"
            /></del>
          }
          @case ('code') {
            <code>{{ node.text }}</code>
          }
          @case ('link') {
            <a
              [href]="node.href"
              [attr.title]="node.title"
              [attr.target]="external(node.href) ? '_blank' : null"
              [attr.rel]="external(node.href) ? 'noopener noreferrer' : null"
              ><ng-container *ngTemplateOutlet="inline; context: { $implicit: node.children }"
            /></a>
          }
          @case ('image') {
            @if (!nuiSafeUrl(node.src)) {
              <ng-container>{{ node.alt }}</ng-container>
            } @else if (images()) {
              <img
                [src]="node.src"
                [alt]="node.alt"
                [attr.title]="node.title"
                loading="lazy"
                decoding="async"
              />
            } @else {
              <a [href]="node.src" target="_blank" rel="noopener noreferrer">{{
                node.alt || node.src
              }}</a>
            }
          }
          @case ('break') {
            <br />
          }
        }
      }
      @if (caret) {
        <span class="nui-markdown-caret" aria-hidden="true"></span>
      }
    </ng-template>
  `,
})
export class NuiMarkdown {
  /** The Markdown. */
  readonly text = input('');
  /** The text is still arriving: see the class description. */
  readonly streaming = input(false, { transform: booleanAttribute });
  /** The heading level `#` renders at; `##` is one deeper, and so on up to `h6`. */
  readonly headingLevel = input(3, { transform: numberAttribute });
  /** Render images; otherwise their alt text links to them. Off, since an image can track. */
  readonly images = input(false, { transform: booleanAttribute });
  /** Texts to replace, for translation. */
  readonly labels = input<Partial<NuiMarkdownLabels>>({});
  /** A code block template from elsewhere, such as a chat that renders many replies. */
  readonly codeTemplate = input<TemplateRef<NuiMarkdownCodeContext> | null>(null);

  private readonly codeChild = contentChild(NuiMarkdownCode);
  protected readonly code = computed(() => this.codeChild()?.template ?? this.codeTemplate());
  protected readonly nuiSafeUrl = nuiSafeUrl;
  protected readonly copied = signal<NuiMarkdownBlock | null>(null);
  /** The labels, defaults filled in. */
  protected readonly words = computed(() => ({ ...NUI_MARKDOWN_LABELS, ...this.labels() }));

  /**
   * The parsed blocks. A block whose source didn't change is the same object as
   * before, so its DOM stays: a streaming reply re-renders only its last block.
   */
  protected readonly blocks = linkedSignal<
    { text: string; streaming: boolean },
    NuiMarkdownBlock[]
  >({
    source: () => ({ text: this.text(), streaming: this.streaming() }),
    computation: (current, previous) => {
      const parsed = nuiParseMarkdown(current.text, { streaming: current.streaming });
      const kept = new Map<string, NuiMarkdownBlock>();
      previous?.value.forEach((block, i, all) =>
        kept.set(keyOf(block, i, all, previous.source.streaming), block),
      );
      return parsed.map(
        (block, i, all) => kept.get(keyOf(block, i, all, current.streaming)) ?? block,
      );
    },
  });

  private timer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
  }

  protected level(level: number): number {
    return Math.min(6, this.headingLevel() + level - 1);
  }

  protected external(href: string): boolean {
    return /^https?:/i.test(href);
  }

  protected tableLabel(table: Extract<NuiMarkdownBlock, { type: 'table' }>): string {
    return `${this.words().table}: ${table.head.map((cell) => nuiMarkdownText(cell)).join(', ')}`;
  }

  protected async copy(block: NuiMarkdownBlock): Promise<void> {
    if (block.type !== 'code') return;
    try {
      await navigator.clipboard.writeText(block.text);
      this.copied.set(block);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.copied.set(null), 2000);
    } catch {
      // Clipboard access can be denied; the code stays selectable.
    }
  }
}
