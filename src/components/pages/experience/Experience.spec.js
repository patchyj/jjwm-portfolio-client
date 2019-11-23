import React from 'react';
import { shallow } from 'enzyme';
import Experience from './Experience';

describe('Experience', () => {
  it('should render a list if a list is present', () => {
    const props = {
      expList: [
        {
          company: 'Cardano Risk Management',
          companyUrl: 'https://www.cardano.co.uk/',
          city: 'London',
          role: 'Full-stack Javascript Developer',
          from: 'Jan 2019',
          to: 'Dec 2019',
          description: 'Lorem ipsum...'
        }
      ]
    };
    const wrapper = shallow(<Experience {...props} />);
    expect(wrapper.find('ExpItem')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render placeholder text if no list is present', () => {
    const props = {
      expList: []
    };
    const wrapper = shallow(<Experience {...props} />);
    expect(wrapper.find('ExpItem')).toHaveLength(0);
    expect(wrapper.find('.listContainer').text()).toBe(
      'Please add an experience'
    );
    // expect(wrapper).toMatchSnapshot();
  });
});
