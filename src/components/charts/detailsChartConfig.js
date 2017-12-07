import logger from "../../libs/logger";
import differenceInDays from 'date-fns/difference_in_days'

const config = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Stacked bar chart'
    },
    xAxis: {
        categories: ['Date']
    },
    yAxis: {
        min: 0,
        title:
            {
                text: 'Days'
            }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Jane',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5]
    }]
};

/**
 *
 * @param {Array.<DateRange>} dateRanges
 * @returns {{chart: {type: string}, title: {text: string}, xAxis: {categories: Array}, yAxis: {min: number, title: {text: string}}, legend: {reversed: boolean}, plotOptions: {series: {stacking: string}}, series: *[]}}
 */
export default function (dateRanges = []) {
    const customizedConfig = {
        series: [].concat([], ...dateRanges.map((d, index) => [
            {name: 'Live in NZ', data: [differenceInDays(d.endDate, d.startDate)]},
            index >= (dateRanges.length - 1) ? [] : {name: 'Left NZ', data: [differenceInDays(d.endDate, d.startDate)]}
        ])),
        xAxis: {
            categories: [].concat([], ...dateRanges.map((d, index) =>
                index >= (dateRanges.length - 1) ? ['Living in NZ'] : ['Living in NZ', 'Left NZ']))
        },
    };

    const newConfig = {...config};
    //newConfig.xAxis = {...newConfig.xAxis, ...customizedConfig.xAxis};
    newConfig.series = [...customizedConfig.series];

    logger.debug('Details stacked bar chart setting generated', newConfig);
    return newConfig;
}