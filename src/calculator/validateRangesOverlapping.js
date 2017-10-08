import areRangesOverlapping from 'date-fns/are_ranges_overlapping';

/**
 * validate all ranges overlapping each other
 * @param ranges {Array.<{start: Date, end: Date}>} - they should not have any overlap
 * @returns {Array.<{initialRange: number, comparedRange: number}>} - returns array of overlapped ranges
 */
export default function validateRangesOverlapping(ranges = []){
    let result = [];
    for(let index = 0; index < ranges.length; index ++){
        let initalRange = ranges[index];
        for(let subIndex = index +1; subIndex < ranges.length; subIndex ++){
            let comparedRange = ranges[subIndex];

            let overlapped = areRangesOverlapping(initalRange.start, initalRange.end, comparedRange.start, comparedRange.end);
            if(overlapped){
                result.push({initialRange: index, comparedRange: subIndex});
            }
        }
    }

    return result;
}