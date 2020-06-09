import React, {Component} from 'react';
import {button} from 'react-bootstrap';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {gifts: []};
    }

    addGift = () => {
        const {gifts} = this.state;
        const ids = this.state.gifts.map(gift => gift.id);
        const maxId = ids.length > 0 ? Math.max(...ids) : 0;

        gifts.push({ id: maxId + 1});
        this.setState({gifts});
    }

    render() {
        return (
            <div className="App">
                <h2>Gift Giver</h2>
                <button className={'btn-add'} onClick={this.addGift} >Add Gift</button>
            </div>
        );
    }
}

export default App;
