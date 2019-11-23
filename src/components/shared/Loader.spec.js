import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';
import Pikachu from '../../images/pikachu.gif';
import Pokeball from '../../images/pokeball shake.gif';

describe('Loader', () => {
  it('should render the Pikachu gif if name = pikachu', () => {
    // Assemble
    const props = {
      width: '',
      name: 'pikachu'
    };
    const wrapper = shallow(<Loader {...props} />);
    // Assert
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('img').prop('src')).toEqual(Pikachu);
  });
  it('should render the Pokeball gif if name = pokeball', () => {
    // Assemble
    const props = {
      width: '',
      name: 'pokeball'
    };
    const wrapper = shallow(<Loader {...props} />);
    // Assert
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('img').prop('src')).toEqual(Pokeball);
  });
});
