import { NgTemplateOutlet } from '@angular/common';
import {
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  output,
  signal,
  TemplateRef,
  untracked,
} from '@angular/core';
import { NuiVirtualizer } from '@needless-ui/angular';
import type { NuiOption, NuiOptionEngine, NuiOptionRow } from './engine';

/** Rows above this count are virtualized when `virtual` is `'auto'`. */
const AUTO_VIRTUAL = 200;
const ESTIMATE = 32;

/**
 * Custom content for each option:
 *
 * ```html
 * <ng-template nuiOptionTemplate let-option let-row="row">
 *   <img [src]="option.value.flag" alt="" /> {{ option.label }}
 * </ng-template>
 * ```
 */
@Directive({ selector: 'ng-template[nuiOptionTemplate]' })
export class NuiOptionTemplate<V = unknown> {
  readonly template =
    inject<TemplateRef<{ $implicit: NuiOption<V>; row: NuiOptionRow<V> }>>(TemplateRef);
}

/**
 * An option's text: the label with the matched letters marked, its description
 * and, for a search result from a tree, where it lives. Use it in a custom
 * option template to keep all that:
 *
 * ```html
 * <ng-template nuiOptionTemplate let-option let-row="row">
 *   <img [src]="option.value.avatar" alt="" /> <span [nuiOptionText]="row"></span>
 * </ng-template>
 * ```
 */
@Component({
  selector: '[nuiOptionText]',
  host: { class: 'nui-select-option-text' },
  template: `
    <span class="nui-select-option-label">
      <!-- Text right next to <mark>: a bare {{ }} here would keep a space around it. -->
      @for (part of row().parts; track $index) {
        @if (part.match) {
          <mark>{{ part.text }}</mark>
        } @else {
          <ng-container>{{ part.text }}</ng-container>
        }
      }
    </span>
    @if (row().option?.description; as description) {
      <span class="nui-select-description">{{ description }}</span>
    }
    <!-- Flat rows from a tree (search results) say where they live. -->
    @if (row().path.length && !row().depth) {
      <span class="nui-select-path">{{ row().path.join(' › ') }}</span>
    }
  `,
})
export class NuiOptionText<V = unknown> {
  readonly row = input.required<NuiOptionRow<V>>({ alias: 'nuiOptionText' });
}

interface Item<V> {
  row: NuiOptionRow<V>;
  index: number;
}

/**
 * The listbox (or tree) inside a select, combobox or command palette. It renders
 * the engine's rows, only those in view when the list is long, keeps the active
 * option in view, and never takes focus: the field that owns it keeps focus and
 * points at the active option with `aria-activedescendant`.
 */
@Component({
  selector: 'nui-option-list',
  imports: [NgTemplateOutlet, NuiOptionText],
  host: {
    class: 'nui-select-list',
    '[attr.role]': 'tree() ? "tree" : "listbox"',
    '[id]': 'listId()',
    '[attr.aria-label]': 'label() || null',
    '[attr.aria-multiselectable]': 'multiple() || null',
    '(scroll)': 'onScroll()',
    // Clicks on options must not take focus from the field.
    '(mousedown)': '$event.preventDefault()',
  },
  template: `
    @if (spacers().top) {
      <div role="presentation" [style.height.px]="spacers().top"></div>
    }
    @for (item of window(); track item.row.key) {
      @let row = item.row;
      @if (row.kind === 'group') {
        <div class="nui-select-group" role="presentation" [attr.data-index]="item.index">
          {{ row.label }}
        </div>
      } @else {
        <div
          class="nui-select-option"
          [attr.role]="tree() ? 'treeitem' : 'option'"
          [id]="optionId(item.index)"
          [attr.data-index]="item.index"
          [attr.data-active]="item.index === engine().active() ? '' : null"
          [attr.data-action]="row.action ? '' : null"
          [attr.aria-selected]="selected()(row.option!)"
          [attr.aria-disabled]="row.option!.disabled || null"
          [attr.aria-setsize]="engine().size()"
          [attr.aria-posinset]="row.position"
          [attr.aria-level]="tree() ? row.depth + 1 : null"
          [attr.aria-expanded]="tree() && row.expandable ? row.expanded : null"
          [style.--_depth]="row.depth || null"
          (click)="choose.emit(row)"
          (pointermove)="engine().activate(item.index)"
        >
          @if (tree()) {
            @if (row.expandable) {
              <span
                class="nui-select-toggle"
                aria-hidden="true"
                (click)="$event.stopPropagation(); engine().toggleExpanded(row.option!)"
              ></span>
            } @else {
              <span class="nui-select-leaf"></span>
            }
          }
          @if (template(); as template) {
            <ng-container
              *ngTemplateOutlet="template.template; context: { $implicit: row.option!, row }"
            />
          } @else {
            <span [nuiOptionText]="row"></span>
          }
        </div>
      }
    }
    @if (spacers().bottom) {
      <div role="presentation" [style.height.px]="spacers().bottom"></div>
    }
  `,
})
export class NuiOptionList<V = unknown> {
  readonly engine = input.required<NuiOptionEngine<V>>();
  readonly listId = input.required<string>();
  /** Whether an option is selected. */
  readonly selected = input<(option: NuiOption<V>) => boolean>(() => false);
  readonly multiple = input(false, { transform: booleanAttribute });
  /** A tree (treeitems with levels) instead of a listbox. */
  readonly tree = input(false, { transform: booleanAttribute });
  readonly label = input('');
  /** Renders only the rows in view: always, never, or above 200 rows. */
  readonly virtual = input<boolean | 'auto'>('auto');
  readonly template = input<NuiOptionTemplate<V>>();
  /** A row was clicked. */
  readonly choose = output<NuiOptionRow<V>>();

  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly scrollTop = signal(0);
  /** The list's height, 0 while its popup is closed. */
  private readonly height = signal(0);
  /** Bumped when measuring changes a row's size, to lay the list out again. */
  private readonly layout = signal(0);

  private readonly virtualized = computed(() => {
    const virtual = this.virtual();
    return virtual === 'auto' ? this.engine().rows().length > AUTO_VIRTUAL : virtual;
  });
  private readonly virtualizer = computed(
    () => new NuiVirtualizer({ count: this.engine().rows().length, estimate: ESTIMATE }),
  );

  private readonly range = computed(() => {
    const rows = this.engine().rows();
    if (!this.virtualized()) return { start: 0, end: rows.length };
    this.layout();
    const range = this.virtualizer().range(this.scrollTop(), this.height() || 320);
    // The active option must stay rendered: aria-activedescendant points at it.
    const active = this.engine().active();
    return active < 0
      ? range
      : { start: Math.min(range.start, active), end: Math.max(range.end, active + 1) };
  });

  protected readonly window = computed<Item<V>[]>(() => {
    const rows = this.engine().rows();
    const { start, end } = this.range();
    const items: Item<V>[] = [];
    for (let index = start; index < end; index++) items.push({ row: rows[index], index });
    return items;
  });

  protected readonly spacers = computed(() => {
    if (!this.virtualized()) return { top: 0, bottom: 0 };
    this.layout();
    const list = this.virtualizer();
    const { start, end } = this.range();
    return { top: list.offsetOf(start), bottom: list.total() - list.offsetOf(end) };
  });

  constructor() {
    // Measure what was rendered; a row that turns out taller or shorter re-lays the list.
    afterRenderEffect(() => {
      this.window();
      if (!this.virtualized() || !this.height()) return;
      const list = untracked(this.virtualizer);
      let changed = false;
      for (const row of this.element.querySelectorAll<HTMLElement>(':scope > [data-index]')) {
        changed = list.measure(Number(row.dataset['index']), row.offsetHeight) || changed;
      }
      if (changed) this.layout.update((n) => n + 1);
    });

    // Keep the active option in view as it moves, and when the list shows.
    afterRenderEffect(() => {
      const active = this.engine().active();
      if (active < 0 || !this.height()) return;
      untracked(() => this.reveal(active));
    });

    // The popup hides the list with display: none, which also resets its scroll.
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const observer = new ResizeObserver(() => {
        this.height.set(this.element.clientHeight);
        this.scrollTop.set(this.element.scrollTop);
      });
      observer.observe(this.element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  /** Id of the option at a row index, for `aria-activedescendant`. */
  optionId(index: number): string {
    return `${this.listId()}-${index}`;
  }

  protected onScroll(): void {
    this.scrollTop.set(this.element.scrollTop);
  }

  private reveal(index: number): void {
    const element = this.element;
    if (this.virtualized()) {
      const target = this.virtualizer().scrollTo(index, element.scrollTop, element.clientHeight);
      if (target !== element.scrollTop) {
        element.scrollTop = target;
        this.scrollTop.set(target);
      }
    } else {
      // Scroll the list only, never the page.
      const row = element.querySelector<HTMLElement>(`[data-index="${index}"]`);
      if (!row) return;
      const list = element.getBoundingClientRect();
      const box = row.getBoundingClientRect();
      if (box.top < list.top) element.scrollTop -= list.top - box.top;
      else if (box.bottom > list.bottom) element.scrollTop += box.bottom - list.bottom;
    }
  }
}
