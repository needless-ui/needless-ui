import { LiveAnnouncer } from '@angular/cdk/a11y';
import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  booleanAttribute,
  Component,
  computed,
  contentChildren,
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  forwardRef,
  inject,
  input,
  model,
  PLATFORM_ID,
  signal,
  untracked,
  viewChild,
} from '@angular/core';

/** Every text a carousel says. */
export interface NuiCarouselLabels {
  /** What the carousel is, for `aria-roledescription`. */
  carousel: string;
  /** What each slide is, for `aria-roledescription`. */
  slide: string;
  /** Names the scrolling row of slides. */
  slides: string;
  position: (slide: number, count: number) => string;
  previous: string;
  next: string;
  /** Names the group of dots. */
  picker: string;
  goTo: (slide: number) => string;
  play: string;
  pause: string;
}

export const NUI_CAROUSEL_LABELS: NuiCarouselLabels = {
  carousel: 'carousel',
  slide: 'slide',
  slides: 'Slides',
  position: (slide, count) => `${slide} of ${count}`,
  previous: 'Previous slide',
  next: 'Next slide',
  picker: 'Choose a slide',
  goTo: (slide) => `Slide ${slide}`,
  play: 'Start slide rotation',
  pause: 'Stop slide rotation',
};

let nextId = 0;

/**
 * A slide of a `nui-carousel`. Name it when it has a title: the name is read
 * before its position. It's a `group`, so put it on an element that can be one
 * (a `div` or a `section`, not a `figure`, `article` or `li`).
 *
 * ```html
 * <div nuiCarouselSlide="Lake Como">…</div>
 * ```
 */
@Directive({
  selector: '[nuiCarouselSlide]',
  host: {
    class: 'nui-carousel-slide',
    role: 'group',
    '[id]': 'id',
    '[attr.aria-roledescription]': 'carousel.words().slide',
    '[attr.aria-label]': 'name()',
    '[attr.data-current]': 'current() || null',
  },
})
export class NuiCarouselSlide {
  protected readonly carousel = inject(forwardRef(() => NuiCarousel));
  /** @internal */
  readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  readonly id = `nui-slide-${nextId++}`;

  /** The slide's name. By default, its position: "3 of 6". */
  readonly label = input('', { alias: 'nuiCarouselSlide' });

  protected readonly index = computed(() => this.carousel.slides().indexOf(this));
  protected readonly name = computed(() => {
    const position = this.carousel
      .words()
      .position(this.index() + 1, this.carousel.slides().length);
    return this.label() ? `${this.label()}, ${position}` : position;
  });
  /** It's in view. */
  protected readonly current = computed(() => {
    const index = this.index();
    const first = this.carousel.index();
    return index >= first && index < first + this.carousel.shown();
  });
}

/**
 * A carousel: slides in a row that scrolls and snaps, one or more at a time,
 * with buttons, dots, swiping, and optional rotation. It follows the WAI-ARIA
 * carousel pattern: a region with a rotation control first, and rotation that
 * stops when keyboard focus comes in.
 *
 * ```html
 * <nui-carousel label="Featured trips" [autoplay]="6000">
 *   <div nuiCarouselSlide="Lake Como">…</div>
 *   <div nuiCarouselSlide="Dolomites">…</div>
 * </nui-carousel>
 * ```
 */
@Component({
  selector: 'nui-carousel',
  host: {
    class: 'nui-carousel',
    role: 'region',
    '[attr.aria-roledescription]': 'words().carousel',
    '[attr.aria-label]': 'label() || null',
    '[attr.data-rotating]': 'running() || null',
    '[attr.data-per-view]': 'perView() === "auto" ? "auto" : null',
    '[style.--_per-view]': 'perViewCss()',
    '[style.--_gap]': 'gap()',
    '[style.--_interval]': 'autoplay() + "ms"',
    '(pointerenter)': 'hovered.set(true)',
    '(pointerleave)': 'hovered.set(false)',
    '(focusin)': 'onFocusIn($event)',
    '(focusout)': 'onFocusOut($event)',
  },
  template: `
    @if (autoplay() > 0) {
      <button
        type="button"
        class="nui-carousel-play"
        [attr.aria-label]="rotating() ? words().pause : words().play"
        [attr.data-paused]="!running() || null"
        [attr.data-cycle]="index() % 2"
        (click)="toggleRotation()"
      ></button>
    }
    @if (controls()) {
      <button
        type="button"
        class="nui-carousel-nav"
        data-direction="previous"
        [attr.aria-label]="words().previous"
        [attr.aria-controls]="trackId"
        [disabled]="!loop() && index() === 0"
        (click)="previous()"
      ></button>
      <button
        type="button"
        class="nui-carousel-nav"
        data-direction="next"
        [attr.aria-label]="words().next"
        [attr.aria-controls]="trackId"
        [disabled]="!loop() && index() >= last()"
        (click)="next()"
      ></button>
    }
    <div
      #track
      class="nui-carousel-track"
      role="group"
      tabindex="0"
      [id]="trackId"
      [attr.aria-label]="words().slides"
      (scroll)="onScroll()"
      (scrollend)="onScrollEnd()"
    >
      <ng-content />
    </div>
    @if (indicators() && last() > 0) {
      <div class="nui-carousel-dots" role="group" [attr.aria-label]="words().picker">
        @for (stop of stops(); track stop) {
          <button
            type="button"
            class="nui-carousel-dot"
            [attr.aria-label]="words().goTo(stop + 1)"
            [attr.aria-current]="stop === index() || null"
            [attr.aria-controls]="slides()[stop]?.id"
            (click)="goTo(stop)"
          ></button>
        }
      </div>
    }
  `,
})
export class NuiCarousel {
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly announcer = inject(LiveAnnouncer);
  protected readonly trackId = `nui-carousel-${nextId++}`;

  /** Names the carousel. */
  readonly label = input('');
  /** The first slide in view, from 0. Bind with `[(index)]`. */
  readonly index = model(0);
  /** Slides in view at once, or `auto` for slides that set their own width. */
  readonly perView = input<number | 'auto', unknown>(1, {
    transform: (value: unknown) => (value === 'auto' ? 'auto' : Math.max(1, Number(value) || 1)),
  });
  /** Room between slides, as any CSS length. */
  readonly gap = input('1rem');
  /** Going past the last slide comes back to the first, and the other way round. */
  readonly loop = input(false, { transform: booleanAttribute });
  /** Milliseconds between slides when it turns by itself; 0 doesn't. */
  readonly autoplay = input(0, {
    transform: (value: unknown) => (value === '' || value === true ? 5000 : Number(value) || 0),
  });
  /** Previous and next buttons. */
  readonly controls = input(true, { transform: booleanAttribute });
  /** A dot for each slide it can stop at. */
  readonly indicators = input(true, { transform: booleanAttribute });
  /** Texts to replace, for translation. */
  readonly labels = input<Partial<NuiCarouselLabels>>({});

  /** @internal */
  readonly slides = contentChildren(NuiCarouselSlide, { descendants: true });
  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');

  /** @internal */
  readonly words = computed(() => ({ ...NUI_CAROUSEL_LABELS, ...this.labels() }));
  protected readonly perViewCss = computed(() => {
    const perView = this.perView();
    return perView === 'auto' ? null : perView;
  });
  /** @internal How many slides are in view. */
  readonly shown = computed(() => {
    const perView = this.perView();
    return perView === 'auto' ? 1 : Math.floor(perView);
  });
  /** The last slide the carousel can start at. */
  protected readonly last = computed(() =>
    Math.max(0, this.slides().length - (this.perView() === 'auto' ? 1 : this.shown())),
  );
  protected readonly stops = computed(() => Array.from({ length: this.last() + 1 }, (_, i) => i));

  /** The user's choice: rotation on, or stopped with the button or by focus. */
  protected readonly rotating = signal(true);
  protected readonly hovered = signal(false);
  private readonly hidden = signal(false);
  /** Turning now: on, and not paused by a pointer over it or a hidden page. */
  protected readonly running = computed(
    () => this.autoplay() > 0 && this.rotating() && !this.hovered() && !this.hidden(),
  );

  /** A slide the carousel is scrolling to, until it gets there. */
  private target: number | null = null;
  private settle = 0;
  private frame = 0;
  /** The index the scroll position last showed, so a new one from outside is told apart. */
  private seen = 0;
  /** The slide last announced, so a swipe that lands elsewhere is announced once. */
  private announced = 0;

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) this.rotating.set(false);
      const visibility = () => this.hidden.set(document.hidden);
      document.addEventListener('visibilitychange', visibility);
      destroyRef.onDestroy(() => document.removeEventListener('visibilitychange', visibility));
      // Start where the index says, without an animation.
      const index = untracked(this.index);
      if (index > 0) this.scrollTo(index, false);
    });
    destroyRef.onDestroy(() => {
      clearTimeout(this.settle);
      // Only a browser starts frames: on the server there's none to cancel.
      if (this.frame) cancelAnimationFrame(this.frame);
    });

    // An index set from outside: go there.
    effect(() => {
      const index = this.index();
      untracked(() => {
        if (this.browser && index !== this.seen && index !== this.target)
          this.scrollTo(index, true);
      });
    });

    // Turn to the next slide after each interval while running; rotation always
    // goes round, whatever `loop` says.
    effect((onCleanup) => {
      if (!this.running() || !this.browser) return;
      const index = this.index();
      const timer = setTimeout(
        () => this.scrollTo(index >= this.last() ? 0 : index + 1, true),
        this.autoplay(),
      );
      onCleanup(() => clearTimeout(timer));
    });
  }

  previous(): void {
    const index = this.index();
    this.goTo(index <= 0 ? (this.loop() ? this.last() : 0) : index - 1);
  }

  next(): void {
    const index = this.index();
    this.goTo(index >= this.last() ? (this.loop() ? 0 : this.last()) : index + 1);
  }

  /** Brings a slide into view: the first in view, as far as the carousel goes. */
  goTo(index: number): void {
    const target = Math.min(Math.max(0, index), this.last());
    this.scrollTo(target, true);
    this.announce(target);
  }

  /** Says where the carousel is, when people moved it (rotation stays quiet). */
  private announce(index: number): void {
    this.announced = index;
    if (this.running() || !this.browser) return;
    void this.announcer.announce(this.words().position(index + 1, this.slides().length), 'polite');
  }

  protected toggleRotation(): void {
    this.rotating.update((on) => !on);
  }

  protected onFocusIn(event: FocusEvent): void {
    // Rotation stops for good when keyboard focus comes in, unless it's on the
    // rotation control itself: the control is there to start it again.
    const on = event.target as HTMLElement;
    if (!on.classList.contains('nui-carousel-play')) this.rotating.set(false);
  }

  protected onFocusOut(_event: FocusEvent): void {
    // Nothing to restart: rotation waits for the rotation control.
  }

  private scrollTo(index: number, animate: boolean): void {
    if (!this.browser) {
      this.index.set(index);
      return;
    }
    const slide = this.slides()[index];
    const track = this.track().nativeElement;
    if (!slide) return;
    this.target = index;
    this.seen = index;
    this.announced = index;
    this.index.set(index);
    const smooth = animate && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rtl = getComputedStyle(track).direction === 'rtl';
    const box = track.getBoundingClientRect();
    const padding = parseFloat(getComputedStyle(track).scrollPaddingInlineStart) || 0;
    const rect = slide.element.getBoundingClientRect();
    // The distance from the track's start to the slide's, whatever the direction.
    const delta = rtl ? rect.right - (box.right - padding) : rect.left - (box.left + padding);
    track.scrollBy({ left: delta, behavior: smooth ? 'smooth' : 'instant' });
    this.waitForScroll();
  }

  /** Browsers without `scrollend` settle on a quiet moment instead. */
  private waitForScroll(): void {
    clearTimeout(this.settle);
    this.settle = window.setTimeout(() => this.onScrollEnd(), 700);
  }

  protected onScroll(): void {
    if (this.target !== null) {
      this.waitForScroll();
      return;
    }
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => this.follow());
    // Dots follow the swipe; the landing is announced once it settles.
    clearTimeout(this.settle);
    this.settle = window.setTimeout(() => this.onScrollEnd(), 150);
  }

  protected onScrollEnd(): void {
    clearTimeout(this.settle);
    // A swipe or the keyboard moved it: say where it landed.
    const swiped = this.target === null;
    this.target = null;
    this.follow();
    const index = untracked(this.index);
    if (swiped && index !== this.announced) this.announce(index);
  }

  /** Reads the first slide in view from the scroll position. */
  private follow(): void {
    const track = this.track().nativeElement;
    const slides = this.slides();
    if (!slides.length) return;
    const rtl = getComputedStyle(track).direction === 'rtl';
    const box = track.getBoundingClientRect();
    const padding = parseFloat(getComputedStyle(track).scrollPaddingInlineStart) || 0;
    const start = rtl ? box.right - padding : box.left + padding;
    let best = 0;
    let distance = Infinity;
    slides.forEach((slide, i) => {
      const rect = slide.element.getBoundingClientRect();
      const d = Math.abs((rtl ? rect.right : rect.left) - start);
      if (d < distance) {
        distance = d;
        best = i;
      }
    });
    // At the end of the row, the last stop is in view even if its start isn't first.
    const atEnd =
      Math.abs(Math.abs(track.scrollLeft) - (track.scrollWidth - track.clientWidth)) < 2;
    const index = Math.min(atEnd ? this.last() : best, this.last());
    if (index === untracked(this.index)) return;
    this.seen = index;
    this.index.set(index);
  }
}
