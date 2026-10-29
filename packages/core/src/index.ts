/*
 * @needless-ui/core
 *
 * The framework-free logic behind Needless UI, shared by @needless-ui/angular and
 * @needless-ui/react: plain dates, numbers read in a locale, placement of floating
 * elements, the virtualizer, and the customization values. Components' models have
 * entry points of their own:
 *
 *   import { nuiSchedulerRule } from '@needless-ui/core/scheduler';
 *   import { nuiXlsx } from '@needless-ui/core/grid';
 */
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
} from './date.js';
export { nuiParseNumber } from './number.js';
export type { NuiOption } from './option.js';
export {
  type NuiAlign,
  nuiFollow,
  type NuiFollowOptions,
  nuiPlace,
  type NuiPlacement,
  type NuiPlaceRequest,
  type NuiRect,
  type NuiSide,
  nuiVisibleRect,
} from './place.js';
export { NuiVirtualizer } from './virtual.js';
export type {
  NuiCorners,
  NuiDensity,
  NuiEnter,
  NuiMotion,
  NuiPress,
  NuiRadius,
  NuiSize,
  NuiTone,
} from './types.js';
