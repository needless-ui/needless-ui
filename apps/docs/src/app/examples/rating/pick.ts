import { Component, signal } from '@angular/core';
import { NuiRating } from '@needless-ui/angular/rating';

@Component({
  selector: 'rating-pick-example',
  imports: [NuiRating],
  templateUrl: './pick.html',
})
export class RatingPickExample {
  protected readonly stars = signal<number | null>(null);
}
