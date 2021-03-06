import React, {Component} from 'react';
import {button} from 'react-bootstrap';
import './App.css';
import Gift from "./Gift";
import {max_numbers} from "../helper";


class App extends Component {
    constructor() {
        super();
        this.state = {gifts: []};
    }

    addGift = () => {
        const {gifts} = this.state;

        gifts.push({id: max_numbers(this.state.gifts.map(gift => gift.id)) + 1});
        this.setState({gifts});
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);
        this.setState({gifts});
    }

    render() {
        return (
            <div className="App">
                <h2>Gift Giver</h2>
                <div className={'gift-list'}>
                    {
                        this.state.gifts.map(gift => {
                            return (
                                <Gift
                                    key={gift.id}
                                    gift={gift}
                                    removeGift={this.removeGift}
                                />
                            )
                        })
                    }
                </div>
                <button className={'btn-add'} onClick={this.addGift}>Add Gift</button>
            </div>
        );
    }
}

export default App;
