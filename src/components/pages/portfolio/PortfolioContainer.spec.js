import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PortfolioContainer from './PortfolioContainer';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useRouteMatch: () => ({
    url: '/portfolio',
    path: '/portfolio'
  })
}));

describe('PortfolioContainer', () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  const props = {
    location: {
      pathname: '/portfolio'
    }
  };

  useStateSpy.mockImplementation(init => [init, setState]);

  afterEach(() => {
    jest.clearAllMocks();
    props.location.pathname = '/portfolio';
  });

  it('should render with the correct links', () => {
    const wrapper = mount(
      <Router>
        <PortfolioContainer {...props} />
      </Router>
    );

    expect(wrapper.find('Link')).toHaveLength(2);
    expect(
      wrapper
        .find('Link')
        .first()
        .prop('to')
    ).toBe('/portfolio/dev');
    expect(
      wrapper
        .find('Link')
        .last()
        .prop('to')
    ).toBe('/portfolio/design');
  });

  it('should have "text-muted" class if NOT selected: design', () => {
    props.location.pathname += '/design';
    const wrapper = mount(
      <Router>
        <PortfolioContainer {...props} />
      </Router>
    );

    expect(
      wrapper
        .find('Link')
        .first()
        .hasClass('text-muted')
    ).toBe(true);
    expect(
      wrapper
        .find('Link')
        .last()
        .hasClass('text-muted')
    ).toBe(false);
  });
  it('should have "text-muted" class if NOT selected: dev', () => {
    props.location.pathname += '/dev';
    const wrapper = mount(
      <Router>
        <PortfolioContainer {...props} />
      </Router>
    );

    expect(
      wrapper
        .find('Link')
        .first()
        .hasClass('text-muted')
    ).toBe(false);
    expect(
      wrapper
        .find('Link')
        .last()
        .hasClass('text-muted')
    ).toBe(true);
  });
});
