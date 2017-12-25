import idGenerator from "../libs/idGenerator";

/**
 * @class DateRange
 * @property {Date} startDate
 * @property {Date} endDate
 */


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
 * @param {Array.<DateRange>} dateRanges
 * @param {{type: string, range DateRange, value: DateRange}} action
 * @returns {Array.<DateRange>}
 */
const dateRangesReducer = (dateRanges = [], action) => {
    switch (action.type) {
        case 'DATE_RANGE_ADD':
            let newItem = Object.assign(_newDateRange(), action.value);

            return [
                ...dateRanges,
                newItem
            ];

        case 'DATE_RANGE_CHANGE':
            let currentItem = Object.assign({}, action.range, action.value);
            let itemIndex = dateRanges.findIndex(d => d.id === action.range.id);

            return [
                ...dateRanges.slice(0, itemIndex),
                currentItem,
                ...dateRanges.slice(itemIndex + 1)
            ];

        case 'DATE_RANGE_DELETE':
            let itemPosition = dateRanges.findIndex(d => d.id === action.range.id);

            return [
                ...dateRanges.slice(0, itemPosition),
                ...dateRanges.slice(itemPosition + 1)
            ];

        default:
            return dateRanges;
    }
}

export default dateRangesReducer;