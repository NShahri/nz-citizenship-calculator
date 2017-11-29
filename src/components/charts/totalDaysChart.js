import chartConfigBuilder from './totalDaysChartConfig';
import React, {Component} from 'react';
import Chart from 'react-highcharts';
import PropTypes from 'prop-types';

class TotalDaysChart extends Component {
    static defaultProps = {
        threshold: 1000,
        maxDays: 5 * 365,
        totalDays: 0
    }

    render() {
        let {maxDays, totalDays, threshold} = this.props;
        return <div></div>;
        //return <Chart config={chartConfigBuilder(maxDays, totalDays, threshold)}/>
    }
}

TotalDaysChart.propTypes = {
    maxDays: PropTypes.number.isRequired,
    totalDays: PropTypes.number.isRequired,
    threshold: PropTypes.number.isRequired
};

export default TotalDaysChart;
