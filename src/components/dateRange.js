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
        let {onChange, id} = this.props;

        onChange({startDate: value, id});
        this.setState({minEndDate: value});
    }

    /**
     * @param value{Date}
     */
    onEndDateChange = (value) => {
        let {onChange, id} = this.props;

        onChange({endDate: value});
        this.setState({maxStartDate: value});
    }

    onDelete = () => {
        let {onDelete} = this.props;
        onDelete(0);
    }

    render() {
        let {startDate, endDate, deletable} = this.props;

        return (
            <div>
                <DatePicker onChange={this.onStartDateChange} max={this.state.maxStartDate} value={startDate}/>
                <DatePicker onChange={this.onEndDateChange} max={this.state.maxEndDate} min={this.state.minEndDate} value={endDate}/>
                {deletable && <button onClick={this.onDelete}>X</button>}
            </div>
        );
    }
}

DateRange.propTypes = {
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    deletable: PropTypes.bool.isRequired
};

DateRange.defaultProps = {
    onChange: emptyFunc,
    onDelete: emptyFunc,
    deletable: true
};

export default DateRange;