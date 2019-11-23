import React from 'react';
import { shallow } from 'enzyme';
import DevShow from './DevShow';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({ devId: '1' })
}));

describe('DevShow', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render', () => {
    const props = {
      projects: [
        {
          id: '1',
          name: 'Test 1',
          url: 'www.test.com',
          twitter: 'www.twitter.com/twitter1',
          facebook: 'www.facebook.com/facebook1',
          github: 'www.github.com/github1',
          description: 'lorem'
        },
        {
          id: '2',
          name: 'Test 2',
          url: 'www.test.com',
          twitter: 'www.twitter.com/twitter1',
          facebook: 'www.facebook.com/facebook1',
          github: 'www.github.com/github1',
          description: 'lorem'
        },
        {
          id: '3',
          name: 'Test 3',
          url: 'www.test.com',
          twitter: 'www.twitter.com/twitter1',
          facebook: 'www.facebook.com/facebook1',
          github: 'www.github.com/github1',
          description: 'lorem'
        }
      ]
    };
    const wrapper = shallow(<DevShow {...props} />);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('a').get(0).props.href).toBe('www.test.com');
    expect(wrapper.find('a').get(1).props.href).toBe(
      'www.twitter.com/twitter1'
    );
    expect(wrapper.find('a').get(2).props.href).toBe(
      'www.facebook.com/facebook1'
    );
    expect(wrapper.find('a').get(3).props.href).toBe('www.github.com/github1');
  });
});
