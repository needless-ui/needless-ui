import { Component } from '@angular/core';
import { NuiCarousel, NuiCarouselSlide } from '@needless-ui/angular/carousel';

@Component({
  selector: 'carousel-featured-example',
  imports: [NuiCarousel, NuiCarouselSlide],
  templateUrl: './featured.html',
  styleUrl: './featured.css',
})
export class CarouselFeaturedExample {
  protected readonly trips = [
    { name: 'Lake Como', text: 'Villas, ferries and gelato on the shore.', hue: 205 },
    { name: 'Dolomites', text: 'Pale peaks, alpine huts and long ridges.', hue: 145 },
    { name: 'Cinque Terre', text: 'Five villages, one coastal path.', hue: 25 },
    { name: 'Sicily', text: 'Baroque towns under a volcano.', hue: 340 },
  ];
}
