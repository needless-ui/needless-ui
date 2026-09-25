import { Component, signal } from '@angular/core';
import { NuiColorPicker, type NuiColorFormat } from '@needless-ui/angular/color-picker';

@Component({
  selector: 'color-picker-wide-example',
  imports: [NuiColorPicker],
  templateUrl: './wide.html',
})
export class ColorPickerWideExample {
  protected readonly color = signal('oklch(70% 0.25 145)');
  protected readonly formats: NuiColorFormat[] = ['oklch', 'p3', 'hex'];
}
