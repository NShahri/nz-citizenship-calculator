import fullDaysInRange from './fullDaysInRange';
import validateRangesOverlapping from './validateRangesOverlapping';

/**
 * calculates the number of full days which user is in country
 * @param ranges {Array.<{start: Date, end: Date}>} - they should not have any overlap
 * @return {number} total days between ranges
 */
export default function fullDaysInRanges(ranges = []){
    let overlapping = validateRangesOverlapping(ranges);
    if(overlapping.length){
        throw Error('invalid argument');
    }

    let days = 0;
    ranges.forEach(value=> days += fullDaysInRange(value.start, value.end));

    return days;
}

