import { Component, computed, inject, linkedSignal, signal } from '@angular/core';
import {
  springTransition,
  type NuiCorners,
  type NuiDensity,
  type NuiEnter,
  type NuiMotion,
  type NuiPress,
  type NuiRadius,
  type NuiSpring,
} from '@needless-ui/angular';
import { NuiButton } from '@needless-ui/angular/button';
import {
  NuiDialog,
  NuiDialogActions,
  NuiDialogClose,
  NuiDialogDescription,
  NuiDialogTitle,
} from '@needless-ui/angular/dialog';
import { NuiMenu, NuiMenuItem, NuiMenuSeparator, NuiMenuTrigger } from '@needless-ui/angular/menu';
import motionTokens from '@needless-ui/tokens/src/motion.tokens.json';
import { I18n } from '../i18n/i18n';

type Preset = Exclude<NuiMotion, 'none'>;
type Motion = NuiMotion | 'custom';
type Physics = Required<NuiSpring>;

const PRESETS: readonly Preset[] = ['snappy', 'bouncy', 'jelly', 'elastic', 'lazy', 'mechanical'];
/** The physics of each preset, read from the token source that compiles them. */
const PHYSICS = Object.fromEntries(
  PRESETS.map((name) => [name, motionTokens.spring[name].$extensions['com.needlessui.spring']]),
) as Record<Preset, Physics>;

const MOTIONS: readonly Motion[] = [...PRESETS, 'none', 'custom'];
const PRESSES: readonly NuiPress[] = ['sink', 'squish', 'pop', 'wobble', 'rubber', 'tilt', 'none'];
const ENTERS: readonly NuiEnter[] = [
  'zoom',
  'fade',
  'drop',
  'rise',
  'unfold',
  'flip',
  'swing',
  'slide',
  'none',
];
const CORNERS: readonly NuiCorners[] = ['round', 'squircle', 'bevel', 'scoop', 'notch', 'square'];
const RADII: readonly NuiRadius[] = ['none', 'small', 'medium', 'large', 'full'];
const DENSITIES: readonly NuiDensity[] = ['compact', 'regular', 'roomy'];

/** Slider ranges. Some corners of this box never settle; the playground says so. */
const RANGES = {
  stiffness: { min: 50, max: 1000, step: 10 },
  damping: { min: 2, max: 50, step: 1 },
  mass: { min: 0.5, max: 2, step: 0.1 },
} as const;

interface Look {
  motion: Motion;
  press: NuiPress;
  enter: NuiEnter;
  corners: NuiCorners;
  radius: NuiRadius;
  density: NuiDensity;
}

const DEFAULTS: Look = {
  motion: 'snappy',
  press: 'sink',
  enter: 'zoom',
  corners: 'round',
  radius: 'medium',
  density: 'regular',
};

const pick = <T>(items: readonly T[]): T => items[Math.floor(Math.random() * items.length)];

/**
 * Every customization knob on real components. The stage carries the same
 * data-nui-* attributes an app would put on <body>, so the buttons, the dialog and
 * the menu inside it are the library's own, styled by the library's own CSS.
 */
@Component({
  selector: 'docs-playground',
  imports: [
    NuiButton,
    NuiDialog,
    NuiDialogTitle,
    NuiDialogDescription,
    NuiDialogActions,
    NuiDialogClose,
    NuiMenu,
    NuiMenuItem,
    NuiMenuSeparator,
    NuiMenuTrigger,
  ],
  template: `
    @let text = i18n.t().guides.playground;
    <section class="playground" [attr.aria-label]="text.label">
      <div class="playground-controls">
        <fieldset class="playground-field">
          <legend>{{ text.motion }}</legend>
          <div class="playground-chips">
            @for (option of motions; track option) {
              <label class="playground-chip">
                <input
                  type="radio"
                  name="playground-motion"
                  [value]="option"
                  [checked]="look().motion === option"
                  (change)="set('motion', option)"
                />
                <span>{{ option === 'custom' ? text.custom : option }}</span>
              </label>
            }
          </div>
        </fieldset>

        @for (knob of knobs; track knob) {
          <div class="playground-slider">
            <label [for]="'playground-' + knob">{{ text[knob] }}</label>
            <output [for]="'playground-' + knob">{{ physics()[knob] }}</output>
            <input
              type="range"
              [id]="'playground-' + knob"
              [min]="ranges[knob].min"
              [max]="ranges[knob].max"
              [step]="ranges[knob].step"
              [value]="physics()[knob]"
              [disabled]="look().motion === 'none'"
              (input)="tune(knob, $event)"
            />
          </div>
        }

        <div class="playground-selects">
          @for (select of selects; track select.key) {
            <label class="playground-select">
              <span>{{ text[select.key] }}</span>
              <select (change)="choose(select.key, $event)">
                @for (option of select.options; track option) {
                  <option [value]="option" [selected]="look()[select.key] === option">
                    {{ option }}
                  </option>
                }
              </select>
            </label>
          }
        </div>

        <fieldset class="playground-field">
          <legend>{{ text.density }}</legend>
          <div class="playground-chips">
            @for (option of densities; track option) {
              <label class="playground-chip">
                <input
                  type="radio"
                  name="playground-density"
                  [value]="option"
                  [checked]="look().density === option"
                  (change)="set('density', option)"
                />
                <span>{{ option }}</span>
              </label>
            }
          </div>
        </fieldset>

        <div class="playground-actions">
          <button nuiButton type="button" variant="soft" (click)="surprise()">
            {{ text.surprise }}
          </button>
          <button nuiButton type="button" variant="ghost" tone="neutral" (click)="reset()">
            {{ text.reset }}
          </button>
        </div>
      </div>

      <div
        class="playground-stage"
        [attr.data-nui-motion]="look().motion === 'custom' ? null : look().motion"
        [style.--nui-motion]="look().motion === 'custom' ? transition() : null"
        [attr.data-nui-press]="look().press"
        [attr.data-nui-enter]="look().enter"
        [attr.data-nui-corners]="look().corners"
        [attr.data-nui-radius]="look().radius"
        [attr.data-nui-density]="look().density"
      >
        <p class="playground-hint">{{ text.hint }}</p>
        <div class="playground-row">
          <button nuiButton type="button">{{ text.save }}</button>
          <button nuiButton type="button" variant="soft" tone="neutral">{{ text.cancel }}</button>
          <button nuiButton type="button" variant="outline" tone="danger">
            {{ text.delete }}
          </button>
        </div>
        <!--
          The menu and the dialog stay closed until someone opens them, so they (and
          their code and styles) arrive when the browser is idle instead of in the
          prerendered page.
        -->
        <div class="playground-row">
          <button nuiButton type="button" variant="outline" (click)="dialogOpen.set(true)">
            {{ text.openDialog }}
          </button>
          @defer (on idle) {
            <button nuiButton type="button" variant="outline" [nuiMenuTrigger]="menu">
              {{ text.openMenu }}
            </button>
            <div nuiMenu #menu="ngMenu">
              <div nuiMenuItem value="rename">{{ text.menu[0] }}</div>
              <div nuiMenuItem value="duplicate">{{ text.menu[1] }}</div>
              <div nuiMenuSeparator></div>
              <div nuiMenuItem value="delete" tone="danger">{{ text.menu[2] }}</div>
            </div>
          } @placeholder {
            <button nuiButton type="button" variant="outline">{{ text.openMenu }}</button>
          }
        </div>

        @defer (on idle) {
          <dialog nuiDialog [(open)]="dialogOpen" size="sm">
            <h2 nuiDialogTitle>{{ text.dialogTitle }}</h2>
            <p nuiDialogDescription>{{ text.dialogText }}</p>
            <div nuiDialogActions>
              <button nuiButton type="button" nuiDialogClose autofocus>{{ text.close }}</button>
            </div>
          </dialog>
        }

        <figure class="playground-curve">
          <svg viewBox="0 0 300 100" role="img" [attr.aria-label]="text.curve">
            <line class="playground-target" x1="0" x2="300" y1="30" y2="30" />
            <polyline class="playground-line" [attr.points]="curve().points" />
          </svg>
          <figcaption aria-live="polite">
            @if (curve().stuck) {
              {{ text.stuck }}
            } @else if (look().motion === 'none') {
              {{ text.instant }}
            } @else {
              {{ text.settles(curve().ms, curve().overshoot) }}
            }
          </figcaption>
        </figure>
        <p class="playground-note playground-note-motion">{{ text.reducedMotion }}</p>
        <p class="playground-note playground-note-corners">{{ text.noCornerShape }}</p>
      </div>

      <div class="playground-code">
        <p>{{ text.everywhere }}</p>
        <pre><code>{{ htmlCode() }}</code></pre>
        <p>{{ text.oneComponent }}</p>
        <pre><code>{{ angularCode() }}</code></pre>
      </div>
    </section>
  `,
})
export class Playground {
  protected readonly i18n = inject(I18n);

  protected readonly motions = MOTIONS;
  protected readonly densities = DENSITIES;
  protected readonly ranges = RANGES;
  protected readonly knobs = ['stiffness', 'damping', 'mass'] as const;
  protected readonly selects = [
    { key: 'press', options: PRESSES },
    { key: 'enter', options: ENTERS },
    { key: 'corners', options: CORNERS },
    { key: 'radius', options: RADII },
  ] as const;

  protected readonly look = signal<Look>({
    motion: 'bouncy',
    press: 'squish',
    enter: 'flip',
    corners: 'squircle',
    radius: 'large',
    density: 'regular',
  });
  /** The sliders: a preset's physics until they're moved, which makes the motion custom. */
  protected readonly physics = linkedSignal<Motion, Physics>({
    source: () => this.look().motion,
    computation: (motion, previous) =>
      motion === 'custom' || motion === 'none'
        ? (previous?.value ?? PHYSICS.bouncy)
        : PHYSICS[motion],
  });
  protected readonly dialogOpen = signal(false);

  /** The compiled spring, or null when these physics don't settle within 10 seconds. */
  private readonly compiled = computed(() => {
    try {
      return springTransition(this.physics());
    } catch {
      return null;
    }
  });
  /** The last spring that settles, so the stage keeps moving while the sliders are stuck. */
  protected readonly transition = linkedSignal<string | null, string>({
    source: this.compiled,
    computation: (css, previous) => css ?? previous?.value ?? springTransition(PHYSICS.bouncy),
  });

  /** The curve as drawn by CSS: the stops of the linear() easing, 0 at y=90 and 1 at y=30. */
  protected readonly curve = computed(() => {
    const css = this.transition();
    const stops = css
      .slice(css.indexOf('(') + 1, -1)
      .split(', ')
      .map((stop, i, all) => {
        const [value, at] = stop.split(' ');
        return [at ? parseFloat(at) / 100 : i / (all.length - 1), Number(value)] as const;
      });
    const peak = Math.max(...stops.map(([, value]) => value));
    return {
      points: stops
        .map(([at, value]) => `${(at * 300).toFixed(1)},${Math.max(2, 90 - value * 60).toFixed(1)}`)
        .join(' '),
      ms: parseInt(css),
      overshoot: Math.round(Math.max(0, peak - 1) * 100),
      stuck: this.compiled() === null,
    };
  });

  protected readonly htmlCode = computed(() => {
    const look = this.look();
    const motion =
      look.motion === 'custom'
        ? `style="--nui-motion: ${this.transition()}"`
        : `data-nui-motion="${look.motion}"`;
    return [
      '<body',
      `  ${motion}`,
      `  data-nui-press="${look.press}"`,
      `  data-nui-enter="${look.enter}"`,
      `  data-nui-corners="${look.corners}"`,
      `  data-nui-radius="${look.radius}"`,
      `  data-nui-density="${look.density}"`,
      '>',
    ].join('\n');
  });

  protected readonly angularCode = computed(() => {
    const look = this.look();
    const { stiffness, damping, mass } = this.physics();
    const motion =
      look.motion === 'custom'
        ? `[spring]="{ stiffness: ${stiffness}, damping: ${damping}, mass: ${mass} }"`
        : `motion="${look.motion}"`;
    const element = (tag: string, directive: string, own: string) =>
      [
        `<${tag}`,
        `  ${directive}`,
        `  ${motion}`,
        `  ${own}`,
        `  corners="${look.corners}"`,
        `  radius="${look.radius}"`,
        `  density="${look.density}"`,
        `>…</${tag}>`,
      ].join('\n');
    return [
      element('button', 'nuiButton', `press="${look.press}"`),
      element('dialog', 'nuiDialog', `enter="${look.enter}"`),
    ].join('\n\n');
  });

  protected set<K extends keyof Look>(key: K, value: Look[K]): void {
    this.look.update((look) => ({ ...look, [key]: value }));
  }

  protected choose(key: 'press' | 'enter' | 'corners' | 'radius', event: Event): void {
    const { value } = event.target as HTMLSelectElement;
    this.look.update((look) => ({ ...look, [key]: value }));
  }

  /** Tuning a preset's physics turns it into a custom spring. */
  protected tune(knob: keyof Physics, event: Event): void {
    const { valueAsNumber } = event.target as HTMLInputElement;
    this.physics.update((physics) => ({ ...physics, [knob]: valueAsNumber }));
    this.set('motion', 'custom');
  }

  protected surprise(): void {
    this.look.set({
      motion: pick(MOTIONS.filter((motion) => motion !== 'none')),
      press: pick(PRESSES),
      enter: pick(ENTERS),
      corners: pick(CORNERS),
      radius: pick(RADII),
      density: pick(DENSITIES),
    });
    if (this.look().motion === 'custom') {
      const random = (range: { min: number; max: number; step: number }) =>
        +(
          range.min +
          Math.round((Math.random() * (range.max - range.min)) / range.step) * range.step
        ).toFixed(1);
      // Some random physics never settle; keep rolling until they do.
      do {
        this.physics.set({
          stiffness: random(RANGES.stiffness),
          damping: random(RANGES.damping),
          mass: random(RANGES.mass),
        });
      } while (this.compiled() === null);
    }
  }

  protected reset(): void {
    this.look.set(DEFAULTS);
  }
}
