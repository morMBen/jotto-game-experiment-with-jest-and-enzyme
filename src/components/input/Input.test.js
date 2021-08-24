import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/testUtils";
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