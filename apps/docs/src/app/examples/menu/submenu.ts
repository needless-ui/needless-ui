import { Component, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiMenu, NuiMenuItem, NuiMenuSeparator, NuiMenuTrigger } from '@needless-ui/angular/menu';

@Component({
  selector: 'menu-submenu-example',
  imports: [NuiButton, NuiMenuTrigger, NuiMenu, NuiMenuItem, NuiMenuSeparator],
  templateUrl: './submenu.html',
})
export class MenuSubmenuExample {
  protected readonly opened = signal('');
}
