import { Component, computed, input, linkedSignal, output, untracked } from '@angular/core';
import { nuiParseNumber } from '@needless-ui/angular/number-field';
import type { NuiGridEngine } from './engine';
import { nuiGridOperators } from './format';
import type { NuiGridFilter, NuiGridFilterOp, NuiGridLabels } from './types';

/** Operators that take no value. */
const BARE: readonly NuiGridFilterOp[] = ['empty', 'notEmpty'];

/**
 * The column panel's content: sort, filter, pin, move, fit and hide one column,
 * and show or hide the others. The grid puts it in a popover.
 */
@Component({
  selector: 'nui-grid-panel',
  host: { class: 'nui-grid-panel-body' },
  template: `
    @let text = labels();
    <p class="nui-grid-panel-title">{{ column().header }}</p>

    @if (column().sortable !== false) {
      <div class="nui-grid-panel-section" role="group" [attr.aria-label]="text.sort">
        <span class="nui-grid-panel-label" aria-hidden="true">{{ text.sort }}</span>
        <div class="nui-grid-panel-buttons">
          <button
            type="button"
            class="nui-grid-panel-button"
            data-icon="asc"
            [attr.aria-pressed]="direction() === 'asc'"
            (click)="sortBy('asc', $event)"
          >
            {{ text.ascending }}
          </button>
          <button
            type="button"
            class="nui-grid-panel-button"
            data-icon="desc"
            [attr.aria-pressed]="direction() === 'desc'"
            (click)="sortBy('desc', $event)"
          >
            {{ text.descending }}
          </button>
        </div>
      </div>
    }

    @if (column().filterable !== false) {
      <div class="nui-grid-panel-section" role="group" [attr.aria-label]="text.filter">
        <span class="nui-grid-panel-label" aria-hidden="true">{{ text.filter }}</span>
        @switch (type()) {
          @case ('enum') {
            <div class="nui-grid-panel-choices">
              @for (option of column().options ?? []; track $index) {
                <label class="nui-grid-panel-choice">
                  <input
                    type="checkbox"
                    [checked]="chosen(option.value)"
                    (change)="choose(option.value)"
                  />
                  {{ option.label }}
                </label>
              }
            </div>
          }
          @case ('boolean') {
            <div class="nui-grid-panel-buttons">
              <button
                type="button"
                class="nui-grid-panel-button"
                [attr.aria-pressed]="filter()?.op === 'is' && filter()?.value === true"
                (click)="setIs(true)"
              >
                {{ text.yes }}
              </button>
              <button
                type="button"
                class="nui-grid-panel-button"
                [attr.aria-pressed]="filter()?.op === 'is' && filter()?.value === false"
                (click)="setIs(false)"
              >
                {{ text.no }}
              </button>
            </div>
          }
          @default {
            <select
              class="nui-grid-panel-select"
              [attr.aria-label]="text.filter"
              (change)="setOp($any($event.target).value)"
            >
              @for (option of operators(); track option) {
                <option [value]="option" [selected]="option === op()">
                  {{ text.operators[option] }}
                </option>
              }
            </select>
            @if (!bare()) {
              <input
                class="nui-grid-panel-input"
                [type]="type() === 'date' ? 'date' : 'text'"
                [attr.inputmode]="type() === 'number' ? 'decimal' : null"
                [attr.aria-label]="op() === 'between' ? text.value : text.filter"
                [value]="draft().value"
                (input)="setDraft('value', $any($event.target).value)"
              />
            }
            @if (op() === 'between') {
              <input
                class="nui-grid-panel-input"
                [type]="type() === 'date' ? 'date' : 'text'"
                [attr.inputmode]="type() === 'number' ? 'decimal' : null"
                [attr.aria-label]="text.to"
                [value]="draft().to"
                (input)="setDraft('to', $any($event.target).value)"
              />
            }
          }
        }
        @if (filter()) {
          <button type="button" class="nui-grid-panel-link" (click)="clearFilter()">
            {{ text.clearFilter }}
          </button>
        }
      </div>
    }

    <div class="nui-grid-panel-section" role="group" [attr.aria-label]="text.pin">
      <span class="nui-grid-panel-label" aria-hidden="true">{{ text.pin }}</span>
      <div class="nui-grid-panel-buttons">
        <button
          type="button"
          class="nui-grid-panel-button"
          [attr.aria-pressed]="pinned() === 'start'"
          (click)="engine().pin(columnId(), 'start')"
        >
          {{ text.pinStart }}
        </button>
        <button
          type="button"
          class="nui-grid-panel-button"
          [attr.aria-pressed]="pinned() === null"
          (click)="engine().pin(columnId(), null)"
        >
          {{ text.unpin }}
        </button>
        <button
          type="button"
          class="nui-grid-panel-button"
          [attr.aria-pressed]="pinned() === 'end'"
          (click)="engine().pin(columnId(), 'end')"
        >
          {{ text.pinEnd }}
        </button>
      </div>
    </div>

    <div class="nui-grid-panel-actions">
      <button
        type="button"
        class="nui-grid-panel-action"
        data-icon="back"
        [disabled]="!engine().canMove(columnId(), -1)"
        (click)="engine().move(columnId(), -1)"
      >
        {{ text.moveBack }}
      </button>
      <button
        type="button"
        class="nui-grid-panel-action"
        data-icon="forward"
        [disabled]="!engine().canMove(columnId(), 1)"
        (click)="engine().move(columnId(), 1)"
      >
        {{ text.moveForward }}
      </button>
      @if (column().resizable !== false) {
        <button type="button" class="nui-grid-panel-action" data-icon="fit" (click)="fit.emit()">
          {{ text.fit }}
        </button>
      }
      @if (column().hideable !== false) {
        <button
          type="button"
          class="nui-grid-panel-action"
          data-icon="hide"
          [disabled]="lastVisible()"
          (click)="hide.emit()"
        >
          {{ text.hide }}
        </button>
      }
    </div>

    <details class="nui-grid-panel-columns">
      <summary>{{ text.columns }}</summary>
      @for (entry of engine().state(); track entry.id) {
        @let other = engine().byId().get(entry.id)!;
        <label class="nui-grid-panel-choice">
          <input
            type="checkbox"
            [checked]="!entry.hidden"
            [disabled]="other.hideable === false || (!entry.hidden && lastVisible())"
            (change)="engine().hide(entry.id, !$any($event.target).checked)"
          />
          {{ other.header }}
        </label>
      }
    </details>
  `,
})
export class NuiGridPanel<T> {
  readonly engine = input.required<NuiGridEngine<T>>();
  readonly columnId = input.required<string>();
  readonly labels = input.required<NuiGridLabels>();
  readonly locale = input('en');
  /** Fit the column to its content: the grid measures it. */
  readonly fit = output<void>();
  /** Hide the column: the grid moves focus away first. */
  readonly hide = output<void>();

  protected readonly column = computed(() => this.engine().byId().get(this.columnId())!);
  protected readonly type = computed(() => this.column().type ?? 'text');
  protected readonly filter = computed(() => this.engine().filters()[this.columnId()] ?? null);
  protected readonly operators = computed(() => nuiGridOperators(this.column()));
  protected readonly direction = computed(
    () =>
      this.engine()
        .sort()
        .find((sort) => sort.column === this.columnId())?.direction ?? null,
  );
  protected readonly pinned = computed(
    () =>
      this.engine()
        .layout()
        .find((column) => column.id === this.columnId())?.pinned ?? null,
  );
  protected readonly lastVisible = computed(() => this.engine().layout().length <= 1);

  /**
   * The chosen operator and the typed values. They start from the column's filter
   * and then follow the form alone, so the filter they make never rewrites what's
   * being typed ("1." stays "1."), and emptying the value keeps the operator.
   */
  protected readonly op = linkedSignal<string, NuiGridFilterOp>({
    source: this.columnId,
    computation: () => untracked(() => this.filter()?.op ?? this.operators()[0]),
  });
  protected readonly bare = computed(() => BARE.includes(this.op()));
  protected readonly draft = linkedSignal({
    source: this.columnId,
    computation: () =>
      untracked(() => {
        const filter = this.filter();
        const shown = (value: unknown) =>
          value === undefined || value === null
            ? ''
            : this.type() === 'number'
              ? new Intl.NumberFormat(this.locale(), { useGrouping: false }).format(Number(value))
              : String(value);
        return { value: shown(filter?.value), to: shown(filter?.to) };
      }),
  });

  protected sortBy(direction: 'asc' | 'desc', event: MouseEvent): void {
    const engine = this.engine();
    engine.setSort(
      this.columnId(),
      this.direction() === direction ? null : direction,
      event.shiftKey,
    );
  }

  protected setOp(op: NuiGridFilterOp): void {
    this.op.set(op);
    this.apply();
  }

  protected setDraft(part: 'value' | 'to', text: string): void {
    this.draft.update((draft) => ({ ...draft, [part]: text }));
    this.apply();
  }

  protected setIs(value: boolean): void {
    const current = this.filter();
    const same = current?.op === 'is' && current.value === value;
    this.engine().setFilter(this.columnId(), same ? null : { op: 'is', value });
  }

  protected chosen(value: unknown): boolean {
    const filter = this.filter();
    return filter?.op === 'in' && (filter.value as readonly unknown[]).includes(value);
  }

  /** Ticking a choice filters to the ticked ones; none ticked is no filter. */
  protected choose(value: unknown): void {
    const filter = this.filter();
    const current = filter?.op === 'in' ? (filter.value as readonly unknown[]) : [];
    const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
    this.engine().setFilter(this.columnId(), next.length ? { op: 'in', value: next } : null);
  }

  protected clearFilter(): void {
    this.engine().setFilter(this.columnId(), null);
    this.draft.set({ value: '', to: '' });
  }

  /** Turns the form into the column's filter, or none while it's empty. */
  private apply(): void {
    const op = this.op();
    const { value, to } = this.draft();
    const read = (text: string) =>
      !text.trim()
        ? undefined
        : this.type() === 'number'
          ? (nuiParseNumber(text, this.locale()) ?? undefined)
          : text;
    let filter: NuiGridFilter | null;
    if (this.bare()) filter = { op };
    else if (op === 'between') {
      const [from, until] = [read(value), read(to)];
      filter = from === undefined && until === undefined ? null : { op, value: from, to: until };
    } else {
      const parsed = read(value);
      filter = parsed === undefined ? null : { op, value: parsed };
    }
    this.engine().setFilter(this.columnId(), filter);
  }
}
