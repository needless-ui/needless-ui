import { Component, signal } from '@angular/core';
import { NuiColorPicker, type NuiColorSwatch } from '@needless-ui/angular/color-picker';

@Component({
  selector: 'color-picker-brand-example',
  imports: [NuiColorPicker],
  templateUrl: './brand.html',
  styleUrl: './color.css',
})
export class ColorPickerBrandExample {
  protected readonly color = signal('#4f46e5');
  protected readonly swatches: NuiColorSwatch[] = [
    { color: '#e11d48', label: 'Rose' },
    { color: '#ea580c', label: 'Orange' },
    { color: '#ca8a04', label: 'Amber' },
    { color: '#16a34a', label: 'Green' },
    { color: '#0891b2', label: 'Cyan' },
    { color: '#4f46e5', label: 'Indigo' },
    { color: '#9333ea', label: 'Purple' },
    { color: '#1f2937', label: 'Slate' },
  ];
}
