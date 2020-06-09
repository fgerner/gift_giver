import React, {Component} from 'react';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {gifts: [] };
    }

    render() {
        return (
            <div className="App">
                <h2>Gift Giver</h2>
            </div>
        );
    }
}

export default App;
