import { mount } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import App from '../App';

/**
 * Create wrapper with specified initial condition
 * Then submit a guessed word 'train'
 * @function
 * 
 * @param {object} state - Initial condition
 * @returns {wrapper} - Enzyme wrapper of mounted App component 
 */

const setup = ((state = {}) => {
    const wrapper = mount(<App />);

    // add  value to input box.
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', { target: { value: 'train' } });

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() { } });
    return wrapper;
})

describe('no word guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'boo-ya',
            succes: false,
            guessedWords: []
        })
    })
    test('create guessed word table with one row', () => {
        const guessedWordRow = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordRow).toHaveLength(1);
    })
});
describe('some word guessed', () => {

});
describe('guessed secret word', () => {

})