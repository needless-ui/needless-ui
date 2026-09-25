import { Component, signal } from '@angular/core';
import { NuiMask, type NuiMaskToken } from '@needless-ui/angular/mask';

@Component({
  selector: 'mask-formats-example',
  imports: [NuiMask],
  templateUrl: './formats.html',
  styleUrl: './mask.css',
})
export class MaskFormatsExample {
  protected readonly date = signal('');
  protected readonly time = signal('');
  protected readonly plate = signal('');
  protected readonly color = signal('');
  /** A token of our own: a hexadecimal digit, in lower case. */
  protected readonly hex: Record<string, NuiMaskToken> = {
    h: { pattern: /[\da-f]/i, transform: (c) => c.toLowerCase() },
  };
}
