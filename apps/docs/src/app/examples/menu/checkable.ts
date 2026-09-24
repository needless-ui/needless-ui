import { Component, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiMenu, NuiMenuItem, NuiMenuSeparator, NuiMenuTrigger } from '@needless-ui/angular/menu';

type Density = 'Compact' | 'Comfortable' | 'Spacious';

@Component({
  selector: 'menu-checkable-example',
  imports: [NuiButton, NuiMenuTrigger, NuiMenu, NuiMenuItem, NuiMenuSeparator],
  templateUrl: './checkable.html',
})
export class MenuCheckableExample {
  protected readonly densities: Density[] = ['Compact', 'Comfortable', 'Spacious'];
  protected readonly showGrid = signal(true);
  protected readonly showRulers = signal(false);
  protected readonly density = signal<Density>('Comfortable');
}
