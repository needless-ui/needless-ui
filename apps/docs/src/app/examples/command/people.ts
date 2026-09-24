import { Component, signal } from '@angular/core';
import { NuiAvatar } from '@needless-ui/angular/avatar';
import { NuiButton } from '@needless-ui/angular/button';
import { type NuiCommand, NuiCommandPalette } from '@needless-ui/angular/command';
import { NuiOptionTemplate, NuiOptionText } from '@needless-ui/angular/select';

@Component({
  selector: 'command-people-example',
  imports: [NuiAvatar, NuiButton, NuiCommandPalette, NuiOptionTemplate, NuiOptionText],
  templateUrl: './people.html',
})
export class CommandPeopleExample {
  protected readonly open = signal(false);
  protected readonly chosen = signal('nobody yet');
  protected readonly people: NuiCommand[] = [
    { label: 'Ada Lovelace', description: 'Analytical Engine', group: 'Engineering' },
    { label: 'Grace Hopper', description: 'Compilers', group: 'Engineering' },
    { label: 'Margaret Hamilton', description: 'Flight software', group: 'Engineering' },
    { label: 'Hedy Lamarr', description: 'Frequency hopping', group: 'Research' },
    { label: 'Katherine Johnson', description: 'Orbital mechanics', group: 'Research' },
  ];
}
