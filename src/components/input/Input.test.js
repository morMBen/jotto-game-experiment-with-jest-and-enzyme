import { shallow } from "enzyme";
// import React from "react";
import { checkProps, findByTestAttr } from "../../../test/testUtils";

import Input from './Input';

// mock entire module for destructuring useState on import
const mockSetCurrentGuess = jest.fn();
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialState) => [initialState, mockSetCurrentGuess]
}))

const defaultProps = {};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Input {...setupProps} />)
}

test('render without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'input-container');
    expect(component.length).toBe(1);
});
test('dose not throw worning with the expected props', () => {
    const expectedProps = { secretWord: 'bamboo number 5' };
    checkProps(Input, expectedProps);
})
describe('state controlled input field', () => {
    test('state update with value of input box upon change', () => {
        // mock react useState by overriding the method.
        // const mockSetCurrentGuess = jest.fn();
        // React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate('change', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })
})