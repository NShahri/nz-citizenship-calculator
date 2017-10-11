import React, {Component} from 'react';
import PropTypes from "prop-types";
import DateRanges from "../components/dateRanges";
import idGenerator from "../libs/idGenerator";
import {Link} from 'react-router-dom'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

class DateRangesPage extends Component {
    constructor(...args) {
        super(...args);

        let ranges = [this._newDateRange()];

        this.state = {
            dateRanges: ranges
        }
    }

    /**
     * Check if any new row is required to added to list, returns array of new rows
     * @param dateRange {DateRange}
     * @param dateRanges {Array.<DateRange>}
     * @returns {Array.<DateRange>}
     * @private
     */
    _checkIfNewRow(dateRange, dateRanges = []) {
        let emptyRangeExists = dateRanges.find(d => !d.startDate && !d.endDate && d.id !== dateRange.id);
        return emptyRangeExists ? [] : [this._newDateRange()];
    }

    /**
     * returns new empty DateRange
     * @returns {{id: int}}
     * @private
     */
    _newDateRange() {
        let range = {
            id: idGenerator(),
        };

        return range;
    }

    /**
     * change handler
     * @param range {DateRange} - date range which is changed
     * @param value {DateRange} - new date range values
     * @private
     */
    _onChange = (range, value) => {
        let newItem = Object.assign(range, value);
        let itemPosition = this.state.dateRanges.findIndex(d => d.id === range.id);

        let newArray = [
            ...this.state.dateRanges.slice(0, itemPosition),
            newItem,
            ...this.state.dateRanges.slice(itemPosition + 1),
            ...this._checkIfNewRow(newItem, this.state.dateRanges)
        ];

        this.setState({dateRanges: newArray});
    }

    /**
     * delete handler
     * @param range {DateRange}
     * @private
     */
    _onDelete = (range) => {
        let itemPosition = this.state.dateRanges.findIndex(d => d.id === range.id);

        let newArray = [
            ...this.state.dateRanges.slice(0, itemPosition),
            ...this.state.dateRanges.slice(itemPosition + 1),
            ...this._checkIfNewRow(range, this.state.dateRanges)
        ];

        this.setState({dateRanges: newArray});
    }

    render() {
        return (
            <div>
                <Grid container align="center" direction="column" justify="center">
                    <DateRanges ranges={this.state.dateRanges} onDelete={this._onDelete} onChange={this._onChange}/>
                    <Grid item>
                        <Link to="/result">
                            <Button raised color="primary">
                                Calculate
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

export default DateRangesPage;