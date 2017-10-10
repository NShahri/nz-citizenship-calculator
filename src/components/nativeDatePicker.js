import React, {Component} from 'react';
import PropTypes from 'prop-types';
import emptyFunc from 'empty/function';

class NativeDatePicker extends Component {
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
        let {value, maxDate, minDate, ...props} = this.props;
        let valueIso = value ? value.toISOString().substring(0, 10) : '';
        let maxDateIso = maxDate ? maxDate.toISOString().substring(0, 10) : '';
        let minDateIso = minDate ? minDate.toISOString().substring(0, 10) : '';

        return (
            <input {...props} type="date" onChange={this.onChange} value={valueIso} max={maxDateIso} min={minDateIso}/>
        );
    }
}

NativeDatePicker.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.instanceOf(Date)
};

NativeDatePicker.defaultProps = {
    onChange: emptyFunc
};

export default NativeDatePicker;