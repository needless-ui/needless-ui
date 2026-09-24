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
  selector: 'dialog-dismissible-example',
  imports: [
    NuiButton,
    NuiDialog,
    NuiDialogTitle,
    NuiDialogDescription,
    NuiDialogActions,
    NuiDialogClose,
  ],
  templateUrl: './dismissible.html',
})
export class DialogDismissibleExample {
  protected readonly open = signal(false);
  protected readonly answer = signal('');
}
