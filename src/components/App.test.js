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
})
