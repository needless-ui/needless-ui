/*
 * @needless-ui/angular
 *
 * Components live in secondary entry points, so an app only ships what it imports:
 *
 *   import { NuiButton } from '@needless-ui/angular/button';
 *
 * The primary entry point holds what components share: types, the customization
 * inputs and the spring compiler.
 */
export { nuiOnCloseRequest } from './close';
export {
  nuiAddDays,
  nuiAddMinutes,
  nuiAddMonths,
  nuiAddToMonth,
  nuiAddYears,
  nuiClampDate,
  nuiDate,
  type NuiDate,
  nuiDateFormat,
  type NuiDateParts,
  nuiDateParts,
  type NuiDateTime,
  nuiDayNumber,
  nuiDaysBetween,
  nuiDaysInMonth,
  nuiFormatDate,
  nuiFromDayNumber,
  nuiIsDate,
  nuiIsLeapYear,
  nuiIsoWeek,
  nuiMinutes,
  type NuiMonth,
  nuiMonthNames,
  nuiMonthOf,
  nuiMonthWeeks,
  nuiNow,
  nuiSplitDateTime,
  nuiStartOfWeek,
  type NuiTime,
  nuiTime,
  type NuiTimeParts,
  nuiTimeParts,
  nuiToday,
  nuiUses12Hours,
  nuiUtc,
  nuiWeekday,
  nuiWeekdayNames,
  type NuiWeekInfo,
  nuiWeekInfo,
} from './date';
export { nuiFuzzyMatch, nuiHighlight, type NuiMatch } from './fuzzy';
export { NuiPersonality } from './personality';
export {
  nuiFollow,
  nuiPlace,
  type NuiAlign,
  type NuiFollowOptions,
  type NuiPlacement,
  type NuiPlaceRequest,
  type NuiRect,
  type NuiSide,
} from './place';
export { nuiIsApple, nuiMatchesShortcut, nuiShortcutKeys } from './shortcut';
export { springTransition, type NuiSpring } from './spring';
export { NuiVirtualizer } from './virtual';
export type {
  NuiCorners,
  NuiDensity,
  NuiEnter,
  NuiMotion,
  NuiPress,
  NuiRadius,
  NuiSize,
  NuiTone,
} from './types';
