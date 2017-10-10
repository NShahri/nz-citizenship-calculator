import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import DateRangesPage from "./pages/dateRangesPage";
import ResultPage from "./pages/resultPage";

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <header>
                        <AppBar title="NZ citizenship residence requirements calculator"/>
                    </header>
                    <Paper zDepth={2}>
                        <Router>
                            <Switch>
                                <Route exact path="/ranges" component={DateRangesPage} />
                                <Route exact path="/result/:id" component={ResultPage} />
                                <Redirect to="/ranges"/>
                            </Switch>
                        </Router>
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
