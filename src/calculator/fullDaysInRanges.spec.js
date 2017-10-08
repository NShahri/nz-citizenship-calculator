/*global it, test, expect*/

import fullDaysInRanges from './fullDaysInRanges';

test('functionality', () => {
    let data1 = [
        {start: new Date(2017, 1, 1), end: new Date(2017, 1, 1)},
        {start: new Date(2017, 1, 2), end: new Date(2017, 1, 2)}
    ];

    let data2 = [
        {start: new Date(2017, 1, 1), end: new Date(2017, 1, 10)},
        {start: new Date(2017, 1, 11), end: new Date(2017, 1, 20)}
    ];

    let data3 = [
        {start: new Date(2017, 1, 1), end: new Date(2017, 1, 10)},
        {start: new Date(2017, 1, 21), end: new Date(2017, 1, 30)}
    ];

    expect(fullDaysInRanges(data1)).toBe(0);
    expect(fullDaysInRanges(data2)).toBe(16);

});

test('when end date and start date of next range are the same', () => {
    let data1 = [
        {start: new Date(2017, 1, 1), end: new Date(2017, 1, 1)},
        {start: new Date(2017, 1, 1), end: new Date(2017, 1, 2)}
    ];

    expect(fullDaysInRanges(data1)).toBe(0);

});