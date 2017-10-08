/*global test, it, expect*/

import fullDaysInRange from './fullDaysInRange'

test('the same start and end date', () => {
    let range1 = fullDaysInRange(new Date(2017,1,1), new Date(2017,1,1));
    let range2 = fullDaysInRange(new Date(2017,1,1,0,0,0,1), new Date(2017,1,1));

    expect(range1).toBe(0);
    expect(range2).toBe(0);
});

test('when range is not valid', () => {
    let range = () => fullDaysInRange(new Date(2017,1,2), new Date(2017,1,1));
    expect(range).toThrow();
});

test('functionality', () => {
    let range1 =  fullDaysInRange(new Date(2017,1,1), new Date(2017,1,2));
    let range2 =  fullDaysInRange(new Date(2017,1,1), new Date(2017,1,10));

    expect(range1).toBe(0);
    expect(range2).toBe(8);
});

test('only one milliseconds', () => {
    let range =  fullDaysInRange(new Date(2017,1,1,0,0,0,1), new Date(2017,1,2,23,59,59,999));
    expect(range).toBe(0);
});

test('not the same year - leap', () => {
    let range1 =  fullDaysInRange(new Date(2016,1,1), new Date(2017,1,1));
    expect(range1).toBe(365);

    // leap year is happening in Feb
    let range2 =  fullDaysInRange(new Date(2015,10,10), new Date(2016,10,10));
    expect(range2).toBe(365);
});

test('not in the same year range - not leap', () => {
    let range1 =  fullDaysInRange(new Date(2017,1,1), new Date(2018,1,1));
    expect(range1).toBe(364);

    // leap year is happening in Feb
    let range2 =  fullDaysInRange(new Date(2016,10,10), new Date(2017,10,10));
    expect(range2).toBe(364);
});