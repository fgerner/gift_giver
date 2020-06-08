import React from 'react';
import toJson from "enzyme-to-json";
import App from './App';
import {shallow} from 'enzyme';

const wrapper = shallow(<App />);

describe('App Component', () => {
    it('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
