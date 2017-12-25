import React, {Component} from 'react';
import PropTypes from "prop-types";
import DateRanges from "../components/dateRanges";
import {Link} from 'react-router-dom'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import {connect} from 'react-redux'
import emptyFunc from 'empty/function';
import RouterHandler from "../react-router-handler";

class DateRangesPage extends Component {
    render() {
        let {dateRanges, onChange, onDelete, onAdd} = this.props;

        return (
            <div>
                <RouterHandler onChange={() => dateRanges.length > 0}/>
                <Grid container align="center" direction="column" justify="center">
                    <DateRanges ranges={dateRanges} onDelete={onDelete} onChange={onChange} onAdd={onAdd}/>
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
    dateRanges: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

DateRangesPage.defaultProps = {
    dateRanges: [],
    onChange: emptyFunc,
    onDelete: emptyFunc
};

const mapStateToProps = state => {
    return {
        dateRanges: state.dateRanges
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (range, value) => {
            dispatch({
                type: range.id ? 'DATE_RANGE_CHANGE' : 'DATE_RANGE_ADD',
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
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DateRangesPage);