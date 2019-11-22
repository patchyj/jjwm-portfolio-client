import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('should render', () => {
    const props = {};
    const wrapper = shallow(<Footer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
