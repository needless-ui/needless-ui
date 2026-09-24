import { Component, signal } from '@angular/core';
import { type NuiOption, NuiSelect } from '@needless-ui/angular/select';

@Component({
  selector: 'select-zones-example',
  imports: [NuiSelect],
  templateUrl: './zones.html',
  styleUrl: './zones.css',
})
export class SelectZonesExample {
  protected readonly zone = signal<string | null>('Europe/Zurich');
  // Every time zone the browser knows, around 400, grouped by region.
  protected readonly zones: NuiOption<string>[] = Intl.supportedValuesOf('timeZone').map((zone) => {
    const [region, ...place] = zone.split('/');
    return {
      value: zone,
      label: place.join(' / ').replaceAll('_', ' ') || zone,
      group: place.length ? region : undefined,
    };
  });
}
