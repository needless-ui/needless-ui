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
  selector: 'dialog-form-example',
  imports: [
    NuiButton,
    NuiDialog,
    NuiDialogTitle,
    NuiDialogDescription,
    NuiDialogActions,
    NuiDialogClose,
  ],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class DialogFormExample {
  protected readonly open = signal(false);
  protected readonly name = signal('Ada Lovelace');
  protected readonly saved = signal(false);

  protected onClosed(result: string, name: string): void {
    this.saved.set(result === 'save');
    if (result === 'save') this.name.set(name);
  }
}
