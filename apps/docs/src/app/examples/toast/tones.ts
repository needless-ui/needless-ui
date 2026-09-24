import { Component, inject } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiToaster } from '@needless-ui/angular/toast';

@Component({
  selector: 'toast-tones-example',
  imports: [NuiButton],
  templateUrl: './tones.html',
})
export class ToastTonesExample {
  protected readonly toaster = inject(NuiToaster);
}
