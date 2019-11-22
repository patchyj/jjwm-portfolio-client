import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { shallow, mount } from 'enzyme';
import NavLink from './NavLink';

describe('NavLink', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      page: 'test',
      title: 'Test',
      closeModal: jest.fn()
    };
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/test'
      }
    });
  });

  afterEach(() => {});

  it('should render correctly', () => {
    const wrapper = shallow(<NavLink {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Link').text()).toBe('Test');
    expect(wrapper.find('Link').prop('to')).toBe('/test');
  });

  it('should trigger closeModal when clicked', () => {
    const wrapper = shallow(<NavLink {...defaultProps} />);
    wrapper.find('Link').simulate('click');
    expect(defaultProps.closeModal).toHaveBeenCalled();
  });

  it('should NOT have the "text-muted" class when the window location does not match the page', () => {
    window.location.pathname = '/blah';

    const wrapper = mount(
      <Router>
        <NavLink {...defaultProps} />
      </Router>
    );

    const isMuted = wrapper
      .find('Link')
      .prop('className')
      .includes('text-muted');

    expect(isMuted).toBe(false);
  });

  it('should have the "text-muted" class when the window location matches page', () => {
    window.location.pathname = '/test';

    const wrapper = mount(
      <Router>
        <NavLink {...defaultProps} />
      </Router>
    );

    const isMuted = wrapper
      .find('Link')
      .prop('className')
      .includes('text-muted');

    expect(isMuted).toBe(true);
  });
});
