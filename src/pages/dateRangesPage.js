import React, {Component} from 'react';
import PropTypes from "prop-types";
import DateRanges from "../components/dateRanges";
import {Link} from 'react-router-dom'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import {connect} from 'react-redux'

class DateRangesPage extends Component {
    render() {
        let {dateRanges, onChange, onDelete} = this.props;

        return (
            <div>
                <Grid container align="center" direction="column" justify="center">
                    <DateRanges ranges={dateRanges} onDelete={onDelete} onChange={onChange}/>
                    <Grid item>
                        <Link to="/result">
                            <Button raised color="primary">
                                Calculate
                            </Button>
                        </Link>
                        <Link to="/result">
                            <Button raised color="danger">
                                Reset
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

DateRangesPage.propTypes = {
    ranges: PropTypes.array.isRequired
};

DateRangesPage.defaultProps = {
    ranges: []
};

const mapStateToProps = state => {
    return {
        dateRanges: state.dateRanges
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (range, value) => {
            dispatch({
                type: 'DATE_RANGE_CHANGE',
                range,
                value
            });
        },
        onDelete: range => {
            dispatch({
                type: 'DATE_RANGE_DELETE',
                range
            })
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DateRangesPage);