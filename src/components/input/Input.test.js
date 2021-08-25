import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../../test/testUtils";
import Input from './Input';

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
// test('get the right props', () => {
//     const wrapper = setup('train');
//     const component = findByTestAttr(wrapper, 'input-container');
//     expect(component.text()).toBe('')
// })
test('dose not throw worning with the expected props', () => {
    const expectedProps = { secretWord: 'bamboo number 5' };
    checkProps(Input, expectedProps);
})