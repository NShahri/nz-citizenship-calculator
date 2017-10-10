import React, {Component} from 'react';
import PropTypes from 'prop-types';
import emptyFunc from 'empty/function';
import DatePicker from 'material-ui/DatePicker';

class CustomDatePicker extends Component {
    onChange = (e, value) =>{
        let {onChange} = this.props;
        onChange(value);
    }

    render() {
        return (
            <DatePicker mode="landscape" {...this.props} onChange={this.onChange} autoOk={true}/>
        );
    }
}

CustomDatePicker.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.instanceOf(Date)
};

CustomDatePicker.defaultProps = {
    onChange: emptyFunc
};

export default CustomDatePicker;