import logger from "../../libs/logger";

const config = {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {
        text: 'Total days'
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 0,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Days'
        }
    },
    tooltip: {
        enabled: false,
    }
};

export default function(maxDays, totalDays, threshold) {
    const customizedConfig = {
        yAxis: {
            min: 0,
            max: maxDays,

            plotBands: [
                {
                    from: 0,
                    to: threshold,
                    color: '#DF5353' // red
                },
                {
                    from: threshold,
                    to: maxDays,
                    color: '#55BF3B' // green
                }
            ]
        },
        series: [{
            /*
            name: '',
            tooltip: {
                valueSuffix: ' days'
            },
            */
            data: [totalDays]
        }]
    };

    const newConfig = {...config};
    newConfig.yAxis = {...newConfig.yAxis, ...customizedConfig.yAxis};
    newConfig.series = [...customizedConfig.series];

    logger.debug('Total days Gauge chart setting generated', newConfig);
    return newConfig;
}