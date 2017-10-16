import PropTypes from "prop-types";
import React, {Component} from "react";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class ResultPage extends Component {
    render() {
        return (
            <div>
                <Grid container align="center" direction="column" justify="center">
                    <Grid item>
                        Calculating...
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

ResultPage.propTypes = {};

ResultPage.defaultProps = {};

const mapStateToProps = state => {
    return {
        dateRanges: state.dateRanges
    }
}

export default connect(
    mapStateToProps
)(ResultPage);