import { Component, signal } from '@angular/core';
import { NuiDropzone, type NuiUploader } from '@needless-ui/angular/dropzone';

@Component({
  selector: 'dropzone-upload-example',
  imports: [NuiDropzone],
  templateUrl: './upload.html',
  styleUrl: './dropzone.css',
})
export class DropzoneUploadExample {
  protected readonly uploaded = signal(0);

  /** Pretends to send a file: progress in steps, and an error for names with “fail”. */
  protected readonly upload: NuiUploader<string> = (file, { signal, progress }) =>
    new Promise((resolve, reject) => {
      let sent = 0;
      const timer = setInterval(() => {
        sent = Math.min(1, sent + 0.1 + Math.random() * 0.15);
        progress(sent);
        if (sent < 1) return;
        clearInterval(timer);
        if (file.name.includes('fail')) reject(new Error('The server said no'));
        else resolve(`https://files.example.com/${file.name}`);
      }, 150);
      signal.addEventListener('abort', () => {
        clearInterval(timer);
        reject(signal.reason);
      });
    });
}
