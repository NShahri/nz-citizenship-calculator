import chartConfigBuilder from './detailsChartConfig';
import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
import PropTypes from 'prop-types';

HighchartsMore(ReactHighcharts.Highcharts);

class DetailsChart extends Component {
    /**
     * @private
     */
    static defaultProps = {
    };

    render() {
        let {dateRanges} = this.props;

        let styles = {
            minWidth: '310px',
            maxWidth: '400px',
            height: '300px',
            margin: '0 auto'
        };

        return (
            <div style={styles}>
                <ReactHighcharts config={chartConfigBuilder(dateRanges)}/>
            </div>
        );
    }
}

DetailsChart.propTypes = {
    //dateRanges:
};

export default DetailsChart;
