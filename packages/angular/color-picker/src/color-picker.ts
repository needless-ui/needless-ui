import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  model,
  output,
  PLATFORM_ID,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import type { FormValueControl } from '@angular/forms/signals';
import {
  type NuiColor,
  nuiColorToRgb,
  nuiContrast,
  type NuiColorFormat,
  nuiFormatColor,
  type NuiGamut,
  nuiInGamut,
  nuiMaxChroma,
  nuiParseColor,
  nuiToGamut,
} from './color';

/** A swatch: a color, with a name for people who can't see it. */
export type NuiColorSwatch = string | { color: string; label: string };

/**
 * How the picker lays colors out: an area of lightness and chroma at one hue, or
 * a wheel of hue and chroma at one lightness.
 */
export type NuiColorView = 'area' | 'wheel';

/** Every text a color picker says. */
export interface NuiColorPickerLabels {
  area: string;
  /** What the area's thumb says of where it is. */
  position: (lightness: number, chroma: number) => string;
  /** What the wheel's thumb says of where it is: the hue in degrees, and the chroma. */
  wheelPosition: (hue: number, chroma: number) => string;
  hue: string;
  lightness: string;
  alpha: string;
  value: string;
  format: (name: string) => string;
  eyeDropper: string;
  copy: string;
  copied: string;
  swatches: string;
  contrast: (ratio: string) => string;
  passes: string;
  fails: string;
}

export const NUI_COLOR_PICKER_LABELS: NuiColorPickerLabels = {
  area: 'Color',
  position: (lightness, chroma) => `Lightness ${lightness}%, chroma ${chroma}%`,
  wheelPosition: (hue, chroma) => `Hue ${hue}°, chroma ${chroma}`,
  hue: 'Hue',
  lightness: 'Lightness',
  alpha: 'Opacity',
  value: 'Color value',
  format: (name) => `Format: ${name}`,
  eyeDropper: 'Pick a color from the screen',
  copy: 'Copy the color',
  copied: 'Copied',
  swatches: 'Swatches',
  contrast: (ratio) => `Contrast ${ratio}:1`,
  passes: 'passes',
  fails: 'fails',
};

const FORMAT_NAMES: Record<NuiColorFormat, string> = {
  hex: 'HEX',
  rgb: 'RGB',
  hsl: 'HSL',
  oklch: 'OKLCH',
  p3: 'P3',
};

/** The area's canvas, in pixels: the browser scales it up smoothly. */
const WIDTH = 120;
const HEIGHT = 90;
/** The wheel's canvas, in pixels. */
const WHEEL = 160;
/** The part of the wheel's radius its colors fill: its hue ring (drawn by CSS) is around them. */
const INNER = 0.9;
/** The chroma where the wheel's colors end: a little past the most the gamut holds anywhere. */
const edgeOf = (gamut: NuiGamut) => (gamut === 'p3' ? 0.37 : 0.33);

const clamp = (value: number) => Math.min(1, Math.max(0, value));
/** An angle in degrees, from 0 up to 360. */
const degrees = (radians: number) => ((radians * 180) / Math.PI + 360) % 360;

interface EyeDropperApi {
  open(): Promise<{ sRGBHex: string }>;
}

/**
 * A color picker in OKLCH: an area of lightness and chroma for the hue, sliders
 * for hue and opacity, a field that takes any CSS color, swatches, the screen's
 * eyedropper where there is one, and the contrast against a background.
 *
 * ```html
 * <nui-color-picker [(value)]="brand" [swatches]="palette" contrastWith="#ffffff" />
 * <nui-color-picker gamut="p3" format="oklch" [(value)]="accent" />
 * <nui-color-picker view="wheel" format="oklch" [(value)]="accent" />
 * ```
 *
 * The area fills the gamut: across is chroma, from gray to the most the gamut
 * holds at that lightness, so every point is a color the screen can show. With
 * `view="wheel"` it's an OKLCH color wheel instead: hue goes around, chroma grows
 * outward, and a slider sets the lightness. With `gamut="p3"` a dashed line marks
 * where sRGB ends. The preview copies the value. Works with Signal Forms
 * (`[formField]`), reactive forms and `ngModel`.
 */
@Component({
  selector: 'nui-color-picker',
  host: {
    class: 'nui-color-picker',
    '[attr.data-view]': "wheel() ? 'wheel' : null",
    '[attr.data-disabled]': 'disabled() || null',
    '[style.--_value]': 'css()',
    '[style.--_opaque]': 'opaque()',
  },
  template: `
    <div
      class="nui-color-area"
      [style.--_ring]="wheel() ? ring() : null"
      (pointerdown)="onAreaDown($event)"
      (pointermove)="onAreaMove($event)"
      (lostpointercapture)="dragging.set(false)"
      [attr.data-dragging]="dragging() || null"
    >
      <canvas
        #canvas
        class="nui-color-canvas"
        [width]="wheel() ? wheelSize : width"
        [height]="wheel() ? wheelSize : height"
        aria-hidden="true"
      ></canvas>
      @if (gamutLine(); as line) {
        <svg
          class="nui-color-gamut"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path [attr.d]="line" vector-effect="non-scaling-stroke" />
        </svg>
      }
      <div
        #thumb
        class="nui-color-thumb"
        role="slider"
        [attr.tabindex]="disabled() ? null : 0"
        [attr.aria-label]="words().area"
        aria-valuemin="0"
        [attr.aria-valuemax]="wheel() ? 360 : 100"
        [attr.aria-valuenow]="wheel() ? round(hue()) : percent(saturation())"
        [attr.aria-valuetext]="position()"
        [attr.aria-disabled]="disabled() || null"
        [style.inset-inline-start.%]="spot().x"
        [style.inset-block-start.%]="spot().y"
        (keydown)="onAreaKey($event)"
      ></div>
    </div>
    <div class="nui-color-row">
      @if (copy() && canCopy()) {
        <button
          type="button"
          class="nui-color-preview"
          data-action="copy"
          [attr.data-light]="light() || null"
          [attr.data-copied]="copied() || null"
          [attr.aria-label]="words().copy"
          [attr.title]="words().copy"
          [disabled]="disabled()"
          (click)="copyValue()"
        ></button>
        <span class="nui-color-hidden" role="status">{{ copied() ? words().copied : '' }}</span>
      } @else {
        <span class="nui-color-preview" aria-hidden="true"></span>
      }
      <div class="nui-color-sliders">
        @if (wheel()) {
          <input
            type="range"
            class="nui-color-slider"
            data-channel="lightness"
            min="0"
            max="100"
            step="1"
            [value]="percent(lightness())"
            [style.--_track]="lightnessTrack()"
            [attr.aria-label]="words().lightness"
            [attr.aria-valuetext]="percent(lightness()) + '%'"
            [disabled]="disabled()"
            (input)="onLightness($event)"
          />
        } @else {
          <input
            type="range"
            class="nui-color-slider"
            data-channel="hue"
            min="0"
            max="360"
            step="1"
            [value]="round(hue())"
            [attr.aria-label]="words().hue"
            [attr.aria-valuetext]="round(hue()) + '°'"
            [disabled]="disabled()"
            (input)="onHue($event)"
          />
        }
        @if (alpha()) {
          <input
            type="range"
            class="nui-color-slider"
            data-channel="alpha"
            min="0"
            max="100"
            step="1"
            [value]="percent(opacity())"
            [attr.aria-label]="words().alpha"
            [attr.aria-valuetext]="percent(opacity()) + '%'"
            [disabled]="disabled()"
            (input)="onAlpha($event)"
          />
        }
      </div>
      @if (canPick() && eyeDropper()) {
        <button
          type="button"
          class="nui-color-button"
          data-action="eyedropper"
          [attr.aria-label]="words().eyeDropper"
          [attr.title]="words().eyeDropper"
          [disabled]="disabled()"
          (click)="pickFromScreen()"
        ></button>
      }
    </div>
    <div class="nui-color-field">
      <input
        #field
        class="nui-color-input"
        spellcheck="false"
        autocomplete="off"
        autocapitalize="off"
        [attr.aria-label]="words().value"
        [value]="value()"
        [disabled]="disabled()"
        (change)="onText($event)"
        (keydown)="onTextKey($event)"
        (blur)="touch.emit()"
      />
      @if (formats().length > 1) {
        <button
          type="button"
          class="nui-color-format"
          [attr.aria-label]="words().format(formatName())"
          [disabled]="disabled()"
          (click)="nextFormat()"
        >
          {{ formatName() }}
        </button>
      }
    </div>
    @if (swatchList().length) {
      <div class="nui-color-swatches" role="group" [attr.aria-label]="words().swatches">
        @for (swatch of swatchList(); track $index) {
          <button
            type="button"
            class="nui-color-swatch"
            [style.--_swatch]="swatch.color"
            [attr.aria-label]="swatch.label"
            [attr.title]="swatch.label"
            [attr.aria-pressed]="isCurrent(swatch.color)"
            [disabled]="disabled()"
            (click)="use(swatch.color)"
          ></button>
        }
      </div>
    }
    @if (contrast(); as result) {
      <div class="nui-color-contrast">
        <span
          class="nui-color-sample"
          aria-hidden="true"
          [style.background-color]="contrastWith()"
        ></span>
        <span>{{ words().contrast(result.ratio) }}</span>
        <span class="nui-color-grade" [attr.data-pass]="result.aa">
          AA <span class="nui-color-hidden">{{ result.aa ? words().passes : words().fails }}</span>
        </span>
        <span class="nui-color-grade" [attr.data-pass]="result.aaa">
          AAA
          <span class="nui-color-hidden">{{ result.aaa ? words().passes : words().fails }}</span>
        </span>
      </div>
    }
  `,
})
export class NuiColorPicker implements FormValueControl<string> {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  protected readonly width = WIDTH;
  protected readonly height = HEIGHT;
  protected readonly wheelSize = WHEEL;

  /** The color, written in `format`, or empty before one is picked. Bind with `[(value)]`. */
  readonly value = model('');
  /** How the value is written. The format button cycles through `formats`. Bind with `[(format)]`. */
  readonly format = model<NuiColorFormat>('hex');
  readonly formats = input<readonly NuiColorFormat[]>(['hex', 'rgb', 'hsl', 'oklch']);
  /** An area of lightness and chroma, or a wheel of hue and chroma with a lightness slider. */
  readonly view = input<NuiColorView>('area');
  /** The colors the area holds: sRGB, or Display P3 for wide-gamut screens. */
  readonly gamut = input<NuiGamut>('srgb');
  /** Shows the opacity slider. Without it, colors are opaque. */
  readonly alpha = input(true, { transform: booleanAttribute });
  readonly swatches = input<readonly NuiColorSwatch[]>([]);
  /** A background to measure the color's contrast against (WCAG 2). */
  readonly contrastWith = input<string | null>(null);
  /** Shows the eyedropper button, where the browser has one. */
  readonly eyeDropper = input(true, { transform: booleanAttribute });
  /** Makes the preview a button that copies the value, where the browser has a clipboard. */
  readonly copy = input(true, { transform: booleanAttribute });
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Texts to replace, for translation. */
  readonly labels = input<Partial<NuiColorPickerLabels>>({});
  /** Emits when the text field loses focus, so forms mark the picker touched. */
  readonly touch = output<void>();

  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private readonly thumb = viewChild.required<ElementRef<HTMLElement>>('thumb');
  private readonly field = viewChild.required<ElementRef<HTMLInputElement>>('field');

  protected readonly words = computed(() => ({ ...NUI_COLOR_PICKER_LABELS, ...this.labels() }));
  protected readonly wheel = computed(() => this.view() === 'wheel');
  protected readonly canPick = signal(false);
  protected readonly canCopy = signal(false);
  protected readonly copied = signal(false);
  protected readonly dragging = signal(false);

  // The picker's own coordinates. On the area, chroma is relative to the most the
  // gamut holds, so the thumb stays put while the hue turns. On the wheel it's
  // OKLCH's own chroma, kept while the lightness or the hue leave it no room, so it
  // comes back when they do.
  protected readonly lightness = signal(0.6);
  protected readonly saturation = signal(0.75);
  protected readonly chroma = signal(0.1);
  protected readonly hue = signal(260);
  protected readonly opacity = signal(1);
  /**
   * A color given from outside, kept as it is until the picker moves: a few, such
   * as pure blue, stick out past the area's edge, where no thumb position reaches.
   */
  private readonly given = signal<NuiColor | null>(null);

  /** The color picked. */
  readonly color = computed<NuiColor>(() => {
    const alpha = this.alpha() ? this.opacity() : 1;
    const gamut = this.gamut();
    const given = this.given();
    if (given && nuiInGamut(given, gamut)) return { ...given, alpha };
    const l = this.lightness();
    const h = this.hue();
    const max = nuiMaxChroma(l, h, gamut);
    const c = this.wheel() ? Math.min(this.chroma(), max) : this.saturation() * max;
    return { l, c, h, alpha };
  });
  protected readonly css = computed(() => nuiFormatColor(this.color(), 'oklch'));
  protected readonly opaque = computed(() =>
    nuiFormatColor({ ...this.color(), alpha: 1 }, 'oklch'),
  );
  protected readonly formatName = computed(() => FORMAT_NAMES[this.format()]);

  /** Where the thumb is, in percent of the area from its top left corner. */
  protected readonly spot = computed(() => {
    if (!this.wheel()) return { x: this.saturation() * 100, y: (1 - this.lightness()) * 100 };
    const { c, h } = this.color();
    const edge = edgeOf(this.gamut());
    const radius = (Math.min(c, edge) / edge) * 50 * INNER;
    const angle = (h * Math.PI) / 180;
    return { x: 50 + radius * Math.cos(angle), y: 50 - radius * Math.sin(angle) };
  });

  /** What the thumb says of where it is. */
  protected readonly position = computed(() => {
    const words = this.words();
    if (!this.wheel()) {
      return words.position(this.percent(this.lightness()), this.percent(this.saturation()));
    }
    return words.wheelPosition(Math.round(this.hue()) % 360, +this.color().c.toFixed(3));
  });

  /** The lightness slider's track: the hue and chroma from black to white, as the gamut holds them. */
  protected readonly lightnessTrack = computed(() => {
    const h = this.hue();
    const c = this.chroma();
    const gamut = this.gamut();
    const stops: string[] = [];
    for (let i = 0; i <= 10; i++) {
      const l = i / 10;
      stops.push(
        nuiFormatColor({ l, c: Math.min(c, nuiMaxChroma(l, h, gamut)), h, alpha: 1 }, 'oklch'),
      );
    }
    return `linear-gradient(to right, ${stops.join(', ')})`;
  });

  /**
   * The wheel's hue ring: each hue's most vivid color at the lightness, which is
   * what a click there picks. A conic gradient turns clockwise from the top, so it
   * starts at 0° on the right and goes down the hues.
   */
  protected readonly ring = computed(() => {
    const l = this.lightness();
    const gamut = this.gamut();
    const stops: string[] = [];
    for (let turn = 0; turn <= 360; turn += 10) {
      const h = (360 - turn) % 360;
      stops.push(nuiFormatColor({ l, c: nuiMaxChroma(l, h, gamut), h, alpha: 1 }, 'oklch'));
    }
    return `conic-gradient(from 90deg, ${stops.join(', ')})`;
  });

  /** Whether the color is light, so what's drawn on it is dark. */
  protected readonly light = computed(() => {
    const color = { ...this.color(), alpha: 1 };
    return nuiContrast(color, '#000000') > nuiContrast(color, '#ffffff');
  });

  protected readonly swatchList = computed(() =>
    this.swatches().map((s) => (typeof s === 'string' ? { color: s, label: s } : s)),
  );

  protected readonly contrast = computed(() => {
    const background = this.contrastWith();
    if (!background || !nuiParseColor(background)) return null;
    const ratio = nuiContrast(this.color(), background);
    return { ratio: (Math.floor(ratio * 100) / 100).toFixed(2), aa: ratio >= 4.5, aaa: ratio >= 7 };
  });

  /**
   * Where sRGB ends in a Display P3 picker: on the area, sRGB's most chroma over
   * P3's at each lightness; on the wheel, sRGB's most chroma at each hue.
   */
  protected readonly gamutLine = computed(() => {
    if (this.gamut() !== 'p3') return null;
    const points: string[] = [];
    const add = (x: number, y: number) =>
      points.push(`${points.length ? 'L' : 'M'}${x.toFixed(2)} ${y.toFixed(2)}`);
    if (this.wheel()) {
      const l = this.lightness();
      for (let h = 0; h < 360; h += 2) {
        const radius = (nuiMaxChroma(l, h, 'srgb') / edgeOf('p3')) * 50 * INNER;
        const angle = (h * Math.PI) / 180;
        add(50 + radius * Math.cos(angle), 50 - radius * Math.sin(angle));
      }
      return `${points.join(' ')} Z`;
    }
    const h = this.hue();
    for (let i = 1; i < 40; i++) {
      const l = 1 - i / 40;
      const p3 = nuiMaxChroma(l, h, 'p3');
      add(p3 ? (nuiMaxChroma(l, h, 'srgb') / p3) * 100 : 0, (i / 40) * 100);
    }
    return points.join(' ');
  });

  /** The value last sent out, so it isn't read back into the picker's coordinates. */
  private sent: string | null = null;
  private copiedTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    effect(() => {
      // A form with no value yet writes null.
      const value = this.value() ?? '';
      untracked(() => {
        if (value !== this.sent) this.read(value);
      });
    });
    afterNextRender(() => {
      this.canPick.set('EyeDropper' in window);
      this.canCopy.set(typeof navigator.clipboard?.writeText === 'function');
    });
    afterRenderEffect(() => {
      if (this.wheel()) this.paintWheel(this.lightness(), this.gamut());
      else this.paintArea(this.hue(), this.gamut());
    });
    inject(DestroyRef).onDestroy(() => clearTimeout(this.copiedTimer));
  }

  protected round(value: number): number {
    return Math.round(value);
  }

  protected percent(value: number): number {
    return Math.round(value * 100);
  }

  /** The canvas's context and a blank image, in Display P3 where the gamut and the browser have it. */
  private surface(width: number, height: number, gamut: NuiGamut) {
    const canvas = this.canvas().nativeElement;
    const wide = gamut === 'p3';
    const context = canvas.getContext('2d', wide ? { colorSpace: 'display-p3' } : undefined);
    if (!context) return null;
    const p3 = wide && context.getContextAttributes?.().colorSpace === 'display-p3';
    const image = p3
      ? context.createImageData(width, height, { colorSpace: 'display-p3' })
      : context.createImageData(width, height);
    const space: NuiGamut = p3 ? 'p3' : 'srgb';
    return { context, image, space };
  }

  /** Paints the area: lightness down, chroma across, at the hue. */
  private paintArea(hue: number, gamut: NuiGamut): void {
    const surface = this.surface(WIDTH, HEIGHT, gamut);
    if (!surface) return;
    const { context, image, space } = surface;
    const data = image.data;
    for (let y = 0; y < HEIGHT; y++) {
      const l = 1 - y / (HEIGHT - 1);
      const max = nuiMaxChroma(l, hue, gamut);
      for (let x = 0; x < WIDTH; x++) {
        const rgb = nuiColorToRgb({ l, c: (x / (WIDTH - 1)) * max, h: hue, alpha: 1 }, space);
        const i = (y * WIDTH + x) * 4;
        data[i] = clamp(rgb[0]) * 255;
        data[i + 1] = clamp(rgb[1]) * 255;
        data[i + 2] = clamp(rgb[2]) * 255;
        data[i + 3] = 255;
      }
    }
    context.putImageData(image, 0, 0);
  }

  /**
   * Paints the wheel at a lightness: hue around (0° to the right, turning up),
   * chroma outward, and nothing past the most the gamut holds at each hue.
   */
  private paintWheel(l: number, gamut: NuiGamut): void {
    const surface = this.surface(WHEEL, WHEEL, gamut);
    if (!surface) return;
    const { context, image, space } = surface;
    const data = image.data;
    // The gamut's edge at this lightness: the most chroma at each degree of hue.
    const limits = Array.from({ length: 361 }, (_, h) => nuiMaxChroma(l, h, gamut));
    const half = WHEEL / 2;
    // The chroma one pixel spans.
    const unit = edgeOf(gamut) / (half * INNER);
    for (let y = 0; y < WHEEL; y++) {
      const dy = half - y - 0.5;
      for (let x = 0; x < WHEEL; x++) {
        const dx = x + 0.5 - half;
        const c = Math.hypot(dx, dy) * unit;
        const h = degrees(Math.atan2(dy, dx));
        const i = Math.floor(h);
        const max = limits[i] + (limits[i + 1] - limits[i]) * (h - i);
        // Pixels the edge crosses are partly painted, so it's smooth.
        const cover = Math.min(1, (max - c) / unit + 0.5);
        if (cover <= 0) continue;
        const rgb = nuiColorToRgb({ l, c: Math.min(c, max), h, alpha: 1 }, space);
        const o = (y * WHEEL + x) * 4;
        data[o] = clamp(rgb[0]) * 255;
        data[o + 1] = clamp(rgb[1]) * 255;
        data[o + 2] = clamp(rgb[2]) * 255;
        data[o + 3] = cover * 255;
      }
    }
    context.putImageData(image, 0, 0);
  }

  /** The most chroma the gamut holds at the lightness and hue. */
  private maxChroma(): number {
    return nuiMaxChroma(this.lightness(), this.hue(), this.gamut());
  }

  /** Takes a color from outside: its place in the area, its hue and opacity. */
  private read(value: string): void {
    this.sent = value;
    const color = nuiParseColor(value) ?? this.named(value);
    if (color) this.place(color);
  }

  private place(color: NuiColor): void {
    const gamut = this.gamut();
    const mapped = nuiToGamut(color, gamut);
    // Grays have no hue of their own: the hue stays where it was.
    if (mapped.c > 1e-4) this.hue.set(mapped.h);
    const max = nuiMaxChroma(mapped.l, this.hue(), gamut);
    this.lightness.set(clamp(mapped.l));
    this.saturation.set(max > 0 ? clamp(mapped.c / max) : 0);
    this.chroma.set(mapped.c);
    this.opacity.set(clamp(color.alpha));
    this.given.set(mapped);
  }

  /** Any other CSS color (a name, `currentColor`) as the browser reads it. */
  private named(text: string): NuiColor | null {
    if (!this.browser || !text.trim()) return null;
    const style = this.host.style;
    const before = style.color;
    style.color = '';
    style.color = text;
    const known = style.color !== '';
    const computed = known ? getComputedStyle(this.host).color : '';
    style.color = before;
    return known ? nuiParseColor(computed) : null;
  }

  /** Sends the color out, written in the format. */
  private emit(): void {
    this.follow();
    const value = nuiFormatColor(this.color(), this.format());
    if (value === this.sent) return;
    this.sent = value;
    this.value.set(value);
  }

  /** Brings the other view's coordinates to the color, so switching views keeps it. */
  private follow(): void {
    const { c } = this.color();
    if (!this.wheel()) {
      this.chroma.set(c);
      return;
    }
    const max = this.maxChroma();
    this.saturation.set(max > 0 ? clamp(c / max) : 0);
  }

  protected onAreaDown(event: PointerEvent): void {
    if (this.disabled() || event.button !== 0) return;
    const area = event.currentTarget as HTMLElement;
    // A pointer that isn't live (a synthetic event, one already lifted) can't be captured.
    try {
      area.setPointerCapture(event.pointerId);
    } catch {}
    this.dragging.set(true);
    this.thumb().nativeElement.focus({ preventScroll: true });
    event.preventDefault();
    this.moveTo(area, event);
  }

  protected onAreaMove(event: PointerEvent): void {
    const area = event.currentTarget as HTMLElement;
    if (this.dragging() && area.hasPointerCapture?.(event.pointerId)) this.moveTo(area, event);
  }

  private moveTo(area: HTMLElement, event: PointerEvent): void {
    this.given.set(null);
    const box = area.getBoundingClientRect();
    const x = clamp((event.clientX - box.left) / box.width);
    const y = clamp((event.clientY - box.top) / box.height);
    if (this.wheel()) {
      // From the middle, the angle is the hue and the distance is the chroma; past
      // the gamut's edge, the thumb stops at it.
      const a = x * 2 - 1;
      const b = 1 - y * 2;
      const distance = Math.min(1, Math.hypot(a, b) / INNER);
      if (distance > 0.01) this.hue.set(degrees(Math.atan2(b, a)));
      this.chroma.set(Math.min(distance * edgeOf(this.gamut()), this.maxChroma()));
    } else {
      this.saturation.set(x);
      this.lightness.set(1 - y);
    }
    this.emit();
  }

  protected onAreaKey(event: KeyboardEvent): void {
    if (this.disabled()) return;
    const moved = this.wheel() ? this.turn(event) : this.slide(event);
    if (!moved) return;
    event.preventDefault();
    this.given.set(null);
    this.emit();
  }

  /** Moves on the area: across is chroma, up is lightness. */
  private slide(event: KeyboardEvent): boolean {
    const step = event.shiftKey ? 0.1 : 0.01;
    const s = this.saturation();
    const l = this.lightness();
    switch (event.key) {
      case 'ArrowLeft':
        this.saturation.set(clamp(s - step));
        break;
      case 'ArrowRight':
        this.saturation.set(clamp(s + step));
        break;
      case 'ArrowUp':
        this.lightness.set(clamp(l + step));
        break;
      case 'ArrowDown':
        this.lightness.set(clamp(l - step));
        break;
      case 'PageUp':
        this.lightness.set(clamp(l + 0.1));
        break;
      case 'PageDown':
        this.lightness.set(clamp(l - 0.1));
        break;
      case 'Home':
        this.saturation.set(0);
        break;
      case 'End':
        this.saturation.set(1);
        break;
      default:
        return false;
    }
    return true;
  }

  /** Moves on the wheel: around is hue, outward is chroma. */
  private turn(event: KeyboardEvent): boolean {
    const step = event.shiftKey ? 10 : 1;
    const c = this.color().c;
    const max = this.maxChroma();
    const edge = edgeOf(this.gamut());
    const hue = (by: number) => this.hue.set((((this.hue() + by) % 360) + 360) % 360);
    // Steps of chroma are hundredths of the wheel's colors' radius.
    const chroma = (to: number) => this.chroma.set(Math.min(Math.max(0, to), max));
    switch (event.key) {
      case 'ArrowLeft':
        hue(-step);
        break;
      case 'ArrowRight':
        hue(step);
        break;
      case 'ArrowUp':
        chroma(c + (edge / 100) * step);
        break;
      case 'ArrowDown':
        chroma(c - (edge / 100) * step);
        break;
      case 'PageUp':
        chroma(c + edge / 10);
        break;
      case 'PageDown':
        chroma(c - edge / 10);
        break;
      case 'Home':
        chroma(0);
        break;
      case 'End':
        chroma(max);
        break;
      default:
        return false;
    }
    return true;
  }

  protected onHue(event: Event): void {
    this.given.set(null);
    this.hue.set(+(event.target as HTMLInputElement).value);
    this.emit();
  }

  protected onLightness(event: Event): void {
    this.given.set(null);
    this.lightness.set(+(event.target as HTMLInputElement).value / 100);
    this.emit();
  }

  protected onAlpha(event: Event): void {
    this.opacity.set(+(event.target as HTMLInputElement).value / 100);
    this.emit();
  }

  protected onText(event: Event): void {
    const field = event.target as HTMLInputElement;
    const color = nuiParseColor(field.value) ?? this.named(field.value);
    if (color) {
      this.place(color);
      this.emit();
    }
    // What the field shows is always the value: an unknown color goes back.
    field.value = this.value();
  }

  protected onTextKey(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.field().nativeElement.value !== this.value()) {
      event.preventDefault();
      this.field().nativeElement.value = this.value();
    }
  }

  protected nextFormat(): void {
    const formats = this.formats();
    const index = formats.indexOf(this.format());
    this.format.set(formats[(index + 1) % formats.length]);
    this.emit();
  }

  protected isCurrent(color: string): boolean {
    const swatch = nuiParseColor(color);
    return (
      !!swatch &&
      !!this.value() &&
      nuiFormatColor(swatch, 'hex') === nuiFormatColor(this.color(), 'hex')
    );
  }

  protected use(color: string): void {
    const parsed = nuiParseColor(color) ?? this.named(color);
    if (!parsed) return;
    this.place(parsed);
    this.emit();
  }

  /** Copies the value, as the field shows it, and says so for a moment. */
  protected async copyValue(): Promise<void> {
    const text = this.value() || nuiFormatColor(this.color(), this.format());
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // The browser refused: nothing was copied.
      return;
    }
    this.copied.set(true);
    clearTimeout(this.copiedTimer);
    this.copiedTimer = setTimeout(() => this.copied.set(false), 1500);
  }

  protected async pickFromScreen(): Promise<void> {
    const EyeDropper = (window as unknown as { EyeDropper: new () => EyeDropperApi }).EyeDropper;
    try {
      const { sRGBHex } = await new EyeDropper().open();
      const color = nuiParseColor(sRGBHex);
      if (!color) return;
      this.place({ ...color, alpha: this.opacity() });
      this.emit();
    } catch {
      // Escape closed the eyedropper: nothing picked.
    }
  }
}
