import React from 'react';
import { shallow } from 'enzyme';
import NavList from './NavList';

describe('NavList', () => {
  it('should render', () => {
    const props = {
      closeModal: () => {}
    };
    const wrapper = shallow(<NavList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
