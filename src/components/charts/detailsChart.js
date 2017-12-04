import chartConfigBuilder from './detailsChartConfig';
import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
import PropTypes from 'prop-types';

HighchartsMore(ReactHighcharts.Highcharts);

class DetailsChart extends Component {
    static defaultProps = {
        threshold: 1000,
        maxDays: 5 * 365,
        totalDays: 500
    }

    render() {
        let {dateRanges} = this.props;

        return <div style={{
            minWidth: '310px',
            maxWidth: '400px',
            height: '300px', margin: '0 auto'
        }}>

            <ReactHighcharts config={chartConfigBuilder(dateRanges)}/>
        </div>;
    }
}

DetailsChart.propTypes = {
    //dateRanges:
};

export default DetailsChart;
