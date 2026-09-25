import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  Component,
  computed,
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
import { type ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  type NuiColor,
  nuiColorToRgb,
  nuiContrast,
  type NuiColorFormat,
  nuiFormatColor,
  type NuiGamut,
  nuiMaxChroma,
  nuiParseColor,
  nuiToGamut,
} from './color';

/** A swatch: a color, with a name for people who can't see it. */
export type NuiColorSwatch = string | { color: string; label: string };

/** Every text a color picker says. */
export interface NuiColorPickerLabels {
  area: string;
  /** What the area's thumb says of where it is. */
  position: (lightness: number, chroma: number) => string;
  hue: string;
  alpha: string;
  value: string;
  format: (name: string) => string;
  eyeDropper: string;
  swatches: string;
  contrast: (ratio: string) => string;
  passes: string;
  fails: string;
}

export const NUI_COLOR_PICKER_LABELS: NuiColorPickerLabels = {
  area: 'Color',
  position: (lightness, chroma) => `Lightness ${lightness}%, chroma ${chroma}%`,
  hue: 'Hue',
  alpha: 'Opacity',
  value: 'Color value',
  format: (name) => `Format: ${name}`,
  eyeDropper: 'Pick a color from the screen',
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

const clamp = (value: number) => Math.min(1, Math.max(0, value));

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
 * ```
 *
 * The area fills the gamut: across is chroma, from gray to the most the gamut
 * holds at that lightness, so every point is a color the screen can show. With
 * `gamut="p3"` a dashed line marks where sRGB ends. Works with Signal Forms
 * (`[formField]`), reactive forms and `ngModel`.
 */
@Component({
  selector: 'nui-color-picker',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NuiColorPicker), multi: true },
  ],
  host: {
    class: 'nui-color-picker',
    '[attr.data-disabled]': 'isDisabled() || null',
    '[style.--_value]': 'css()',
    '[style.--_opaque]': 'opaque()',
  },
  template: `
    <div
      class="nui-color-area"
      (pointerdown)="onAreaDown($event)"
      (pointermove)="onAreaMove($event)"
      (lostpointercapture)="dragging.set(false)"
      [attr.data-dragging]="dragging() || null"
    >
      <canvas
        #canvas
        class="nui-color-canvas"
        [width]="width"
        [height]="height"
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
        [attr.tabindex]="isDisabled() ? null : 0"
        [attr.aria-label]="words().area"
        aria-valuemin="0"
        aria-valuemax="100"
        [attr.aria-valuenow]="percent(saturation())"
        [attr.aria-valuetext]="words().position(percent(lightness()), percent(saturation()))"
        [attr.aria-disabled]="isDisabled() || null"
        [style.inset-inline-start.%]="saturation() * 100"
        [style.inset-block-start.%]="(1 - lightness()) * 100"
        (keydown)="onAreaKey($event)"
      ></div>
    </div>
    <div class="nui-color-row">
      <span class="nui-color-preview" aria-hidden="true"></span>
      <div class="nui-color-sliders">
        <input
          type="range"
          class="nui-color-slider"
          data-channel="hue"
          min="0"
          max="360"
          step="1"
          [value]="round(hue())"
          [attr.aria-label]="words().hue"
          [disabled]="isDisabled()"
          (input)="onHue($event)"
        />
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
            [disabled]="isDisabled()"
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
          [disabled]="isDisabled()"
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
        [disabled]="isDisabled()"
        (change)="onText($event)"
        (keydown)="onTextKey($event)"
        (blur)="onTouched()"
      />
      @if (formats().length > 1) {
        <button
          type="button"
          class="nui-color-format"
          [attr.aria-label]="words().format(formatName())"
          [disabled]="isDisabled()"
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
            [disabled]="isDisabled()"
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
export class NuiColorPicker implements ControlValueAccessor {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  protected readonly width = WIDTH;
  protected readonly height = HEIGHT;

  /** The color, written in `format`, or empty before one is picked. Bind with `[(value)]`. */
  readonly value = model('');
  /** How the value is written. The format button cycles through `formats`. Bind with `[(format)]`. */
  readonly format = model<NuiColorFormat>('hex');
  readonly formats = input<readonly NuiColorFormat[]>(['hex', 'rgb', 'hsl', 'oklch']);
  /** The colors the area holds: sRGB, or Display P3 for wide-gamut screens. */
  readonly gamut = input<NuiGamut>('srgb');
  /** Shows the opacity slider. Without it, colors are opaque. */
  readonly alpha = input(true, { transform: booleanAttribute });
  readonly swatches = input<readonly NuiColorSwatch[]>([]);
  /** A background to measure the color's contrast against (WCAG 2). */
  readonly contrastWith = input<string | null>(null);
  /** Shows the eyedropper button, where the browser has one. */
  readonly eyeDropper = input(true, { transform: booleanAttribute });
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Texts to replace, for translation. */
  readonly labels = input<Partial<NuiColorPickerLabels>>({});

  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private readonly thumb = viewChild.required<ElementRef<HTMLElement>>('thumb');
  private readonly field = viewChild.required<ElementRef<HTMLInputElement>>('field');

  protected readonly words = computed(() => ({ ...NUI_COLOR_PICKER_LABELS, ...this.labels() }));
  private readonly formDisabled = signal(false);
  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());
  protected readonly canPick = signal(false);
  protected readonly dragging = signal(false);

  // The picker's own coordinates: chroma is relative to the most the gamut holds,
  // so the thumb stays put while the hue turns.
  protected readonly lightness = signal(0.6);
  protected readonly saturation = signal(0.75);
  protected readonly hue = signal(260);
  protected readonly opacity = signal(1);

  /** The color picked. */
  readonly color = computed<NuiColor>(() => {
    const l = this.lightness();
    const h = this.hue();
    const c = this.saturation() * nuiMaxChroma(l, h, this.gamut());
    return { l, c, h, alpha: this.alpha() ? this.opacity() : 1 };
  });
  protected readonly css = computed(() => nuiFormatColor(this.color(), 'oklch'));
  protected readonly opaque = computed(() =>
    nuiFormatColor({ ...this.color(), alpha: 1 }, 'oklch'),
  );
  protected readonly formatName = computed(() => FORMAT_NAMES[this.format()]);

  protected readonly swatchList = computed(() =>
    this.swatches().map((s) => (typeof s === 'string' ? { color: s, label: s } : s)),
  );

  protected readonly contrast = computed(() => {
    const background = this.contrastWith();
    if (!background || !nuiParseColor(background)) return null;
    const ratio = nuiContrast(this.color(), background);
    return { ratio: (Math.floor(ratio * 100) / 100).toFixed(2), aa: ratio >= 4.5, aaa: ratio >= 7 };
  });

  /** Where sRGB ends in a P3 area: at each lightness, sRGB's most chroma over P3's. */
  protected readonly gamutLine = computed(() => {
    if (this.gamut() !== 'p3') return null;
    const h = this.hue();
    const points: string[] = [];
    for (let i = 1; i < 40; i++) {
      const l = 1 - i / 40;
      const p3 = nuiMaxChroma(l, h, 'p3');
      const x = p3 ? (nuiMaxChroma(l, h, 'srgb') / p3) * 100 : 0;
      points.push(`${points.length ? 'L' : 'M'}${x.toFixed(2)} ${((i / 40) * 100).toFixed(2)}`);
    }
    return points.join(' ');
  });

  /** The value last sent out, so it isn't read back into the picker's coordinates. */
  private sent: string | null = null;
  private onChange: (value: string) => void = () => undefined;
  protected onTouched: () => void = () => undefined;

  constructor() {
    effect(() => {
      const value = this.value();
      untracked(() => {
        if (value !== this.sent) this.read(value);
      });
    });
    afterNextRender(() => this.canPick.set('EyeDropper' in window));
    afterRenderEffect(() => this.paint(this.hue(), this.gamut()));
  }

  protected round(value: number): number {
    return Math.round(value);
  }

  protected percent(value: number): number {
    return Math.round(value * 100);
  }

  /** Paints the area: lightness down, chroma across, at the hue. */
  private paint(hue: number, gamut: NuiGamut): void {
    const canvas = this.canvas().nativeElement;
    const wide = gamut === 'p3';
    const context = canvas.getContext('2d', wide ? { colorSpace: 'display-p3' } : undefined);
    if (!context) return;
    const p3 = wide && context.getContextAttributes?.().colorSpace === 'display-p3';
    const image = p3
      ? context.createImageData(WIDTH, HEIGHT, { colorSpace: 'display-p3' })
      : context.createImageData(WIDTH, HEIGHT);
    const data = image.data;
    for (let y = 0; y < HEIGHT; y++) {
      const l = 1 - y / (HEIGHT - 1);
      const max = nuiMaxChroma(l, hue, gamut);
      for (let x = 0; x < WIDTH; x++) {
        const rgb = nuiColorToRgb(
          { l, c: (x / (WIDTH - 1)) * max, h: hue, alpha: 1 },
          p3 ? 'p3' : 'srgb',
        );
        const i = (y * WIDTH + x) * 4;
        data[i] = clamp(rgb[0]) * 255;
        data[i + 1] = clamp(rgb[1]) * 255;
        data[i + 2] = clamp(rgb[2]) * 255;
        data[i + 3] = 255;
      }
    }
    context.putImageData(image, 0, 0);
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
    if (mapped.c > 1e-4) this.hue.set(color.h);
    const max = nuiMaxChroma(mapped.l, this.hue(), gamut);
    this.lightness.set(clamp(mapped.l));
    this.saturation.set(max > 0 ? clamp(mapped.c / max) : 0);
    this.opacity.set(clamp(color.alpha));
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
    const value = nuiFormatColor(this.color(), this.format());
    if (value === this.sent) return;
    this.sent = value;
    this.value.set(value);
    this.onChange(value);
  }

  protected onAreaDown(event: PointerEvent): void {
    if (this.isDisabled() || event.button !== 0) return;
    const area = event.currentTarget as HTMLElement;
    area.setPointerCapture?.(event.pointerId);
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
    const box = area.getBoundingClientRect();
    this.saturation.set(clamp((event.clientX - box.left) / box.width));
    this.lightness.set(1 - clamp((event.clientY - box.top) / box.height));
    this.emit();
  }

  protected onAreaKey(event: KeyboardEvent): void {
    if (this.isDisabled()) return;
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
        return;
    }
    event.preventDefault();
    this.emit();
  }

  protected onHue(event: Event): void {
    this.hue.set(+(event.target as HTMLInputElement).value);
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

  writeValue(value: unknown): void {
    const text = value == null ? '' : String(value);
    this.read(text);
    this.value.set(text);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.formDisabled.set(disabled);
  }
}
