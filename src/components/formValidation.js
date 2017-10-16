import React from 'react';
import PropTypes from "prop-types";
import ErrorMessage from './errorMessage';

const FormValidation = props => {
    let {validationState, children, ...other} = props;
    let result = React
        .Children
        .toArray(children)
        .map(
            c => c.type === ErrorMessage ?
                React.cloneElement(c, {validationState})
                :
                React.cloneElement(c, other)
        );

    return (
        <FormGroup {...other} validationState={validationState}>
            {result}
        </FormGroup>
    );
};

FormValidation.propTypes = {
    validationState: PropTypes.oneOf(['error', 'warning', 'success']),
    children: PropTypes.node
};

FormValidation.ErrorMessage = ErrorMessage;

export default FormValidation;