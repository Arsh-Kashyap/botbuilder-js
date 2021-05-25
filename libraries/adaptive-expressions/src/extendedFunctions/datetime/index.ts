import { Expression } from '../../expression';
import { AddDays } from './addDays';
import { AddHours } from './addHours';
import { AddMinutes } from './addMinutes';
import { AddSeconds } from './addSeconds';
import { AddToTime } from './addToTime';
import { ConvertFromUTC } from './convertFromUTC';
import { ConvertToUTC } from './convertToUTC';
import { DateFunc } from './dateFunc';
import { DateReadBack } from './dateReadBack';
import { DateTimeDiff } from './dateTimeDiff';
import { DayOfMonth } from './dayOfMonth';
import { DayOfWeek } from './dayOfWeek';
import { DayOfYear } from './dayOfYear';
import { FormatDateTime } from './formatDateTime';
import { FormatEpoch } from './formatEpoch';
import { FormatTicks } from './formatTicks';
import { GetFutureTime } from './getFutureTime';
import { GetPastTime } from './getPastTime';
import { GetTimeOfDay } from './getTimeOfDay';
import { Month } from './month';
import { StartOfDay } from './startOfDay';
import { StartOfHour } from './startOfHour';
import { StartOfMonth } from './startOfMonth';
import { SubtractFromTime } from './subtractFromTime';
import { Ticks } from './ticks';
import { TicksToDays } from './ticksToDays';
import { TicksToHours } from './ticksToHours';
import { TicksToMinutes } from './ticksToMinutes';
import { ExpressionType } from './types';
import { UtcNow } from './utcNow';
import { Year } from './year';

export default (): void => {
    Expression.functions.add(ExpressionType.AddDays, new AddDays());
    Expression.functions.add(ExpressionType.AddHours, new AddHours());
    Expression.functions.add(ExpressionType.AddMinutes, new AddMinutes());
    Expression.functions.add(ExpressionType.AddSeconds, new AddSeconds());
    Expression.functions.add(ExpressionType.AddToTime, new AddToTime());
    Expression.functions.add(ExpressionType.ConvertFromUTC, new ConvertFromUTC());
    Expression.functions.add(ExpressionType.ConvertToUTC, new ConvertToUTC());
    Expression.functions.add(ExpressionType.Date, new DateFunc());
    Expression.functions.add(ExpressionType.DateReadBack, new DateReadBack());
    Expression.functions.add(ExpressionType.DateTimeDiff, new DateTimeDiff());
    Expression.functions.add(ExpressionType.DayOfMonth, new DayOfMonth());
    Expression.functions.add(ExpressionType.DayOfWeek, new DayOfWeek());
    Expression.functions.add(ExpressionType.DayOfYear, new DayOfYear());
    Expression.functions.add(ExpressionType.FormatDateTime, new FormatDateTime());
    Expression.functions.add(ExpressionType.FormatEpoch, new FormatEpoch());
    Expression.functions.add(ExpressionType.FormatTicks, new FormatTicks());
    Expression.functions.add(ExpressionType.GetFutureTime, new GetFutureTime());
    Expression.functions.add(ExpressionType.GetPastTime, new GetPastTime());
    Expression.functions.add(ExpressionType.GetTimeOfDay, new GetTimeOfDay());
    Expression.functions.add(ExpressionType.Month, new Month());
    Expression.functions.add(ExpressionType.Ticks, new Ticks());
    Expression.functions.add(ExpressionType.TicksToDays, new TicksToDays());
    Expression.functions.add(ExpressionType.TicksToHours, new TicksToHours());
    Expression.functions.add(ExpressionType.TicksToMinutes, new TicksToMinutes());
    Expression.functions.add(ExpressionType.UtcNow, new UtcNow());
    Expression.functions.add(ExpressionType.Year, new Year());
    Expression.functions.add(ExpressionType.StartOfDay, new StartOfDay());
    Expression.functions.add(ExpressionType.StartOfHour, new StartOfHour());
    Expression.functions.add(ExpressionType.StartOfMonth, new StartOfMonth());
    Expression.functions.add(ExpressionType.SubtractFromTime, new SubtractFromTime());
};
