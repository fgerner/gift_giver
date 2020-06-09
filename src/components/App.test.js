import React from 'react';
import toJson from "enzyme-to-json";
import App from './App';
import {shallow} from 'enzyme';


describe('App component', () => {

    const app = shallow(<App/>);

    it('renders correctly', () => {
        expect(toJson(app)).toMatchSnapshot();
    })

    it('initializes the `state` with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });
    describe('when clicking the `add gift` button', () => {
        beforeEach(() => {
            app.find('.btn-add').simulate('click')
        });

        afterEach(() => {
            app.setState(
                {gifts: []}
            )
        })

        it('adds new gift to `state`', () => {
            expect(app.state().gifts).toEqual([{id: 1}]);
        });

        it('adds a new gift to the rendered list', () => {
            ;
            expect(app.find('.gift-list').children().length).toEqual(1);
        })

    })
})
