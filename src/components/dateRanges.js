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

class DateRanges extends Component {
    render() {
        let {ranges = [], onDelete, onChange, classes} = this.props;

        return (
            ranges.map((range, index) =>
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
            )

        );
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