import { Component, signal } from '@angular/core';
import { type NuiOption, NuiSelect } from '@needless-ui/angular/select';

@Component({
  selector: 'select-folders-example',
  imports: [NuiSelect],
  templateUrl: './folders.html',
  styleUrl: './folders.css',
})
export class SelectFoldersExample {
  protected readonly folder = signal<string | null>('website/pages');
  protected readonly folders: NuiOption<string>[] = [
    {
      value: 'website',
      label: 'Website',
      children: [
        { value: 'website/assets', label: 'Assets' },
        {
          value: 'website/pages',
          label: 'Pages',
          children: [{ value: 'website/pages/blog', label: 'Blog' }],
        },
      ],
    },
    {
      value: 'archive',
      label: 'Archive',
      children: [
        { value: 'archive/2025', label: '2025' },
        { value: 'archive/2024', label: '2024' },
      ],
    },
    { value: 'inbox', label: 'Inbox' },
  ];
}
