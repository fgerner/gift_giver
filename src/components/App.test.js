import React from 'react';
import toJson from "enzyme-to-json";
import App from './App';
import {shallow} from 'enzyme';

const app = shallow(<App/>);

describe('App component', () => {
    it('renders correctly', () => {
        expect(toJson(app)).toMatchSnapshot();
    })

    it('initializes the `state` with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });

    it('adds new gift to `state` when clicking the `add gift` button', () => {
        app.find('.btn-add').simulate('click')
        expect(app.state().gifts).toEqual([{id: 1}]);
    });
})
