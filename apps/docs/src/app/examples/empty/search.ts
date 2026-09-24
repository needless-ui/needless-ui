import { Component } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import {
  NuiEmpty,
  NuiEmptyActions,
  NuiEmptyDescription,
  NuiEmptyMedia,
  NuiEmptyTitle,
} from '@needless-ui/angular/empty';

@Component({
  selector: 'empty-search-example',
  imports: [
    NuiEmpty,
    NuiEmptyMedia,
    NuiEmptyTitle,
    NuiEmptyDescription,
    NuiEmptyActions,
    NuiButton,
  ],
  templateUrl: './search.html',
})
export class EmptySearchExample {}
