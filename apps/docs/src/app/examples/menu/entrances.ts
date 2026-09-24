import { Component } from '@angular/core';
import type { NuiEnter, NuiMotion } from '@needless-ui/angular';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiMenu, NuiMenuItem, NuiMenuSeparator, NuiMenuTrigger } from '@needless-ui/angular/menu';

@Component({
  selector: 'menu-entrances-example',
  imports: [NuiButton, NuiMenuTrigger, NuiMenu, NuiMenuItem, NuiMenuSeparator],
  templateUrl: './entrances.html',
})
export class MenuEntrancesExample {
  protected readonly styles: { enter: NuiEnter; motion: NuiMotion }[] = [
    { enter: 'unfold', motion: 'mechanical' },
    { enter: 'drop', motion: 'bouncy' },
    { enter: 'flip', motion: 'jelly' },
  ];
}
