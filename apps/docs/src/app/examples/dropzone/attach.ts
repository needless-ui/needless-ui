import { Component, computed, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiDropzone } from '@needless-ui/angular/dropzone';

@Component({
  selector: 'dropzone-attach-example',
  imports: [NuiButton, NuiDropzone],
  templateUrl: './attach.html',
  styleUrl: './dropzone.css',
})
export class DropzoneAttachExample {
  protected readonly files = signal<readonly File[]>([]);
  protected readonly sent = signal('');
  protected readonly size = computed(() => {
    const bytes = this.files().reduce((sum, file) => sum + file.size, 0);
    return new Intl.NumberFormat('en', { style: 'unit', unit: 'kilobyte' }).format(
      Math.ceil(bytes / 1000),
    );
  });

  protected send(event: Event): void {
    event.preventDefault();
    this.sent.set(
      this.files()
        .map((file) => file.name)
        .join(', '),
    );
    this.files.set([]);
  }
}
