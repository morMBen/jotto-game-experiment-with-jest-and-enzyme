import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

/**
 * Setup function for App component
 * @returns {shallowWrapper}
 */
const setup = () => {
  return shallow(<App />)
};

test('renders without error', () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, 'component-app');
  expect(app).toHaveLength(1);
});
