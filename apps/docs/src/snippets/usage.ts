import { Component } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';

@Component({
  selector: 'app-root',
  imports: [NuiButton],
  template: `<button nuiButton (click)="save()">Save changes</button>`,
})
export class App {
  save() {}
}
