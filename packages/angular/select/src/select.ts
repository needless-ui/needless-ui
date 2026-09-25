import { _IdGenerator } from '@angular/cdk/a11y';
import { isPlatformBrowser } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  contentChild,
  DestroyRef,
  ElementRef,
  forwardRef,
  inject,
  input,
  model,
  output,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { type ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { nuiFollow } from '@needless-ui/angular';
import { nuiFindOptions, type NuiOption, NuiOptionEngine, type NuiOptionRow } from './engine';
import { NuiOptionList, NuiOptionTemplate } from './list';

/**
 * A select: a button that opens a list of options. Single or multiple, with
 * groups, trees, type-to-jump, "select all", and a list that stays fast with
 * 100,000 options (only the rows in view are rendered).
 *
 * ```html
 * <label for="country">Country</label>
 * <nui-select triggerId="country" [options]="countries" [(value)]="country" />
 * <nui-select label="Toppings" multiple selectAll [options]="toppings" [(values)]="picked" />
 * ```
 *
 * The trigger is a select-only combobox (WAI-ARIA): it keeps focus while the list
 * is open and points at the active option. Works with Signal Forms (`[formField]`),
 * reactive forms and `ngModel`.
 */
@Component({
  selector: 'nui-select',
  imports: [NuiOptionList],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NuiSelect), multi: true },
  ],
  host: { class: 'nui-select' },
  template: `
    <button
      #trigger
      type="button"
      class="nui-select-trigger"
      role="combobox"
      [id]="triggerId() || null"
      [attr.aria-label]="label() || null"
      [attr.aria-haspopup]="tree() ? 'tree' : 'listbox'"
      [attr.aria-expanded]="open()"
      [attr.aria-controls]="open() ? listId : null"
      [attr.aria-activedescendant]="open() ? activeId() : null"
      [attr.popovertarget]="popupId"
      [disabled]="isDisabled()"
      (keydown)="onKeydown($event)"
      (blur)="onTouched()"
    >
      @if (display(); as text) {
        <span class="nui-select-value">{{ text }}</span>
      } @else {
        <span class="nui-select-value nui-select-placeholder">{{ placeholder() }}</span>
      }
      @if (multiple() && chosen().length > 1) {
        <span class="nui-select-count" aria-hidden="true">{{ chosen().length }}</span>
      }
    </button>
    <div
      #popup
      class="nui-select-popup"
      popover="auto"
      [id]="popupId"
      (beforetoggle)="onBeforeToggle($event)"
      (toggle)="onToggle($event)"
    >
      <!-- Rendered only while open: a closed select costs one button. -->
      @if (open()) {
        @if (multiple() && selectAll()) {
          <button
            type="button"
            class="nui-select-all"
            tabindex="-1"
            (mousedown)="$event.preventDefault()"
            (click)="toggleAll()"
          >
            {{ allSelected() ? clearAllLabel() : selectAllLabel() }}
          </button>
        }
        <nui-option-list
          [engine]="engine"
          [listId]="listId"
          [label]="label()"
          [multiple]="multiple()"
          [tree]="tree()"
          [virtual]="virtual()"
          [selected]="isSelected"
          [template]="template()"
          (choose)="choose($event)"
        />
        @if (!engine.size()) {
          <div class="nui-select-empty" role="status">{{ emptyLabel() }}</div>
        }
      }
    </div>
  `,
})
export class NuiSelect<V = unknown> implements ControlValueAccessor {
  readonly options = input.required<readonly NuiOption<V>[]>();
  /** The chosen value. Bind with `[(value)]`. */
  readonly value = model<V | null>(null);
  /** The chosen values, with `multiple`. Bind with `[(values)]`. */
  readonly values = model<readonly V[]>([]);
  readonly multiple = input(false, { transform: booleanAttribute });
  readonly placeholder = input('Select…');
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Accessible name, when no `<label for>` names the trigger. */
  readonly label = input('');
  /** Id of the trigger button, for `<label for>`. */
  readonly triggerId = input('');
  /** Whether two values are the same option. Defaults to `Object.is`. */
  readonly compareWith = input<(a: V, b: V) => boolean>(Object.is);
  /** Renders only the rows in view: always, never, or above 200 rows. */
  readonly virtual = input<boolean | 'auto'>('auto');
  /** With `multiple`, adds a button that selects every option, or clears them. */
  readonly selectAll = input(false, { transform: booleanAttribute });
  readonly selectAllLabel = input('Select all');
  readonly clearAllLabel = input('Clear all');
  readonly emptyLabel = input('No options');
  /** What the trigger shows for the chosen options. Their labels, joined, by default. */
  readonly triggerText = input<((chosen: readonly NuiOption<V>[]) => string) | null>(null);
  /** Emits when the list opens or closes. */
  readonly openChange = output<boolean>();

  protected readonly engine = new NuiOptionEngine<V>({ options: () => this.options() });
  protected readonly template = contentChild(NuiOptionTemplate<V>);
  protected readonly open = signal(false);
  protected readonly listId = inject(_IdGenerator).getId('nui-select-list-');
  protected readonly popupId = `${this.listId}-popup`;
  private readonly formDisabled = signal(false);
  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

  private readonly triggerRef = viewChild.required<ElementRef<HTMLButtonElement>>('trigger');
  private readonly popupRef = viewChild.required<ElementRef<HTMLElement>>('popup');
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  private stopFollowing: (() => void) | null = null;

  /** Whether any option has children: then the list is a tree. */
  protected readonly tree = computed(() =>
    this.options().some((option) => option.children?.length),
  );

  /** The chosen values as an array, whatever the mode. */
  protected readonly current = computed<readonly V[]>(() => {
    if (this.multiple()) return this.values();
    const value = this.value();
    return value === null || value === undefined ? [] : [value];
  });

  protected readonly chosen = computed(() =>
    nuiFindOptions(this.options(), (value) =>
      this.current().some((v) => this.compareWith()(v, value)),
    ),
  );

  protected readonly display = computed(() => {
    const chosen = this.chosen();
    const custom = this.triggerText();
    return custom ? custom(chosen) : chosen.map((option) => option.label).join(', ');
  });

  protected readonly isSelected = (option: NuiOption<V>): boolean =>
    this.current().some((value) => this.compareWith()(value, option.value));

  protected readonly activeId = computed(() => {
    const active = this.engine.active();
    return active >= 0 ? `${this.listId}-${active}` : null;
  });

  protected readonly allSelected = computed(() => {
    const options = this.engine
      .rows()
      .filter((row) => row.kind === 'option' && !row.option!.disabled);
    return options.length > 0 && options.every((row) => this.isSelected(row.option!));
  });

  private onChange: (value: V | readonly V[] | null) => void = () => undefined;
  protected onTouched: () => void = () => undefined;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.stopFollowing?.());
  }

  /** Opens the list, with the chosen option (or the first) active. */
  show(): void {
    if (this.isDisabled() || !this.browser) return;
    const popup = this.popupRef().nativeElement;
    if (!popup.matches(':popover-open')) popup.showPopover();
  }

  hide(): void {
    const popup = this.popupRef().nativeElement;
    if (this.browser && popup.matches(':popover-open')) popup.hidePopover();
  }

  /** Before the list shows (synchronously, so a typed letter can still move on): the chosen option is active. */
  protected onBeforeToggle(event: ToggleEvent): void {
    if (event.newState !== 'open') return;
    // The list is driven from the trigger, and Safari doesn't focus a button it
    // clicks: without this, keys pressed after opening the list by mouse go nowhere.
    const trigger = this.triggerRef().nativeElement;
    if (trigger.ownerDocument.activeElement !== trigger) trigger.focus({ preventScroll: true });
    const engine = this.engine;
    const first = this.chosen()[0];
    if (first && this.tree()) engine.reveal(first);
    const chosen = engine.rows().findIndex((row) => row.option && this.isSelected(row.option));
    if (chosen >= 0) engine.activate(chosen);
    else engine.first();
  }

  protected onToggle(event: ToggleEvent): void {
    const open = event.newState === 'open';
    this.open.set(open);
    this.openChange.emit(open);
    this.stopFollowing?.();
    this.stopFollowing = null;
    if (open) {
      this.stopFollowing = nuiFollow(
        this.triggerRef().nativeElement,
        this.popupRef().nativeElement,
        {
          matchWidth: true,
        },
      );
    }
  }

  protected onKeydown(event: KeyboardEvent): void {
    const open = this.open();
    const engine = this.engine;
    const row = engine.activeRow();
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp':
        if (event.altKey && event.key === 'ArrowUp' && open) {
          if (row && !this.multiple()) this.choose(row);
          else this.hide();
        } else if (!open) this.show();
        else engine.move(event.key === 'ArrowDown' ? 1 : -1);
        break;
      case 'Home':
      case 'End':
        if (!open) this.show();
        if (event.key === 'Home') engine.first();
        else engine.last();
        break;
      case 'PageDown':
      case 'PageUp':
        if (!open) return;
        engine.move(event.key === 'PageDown' ? 10 : -10);
        break;
      case 'Enter':
      case ' ':
        if (!open) this.show();
        else if (row) this.choose(row);
        break;
      case 'ArrowRight':
      case 'ArrowLeft': {
        if (!open || !this.tree() || !row?.option) return;
        const trigger = this.triggerRef().nativeElement;
        const rtl =
          trigger.ownerDocument.defaultView?.getComputedStyle(trigger).direction === 'rtl';
        const expand = (event.key === 'ArrowRight') !== rtl;
        if (row.expandable && row.expanded !== expand) engine.toggleExpanded(row.option, expand);
        else if (expand && row.expandable) engine.move(1);
        else if (!expand && row.depth > 0) {
          // Back to the parent row.
          const rows = engine.rows();
          for (let i = engine.active() - 1; i >= 0; i--) {
            if (rows[i].depth < row.depth) {
              engine.activate(i);
              break;
            }
          }
        }
        break;
      }
      case 'Tab':
        // Tab takes the active option in a single select, as a native select does.
        if (open && row && !this.multiple()) this.choose(row);
        this.hide();
        return;
      case 'Escape':
        if (!open) return;
        this.hide();
        break;
      default:
        if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
          if (!open) this.show();
          engine.typeahead(event.key);
          break;
        }
        return;
    }
    event.preventDefault();
  }

  protected choose(row: NuiOptionRow<V>): void {
    const option = row.option;
    if (!option || option.disabled) return;
    if (row.expandable && !this.multiple() && this.tree()) {
      // In a tree, a parent row can be picked too; its chevron expands it.
      this.commit(option.value);
      this.hide();
      return;
    }
    if (this.multiple()) {
      const values = this.current();
      const next = this.isSelected(option)
        ? values.filter((value) => !this.compareWith()(value, option.value))
        : [...values, option.value];
      this.commit(next);
    } else {
      this.commit(option.value);
      this.hide();
      this.triggerRef().nativeElement.focus();
    }
  }

  protected toggleAll(): void {
    const compare = this.compareWith();
    const current = this.current();
    const visible = this.engine
      .rows()
      .filter((row) => row.kind === 'option' && !row.option!.disabled)
      .map((row) => row.option!.value);
    const shown = (value: V) => visible.some((v) => compare(v, value));
    this.commit(
      this.allSelected()
        ? current.filter((value) => !shown(value))
        : [...current, ...visible.filter((value) => !current.some((v) => compare(v, value)))],
    );
  }

  private commit(value: V | readonly V[] | null): void {
    if (this.multiple()) this.values.set(value as readonly V[]);
    else this.value.set(value as V | null);
    this.onChange(value);
  }

  writeValue(value: V | readonly V[] | null): void {
    if (this.multiple()) this.values.set(Array.isArray(value) ? value : []);
    else this.value.set((value as V | null) ?? null);
  }

  registerOnChange(fn: (value: V | readonly V[] | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.formDisabled.set(disabled);
  }

  /** Moves focus to the trigger. */
  focus(options?: FocusOptions): void {
    this.triggerRef().nativeElement.focus(options);
  }
}
