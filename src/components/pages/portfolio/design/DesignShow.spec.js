import React from 'react';
import { shallow } from 'enzyme';
import DesignShow from './DesignShow';

describe('DesignShow', () => {
  it('should render', () => {
    const props = {};
    const wrapper = shallow(<DesignShow {...props} />);
    // expect(wrapper).toRenderSnapshot();
  });
});
