import React from 'react';
import { shallow } from 'enzyme';
import ExpItem from './ExpItem';

describe('ExpItem', () => {
  let data = {};
  beforeEach(() => {
    data = {
      company: 'Test Inc',
      companyUrl: 'http://testinc.com',
      city: 'Testland',
      role: 'Tester',
      from: 'Jan 1900',
      to: '',
      description: 'Lorem ipsum'
    };
  });

  it('should render with link if companyUrl present', () => {
    data.to = 'Jan 2000';
    const wrapper = shallow(<ExpItem {...data} />);
    const link = wrapper.find('a[href="http://testinc.com"]');

    expect(wrapper).toMatchSnapshot(wrapper);
    expect(link).toHaveLength(1);
  });

  it('should render with "present" if no "to" date', () => {
    const wrapper = shallow(<ExpItem {...data} />);

    expect(wrapper.find('#date').text()).toBe('Jan 1900 - present');
  });
});
