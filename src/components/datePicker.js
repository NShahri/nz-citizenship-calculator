import React, {Component} from 'react';
import PropTypes from 'prop-types';
import emptyFunc from 'empty/function';

class DateRange extends Component {
    onChange = (e) => {
        let value = e.target.value;
        let {onChange} = this.props;

        if (value) {
            onChange(new Date(value));
            return;
        }

        onChange(null);
    }

    render() {
        /*ignore unused variable*/
        let {value, ...props} = this.props;
        let stringValue = value ? value.toISOString().substring(0,10) : '';

        return (
            <input {...props} type="date" onChange={this.onChange} value={stringValue}  />
        );
    }
}

DateRange.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.instanceOf(Date)
};

DateRange.defaultProps = {
    onChange: emptyFunc
};

export default DateRange;