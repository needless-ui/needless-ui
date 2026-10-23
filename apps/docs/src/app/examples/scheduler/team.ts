import { Component, signal } from '@angular/core';
import { NuiAvatar } from '@needless-ui/angular/avatar';
import { NuiButton } from '@needless-ui/angular/button';
import {
  NuiScheduler,
  type NuiSchedulerChange,
  type NuiSchedulerEvent,
  NuiSchedulerResourceTemplate,
  type NuiSchedulerTimelineSpan,
} from '@needless-ui/angular/scheduler';
import { plans, TEAM } from './data';

@Component({
  selector: 'scheduler-team-example',
  imports: [NuiAvatar, NuiButton, NuiScheduler, NuiSchedulerResourceTemplate],
  templateUrl: './team.html',
  styleUrls: ['./scheduler.css', './team.css'],
})
export class SchedulerTeamExample {
  protected readonly team = TEAM;
  protected readonly plans = signal<NuiSchedulerEvent[]>(plans());
  protected readonly span = signal<NuiSchedulerTimelineSpan>('month');
  /** Weekdays are working days: the weekend is shaded. */
  protected readonly hours = [{ days: [1, 2, 3, 4, 5], start: '09:00', end: '17:00' }];

  protected move({ event, start, end, resource }: NuiSchedulerChange): void {
    this.plans.update((all) =>
      all.map((p) =>
        p.id === event.id ? { ...p, start, end, resource: resource ?? p.resource } : p,
      ),
    );
  }
}
