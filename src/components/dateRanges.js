import React, {Component} from 'react';
import DateRange from './dateRange';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class DateRanges extends Component {
    render() {
        let {ranges = []} = this.props;

        return (
            <div>
                {
                    ranges.map((range, index) =>
                        <DateRange key={range.id} {...range}/>)
                }
                <Link to="/result">Calculate</Link>
            </div>
        );
    }
}

DateRange.propTypes = {
    ranges: PropTypes.array.isRequired
};

DateRange.defaultProps = {
    ranges: []
};

export default DateRanges;