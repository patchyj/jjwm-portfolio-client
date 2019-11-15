import React from 'react';
import { shallow } from 'enzyme';
import Skills from './Skills';

describe('Skills', () => {
  it('should render', () => {
    const skillsList = [{ name: 'Testing', level: 100 }];
    const wrapper = shallow(<Skills {...skillsList} />);

    expect(wrapper).toMatchSnapshot(wrapper);
  });
});
