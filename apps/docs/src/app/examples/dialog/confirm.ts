import { Component, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import {
  NuiDialog,
  NuiDialogActions,
  NuiDialogClose,
  NuiDialogDescription,
  NuiDialogTitle,
} from '@needless-ui/angular/dialog';

@Component({
  selector: 'dialog-confirm-example',
  imports: [
    NuiButton,
    NuiDialog,
    NuiDialogTitle,
    NuiDialogDescription,
    NuiDialogActions,
    NuiDialogClose,
  ],
  templateUrl: './confirm.html',
})
export class DialogConfirmExample {
  protected readonly open = signal(false);
  protected readonly result = signal('');
}
