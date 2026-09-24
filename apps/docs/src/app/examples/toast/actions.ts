import { Component, inject } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiToaster } from '@needless-ui/angular/toast';

@Component({
  selector: 'toast-actions-example',
  imports: [NuiButton],
  templateUrl: './actions.html',
})
export class ToastActionsExample {
  private readonly toaster = inject(NuiToaster);

  protected archive(): void {
    this.toaster.show({
      title: '3 threads archived',
      action: { label: 'Undo', run: () => this.toaster.success('Threads restored') },
    });
  }

  protected upload(): void {
    const done = new Promise<string>((resolve, reject) =>
      setTimeout(() => (Math.random() < 0.8 ? resolve('report.pdf') : reject()), 1800),
    );
    this.toaster.promise(done, {
      loading: 'Uploading…',
      success: (name) => ({ title: 'Uploaded', description: name }),
      danger: 'Upload failed. Try again.',
    });
  }
}
