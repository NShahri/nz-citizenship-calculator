import React, {Component} from 'react';
import DatePicker from './nativeDatePicker';
import PropTypes from 'prop-types';
import emptyFunc from 'empty/function';

class DateRange extends Component {
    /**
     * @param value{Date}
     */
    onStartDateChange = (value) => {
        let {onChange} = this.props;

        onChange({startDate: value});
    }

    /**
     * @param value{Date}
     */
    onEndDateChange = (value) => {
        let {onChange} = this.props;

        onChange({endDate: value});
    }

    onDelete = () => {
        let {onDelete} = this.props;
        onDelete();
    }

    render() {
        let {startDate, endDate} = this.props;

        return (
            <div>
                <DatePicker hintText="Entered New Zealand on"
                            floatingLabelText="Entered New Zealand on"
                            onChange={this.onStartDateChange}
                            maxDate={endDate ? endDate : new Date()}
                            value={startDate}
                            style={{display: 'inline-block'}}/>

                <DatePicker hintText="Left New Zealand on"
                            floatingLabelText="Left New Zealand on"
                            onChange={this.onEndDateChange}
                            maxDate={new Date()}
                            minDate={startDate}
                            value={endDate}
                            style={{display: 'inline-block'}}/>

                <button onClick={this.onDelete}>X</button>
            </div>
        );
    }
}

DateRange.propTypes = {
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

DateRange.defaultProps = {
    onChange: emptyFunc,
    onDelete: emptyFunc
};

export default DateRange;