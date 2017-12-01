import chartConfigBuilder from './totalDaysChartConfig';
import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
import PropTypes from 'prop-types';

HighchartsMore(ReactHighcharts.Highcharts);

class TotalDaysChart extends Component {
    static defaultProps = {
        threshold: 1000,
        maxDays: 5 * 365,
        totalDays: 500
    }

    render() {
        let {maxDays, totalDays, threshold} = this.props;

        return <div style={{
            minWidth: '310px',
            maxWidth: '400px',
            height: '300px', margin: '0 auto'
        }}>

            <ReactHighcharts config={chartConfigBuilder(maxDays, totalDays, threshold)}/>
        </div>;
    }
}

TotalDaysChart.propTypes = {
    maxDays: PropTypes.number.isRequired,
    totalDays: PropTypes.number.isRequired,
    threshold: PropTypes.number.isRequired
};

export default TotalDaysChart;
