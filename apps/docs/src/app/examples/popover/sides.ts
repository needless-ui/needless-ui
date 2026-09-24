import { Component } from '@angular/core';
import type { NuiEnter, NuiMotion, NuiSide } from '@needless-ui/angular';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiPopover, NuiPopoverTrigger } from '@needless-ui/angular/popover';

@Component({
  selector: 'popover-sides-example',
  imports: [NuiButton, NuiPopover, NuiPopoverTrigger],
  templateUrl: './sides.html',
})
export class PopoverSidesExample {
  protected readonly sides: { side: NuiSide; enter: NuiEnter; motion: NuiMotion }[] = [
    { side: 'top', enter: 'rise', motion: 'bouncy' },
    { side: 'end', enter: 'swing', motion: 'jelly' },
    { side: 'bottom', enter: 'drop', motion: 'snappy' },
    { side: 'start', enter: 'unfold', motion: 'mechanical' },
  ];
}
