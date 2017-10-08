import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DateRanges from "./components/dateRanges";

class App extends Component {
    constructor(...args){
        super(...args);

        let range = {
            startDate: new Date(),
            onChange: (changes)=>{
                Object.assign(this.state.dateRanges[0], changes);
            }
        };

        this.state = {
            dateRanges: [range]
        }
    }
    render() {
        return (
            <div className="App">
                <input type="date" value={new Date().toISOString().substring(0,10)} />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <DateRanges ranges={this.state.dateRanges} />
            </div>
        );
    }
}

export default App;
