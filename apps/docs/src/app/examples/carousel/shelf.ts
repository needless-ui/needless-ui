import { Component, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiCarousel, NuiCarouselSlide } from '@needless-ui/angular/carousel';

@Component({
  selector: 'carousel-shelf-example',
  imports: [NuiButton, NuiCarousel, NuiCarouselSlide],
  templateUrl: './shelf.html',
  styleUrl: './shelf.css',
})
export class CarouselShelfExample {
  protected readonly index = signal(0);
  protected readonly items = [
    { name: 'Linen shirt', price: 'CHF 59', hue: 80 },
    { name: 'Wool scarf', price: 'CHF 35', hue: 20 },
    { name: 'Canvas tote', price: 'CHF 24', hue: 140 },
    { name: 'Rain jacket', price: 'CHF 129', hue: 230 },
    { name: 'Leather belt', price: 'CHF 45', hue: 40 },
    { name: 'Knit beanie', price: 'CHF 19', hue: 300 },
  ];
}
