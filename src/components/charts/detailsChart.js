const config = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Stacked bar chart'
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        min: 0,
        title:
            {
                text: 'Total fruit consumption'
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
    series: []
};