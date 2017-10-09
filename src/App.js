import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DateRanges from './components/dateRanges';
import idGenerator from './libs/idGenerator';

class App extends Component {
    _checkIfNewRow(dateRange, dateRanges = []) {
        if(dateRange.startDate || dateRange.endDate){
            let emptyRangeExists = dateRanges.find(d => !d.startDate && !d.endDate && d.id !== dateRange.id);
            return emptyRangeExists ? [] : [this._generateDateRange()];
        }
    }

    _checkIfOldRow(dateRange, dateRanges = []){
        if(!dateRange.startDate && !dateRange.endDate){
            let emptyRangeExists = dateRanges.find(d => !d.startDate && !d.endDate && d.id !== dateRange.id);
            return emptyRangeExists ? [] : [this._generateDateRange()];
        }
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


    constructor(...args) {
        super(...args);

        let ranges = [this._generateDateRange()];

        this.state = {
            dateRanges: ranges
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <DateRanges ranges={this.state.dateRanges}/>
            </div>
        );
    }
}

export default App;
