import React from 'react';
import { shallow } from 'enzyme';
import NavLink from './NavLink';

describe('NavLink', () => {
  it('should render', () => {
    const defaultProps = {
      page: 'test',
      title: 'Test'
    };
    const wrapper = shallow(<NavLink {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
