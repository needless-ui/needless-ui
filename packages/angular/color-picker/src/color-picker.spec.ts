import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { describe, expect, it } from 'vitest';
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
});
