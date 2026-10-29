'use client';

import { NuiScheduler, type NuiSchedulerEvent } from '@needless-ui/react/scheduler';
import { useState } from 'react';

export function Planner({ initial, day }: { initial: NuiSchedulerEvent[]; day: string }) {
  const [events, setEvents] = useState(initial);
  return (
    <NuiScheduler
      events={events}
      defaultDate={day}
      editable
      selectable
      style={{ height: 600 }}
      onEventChange={({ event, start, end }) =>
        setEvents((list) => list.map((e) => (e.id === event.id ? { ...e, start, end } : e)))
      }
      onSlotSelect={({ start, end }) =>
        setEvents((list) => [...list, { id: crypto.randomUUID(), title: 'New event', start, end }])
      }
    />
  );
}
