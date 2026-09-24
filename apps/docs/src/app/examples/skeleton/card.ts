import { Component, signal } from '@angular/core';
import { NuiAvatar } from '@needless-ui/angular/avatar';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiSkeleton } from '@needless-ui/angular/skeleton';

@Component({
  selector: 'skeleton-card-example',
  imports: [NuiSkeleton, NuiAvatar, NuiButton],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class SkeletonCardExample {
  protected readonly loading = signal(true);
}
