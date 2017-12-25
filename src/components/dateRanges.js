import React, {Component} from 'react';
import DateRange from './dateRange';
import PropTypes from 'prop-types';
import emptyFunc from 'empty/function';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        //marginTop: theme.spacing.unit * 3,
    }),
});

/**
 * Check if any new row is required to added to list, returns array of new rows
 * @param {Array.<DateRange>} dateRanges
 * @returns boolean
 */
const checkIfNewRow = (dateRanges = []) => {
    let emptyRangeExists = dateRanges.find(d => !d.startDate && !d.endDate);
    return emptyRangeExists ? false : true;
}


class DateRanges extends Component {
    /**
     * @private
     */
    renderItem(range = {}) {
        let {onDelete, onChange, classes} = this.props;

        return (
            <Grid item key={range.id}>
                <Paper className={classes.root} elevation={4}>
                    <DateRange
                        {...range}
                        onDelete={() => onDelete(range)}
                        onChange={value => {
                            onChange(range, value)
                        }}
                    />
                </Paper>
            </Grid>
        );
    }

    render() {
        let {ranges = []} = this.props;

        let renderResult = ranges.map(range => this.renderItem(range));
        if(checkIfNewRow(ranges)){
            return [...renderResult, this.renderItem()];
        }

        return renderResult;
    }
}

DateRange.propTypes = {
    ranges: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

DateRange.defaultProps = {
    ranges: [],
    onDelete: emptyFunc,
    onChange: emptyFunc
};

export default withStyles(styles)(DateRanges);