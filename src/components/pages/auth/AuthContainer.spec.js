import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthContainer from './AuthContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('AuthContainer', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      loginUser: jest.fn(),
      registerUser: jest.fn(),
      auth: {
        errors: {}
      }
    };
    wrapper = shallow(<AuthContainer {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
