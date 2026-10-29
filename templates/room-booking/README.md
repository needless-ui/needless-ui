# Room bookings: a Needless UI starter

An Angular 22 app for booking meeting rooms: a [scheduler](https://www.needlessui.com/components/scheduler) with the rooms on a timeline, and a [data grid](https://www.needlessui.com/components/grid) of the bookings grouped by room, with totals and an Excel export. Both are MIT, like the rest of [Needless UI](https://www.needlessui.com).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fneedless-ui%2Fneedless-ui%2Ftree%2Fmain%2Ftemplates%2Froom-booking&project-name=room-booking&repository-name=room-booking)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/needless-ui/needless-ui/tree/main/templates/room-booking)

## Run it

```bash
npx degit needless-ui/needless-ui/templates/room-booking room-booking
cd room-booking
npm install
npm start
```

## What's in it

- **`src/app/app.ts`**: the scheduler (drag across a room to book it, drag a booking to move it; a room holds one booking at a time) and the grid's columns.
- **`src/app/bookings.ts`**: the rooms, a few bookings from today on, and the helpers that save the Excel and calendar (.ics) files.
- **`src/styles.css`**: Needless UI's stylesheet, after the layer order that keeps your resets below its components.

## Make it yours

- **Rooms:** `ROOMS` in `bookings.ts`.
- **Opening hours:** `hours` in `app.ts`. Time outside them is shaded.
- **Saving bookings:** `book()` and `move()` in `app.ts` update a signal. Call your API there.
- **More:** the [booking calendar guide](https://www.needlessui.com/guides/booking-calendar) walks through the scheduler's part step by step.
