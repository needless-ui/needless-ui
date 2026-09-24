import { Component, signal } from '@angular/core';
import type { NuiEnter } from '@needless-ui/angular';
import { NuiButton } from '@needless-ui/angular/button';
import {
  NuiDialog,
  NuiDialogActions,
  NuiDialogClose,
  NuiDialogDescription,
  NuiDialogTitle,
} from '@needless-ui/angular/dialog';

@Component({
  selector: 'dialog-entrances-example',
  imports: [
    NuiButton,
    NuiDialog,
    NuiDialogTitle,
    NuiDialogDescription,
    NuiDialogActions,
    NuiDialogClose,
  ],
  templateUrl: './entrances.html',
})
export class DialogEntrancesExample {
  protected readonly entrances: NuiEnter[] = ['flip', 'unfold', 'swing', 'drop', 'slide', 'zoom'];
  protected readonly enter = signal<NuiEnter>('flip');
  protected readonly open = signal(false);

  protected show(entrance: NuiEnter): void {
    this.enter.set(entrance);
    this.open.set(true);
  }
}
