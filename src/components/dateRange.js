import React, {Component} from 'react';
import DatePicker from './datePicker';
import PropTypes from 'prop-types';
import emptyFunc from 'empty/function';

class DateRange extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            maxStartDate: null,

            maxEndDate: new Date(),
            minEndDate: null
        };
    }

    /**
     * @param value{Date}
     */
    onStartDateChange = (value) => {
        this.onChange({startDate: value});
        this.setState({minEndDate: value});
    }

    /**
     * @param value{Date}
     */
    onEndDateChange = (value) => {
        this.onChange({endDate: value});
        this.setState({maxStartDate: value});
    }

    render() {
        let {startDate, endDate} = this.props;

        return (
            <div>
                <DatePicker onChange={this.onStartDateChange} max={this.state.maxStartDate} value={startDate}/>
                <DatePicker onChange={this.onEndDateChange} max={this.state.maxEndDate} min={this.state.minEndDate} value={endDate}/>
            </div>
        );
    }
}

DateRange.propTypes = {
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    onChange: PropTypes.func.isRequired
};

DateRange.defaultProps = {
    onChange: emptyFunc
};

export default DateRange;