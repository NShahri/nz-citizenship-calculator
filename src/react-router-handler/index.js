import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Prompt, withRouter} from "react-router";
import emptyFunc from 'empty/function';
import isPromise from 'is-promise';

class RouterHandler extends Component {

    /**
     * @event RouterHandler:onNavigationChange
     * @param path next path
     * @returns {boolean} false to cancel navigation
     */

    /**
     * @fires RouterHandler:onNavigationChange
     *
     * It will call onChange prop and in case it returns promise, it will navigate to path when the promise is resolved,
     * when the promise rejected, it will cancel navigation
     */
    onNavigationChange = (path) => {
        let {onChange, history} = this.props;

        let result = onChange({to: path.pathname});
        if (isPromise(result)) {
            result.then(() => {
                history.push(path.pathname)
            }).catch(() => {
                //NOTHING TO DO
            });

            return false;
        }

        return result;
    };

    render() {
        let {children} = this.props;

        return (
            <div>
                <Prompt when={true} message={this.onNavigationChange}/>
                {children}
            </div>
        );
    }
}

RouterHandler.propTypes = {
  children: PropTypes.any.isRequired,
  history: PropTypes.object.isRequired,
    /**
     * Get called when the route changes
     *
     * @param {Object} navigation - navigation object
     * @param {string} navigation.to - next path to navigate
     * @return {(bool|Promise)}
     */
  onChange: PropTypes.func.isRequired
};

RouterHandler.defaultProps = {
    onChange: emptyFunc
};

export default withRouter(RouterHandler);
