import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import { NuiColorPicker } from './color-picker';

@Component({
  imports: [NuiColorPicker, ReactiveFormsModule],
  template: `
    <nui-color-picker
      [formControl]="control"
      [(format)]="format"
      [swatches]="['#ef4444', { color: '#22c55e', label: 'Green' }]"
      contrastWith="#ffffff"
    />
  `,
})
class Host {
  readonly control = new FormControl('#3b82f6');
  readonly format = signal<'hex' | 'rgb' | 'hsl' | 'oklch' | 'p3'>('hex');
}

@Component({
  imports: [NuiColorPicker],
  template: `<nui-color-picker view="wheel" format="oklch" [alpha]="false" [(value)]="value" />`,
})
class WheelHost {
  readonly value = signal('oklch(70% 0.1 30)');
}

async function setup() {
  const fixture = TestBed.createComponent(Host);
  document.body.append(fixture.nativeElement);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const q = <T extends Element>(selector: string) => root.querySelector<T>(selector)!;
  return {
    fixture,
    host: fixture.componentInstance,
    root,
    thumb: q<HTMLElement>('.nui-color-thumb'),
    area: q<HTMLElement>('.nui-color-area'),
    field: q<HTMLInputElement>('.nui-color-input'),
    hue: q<HTMLInputElement>('[data-channel="hue"]'),
    alpha: q<HTMLInputElement>('[data-channel="alpha"]'),
    stable: () => fixture.whenStable(),
  };
}

describe('NuiColorPicker', () => {
  it('shows the color it was given, and moves with the keyboard', async () => {
    const { host, thumb, field, hue, stable } = await setup();
    expect(field.value).toBe('#3b82f6');
    expect(+hue.value).toBe(260);
    expect(thumb.getAttribute('aria-valuetext')).toMatch(/^Lightness 62%, chroma \d+%$/);
    thumb.focus();
    await userEvent.keyboard('{ArrowUp}{ArrowUp}{Shift>}{ArrowLeft}{/Shift}');
    await stable();
    expect(thumb.getAttribute('aria-valuetext')).toMatch(/^Lightness 64%/);
    expect(host.control.value).not.toBe('#3b82f6');
    await userEvent.keyboard('{Home}');
    await stable();
    // No chroma: a gray.
    expect(host.control.value).toMatch(/^#([\da-f]{2})\1\1$/);
    expect(+hue.value).toBe(260);
  });

  it('takes any CSS color typed, a name included, and cycles formats', async () => {
    const { host, root, field, stable } = await setup();
    await userEvent.clear(field);
    await userEvent.type(field, 'rebeccapurple{Enter}');
    await stable();
    expect(host.control.value).toBe('#663399');
    await userEvent.clear(field);
    await userEvent.type(field, 'not a color{Enter}');
    await stable();
    expect(field.value).toBe('#663399');
    const button = root.querySelector<HTMLButtonElement>('.nui-color-format')!;
    await userEvent.click(button);
    await stable();
    expect(host.format()).toBe('rgb');
    expect(host.control.value).toBe('rgb(102 51 153)');
    expect(button.getAttribute('aria-label')).toBe('Format: RGB');
  });

  it('picks swatches, sets opacity, and grades contrast', async () => {
    const { host, root, alpha, stable } = await setup();
    const swatches = root.querySelectorAll<HTMLButtonElement>('.nui-color-swatch');
    expect(swatches[1].getAttribute('aria-label')).toBe('Green');
    await userEvent.click(swatches[0]);
    await stable();
    expect(host.control.value).toBe('#ef4444');
    expect(swatches[0].getAttribute('aria-pressed')).toBe('true');
    const grades = [...root.querySelectorAll('.nui-color-grade')].map((g) => g.textContent?.trim());
    expect(root.querySelector('.nui-color-contrast')?.textContent).toContain('Contrast 3.76:1');
    expect(grades).toEqual(['AA fails', 'AAA fails']);
    alpha.value = '50';
    alpha.dispatchEvent(new Event('input'));
    await stable();
    expect(host.control.value).toBe('#ef444480');
  });

  it('follows the pointer across the area', async () => {
    const { host, area, stable } = await setup();
    const box = area.getBoundingClientRect();
    area.dispatchEvent(
      new PointerEvent('pointerdown', {
        clientX: box.left + box.width,
        clientY: box.top,
        button: 0,
        pointerId: 1,
        bubbles: true,
      }),
    );
    await stable();
    // The top of the area is white, at any chroma.
    expect(host.control.value).toBe('#ffffff');
  });

  it('keeps a color it was given that lies past the edge of the area, such as pure blue', async () => {
    const { host, root, field, thumb, stable } = await setup();
    await userEvent.clear(field);
    await userEvent.type(field, 'blue{Enter}');
    await stable();
    expect(host.control.value).toBe('#0000ff');
    await userEvent.click(root.querySelector<HTMLButtonElement>('.nui-color-format')!);
    await stable();
    expect(host.control.value).toBe('rgb(0 0 255)');
    // The thumb is at the edge; moving it leaves the color for one it reaches.
    expect(thumb.getAttribute('aria-valuenow')).toBe('100');
    thumb.focus();
    await userEvent.keyboard('{ArrowLeft}');
    await stable();
    expect(host.control.value).not.toBe('rgb(0 0 255)');
  });

  describe('as a wheel', () => {
    afterEach(() => vi.restoreAllMocks());

    async function wheel() {
      const fixture = TestBed.createComponent(WheelHost);
      document.body.append(fixture.nativeElement);
      await fixture.whenStable();
      const root: HTMLElement = fixture.nativeElement;
      return {
        host: fixture.componentInstance,
        root,
        area: root.querySelector<HTMLElement>('.nui-color-area')!,
        thumb: root.querySelector<HTMLElement>('.nui-color-thumb')!,
        lightness: root.querySelector<HTMLInputElement>('[data-channel="lightness"]')!,
        stable: () => fixture.whenStable(),
      };
    }

    it('turns the hue and changes chroma from the keyboard, and says where it is', async () => {
      const { host, root, thumb, lightness, stable } = await wheel();
      expect(root.querySelector('nui-color-picker')!.getAttribute('data-view')).toBe('wheel');
      expect(root.querySelector('[data-channel="hue"]')).toBeNull();
      expect(+lightness.value).toBe(70);
      expect(lightness.getAttribute('aria-valuetext')).toBe('70%');
      expect(thumb.getAttribute('aria-valuetext')).toBe('Hue 30°, chroma 0.1');
      // Hue 0 is to the right and turns up: at 30°, the thumb is right of the middle and above it.
      expect(Number.parseFloat(thumb.style.insetInlineStart)).toBeCloseTo(61.81, 1);
      expect(Number.parseFloat(thumb.style.insetBlockStart)).toBeCloseTo(43.18, 1);
      thumb.focus();
      await userEvent.keyboard('{ArrowRight}{ArrowRight}');
      await stable();
      expect(host.value()).toBe('oklch(70% 0.1 32)');
      await userEvent.keyboard('{Shift>}{ArrowLeft}{/Shift}{ArrowUp}');
      await stable();
      expect(host.value()).toBe('oklch(70% 0.1033 22)');
      await userEvent.keyboard('{Home}');
      await stable();
      expect(host.value()).toBe('oklch(70% 0 0)');
      expect(thumb.getAttribute('aria-valuetext')).toBe('Hue 22°, chroma 0');
    });

    it('keeps the chroma while a lightness leaves it no room, and gives it back', async () => {
      const { host, lightness, stable } = await wheel();
      lightness.value = '97';
      lightness.dispatchEvent(new Event('input'));
      await stable();
      const [, near] = /oklch\(97% ([\d.]+) 30\)/.exec(host.value())!;
      expect(+near).toBeLessThan(0.05);
      lightness.value = '70';
      lightness.dispatchEvent(new Event('input'));
      await stable();
      expect(host.value()).toBe('oklch(70% 0.1 30)');
    });

    it('takes the hue from the angle and the chroma from the distance, up to the gamut', async () => {
      const { host, area, stable } = await wheel();
      const box = area.getBoundingClientRect();
      area.dispatchEvent(
        new PointerEvent('pointerdown', {
          clientX: box.left,
          clientY: box.top + box.height / 2,
          button: 0,
          pointerId: 1,
          bubbles: true,
        }),
      );
      await stable();
      // The left edge is hue 180, past what sRGB holds there: the thumb stops at the edge.
      const [, l, c, h] = /oklch\(([\d.]+)% ([\d.]+) ([\d.]+)\)/.exec(host.value())!;
      expect([+l, +h]).toEqual([70, 180]);
      expect(+c).toBeGreaterThan(0.1);
      expect(+c).toBeLessThan(0.13);
    });

    it('copies the value from the preview, and says so', async () => {
      const writes: string[] = [];
      vi.spyOn(navigator.clipboard, 'writeText').mockImplementation(async (text: string) => {
        writes.push(text);
      });
      const { root, stable } = await wheel();
      await stable();
      const preview = root.querySelector<HTMLButtonElement>('button.nui-color-preview')!;
      expect(preview.getAttribute('aria-label')).toBe('Copy the color');
      await userEvent.click(preview);
      await stable();
      expect(writes).toEqual(['oklch(70% 0.1 30)']);
      expect(preview.hasAttribute('data-copied')).toBe(true);
      expect(root.querySelector('[role="status"]')!.textContent).toBe('Copied');
    });
  });
});
