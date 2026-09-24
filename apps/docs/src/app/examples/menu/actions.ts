import { Component, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import {
  NuiMenu,
  NuiMenuItem,
  NuiMenuSeparator,
  NuiMenuShortcut,
  NuiMenuTrigger,
} from '@needless-ui/angular/menu';

@Component({
  selector: 'menu-actions-example',
  imports: [NuiButton, NuiMenuTrigger, NuiMenu, NuiMenuItem, NuiMenuSeparator, NuiMenuShortcut],
  templateUrl: './actions.html',
})
export class MenuActionsExample {
  protected readonly lastAction = signal('');
}
