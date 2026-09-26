import { isPlatformBrowser, NgTemplateOutlet } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  model,
  output,
  PLATFORM_ID,
  signal,
  TemplateRef,
  untracked,
  viewChild,
} from '@angular/core';
import { type NuiAlign, nuiFollow, nuiOnCloseRequest, type NuiSide } from '@needless-ui/angular';
import { NuiButton } from '@needless-ui/angular/button';

/** One stop of a tour. */
export interface NuiTourStep {
  /** What it points at: a selector, an element, or a function that finds one. None centers it. */
  target?: string | Element | (() => Element | null) | null;
  title: string;
  /** Text, or a template for richer content. */
  content?: string | TemplateRef<NuiTourStepContext>;
  /** Where the card goes beside the target. */
  side?: NuiSide;
  align?: NuiAlign;
  /** Room around the target in the spotlight, in pixels. */
  padding?: number;
  /** The target can be used: clicks reach it, and the page isn't blocked. */
  interactive?: boolean;
  /** Runs before the step shows, such as opening the panel its target is in. */
  beforeShow?: () => void | Promise<void>;
}

/** What a step's content template gets. */
export interface NuiTourStepContext {
  $implicit: NuiTourStep;
  index: number;
  count: number;
}

/** Every text a tour shows. */
export interface NuiTourLabels {
  close: string;
  back: string;
  next: string;
  done: string;
  progress: (step: number, count: number) => string;
}

export const NUI_TOUR_LABELS: NuiTourLabels = {
  close: 'End the tour',
  back: 'Back',
  next: 'Next',
  done: 'Done',
  progress: (step, count) => `${step} of ${count}`,
};

let nextId = 0;

/**
 * A guided tour: a card for each step, beside the part of the page it's about,
 * with the rest of the page dimmed around it.
 *
 * ```html
 * <nui-tour [steps]="steps" [(open)]="touring" (finished)="done()" />
 * ```
 *
 * Each card is a dialog. It's modal, so focus stays in it, unless the step is
 * `interactive`: then its target can be used, and the rest of the page is still
 * blocked to the pointer. Escape ends the tour, and focus goes back where it was.
 * So does Android's back gesture (on interactive steps, where the browser has the
 * CloseWatcher API).
 */
@Component({
  selector: 'nui-tour',
  imports: [NgTemplateOutlet, NuiButton],
  host: { class: 'nui-tour-host' },
  template: `
    <dialog
      #dialog
      class="nui-tour"
      popover="manual"
      [attr.data-interactive]="current()?.interactive || null"
      [attr.aria-labelledby]="id + '-title'"
      [attr.aria-describedby]="current()?.content ? id + '-body' : null"
      (cancel)="onCancel($event)"
      (keydown)="onKeydown($event)"
    >
      @if (current(); as step) {
        <div #spotlight class="nui-tour-spotlight" [style.clip-path]="clip()"></div>
        <div #card class="nui-tour-card" [attr.data-centered]="centered() || null">
          <button
            type="button"
            class="nui-tour-close"
            [attr.aria-label]="words().close"
            [attr.title]="words().close"
            (click)="end(false)"
          ></button>
          <h2 class="nui-tour-title" [id]="id + '-title'">{{ step.title }}</h2>
          @if (step.content) {
            <div class="nui-tour-body" [id]="id + '-body'">
              @if (template(step); as custom) {
                <ng-container
                  *ngTemplateOutlet="
                    custom;
                    context: { $implicit: step, index: index(), count: steps().length }
                  "
                />
              } @else {
                <p>{{ step.content }}</p>
              }
            </div>
          }
          <div class="nui-tour-footer">
            <span class="nui-tour-progress">{{
              words().progress(index() + 1, steps().length)
            }}</span>
            <span class="nui-tour-dots" aria-hidden="true">
              @for (s of steps(); track $index) {
                <span [attr.data-current]="$index === index() || null"></span>
              }
            </span>
            @if (index() > 0) {
              <button
                type="button"
                nuiButton
                variant="ghost"
                tone="neutral"
                size="sm"
                (click)="go(index() - 1)"
              >
                {{ words().back }}
              </button>
            }
            <button #primary type="button" nuiButton size="sm" (click)="forward()">
              {{ index() === steps().length - 1 ? words().done : words().next }}
            </button>
          </div>
        </div>
      }
    </dialog>
  `,
})
export class NuiTour {
  private readonly injector = inject(Injector);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  protected readonly id = `nui-tour-${nextId++}`;

  readonly steps = input<readonly NuiTourStep[]>([]);
  /** Whether the tour is on. */
  readonly open = model(false);
  /** The step shown, from 0. */
  readonly step = model(0);
  /** Texts to replace, for translation. */
  readonly labels = input<Partial<NuiTourLabels>>({});

  /** The last step was done. */
  readonly finished = output<void>();
  /** The tour ended early, on this step. */
  readonly dismissed = output<number>();

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private readonly card = viewChild<ElementRef<HTMLElement>>('card');
  private readonly spotlight = viewChild<ElementRef<HTMLElement>>('spotlight');
  private readonly primary = viewChild<ElementRef<HTMLButtonElement>>('primary');

  protected readonly words = computed(() => ({ ...NUI_TOUR_LABELS, ...this.labels() }));
  /** The step on screen, once it's ready: its target found and in view. */
  protected readonly shown = signal<number | null>(null);
  protected readonly index = computed(() => this.shown() ?? this.step());
  protected readonly current = computed(() => {
    const shown = this.shown();
    return shown === null ? null : (this.steps()[shown] ?? null);
  });
  protected readonly target = signal<Element | null>(null);
  /** The card sits in the middle: no target, or no room beside it. */
  protected readonly centered = signal(true);
  /** The spotlight's shape: the viewport less a rounded hole around the target. */
  protected readonly clip = signal<string | null>(null);

  private stopFollow: (() => void) | null = null;
  private stopWatching: (() => void) | null = null;
  private frame = 0;
  private returnFocus: HTMLElement | null = null;
  private token = 0;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.hide());
    effect(() => {
      const open = this.open();
      const index = this.step();
      const steps = this.steps();
      if (!this.browser) return;
      untracked(() => {
        if (open && steps.length) void this.present(Math.min(Math.max(0, index), steps.length - 1));
        else if (!open) this.hide();
      });
    });
  }

  /** Starts the tour, from the first step or `from`. */
  start(from = 0): void {
    this.step.set(from);
    this.open.set(true);
  }

  protected forward(): void {
    const index = this.index();
    if (index >= this.steps().length - 1) this.end(true);
    else this.go(index + 1);
  }

  protected go(index: number): void {
    this.step.set(index);
  }

  /** Ends the tour: finished, or dismissed early. */
  end(finished: boolean): void {
    const index = this.index();
    this.open.set(false);
    if (finished) this.finished.emit();
    else this.dismissed.emit(index);
  }

  protected template(step: NuiTourStep): TemplateRef<NuiTourStepContext> | null {
    return step.content instanceof TemplateRef ? step.content : null;
  }

  protected onCancel(event: Event): void {
    event.preventDefault();
    this.end(false);
  }

  protected onKeydown(event: KeyboardEvent): void {
    // A non-modal card has no cancel event; Escape ends the tour the same way.
    if (event.key === 'Escape' && !this.dialog().nativeElement.matches(':modal')) {
      event.preventDefault();
      this.end(false);
    }
  }

  /** Shows a step: runs its `beforeShow`, brings its target into view, then points at it. */
  private async present(index: number): Promise<void> {
    const token = ++this.token;
    const step = this.steps()[index];
    const dialog = this.dialog().nativeElement;
    if (!dialog.open && !dialog.matches(':popover-open')) {
      this.returnFocus = document.activeElement as HTMLElement | null;
    }
    await step.beforeShow?.();
    if (token !== this.token) return;
    const target = find(step.target);
    if (target && !inView(target)) {
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({
        block: 'center',
        inline: 'nearest',
        behavior: reduce ? 'instant' : 'smooth',
      });
      await settled();
      if (token !== this.token) return;
    }
    this.stop();
    this.target.set(target);
    this.shown.set(index);

    // Modal unless the step asks people to use its target.
    const modal = !step.interactive;
    if (dialog.matches(':modal') && !modal) dialog.close();
    if (dialog.matches(':popover-open') && modal) {
      this.unwatch();
      dialog.hidePopover();
    }
    if (modal && !dialog.open) dialog.showModal();
    else if (!modal && !dialog.matches(':popover-open')) {
      dialog.showPopover();
      // A modal card gets close requests as a dialog (its cancel event); a manual
      // popover doesn't, so Android's back gesture ends the tour here, as Escape does.
      this.stopWatching = nuiOnCloseRequest(() => this.end(false));
    }

    afterNextRender(
      () => {
        if (token !== this.token) return;
        const card = this.card()?.nativeElement;
        // Where the last step put the card doesn't carry over.
        for (const name of ['top', 'left', 'max-height', 'max-width']) {
          card?.style.removeProperty(name);
        }
        delete card?.dataset['side'];
        const offset = 12 + (step.padding ?? 8);
        // A target that leaves no room for the card above or below it (a tall one,
        // a short screen): the card goes in the middle, over it, rather than
        // shrinking until its buttons are out of reach.
        const box = target?.getBoundingClientRect();
        const area = visibleArea();
        const room = box ? Math.max(box.top - area.top, area.bottom - box.bottom) - offset - 8 : 0;
        const fits = !!card && room >= card.offsetHeight;
        this.centered.set(!fits);
        if (card && fits && target instanceof HTMLElement) {
          this.stopFollow = nuiFollow(target, card, {
            side: step.side ?? 'bottom',
            align: step.align ?? 'center',
            offset,
          });
        }
        this.track(step);
        this.primary()?.nativeElement.focus();
      },
      { injector: this.injector },
    );
  }

  /** Keeps the spotlight on the target as the page scrolls and resizes. */
  private track(step: NuiTourStep): void {
    const update = () => {
      const target = this.target();
      if (!target) {
        this.clip.set(null);
      } else {
        const pad = step.padding ?? 8;
        const box = target.getBoundingClientRect();
        // The spotlight's own box, which fills the window. Safari on iPhone reports
        // a pinch-zoomed window as the zoomed-in part (innerHeight), and a
        // spotlight cut to that dims only a corner of the page.
        const spot = this.spotlight()?.nativeElement;
        const width = spot?.offsetWidth || document.documentElement.clientWidth;
        const height = spot?.offsetHeight || window.innerHeight;
        const x = box.left - pad;
        const y = box.top - pad;
        const w = box.width + pad * 2;
        const h = box.height + pad * 2;
        const r = Math.min(10, w / 2, h / 2);
        this.clip.set(
          `path(evenodd, "M0 0H${width}V${height}H0Z M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w} ${y + r}V${y + h - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + h}H${x + r}A${r} ${r} 0 0 1 ${x} ${y + h - r}V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z")`,
        );
      }
      this.frame = requestAnimationFrame(update);
    };
    update();
  }

  private stop(): void {
    this.stopFollow?.();
    this.stopFollow = null;
    // Only a browser starts frames: on the server there's none to cancel.
    if (this.frame) cancelAnimationFrame(this.frame);
    this.frame = 0;
  }

  private hide(): void {
    this.token++;
    this.stop();
    // Whether or not the card still shows: when the view is destroyed, its dialog
    // can leave the page first, which closes the popover without a toggle event.
    this.unwatch();
    if (!this.browser) return;
    const dialog = this.dialog().nativeElement;
    const wasOpen = dialog.open || dialog.matches(':popover-open');
    if (dialog.matches(':popover-open')) dialog.hidePopover();
    if (dialog.open) dialog.close();
    this.shown.set(null);
    this.target.set(null);
    if (wasOpen) this.returnFocus?.focus();
    this.returnFocus = null;
  }

  /** Stops the non-modal card's close requests. */
  private unwatch(): void {
    this.stopWatching?.();
    this.stopWatching = null;
  }
}

function find(target: NuiTourStep['target']): Element | null {
  if (!target) return null;
  if (typeof target === 'string') return document.querySelector(target);
  if (typeof target === 'function') return target();
  return target;
}

/**
 * The part of the page on screen, in the coordinates of `getBoundingClientRect`:
 * pinch zoom and the on-screen keyboard show less of it than the window holds.
 */
function visibleArea(): { top: number; left: number; bottom: number; right: number } {
  const visual = window.visualViewport;
  if (!visual) return { top: 0, left: 0, bottom: window.innerHeight, right: window.innerWidth };
  return {
    top: visual.offsetTop,
    left: visual.offsetLeft,
    bottom: visual.offsetTop + visual.height,
    right: visual.offsetLeft + visual.width,
  };
}

/** Whether all of an element is on screen. */
function inView(element: Element): boolean {
  const box = element.getBoundingClientRect();
  const area = visibleArea();
  return (
    box.top >= area.top &&
    box.left >= area.left &&
    box.bottom <= area.bottom &&
    box.right <= area.right
  );
}

/** Waits for a smooth scroll to end, or a moment when there's none. */
function settled(): Promise<void> {
  return new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      window.removeEventListener('scrollend', finish, true);
      resolve();
    };
    window.addEventListener('scrollend', finish, { capture: true, once: true });
    setTimeout(finish, 450);
  });
}
