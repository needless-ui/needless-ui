import { LiveAnnouncer } from '@angular/cdk/a11y';
import { isPlatformBrowser } from '@angular/common';
import {
  afterRenderEffect,
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  DOCUMENT,
  effect,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
  Service,
  signal,
  untracked,
  viewChildren,
} from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';

/** The palette and icon of a toast. Mirrors `data-tone` in @needless-ui/css. */
export type NuiToastTone = 'neutral' | 'accent' | 'success' | 'warning' | 'danger';

/** Where the stack sits. Mirrors `data-position`; start and end follow the text direction. */
export type NuiToasterPosition =
  'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';

/** One button on a toast, such as Undo. Running it dismisses the toast. */
export interface NuiToastAction {
  label: string;
  run: () => void;
}

export interface NuiToastOptions {
  /** One short line. */
  title: string;
  description?: string;
  tone?: NuiToastTone;
  /** Milliseconds on screen. `Infinity` keeps it until dismissed. Defaults to 5 s, or 8 s for danger. */
  duration?: number;
  action?: NuiToastAction;
  /** Whether it has a close button and can be swiped away or closed with Escape. Defaults to true. */
  dismissible?: boolean;
  /** Showing a toast with the id of one on screen replaces it in place. */
  id?: string;
}

/** A toast as the region renders it. */
export interface NuiToast {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly tone: NuiToastTone;
  readonly duration: number;
  readonly action?: NuiToastAction;
  readonly dismissible: boolean;
  /** Waiting on a promise: shows a spinner and never times out. */
  readonly loading: boolean;
  /** Counts updates in place; each one restarts the timer. */
  readonly version: number;
}

export interface NuiToastRef {
  readonly id: string;
  update(options: Partial<NuiToastOptions>): void;
  dismiss(): void;
}

/** A message for `promise()`: text, full options, or a function of the result. */
export type NuiToastMessage<T> =
  string | NuiToastOptions | ((value: T) => string | NuiToastOptions);

const DURATION = 5000;
const DANGER_DURATION = 8000;
let nextId = 0;

interface Timer {
  remaining: number;
  started: number;
  handle?: ReturnType<typeof setTimeout>;
}

/**
 * Shows toasts: short messages that confirm, warn or offer an action, without
 * taking focus. Put one `<nui-toaster>` in the app shell, then from anywhere:
 *
 * ```ts
 * const toaster = inject(NuiToaster);
 * toaster.success('Saved');
 * toaster.show({ title: 'Deleted 3 files', action: { label: 'Undo', run: restore } });
 * toaster.promise(upload(file), {
 *   loading: 'Uploading…',
 *   success: (url) => ({ title: 'Uploaded', description: url }),
 *   danger: 'Upload failed',
 * });
 * ```
 *
 * Every toast is announced to screen readers when it appears, politely, or
 * assertively for danger. Timers stop while the stack is hovered or focused, and
 * while the page is in the background.
 */
@Service()
export class NuiToaster {
  private readonly announcer = inject(LiveAnnouncer);
  private readonly list = signal<readonly NuiToast[]>([]);
  private readonly timers = new Map<string, Timer>();
  private paused = false;

  /** Every toast on screen, newest first. */
  readonly toasts = this.list.asReadonly();

  show(options: NuiToastOptions | string): NuiToastRef {
    return this.put(typeof options === 'string' ? { title: options } : options, false);
  }

  success(title: string, options?: Omit<NuiToastOptions, 'title' | 'tone'>): NuiToastRef {
    return this.show({ ...options, title, tone: 'success' });
  }

  warning(title: string, options?: Omit<NuiToastOptions, 'title' | 'tone'>): NuiToastRef {
    return this.show({ ...options, title, tone: 'warning' });
  }

  danger(title: string, options?: Omit<NuiToastOptions, 'title' | 'tone'>): NuiToastRef {
    return this.show({ ...options, title, tone: 'danger' });
  }

  /**
   * Shows `loading` until the promise settles, then turns the same toast into
   * `success` or `danger`. Returns the promise, so it can be awaited in place.
   */
  promise<T>(
    promise: Promise<T>,
    messages: {
      loading: string | NuiToastOptions;
      success: NuiToastMessage<T>;
      danger: NuiToastMessage<unknown>;
    },
  ): Promise<T> {
    const { id } = this.put(options(messages.loading), true);
    promise.then(
      (value) => this.put({ tone: 'success', ...resolve(messages.success, value), id }, false),
      (error: unknown) =>
        this.put({ tone: 'danger', ...resolve(messages.danger, error), id }, false),
    );
    return promise;
  }

  /** Dismisses one toast, or every toast. */
  dismiss(id?: string): void {
    const gone = id === undefined ? this.list() : this.list().filter((toast) => toast.id === id);
    for (const toast of gone) this.clearTimer(toast.id);
    this.list.update((list) => (id === undefined ? [] : list.filter((toast) => toast.id !== id)));
  }

  /** @internal Called by the region while it is hovered, focused or hidden. */
  pause(): void {
    if (this.paused) return;
    this.paused = true;
    const now = Date.now();
    for (const timer of this.timers.values()) {
      clearTimeout(timer.handle);
      timer.remaining -= now - timer.started;
    }
  }

  /** @internal */
  resume(): void {
    if (!this.paused) return;
    this.paused = false;
    for (const [id, timer] of this.timers) this.startTimer(id, timer);
  }

  private put(options: NuiToastOptions, loading: boolean): NuiToastRef {
    const id = options.id ?? `nui-toast-${nextId++}`;
    const previous = this.list().find((toast) => toast.id === id);
    const tone = options.tone ?? 'neutral';
    const toast: NuiToast = {
      id,
      title: options.title,
      description: options.description,
      tone,
      duration: loading
        ? Infinity
        : (options.duration ?? (tone === 'danger' ? DANGER_DURATION : DURATION)),
      action: options.action,
      dismissible: options.dismissible ?? true,
      loading,
      version: previous ? previous.version + 1 : 0,
    };
    this.list.update((list) =>
      previous ? list.map((item) => (item.id === id ? toast : item)) : [toast, ...list],
    );
    this.announcer.announce(
      [toast.title, toast.description].filter(Boolean).join('. '),
      tone === 'danger' ? 'assertive' : 'polite',
    );
    this.clearTimer(id);
    if (Number.isFinite(toast.duration)) {
      const timer: Timer = { remaining: toast.duration, started: Date.now() };
      this.timers.set(id, timer);
      if (!this.paused) this.startTimer(id, timer);
    }
    return {
      id,
      update: (changes) => {
        const current = this.list().find((item) => item.id === id);
        if (current) this.put({ ...current, ...changes, id }, false);
      },
      dismiss: () => this.dismiss(id),
    };
  }

  private startTimer(id: string, timer: Timer): void {
    timer.started = Date.now();
    timer.handle = setTimeout(() => this.dismiss(id), Math.max(0, timer.remaining));
  }

  private clearTimer(id: string): void {
    clearTimeout(this.timers.get(id)?.handle);
    this.timers.delete(id);
  }
}

function options(message: string | NuiToastOptions): NuiToastOptions {
  return typeof message === 'string' ? { title: message } : message;
}

function resolve<T>(message: NuiToastMessage<T>, value: T): NuiToastOptions {
  return options(typeof message === 'function' ? message(value) : message);
}

const SWIPE_DISTANCE = 0.35;
const SWIPE_VELOCITY = 0.5;

/**
 * The region where toasts appear. Place it once, for example at the end of the
 * app component's template:
 *
 * ```html
 * <nui-toaster position="bottom-end" />
 * ```
 *
 * It renders in the top layer, above dialogs and menus. Toasts pile up behind the
 * newest one and fan out on hover or focus; Alt+T moves focus to the newest,
 * Escape dismisses the focused one, and a sideways swipe throws one away.
 */
@Component({
  selector: 'nui-toaster',
  imports: [NuiButton],
  host: {
    class: 'nui-toaster',
    role: 'region',
    popover: 'manual',
    '[attr.aria-label]': 'label()',
    '[attr.data-position]': 'position()',
    '[attr.data-expanded]': 'expanded() ? "" : null',
    '[attr.data-paused]': 'paused() ? "" : null',
    '(pointerenter)': 'hovered.set(true)',
    '(pointerleave)': 'hovered.set(false)',
    '(focusin)': 'focused.set(true)',
    '(focusout)': 'onFocusOut($event)',
    '(keydown.escape)': 'dismissFocused($event)',
  },
  template: `
    <ol class="nui-toaster-list" [style.--_front.px]="front()" [style.--_stack.px]="stack()">
      @for (toast of toaster.toasts(); track toast.id; let index = $index) {
        <li
          #item
          class="nui-toast"
          tabindex="-1"
          animate.leave="nui-toast-leave"
          [attr.data-id]="toast.id"
          [attr.data-tone]="toast.tone === 'neutral' ? null : toast.tone"
          [attr.data-loading]="toast.loading ? '' : null"
          [style.--_index]="index"
          [style.--_offset.px]="offsets()[index]"
          [style.--_duration.ms]="toast.duration"
          (pointerdown)="swipe($event, toast)"
        >
          <div class="nui-toast-body">
            <p class="nui-toast-title">{{ toast.title }}</p>
            @if (toast.description) {
              <p class="nui-toast-description">{{ toast.description }}</p>
            }
          </div>
          @if (toast.action; as action) {
            <button
              nuiButton
              type="button"
              size="sm"
              variant="soft"
              tone="neutral"
              (click)="run(toast, action)"
            >
              {{ action.label }}
            </button>
          }
          @if (toast.dismissible) {
            <button
              type="button"
              class="nui-toast-close"
              [attr.aria-label]="closeLabel()"
              (click)="toaster.dismiss(toast.id)"
            ></button>
          }
          @if (toast.duration !== infinity) {
            <!-- Re-created on every update, which restarts its countdown. -->
            @for (version of [toast.version]; track version) {
              <span class="nui-toast-timer" aria-hidden="true"></span>
            }
          }
        </li>
      }
    </ol>
  `,
})
export class NuiToasterRegion {
  /** Corner or edge of the viewport. */
  readonly position = input<NuiToasterPosition>('bottom-end');
  /** Keeps the stack fanned out instead of piled up. */
  readonly expanded = input(false, { transform: booleanAttribute });
  /** Accessible name of the region. Say how to reach it: "Notifications (Alt+T)". */
  readonly label = input('Notifications (Alt+T)');
  /** Accessible name of every close button. */
  readonly closeLabel = input('Dismiss');
  /** The key (a `KeyboardEvent.code`) that, with Alt, moves focus to the newest toast. */
  readonly hotkey = input('KeyT');

  protected readonly toaster = inject(NuiToaster);
  protected readonly infinity = Infinity;
  protected readonly hovered = signal(false);
  protected readonly focused = signal(false);
  private readonly hidden = signal(false);
  protected readonly paused = computed(() => this.hovered() || this.focused() || this.hidden());

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly document = inject(DOCUMENT);
  private readonly items = viewChildren<ElementRef<HTMLLIElement>>('item');
  private readonly heights = signal<readonly number[]>([]);
  private readonly gap = signal(0);
  private returnFocus: HTMLElement | null = null;

  protected readonly offsets = computed(() => {
    const heights = this.heights();
    let offset = 0;
    return heights.map((height) => {
      const current = offset;
      offset += height + this.gap();
      return current;
    });
  });
  protected readonly front = computed(() => this.heights()[0] ?? 0);
  protected readonly stack = computed(() =>
    this.heights().reduce((sum, height, i) => sum + height + (i ? this.gap() : 0), 0),
  );

  constructor() {
    effect(() => {
      const paused = this.paused();
      untracked(() => (paused ? this.toaster.pause() : this.toaster.resume()));
    });

    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;
    const view = this.document.defaultView!;
    const measure = () => {
      const items = this.items().map((item) => item.nativeElement);
      this.heights.set(items.map((item) => item.offsetHeight));
      const list = this.host.firstElementChild;
      if (list) this.gap.set(parseFloat(view.getComputedStyle(list).rowGap) || 0);
    };
    const observer = new ResizeObserver(measure);
    const onVisibility = () => this.hidden.set(this.document.visibilityState === 'hidden');
    const onKeydown = (event: KeyboardEvent) => {
      // By code, not key: on a Mac, Option+T types a dagger.
      if (!event.altKey || event.code !== this.hotkey()) return;
      const newest = this.items()[0]?.nativeElement;
      if (!newest) return;
      event.preventDefault();
      const active = this.document.activeElement;
      if (active instanceof HTMLElement && !this.host.contains(active)) this.returnFocus = active;
      newest.focus();
    };
    this.document.addEventListener('visibilitychange', onVisibility);
    this.document.addEventListener('keydown', onKeydown);
    inject(DestroyRef).onDestroy(() => {
      observer.disconnect();
      this.document.removeEventListener('visibilitychange', onVisibility);
      this.document.removeEventListener('keydown', onKeydown);
      this.toaster.resume();
    });

    afterRenderEffect(() => {
      const items = this.items();
      observer.disconnect();
      for (const item of items) observer.observe(item.nativeElement);
      measure();
      const host = this.host;
      if (!host.matches(':popover-open')) host.showPopover?.();
      // A modal dialog opened after the region would cover it: bring the region back on top.
      else if (items.length && this.document.querySelector('dialog:modal')) {
        host.hidePopover();
        host.showPopover();
      }
    });
  }

  protected run(toast: NuiToast, action: NuiToastAction): void {
    action.run();
    this.toaster.dismiss(toast.id);
  }

  protected onFocusOut(event: FocusEvent): void {
    if (!(event.relatedTarget instanceof Node) || !this.host.contains(event.relatedTarget)) {
      this.focused.set(false);
    }
  }

  protected dismissFocused(event: Event): void {
    const item = (event.target as Element).closest<HTMLElement>('.nui-toast');
    const toast = this.toaster.toasts().find((candidate) => candidate.id === item?.dataset['id']);
    if (!item || !toast?.dismissible) return;
    event.stopPropagation();
    const items = this.items().map((ref) => ref.nativeElement);
    const index = items.indexOf(item as HTMLLIElement);
    const next = items[index + 1] ?? items[index - 1];
    this.toaster.dismiss(toast.id);
    (next ?? this.returnFocus)?.focus();
    if (!next) this.returnFocus = null;
  }

  /** Follows a pointer dragging the toast sideways, and throws it away if the drag is long or fast. */
  protected swipe(event: PointerEvent, toast: NuiToast): void {
    const item = event.currentTarget as HTMLElement;
    if (!toast.dismissible || event.button !== 0 || (event.target as Element).closest('button')) {
      return;
    }
    const view = this.document.defaultView!;
    const rtl = view.getComputedStyle(this.host).direction === 'rtl';
    const position = this.position();
    // Toasts leave toward the nearest screen edge; centered ones either way.
    const sign = position.endsWith('center') ? 0 : position.endsWith('end') !== rtl ? 1 : -1;
    const start = { x: event.clientX, time: event.timeStamp };
    let distance = 0;
    // A pointer that isn't live (a synthetic event, one already lifted) can't be captured.
    try {
      item.setPointerCapture(event.pointerId);
    } catch {}

    const move = (moveEvent: PointerEvent) => {
      const dx = moveEvent.clientX - start.x;
      distance = sign === 0 ? dx : sign * Math.max(0, sign * dx);
      if (Math.abs(distance) > 2) item.dataset['swiping'] = '';
      item.style.setProperty('--_swipe', `${distance}px`);
    };
    const end = (endEvent: PointerEvent) => {
      item.removeEventListener('pointermove', move);
      item.removeEventListener('pointerup', end);
      item.removeEventListener('pointercancel', end);
      delete item.dataset['swiping'];
      const velocity = Math.abs(distance) / Math.max(1, endEvent.timeStamp - start.time);
      if (
        endEvent.type === 'pointerup' &&
        (Math.abs(distance) > item.offsetWidth * SWIPE_DISTANCE || velocity > SWIPE_VELOCITY)
      ) {
        item.dataset['swiped'] = '';
        this.toaster.dismiss(toast.id);
      } else {
        item.style.removeProperty('--_swipe');
      }
    };
    item.addEventListener('pointermove', move);
    item.addEventListener('pointerup', end);
    item.addEventListener('pointercancel', end);
  }
}
