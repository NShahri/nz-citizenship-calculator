import idGenerator from "../libs/idGenerator";

/**
 * Check if any new row is required to added to list, returns array of new rows
 * @param dateRange {DateRange}
 * @param dateRanges {Array.<DateRange>}
 * @returns {Array.<DateRange>}
 * @private
 */
const _checkIfNewRow = (dateRange, dateRanges = []) => {
    let emptyRangeExists = dateRanges.find(d => !d.startDate && !d.endDate && d.id !== dateRange.id);
    return emptyRangeExists ? [] : [_newDateRange()];
}

/**
 * returns new empty DateRange
 * @returns {{id: int}}
 * @private
 */
const _newDateRange = () => {
    let range = {
        id: idGenerator(),
    };

    return range;
}


/**
 *
 * @param dateRanges {Array.<DateRange>}
 * @param action {{type: string, range DateRange, value: DateRange}}
 * @returns {Array.<DateRange>}
 */
const dateRangesReducer = (dateRanges = [_newDateRange()], action) => {
    switch (action.type) {
        case 'DATE_RANGE_CHANGE':
            let newItem = Object.assign({}, action.range, action.value);
            let itemIndex = dateRanges.findIndex(d => d.id === action.range.id);

            return [
                ...dateRanges.slice(0, itemIndex),
                newItem,
                ...dateRanges.slice(itemIndex + 1),
                ..._checkIfNewRow(newItem, dateRanges)
            ];

        case 'DATE_RANGE_DELETE':
            let itemPosition = dateRanges.findIndex(d => d.id === action.range.id);

            return [
                ...dateRanges.slice(0, itemPosition),
                ...dateRanges.slice(itemPosition + 1),
                ..._checkIfNewRow(action.range, dateRanges)
            ];

        default:
            return dateRanges;
    }
}

export default dateRangesReducer;