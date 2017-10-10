import React, {Component} from 'react';
import PropTypes from "prop-types";
import DateRanges from "../components/dateRanges";
import idGenerator from "../libs/idGenerator";

class DateRangesPage extends Component {
    constructor(...args) {
        super(...args);

        let ranges = [this._generateDateRange()];

        this.state = {
            dateRanges: ranges
        }
    }

    _checkIfNewRow(dateRange, dateRanges = []) {
        let emptyRangeExists = dateRanges.find(d => !d.startDate && !d.endDate && d.id !== dateRange.id);
        return emptyRangeExists ? [] : [this._generateDateRange()];
    }

    _generateDateRange() {
        let range = {
            id: idGenerator(),
            onDelete: () => {
                let itemPosition = this.state.dateRanges.findIndex(d => d.id === range.id);

                let newArray = [
                    ...this.state.dateRanges.slice(0, itemPosition),
                    ...this.state.dateRanges.slice(itemPosition + 1),
                    ...this._checkIfNewRow(range, this.state.dateRanges)
                ];

                this.setState({dateRanges: newArray});
            },
            onChange: (value) => {
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
        };

        return range;
    }

    render() {
        return (
            <DateRanges ranges={this.state.dateRanges}/>
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