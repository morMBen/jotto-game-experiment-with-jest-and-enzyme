import { shallow } from "enzyme";
import React from "react";
import { checkProps, findByTestAttr } from "../../../test/testUtils";

import Input from './Input';

// mock entire module for destructuring useState on import
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useState: (initialState) => [initialState, mockSetCurrentGuess]
// }))

const defaultProps = {

    secretWord: ''
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Input {...setupProps} />)
}

describe('render', () => {
    describe('success is true', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup({ success: true });
        })
        test('input renders without error', () => {
            const inputComponent = findByTestAttr(wrapper, 'input-container');
            expect(inputComponent.length).toBe(1);
        });
        test('input box does not show', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(false);
        })
        test('submit button does not show', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(false)
        })
    });
    describe('success is false', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup({ success: false });
        })
        test('input renders without error', () => {
            const inputComponent = findByTestAttr(wrapper, 'input-container');
            expect(inputComponent.length).toBe(1);
        });
        test('input box  show', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(true);
        })
        test('submit button show', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(true)
        })
    })
});

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
    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    let originalUseState;
    beforeEach(() => {
        // mock react useState by overriding the method.
        mockSetCurrentGuess.mockClear();
        originalUseState = React.useState;
        React.useState = () => ['', mockSetCurrentGuess];
        wrapper = setup();
    })
    afterEach(() => {
        React.useState = originalUseState;
    })
    test('state update with value of input box upon change', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate('change', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })
    test('when submit button get called setCurrentGuess get called with an empty string.', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        // in case we use preventDefault and we set node.simulate('click') it will set the event to undefine
        // so we can add an event into our test And this event is just going to be an object with one property and it's going to be prevent default,
        submitButton.simulate('click', { preventDefault() { } });
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    })
})