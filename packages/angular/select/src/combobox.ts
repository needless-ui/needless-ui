import { _IdGenerator } from '@angular/cdk/a11y';
import { isPlatformBrowser } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  contentChild,
  DestroyRef,
  DOCUMENT,
  effect,
  ElementRef,
  forwardRef,
  inject,
  input,
  model,
  output,
  PLATFORM_ID,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { type ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { nuiFollow, nuiOnCloseRequest } from '@needless-ui/angular';
import { nuiFindOptions, type NuiOption, NuiOptionEngine, type NuiOptionRow } from './engine';
import { NuiOptionList, NuiOptionTemplate } from './list';

/** The value of the "Add …" row, told apart from every real value. */
const CREATE = Symbol('create');

/**
 * A text field that suggests options as you type: fuzzy search with highlights,
 * one value or many (as chips), options loaded from a server, and free text when
 * `create` is given.
 *
 * ```html
 * <nui-combobox label="Country" [options]="countries" [(value)]="country" />
 * <nui-combobox label="Tags" multiple [options]="tags" [create]="newTag" [(values)]="picked" />
 * <nui-combobox label="User" [options]="users()" [loading]="searching()" [filtering]="false"
 *               (queryChange)="search($event)" [(value)]="user" />
 * ```
 *
 * The input is an editable combobox with list autocomplete (WAI-ARIA): focus stays
 * in it while ↑ ↓ move through the list. With `multiple`, Backspace in an empty
 * field removes the last chip and ← from its start walks through the chips. Works
 * with Signal Forms (`[formField]`), reactive forms and `ngModel`.
 */
@Component({
  selector: 'nui-combobox',
  imports: [NuiOptionList],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NuiCombobox), multi: true },
  ],
  host: {
    class: 'nui-combobox',
    '(click)': 'onHostClick($event)',
    '(focusout)': 'onFocusOut($event)',
  },
  template: `
    @if (multiple() && chosen().length) {
      <span class="nui-select-chips" role="list" [attr.aria-label]="chipsLabel()">
        @for (option of chosen(); track option.value) {
          <span class="nui-select-chip" role="listitem">
            {{ option.label }}
            <button
              type="button"
              class="nui-select-chip-remove"
              tabindex="-1"
              [attr.aria-label]="removeLabel()(option.label)"
              [disabled]="isDisabled()"
              (mousedown)="$event.preventDefault()"
              (click)="remove(option); focus()"
              (keydown)="onChipKeydown($event, $index)"
            ></button>
          </span>
        }
      </span>
    }
    <input
      #input
      class="nui-combobox-input"
      type="text"
      role="combobox"
      autocomplete="off"
      aria-autocomplete="list"
      [id]="inputId() || null"
      [attr.aria-label]="label() || null"
      [attr.aria-expanded]="open()"
      [attr.aria-controls]="open() ? listId : null"
      [attr.aria-activedescendant]="open() ? activeId() : null"
      [placeholder]="multiple() && chosen().length ? '' : placeholder()"
      [value]="text()"
      [disabled]="isDisabled()"
      (input)="onInput($event)"
      (keydown)="onKeydown($event)"
      (click)="show()"
    />
    @if (clearable() && (text() || chosen().length)) {
      <button
        type="button"
        class="nui-combobox-clear"
        tabindex="-1"
        [attr.aria-label]="clearLabel()"
        [disabled]="isDisabled()"
        (mousedown)="$event.preventDefault()"
        (click)="clear()"
      ></button>
    }
    <button
      type="button"
      class="nui-combobox-toggle"
      tabindex="-1"
      [attr.aria-label]="toggleLabel()"
      [attr.aria-expanded]="open()"
      [attr.aria-controls]="open() ? listId : null"
      [disabled]="isDisabled()"
      (mousedown)="$event.preventDefault()"
      (click)="toggle()"
    ></button>
    <div
      #popup
      class="nui-select-popup"
      popover="manual"
      [id]="popupId"
      (toggle)="onToggle($event)"
    >
      @if (open()) {
        <nui-option-list
          [engine]="engine"
          [listId]="listId"
          [label]="label()"
          [multiple]="multiple()"
          [virtual]="virtual()"
          [selected]="isSelected"
          [template]="template()"
          (choose)="choose($event)"
        />
        @if (loading()) {
          <div class="nui-select-loading" role="status">{{ loadingLabel() }}</div>
        } @else if (!engine.size()) {
          <div class="nui-select-empty" role="status">{{ emptyLabel() }}</div>
        }
      }
    </div>
  `,
})
export class NuiCombobox<V = unknown> implements ControlValueAccessor {
  readonly options = input.required<readonly NuiOption<V>[]>();
  /** The chosen value. Bind with `[(value)]`. */
  readonly value = model<V | null>(null);
  /** The chosen values, with `multiple`. Bind with `[(values)]`. */
  readonly values = model<readonly V[]>([]);
  readonly multiple = input(false, { transform: booleanAttribute });
  readonly placeholder = input('');
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Accessible name, when no `<label for>` names the input. */
  readonly label = input('');
  /** Id of the input, for `<label for>`. */
  readonly inputId = input('');
  /** Whether two values are the same option. Defaults to `Object.is`. */
  readonly compareWith = input<(a: V, b: V) => boolean>(Object.is);
  /** The text for a value that isn't among the options, such as one set before they load. */
  readonly displayWith = input<(value: V) => string>((value) => String(value));
  /** Filters the options as you type. Turn off when the server filters them. */
  readonly filtering = input(true, { transform: booleanAttribute });
  /** Shows a loading row, for options fetched while typing. */
  readonly loading = input(false, { transform: booleanAttribute });
  /** Makes a value from free text: the list then offers to add what was typed. */
  readonly create = input<(text: string) => V>();
  /** Adds a button that clears the value, and lets Escape clear it. */
  readonly clearable = input(false, { transform: booleanAttribute });
  /** Renders only the rows in view: always, never, or above 200 rows. */
  readonly virtual = input<boolean | 'auto'>('auto');
  /** Emits the text as it's typed, for searching on a server. */
  readonly queryChange = output<string>();
  /** Emits when the list opens or closes. */
  readonly openChange = output<boolean>();

  readonly emptyLabel = input('No matches');
  readonly loadingLabel = input('Loading…');
  readonly clearLabel = input('Clear');
  readonly toggleLabel = input('Show options');
  readonly chipsLabel = input('Selected');
  readonly removeLabel = input<(label: string) => string>((label) => `Remove ${label}`);
  readonly createLabel = input<(text: string) => string>((text) => `Add “${text}”`);

  protected readonly engine: NuiOptionEngine<V> = new NuiOptionEngine<V>({
    options: () => this.options(),
    filtering: () => this.filtering(),
    extra: () => {
      const create = this.createOption();
      return create ? [create] : [];
    },
  });
  protected readonly template = contentChild(NuiOptionTemplate<V>);
  protected readonly open = signal(false);
  protected readonly text = signal('');
  protected readonly listId = inject(_IdGenerator).getId('nui-combobox-list-');
  protected readonly popupId = `${this.listId}-popup`;
  private readonly formDisabled = signal(false);
  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

  private readonly inputRef = viewChild.required<ElementRef<HTMLInputElement>>('input');
  private readonly popupRef = viewChild.required<ElementRef<HTMLElement>>('popup');
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly document = inject(DOCUMENT);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  private stopFollowing: (() => void) | null = null;
  private stopWatching: (() => void) | null = null;
  /** Options chosen earlier, so their labels survive a new list from the server. */
  private readonly remembered = signal<readonly NuiOption<V>[]>([]);

  /** The chosen values as an array, whatever the mode. */
  protected readonly current = computed<readonly V[]>(() => {
    if (this.multiple()) return this.values();
    const value = this.value();
    return value === null || value === undefined ? [] : [value];
  });

  /** The chosen options, in the order they were chosen. */
  protected readonly chosen = computed(() => {
    const compare = this.compareWith();
    const values = this.current();
    const pool = [
      ...nuiFindOptions(this.options(), (value) => values.some((v) => compare(v, value))),
      ...this.remembered(),
    ];
    return values.map(
      (value) =>
        pool.find((option) => compare(option.value, value)) ?? {
          value,
          label: this.displayWith()(value),
        },
    );
  });

  protected readonly isSelected = (option: NuiOption<V>): boolean =>
    this.current().some((value) => this.compareWith()(value, option.value));

  protected readonly activeId = computed(() => {
    const active = this.engine.active();
    return active >= 0 ? `${this.listId}-${active}` : null;
  });

  /** The "Add …" row, while the typed text isn't an option already. */
  private readonly createOption = computed<NuiOption<V> | null>(() => {
    const typed = this.engine.query().trim();
    if (!this.create() || !typed) return null;
    const same = (option: NuiOption<V>) =>
      option.label.localeCompare(typed, undefined, { sensitivity: 'accent' }) === 0;
    const exists =
      nuiFindOptions(this.options(), () => true).some(same) || this.chosen().some(same);
    return exists ? null : { value: CREATE as V, label: this.createLabel()(typed) };
  });

  private onChange: (value: V | readonly V[] | null) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  constructor() {
    // Trees list flat, with paths: ← and → belong to the text.
    this.engine.tree.set(false);
    // A single combobox shows the chosen label while it isn't being edited.
    effect(() => {
      const label = this.multiple() ? '' : (this.chosen()[0]?.label ?? '');
      untracked(() => {
        if (!this.open()) this.text.set(label);
      });
    });

    if (!this.browser) return;
    // The list is a manual popover, so it closes on presses outside the field ourselves.
    const onPointerDown = (event: PointerEvent) => {
      if (this.open() && !this.host.contains(event.target as Node)) this.hide();
    };
    this.document.addEventListener('pointerdown', onPointerDown, true);
    inject(DestroyRef).onDestroy(() => {
      this.document.removeEventListener('pointerdown', onPointerDown, true);
      this.stopFollowing?.();
      this.stopWatching?.();
    });
  }

  /** Opens the list, with the chosen option (or the first) active. */
  show(): void {
    if (this.isDisabled() || !this.browser) return;
    const popup = this.popupRef().nativeElement;
    if (popup.matches(':popover-open')) return;
    if (!this.engine.query()) {
      const chosen = this.multiple()
        ? -1
        : this.engine.rows().findIndex((row) => row.option && this.isSelected(row.option));
      if (chosen >= 0) this.engine.activate(chosen);
      else this.engine.first();
    }
    popup.showPopover();
  }

  hide(): void {
    const popup = this.popupRef().nativeElement;
    if (this.browser && popup.matches(':popover-open')) popup.hidePopover();
  }

  protected toggle(): void {
    if (this.open()) this.hide();
    else this.show();
    this.inputRef().nativeElement.focus();
  }

  protected onToggle(event: ToggleEvent): void {
    const open = event.newState === 'open';
    this.open.set(open);
    this.openChange.emit(open);
    this.stopFollowing?.();
    this.stopWatching?.();
    this.stopFollowing = this.stopWatching = null;
    if (open) {
      this.stopFollowing = nuiFollow(this.host, this.popupRef().nativeElement, {
        matchWidth: true,
      });
      // Android's back gesture closes the list, as Escape does. (Escape itself is
      // handled in onKeydown, which prevents its default: the watcher never sees it.)
      this.stopWatching = nuiOnCloseRequest(() => this.hide());
    } else {
      // Unfinished text goes: a single combobox shows its value again.
      this.text.set(this.multiple() ? '' : (this.chosen()[0]?.label ?? ''));
      this.setQuery('');
    }
  }

  protected onInput(event: Event): void {
    const text = (event.target as HTMLInputElement).value;
    this.text.set(text);
    this.setQuery(text);
    this.show();
  }

  protected onKeydown(event: KeyboardEvent): void {
    // Keys that confirm an IME composition (Enter, arrows) belong to the IME.
    if (event.isComposing) return;
    const engine = this.engine;
    const open = this.open();
    const row = engine.activeRow();
    const input = this.inputRef().nativeElement;
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp':
        if (event.altKey) {
          if (event.key === 'ArrowDown') this.show();
          else this.hide();
        } else if (!open) {
          this.show();
          if (event.key === 'ArrowUp') engine.last();
        } else engine.move(event.key === 'ArrowDown' ? 1 : -1);
        break;
      case 'PageDown':
      case 'PageUp':
        if (!open) return;
        engine.move(event.key === 'PageDown' ? 10 : -10);
        break;
      case 'Enter':
        if (!open || !row) return;
        this.choose(row);
        break;
      case 'Escape':
        if (open) this.hide();
        else if (this.multiple() && this.text()) this.setText('');
        else if (!this.multiple() && this.clearable() && this.current().length) this.clear();
        else return;
        break;
      case 'Backspace':
        if (!this.multiple() || input.value || !this.current().length) return;
        this.commit(this.current().slice(0, -1));
        break;
      case 'ArrowLeft':
      case 'ArrowRight': {
        // From the start of the text into the chips (→ in right-to-left text).
        const back = this.rtl() ? 'ArrowRight' : 'ArrowLeft';
        const chips = this.chipButtons();
        if (event.key !== back || input.selectionStart !== 0 || input.selectionEnd !== 0) return;
        if (!chips.length) return;
        chips[chips.length - 1].focus();
        break;
      }
      default:
        return;
    }
    event.preventDefault();
  }

  protected onChipKeydown(event: KeyboardEvent, index: number): void {
    const chips = this.chipButtons();
    const input = this.inputRef().nativeElement;
    const [back, forward] = this.rtl() ? ['ArrowRight', 'ArrowLeft'] : ['ArrowLeft', 'ArrowRight'];
    switch (event.key) {
      case back:
        chips[index - 1]?.focus();
        break;
      case forward:
        (chips[index + 1] ?? input).focus();
        break;
      case 'Backspace':
      case 'Delete':
        this.remove(this.chosen()[index]);
        // The chip is gone: focus its neighbour, or the input.
        (chips[index - 1] ?? input).focus();
        break;
      case 'Escape':
        input.focus();
        break;
      default:
        return;
    }
    event.preventDefault();
  }

  protected onHostClick(event: MouseEvent): void {
    // Clicks on the field's padding go to the input.
    if (event.target === this.host) this.inputRef().nativeElement.focus();
  }

  protected onFocusOut(event: FocusEvent): void {
    if (this.host.contains(event.relatedTarget as Node | null)) return;
    this.hide();
    this.onTouched();
  }

  protected choose(row: NuiOptionRow<V>): void {
    const option = row.option;
    if (!option || option.disabled) return;
    if (option.value === CREATE) {
      const typed = this.engine.query().trim();
      this.pick({ value: this.create()!(typed), label: typed });
    } else if (this.multiple() && this.isSelected(option)) {
      this.remove(option);
    } else {
      this.pick(option);
    }
  }

  protected remove(option: NuiOption<V>): void {
    const compare = this.compareWith();
    this.commit(this.current().filter((value) => !compare(value, option.value)));
  }

  /** Clears the value and the text. */
  clear(): void {
    this.commit(this.multiple() ? [] : null);
    this.setText('');
    this.inputRef().nativeElement.focus();
  }

  private pick(option: NuiOption<V>): void {
    const compare = this.compareWith();
    this.remembered.update((list) => [
      option,
      ...list.filter((o) => !compare(o.value, option.value)),
    ]);
    if (this.multiple()) {
      if (!this.isSelected(option)) this.commit([...this.current(), option.value]);
      // The list stays open for the next pick, with every option back.
      this.setText('');
    } else {
      this.commit(option.value);
      this.text.set(option.label);
      this.hide();
    }
  }

  private setText(text: string): void {
    this.text.set(text);
    this.setQuery(text);
  }

  private setQuery(query: string): void {
    if (this.engine.query() === query) return;
    this.engine.query.set(query);
    this.queryChange.emit(query);
  }

  private rtl(): boolean {
    return this.document.defaultView?.getComputedStyle(this.host).direction === 'rtl';
  }

  private chipButtons(): HTMLButtonElement[] {
    return [...this.host.querySelectorAll<HTMLButtonElement>('.nui-select-chip-remove')];
  }

  private commit(value: V | readonly V[] | null): void {
    if (this.multiple()) this.values.set(value as readonly V[]);
    else this.value.set(value as V | null);
    // Forget the labels of options no longer chosen.
    const compare = this.compareWith();
    const values = this.current();
    this.remembered.update((list) => list.filter((o) => values.some((v) => compare(v, o.value))));
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

  /** Moves focus to the input. */
  focus(options?: FocusOptions): void {
    this.inputRef().nativeElement.focus(options);
  }
}
