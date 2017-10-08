/*global test, it, expect*/
import validateRangesOverlapping from './validateRangesOverlapping';

test('none overlapped ranges', () => {
    let data1 = [
        {start: new Date(2017, 1, 1), end: new Date(2017, 1, 1)},
        {start: new Date(2017, 1, 2), end: new Date(2017, 1, 2)}
    ];

    let data2 = [
        {start: new Date(2017, 1, 1), end: new Date(2017, 1, 1, 23, 23, 23, 23)},
        {start: new Date(2017, 1, 2), end: new Date(2017, 1, 2, 23, 23, 23, 23)}
    ];

    let data3 = [
        {start: new Date(2017, 1, 1), end: new Date(2017, 1, 1)},
        {start: new Date(2017, 1, 1), end: new Date(2017, 1, 1)}
    ];

    expect(validateRangesOverlapping(data1)).toHaveLength(0);
    expect(validateRangesOverlapping(data2)).toHaveLength(0);
    expect(validateRangesOverlapping(data3)).toHaveLength(0);
});

test('overlapped ranges', () => {
    let data1 = [
        {start: new Date(2017, 1, 1), end: new Date(2017, 1, 2, 0, 0, 0, 1)},
        {start: new Date(2017, 1, 2), end: new Date(2017, 1, 2)}
    ];

    let result = validateRangesOverlapping(data1);
    expect(result).toHaveLength(1);
    expect(result).toContainEqual({initialRange: 0, comparedRange: 1});
});