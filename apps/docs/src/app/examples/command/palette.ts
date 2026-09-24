import { Component, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { type NuiCommand, NuiCommandPalette } from '@needless-ui/angular/command';

@Component({
  selector: 'command-palette-example',
  imports: [NuiButton, NuiCommandPalette],
  templateUrl: './palette.html',
})
export class CommandPaletteExample {
  protected readonly open = signal(false);
  protected readonly last = signal('none yet');
  protected readonly commands: NuiCommand[] = [
    { label: 'New document', group: 'Documents', shortcut: 'mod+alt+n' },
    { label: 'Duplicate', group: 'Documents', shortcut: 'mod+d', keywords: ['copy'] },
    { label: 'Share…', group: 'Documents', shortcut: 'mod+shift+s', keywords: ['invite', 'link'] },
    {
      label: 'Archive',
      group: 'Documents',
      description: 'Only owners can archive',
      disabled: true,
    },
    {
      label: 'Theme',
      group: 'Preferences',
      children: [{ label: 'Light' }, { label: 'Dark' }, { label: 'Like the system' }],
    },
    {
      label: 'Language',
      group: 'Preferences',
      keywords: ['locale'],
      children: [{ label: 'English' }, { label: 'Italiano' }, { label: '日本語' }],
    },
  ];
}
