import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import DateRangesPage from "./pages/dateRangesPage";
import ResultPage from "./pages/resultPage";

const theme = createMuiTheme({
    palette: {
        //type: 'dark', // Switching the dark mode on is a single property value change.
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <header>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton color="contrast" aria-label="Menu">
                                    <MenuIcon/>
                                </IconButton>
                                <Typography type="title" color="inherit">
                                    NZ citizenship residence requirements calculator
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </header>
                    <Router>
                        <Switch>
                            <Route exact path="/ranges" component={DateRangesPage}/>
                            <Route exact path="/result" component={ResultPage}/>
                            <Redirect to="/ranges"/>
                        </Switch>
                    </Router>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
