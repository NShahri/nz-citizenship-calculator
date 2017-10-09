import React, {Component} from 'react';
import DateRange from './dateRange';
import PropTypes from 'prop-types';

class DateRanges extends Component {
    render() {
        let {ranges} = this.props;

        return ranges.map((range, index) =>
            <DateRange key={range.id} {...range} deletable={range.startDate || range.endDate}/>
        );
    }
}

DateRange.propTypes = {
    ranges: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })).isRequired
};

DateRange.defaultProps = {
    ranges: [],
};

export default DateRanges;