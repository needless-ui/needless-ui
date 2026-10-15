import { Component, computed, signal } from '@angular/core';
import {
  NuiColorPicker,
  nuiFormatColor,
  nuiParseColor,
  nuiToGamut,
} from '@needless-ui/angular/color-picker';

@Component({
  selector: 'color-picker-wheel-example',
  imports: [NuiColorPicker],
  templateUrl: './wheel.html',
  styleUrl: './color.css',
})
export class ColorPickerWheelExample {
  protected readonly color = signal('oklch(68% 0.15 30)');

  /** Colors around the wheel from the one picked, at its lightness and chroma. */
  protected readonly harmonies = computed(() => {
    const color = nuiParseColor(this.color());
    if (!color) return [];
    const turn = (...angles: number[]) =>
      angles.map((angle) =>
        nuiFormatColor(nuiToGamut({ ...color, h: (color.h + angle + 360) % 360 }), 'oklch'),
      );
    return [
      { name: 'Complementary', colors: turn(0, 180) },
      { name: 'Analogous', colors: turn(-30, 0, 30) },
      { name: 'Triadic', colors: turn(0, 120, 240) },
      { name: 'Split complementary', colors: turn(0, 150, 210) },
    ];
  });
}
