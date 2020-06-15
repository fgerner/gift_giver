import React from "react";
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import Gift from "./Gift";

describe('Gift', () => {
    const gift = shallow(<Gift/>);

    it('renders properly', function () {
        expect(toJson(gift)).toMatchSnapshot();
    });

    it('initializes a person and present in `state`', () => {
        expect(gift.state()).toEqual({person:'', gift: ''})
    });

    describe('When typing into the person input', () => {
        const person = 'Wife';

        beforeEach(() => {
            gift.find('.input-person').simulate('change', {target: {value: person}});
        });
        it('should update the person in state', function () {
            expect(gift.state().person).toEqual(person);
        });
    });

    describe('when typing into the present input', () => {
        const present = 'Drone';
        
        beforeEach(() => {
            gift.find('.input-present').simulate('change', {target: {value: present}});
        })
        it('updates the present in `state`', () => {
            expect(gift.state().present).toEqual(present);
        })
    })
});


