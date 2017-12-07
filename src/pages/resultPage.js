import PropTypes from "prop-types";
import React, {Component} from "react";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Odometer from 'react-odometerjs';
import fullDaysInRanges from '../calculator/fullDaysInRanges';
import 'odometer/sass/odometer-theme-car.sass';
import TotalDaysChart from '../components/charts/totalDaysChart'
import DetailsChart from "../components/charts/detailsChart";

class ResultPage extends Component {
    calcTotalDays(dateRanges = []) {
        let newDateRanges = dateRanges
            .filter(dateRange => dateRange.startDate && dateRange.endDate)
            .map(dateRange => ({start: dateRange.startDate, end: dateRange.endDate}));

        return fullDaysInRanges(newDateRanges);
    }

    render() {
        let {dateRanges} = this.props;

        return (
            <div>
                <Grid container align="center" direction="column" justify="center">
                    <Grid item>
                        <Odometer value={this.calcTotalDays(dateRanges)} format="(.ddd),dd"/>
                        <TotalDaysChart/>
                        <DetailsChart dateRanges={dateRanges}/>
                        <Link to="/ranges">
                            <Button raised color="primary">
                                Back
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

ResultPage.propTypes = {
    dataRanges: PropTypes.arrayOf(PropTypes.Date)
};

ResultPage.defaultProps = {};

const mapStateToProps = state => {
    return {
        dateRanges: state.dateRanges.filter(d => d.startDate || d.endDate)
    }
}

export default connect(
    mapStateToProps
)(ResultPage);