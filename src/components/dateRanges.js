import React, {Component} from 'react';
import DateRange from './dateRange';
import PropTypes from 'prop-types';
import emptyFunc from 'empty/function';

class DateRanges extends Component {
    constructor(...args) {
        super(...args);

        this.state = {};
    }

    /**
     * @param value{{startDate{Date}, endDate{Date}}}
     */
    onDateRangeChange = (value) => {
        let {onChange, ranges} = this.props;

        //onChange(Object.assign({}, ranges[0], value));
    }

    onDelete = () => {
        let {onDelete} = this.props;
        onDelete(0);
    }

    render() {
        let {ranges:neww} = this.props;

        return neww.map(range =>
            <div>
                <DateRange {...range}/>
                <button onClick={this.onDelete}>X</button>
            </div>
        );
    }
}

DateRange.propTypes = {
    ranges: PropTypes.arrayOf(PropTypes.shape({
        startDate: PropTypes.instanceOf(Date),
        endDate: PropTypes.instanceOf(Date),
        onChange: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired
    })).isRequired,
};

DateRange.defaultProps = {
    ranges: [],
    onChange: emptyFunc,
    onDelete: emptyFunc
};

export default DateRanges;