import React, {Component} from 'react';
import DateRange from './dateRange';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import emptyFunc from 'empty/function';

class DateRanges extends Component {
    render() {
        let {ranges = [], onDelete, onChange} = this.props;

        return (
            <div>
                {
                    ranges.map((range, index) =>
                        <DateRange key={range.id} {...range} onDelete={() => onDelete(range)} onChange={value=>{onChange(range,value)}} />)
                }
                <Link to="/result">Calculate</Link>
            </div>
        );
    }
}

DateRange.propTypes = {
    ranges: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

DateRange.defaultProps = {
    ranges: [],
    onDelete: emptyFunc,
    onChange: emptyFunc
};

export default DateRanges;