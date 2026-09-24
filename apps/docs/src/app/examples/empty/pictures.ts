import { Component } from '@angular/core';
import {
  NuiEmpty,
  NuiEmptyDescription,
  NuiEmptyMedia,
  type NuiEmptyIllustration,
} from '@needless-ui/angular/empty';

@Component({
  selector: 'empty-pictures-example',
  imports: [NuiEmpty, NuiEmptyMedia, NuiEmptyDescription],
  templateUrl: './pictures.html',
})
export class EmptyPicturesExample {
  protected readonly pictures: NuiEmptyIllustration[] = ['search', 'inbox', 'files', 'error'];
}
