import { Component, signal } from '@angular/core';
import { NuiCombobox, type NuiOption } from '@needless-ui/angular/select';

@Component({
  selector: 'combobox-tags-example',
  imports: [NuiCombobox],
  templateUrl: './tags.html',
  styleUrl: './tags.css',
})
export class ComboboxTagsExample {
  protected readonly labels = signal<readonly string[]>(['docs']);
  protected readonly options: NuiOption<string>[] = [
    'bug',
    'design',
    'docs',
    'feature',
    'performance',
    'security',
  ].map((label) => ({ value: label, label }));

  // Typed text becomes a new label.
  protected readonly create = (text: string) => text.toLowerCase();
}
