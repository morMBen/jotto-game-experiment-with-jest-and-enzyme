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
// .skip .only .todo
describe.skip('no word guessed', () => {
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
<<<<<<< HEAD
describe.skip('some word guessed', () => {
=======
describe('some word guessed', () => {
>>>>>>> 1e91d18 (guess word test)
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
        });
    })
    test('adds row to guessedWords table', () => {
        const guessedWrodNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWrodNodes).toHaveLength(2);
    })
});
<<<<<<< HEAD
describe.skip('guessed secret word', () => {
=======
describe('guessed secret word', () => {
>>>>>>> 1e91d18 (guess word test)
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
        });
<<<<<<< HEAD

        // add value to input box
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const mockEvent = { target: { value: 'party' } };
        inputBox.simulate('change', mockEvent);

=======

        // add value to input box
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const mockEvent = { target: { value: 'party' } };
        inputBox.simulate('change', mockEvent);

>>>>>>> 1e91d18 (guess word test)
        // simulate click on submit button
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() { } });
    });
    test('add row to guessedWords table', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes).toHaveLength(3);
    });
<<<<<<< HEAD
    test('displays congrats component', () => {
        const congrats = findByTestAttr(wrapper, 'component-congrats');
        expect(congrats.test().length).toBeGreaterThan(0);
    });
    test('does not display input component contents', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.exists()).toBe(false);

        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.exists()).toBe(false);
    })
=======
>>>>>>> 1e91d18 (guess word test)
})