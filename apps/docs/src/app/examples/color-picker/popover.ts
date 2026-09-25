import { Component, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiColorPicker } from '@needless-ui/angular/color-picker';
import { NuiPopover, NuiPopoverTrigger } from '@needless-ui/angular/popover';

@Component({
  selector: 'color-picker-popover-example',
  imports: [NuiButton, NuiColorPicker, NuiPopover, NuiPopoverTrigger],
  templateUrl: './popover.html',
  styleUrl: './color.css',
})
export class ColorPickerPopoverExample {
  protected readonly color = signal('#0891b2');
}
