import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  booleanAttribute,
  computed,
  contentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  forwardRef,
  inject,
  input,
  model,
  numberAttribute,
  PLATFORM_ID,
  signal,
  untracked,
} from '@angular/core';
import { type NuiPaneLimits, nuiFitPanes, nuiPaneSize, nuiResizePanes } from './layout';

let nextId = 0;

/**
 * A pane of a `nuiSplitter`. Sizes take pixels, rems or percent: `240px`, `30%`.
 *
 * ```html
 * <aside nuiSplitterPane min="12rem" max="40%" collapsible label="Files">…</aside>
 * ```
 */
@Directive({
  selector: '[nuiSplitterPane]',
  host: {
    class: 'nui-splitter-pane',
    '[id]': 'id',
    '[style.flex-grow]': 'shown()',
    '[attr.data-collapsed]': 'collapsed() || null',
  },
})
export class NuiSplitterPane {
  private readonly splitter = inject(forwardRef(() => NuiSplitter));
  readonly id = `nui-pane-${nextId++}`;

  /** Its size at first, when the splitter has none to restore. */
  readonly size = input<string | number | null>(null, { alias: 'defaultSize' });
  readonly min = input<string | number>(0);
  readonly max = input<string | number>('100%');
  /** It can fold away: dragged below half its minimum, or with Enter on its handle. */
  readonly collapsible = input(false, { transform: booleanAttribute });
  /** Its size folded, such as a rail of icons. */
  readonly collapsedSize = input<string | number>(0);
  /** Names the handles that resize it, for screen readers. */
  readonly label = input<string | null>(null);

  /** Its share of the splitter, in percent. */
  protected readonly shown = computed(() => this.splitter.sizeOf(this));
  protected readonly collapsed = computed(() => this.splitter.isCollapsed(this));
}

/**
 * The handle between two panes: a focusable separator that drags, and moves with
 * the arrow keys, Home and End. Enter folds the pane before it (or after it, when
 * only that one folds) and brings it back.
 */
@Directive({
  selector: '[nuiSplitterHandle]',
  host: {
    class: 'nui-splitter-handle',
    role: 'separator',
    '[attr.tabindex]': 'disabled() ? null : 0',
    '[attr.aria-orientation]':
      "splitter.orientation() === 'horizontal' ? 'vertical' : 'horizontal'",
    '[attr.aria-valuenow]': 'value()',
    '[attr.aria-valuemin]': 'bounds().min',
    '[attr.aria-valuemax]': 'bounds().max',
    '[attr.aria-controls]': 'pane()?.id',
    '[attr.aria-label]': 'label() ?? pane()?.label() ?? null',
    '[attr.aria-disabled]': 'disabled() || null',
    '[attr.data-dragging]': 'dragging() || null',
    '(keydown)': 'onKeydown($event)',
    '(pointerdown)': 'onPointerdown($event)',
    '(dblclick)': 'toggle()',
  },
})
export class NuiSplitterHandle {
  protected readonly splitter = inject(forwardRef(() => NuiSplitter));
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  /** Names the handle for screen readers. By default, the label of the pane it resizes. */
  readonly label = input<string | null>(null);
  /** It doesn't move. */
  readonly disabled = input(false, { transform: booleanAttribute });

  protected readonly dragging = signal(false);
  /** The boundary it moves: after pane `index`. */
  protected readonly index = computed(() => this.splitter.handleIndex(this));
  /** The pane it resizes, as the separator pattern calls it: the one before it. */
  protected readonly pane = computed(() => this.splitter.paneAt(this.index()));
  protected readonly value = computed(() => Math.round(this.splitter.layout()[this.index()] ?? 0));
  protected readonly bounds = computed(() => {
    const limits = this.splitter.limits()[this.index()];
    return { min: Math.round(limits?.min ?? 0), max: Math.round(limits?.max ?? 100) };
  });

  protected onKeydown(event: KeyboardEvent): void {
    if (this.disabled()) return;
    const horizontal = this.splitter.orientation() === 'horizontal';
    const rtl = horizontal && getComputedStyle(this.element).direction === 'rtl';
    const step = this.splitter.step() * (event.shiftKey ? 2 : 1);
    const index = this.index();
    let delta = 0;
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowRight':
        if (!horizontal) return;
        delta = (event.key === 'ArrowRight' ? step : -step) * (rtl ? -1 : 1);
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        if (horizontal) return;
        delta = event.key === 'ArrowDown' ? step : -step;
        break;
      case 'Home':
      case 'End': {
        const size = this.splitter.layout()[index];
        const limits = this.splitter.limits()[index];
        delta = (event.key === 'Home' ? limits.min : limits.max) - size;
        break;
      }
      case 'Enter':
        event.preventDefault();
        this.toggle();
        return;
      default:
        return;
    }
    event.preventDefault();
    this.splitter.move(index, delta, true);
  }

  /** Folds the pane it resizes, or brings it back. */
  toggle(): void {
    if (!this.disabled()) this.splitter.toggle(this.index());
  }

  protected onPointerdown(event: PointerEvent): void {
    if (this.disabled() || event.button !== 0) return;
    event.preventDefault();
    const horizontal = this.splitter.orientation() === 'horizontal';
    const rtl = horizontal && getComputedStyle(this.element).direction === 'rtl';
    const start = horizontal ? event.clientX : event.clientY;
    const index = this.index();
    const from = [...this.splitter.layout()];
    // A pointer that isn't live (a synthetic event, one already lifted) can't be captured.
    try {
      this.element.setPointerCapture(event.pointerId);
    } catch {}
    this.dragging.set(true);
    this.splitter.dragging.set(true);
    const move = (e: PointerEvent) => {
      const px = ((horizontal ? e.clientX : e.clientY) - start) * (rtl ? -1 : 1);
      this.splitter.drag(from, index, this.splitter.toPercent(px));
    };
    const up = () => {
      this.element.removeEventListener('pointermove', move);
      this.element.removeEventListener('pointerup', up);
      this.element.removeEventListener('pointercancel', up);
      this.dragging.set(false);
      this.splitter.dragging.set(false);
      this.splitter.save();
    };
    this.element.addEventListener('pointermove', move);
    this.element.addEventListener('pointerup', up);
    this.element.addEventListener('pointercancel', up);
  }
}

/**
 * Panes side by side (or stacked, with `orientation="vertical"`) with handles to
 * resize them. Put a handle between every two panes:
 *
 * ```html
 * <div nuiSplitter [(sizes)]="sizes" storageKey="editor">
 *   <aside nuiSplitterPane min="12rem" collapsible label="Files">…</aside>
 *   <div nuiSplitterHandle></div>
 *   <main nuiSplitterPane>…</main>
 * </div>
 * ```
 *
 * Sizes are percentages that add up to 100. With `storageKey`, they're kept in
 * `localStorage` between visits.
 */
@Directive({
  selector: '[nuiSplitter]',
  exportAs: 'nuiSplitter',
  host: {
    class: 'nui-splitter',
    '[attr.data-orientation]': 'orientation()',
    '[attr.data-dragging]': 'dragging() || null',
  },
})
export class NuiSplitter {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));

  /** `horizontal` puts the panes side by side; `vertical` stacks them. */
  readonly orientation = input<'horizontal' | 'vertical'>('horizontal');
  /** Each pane's share, in percent, in order. */
  readonly sizes = model<readonly number[]>([]);
  /** Keeps the sizes in `localStorage` under this key. */
  readonly storageKey = input<string | null>(null);
  /** How far the arrow keys move a handle, in percent; twice as far with Shift. */
  readonly step = input(5, { transform: numberAttribute });

  private readonly panes = contentChildren(NuiSplitterPane);
  private readonly handles = contentChildren(NuiSplitterHandle);
  /** The pixels the panes share: the splitter less its handles. */
  private readonly room = signal(0);
  /** @internal */
  readonly dragging = signal(false);
  /** Each pane's size before it folded, to bring it back. */
  private readonly unfolded = new Map<number, number>();

  /** @internal Each pane's limits, in percent. */
  readonly limits = computed((): NuiPaneLimits[] => {
    const room = this.room();
    const rem = this.browser
      ? parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
      : 16;
    return this.panes().map((pane) => {
      const min = nuiPaneSize(pane.min(), room, rem) ?? 0;
      const max = nuiPaneSize(pane.max(), room, rem) ?? 100;
      return {
        min: Math.max(0, Math.min(100, min)),
        max: Math.max(min, Math.min(100, max)),
        collapsible: pane.collapsible(),
        collapsedSize: Math.max(0, nuiPaneSize(pane.collapsedSize(), room, rem) ?? 0),
      };
    });
  });

  /** @internal The sizes shown: the model's, fitted to the limits. */
  readonly layout = computed(() => {
    const limits = this.limits();
    const room = this.room();
    const sizes = this.sizes();
    const given = sizes.length
      ? sizes
      : this.panes().map((pane) => nuiPaneSize(pane.size(), room) ?? null);
    return nuiFitPanes(given, limits);
  });

  constructor() {
    const destroyRef = inject(DestroyRef);
    const key = untracked(this.storageKey);
    if (this.browser && key) {
      try {
        const saved = JSON.parse(localStorage.getItem(`nui-splitter:${key}`) ?? 'null');
        if (Array.isArray(saved) && saved.every((n) => typeof n === 'number'))
          this.sizes.set(saved);
      } catch {
        // Storage can be blocked; the splitter works without it.
      }
    }
    afterNextRender(() => {
      const measure = () => {
        const horizontal = this.orientation() === 'horizontal';
        const total = horizontal ? this.element.clientWidth : this.element.clientHeight;
        let handles = 0;
        for (const handle of this.element.querySelectorAll(':scope > .nui-splitter-handle')) {
          const box = handle.getBoundingClientRect();
          handles += horizontal ? box.width : box.height;
        }
        this.room.set(Math.max(0, total - handles));
      };
      measure();
      const observer = new ResizeObserver(measure);
      observer.observe(this.element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  /** @internal */
  sizeOf(pane: NuiSplitterPane): number {
    return this.layout()[this.panes().indexOf(pane)] ?? 0;
  }

  /** @internal */
  isCollapsed(pane: NuiSplitterPane): boolean {
    const index = this.panes().indexOf(pane);
    const limits = this.limits()[index];
    return (
      !!limits?.collapsible &&
      Math.abs(this.layout()[index] - limits.collapsedSize) < 0.01 &&
      limits.collapsedSize < limits.min
    );
  }

  /** @internal */
  handleIndex(handle: NuiSplitterHandle): number {
    return this.handles().indexOf(handle);
  }

  /** @internal */
  paneAt(index: number): NuiSplitterPane | undefined {
    return this.panes()[index];
  }

  /** @internal Pixels along the splitter, in percent of the room the panes share. */
  toPercent(px: number): number {
    const room = this.room();
    return room ? (px / room) * 100 : 0;
  }

  /** Moves the boundary after pane `index` by `delta` percent. */
  move(index: number, delta: number, save = false): void {
    this.sizes.set(nuiResizePanes(this.layout(), this.limits(), index, delta));
    if (save) this.save();
  }

  /**
   * @internal A drag from `from`: panes that can fold do, once dragged below half
   * their minimum, and come back when dragged out again.
   */
  drag(from: readonly number[], index: number, delta: number): void {
    const limits = this.limits();
    let next = nuiResizePanes(from, limits, index, delta);
    for (const [pane, sign] of [
      [index, 1],
      [index + 1, -1],
    ] as const) {
      const limit = limits[pane];
      if (!limit?.collapsible) continue;
      const wanted = from[pane] + sign * delta;
      if (wanted < limit.min / 2 && limit.collapsedSize < limit.min) {
        const other = pane === index ? index + 1 : index;
        const freed = next[pane] - limit.collapsedSize;
        next = [...next];
        next[pane] = limit.collapsedSize;
        next[other] += freed;
      }
    }
    this.sizes.set(next);
  }

  /** Folds pane `index` (or the next one, when only that folds), or brings it back. */
  toggle(index: number): void {
    const limits = this.limits();
    const layout = this.layout();
    const pane = limits[index]?.collapsible
      ? index
      : limits[index + 1]?.collapsible
        ? index + 1
        : -1;
    if (pane < 0) return;
    const other = pane === index ? index + 1 : index;
    const limit = limits[pane];
    const next = [...layout];
    if (Math.abs(layout[pane] - limit.collapsedSize) < 0.01) {
      const size = this.unfolded.get(pane) ?? Math.max(limit.min, 100 / layout.length);
      const take = Math.min(size - layout[pane], next[other] - limits[other].min);
      next[pane] += take;
      next[other] -= take;
    } else {
      this.unfolded.set(pane, layout[pane]);
      next[other] += layout[pane] - limit.collapsedSize;
      next[pane] = limit.collapsedSize;
    }
    this.sizes.set(nuiFitPanes(next, limits));
    this.save();
  }

  /** @internal Keeps the sizes, when there's a `storageKey`. */
  save(): void {
    const key = this.storageKey();
    if (!this.browser || !key) return;
    try {
      localStorage.setItem(
        `nui-splitter:${key}`,
        JSON.stringify(this.layout().map((n) => +n.toFixed(3))),
      );
    } catch {
      // Storage can be full or blocked.
    }
  }
}
