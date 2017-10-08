import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import startOfDay from 'date-fns/start_of_day';
import addDays from 'date-fns/add_days';
import isSameDay from 'date-fns/is_same_day'

/**
 * returns number of days between start and end date
 * it will not count startDate or endDate
 *
 * @param startDate {Date} - the day which you left the country
 * @param endDate {Date} - the day which you returned back to country
 */
export default function fullDaysInRange(startDate, endDate) {
    if(isSameDay(startDate, endDate)){
        return 0;
    }

    let starting = startOfDay(addDays(startDate, 1));
    let ending = startOfDay(endDate);

    if (ending < starting) {
        throw Error('invalid range');
    }

    return differenceInCalendarDays(endDate, startDate) - 1;
}

