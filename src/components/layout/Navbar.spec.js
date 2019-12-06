import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar, { shouldCollapse, shouldSetResponsiveMode } from './Navbar';

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar', () => {
  let wrapper;
  const props = {
    auth: {
      isAuthenticated: false
    },
    logoutUser: jest.fn()
  };
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(init => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<Navbar {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Nav helpers', () => {
  describe('shouldCollapse', () => {
    const breakpoint = 575;
    it('should not collapse when screen is bigger than or equal to the predefined breakpoint', () => {
      expect(shouldCollapse(575, breakpoint)).toBe(false);
    });
    it('should collapse when screen is smaller than the predefined breakpoint', () => {
      expect(shouldCollapse(574, breakpoint)).toBe(true);
    });
  });

  describe('shouldSetResponsiveMode', () => {
    let setMode;
    let setOpen;
    beforeEach(() => {
      setMode = jest.fn();
      setOpen = jest.fn();
    });

    it('should return responsive mode = true if collapsed and not yet responsive', () => {
      const collapsed = true;
      const responsive = false;

      shouldSetResponsiveMode(collapsed, responsive, setMode, setOpen);

      expect(setMode).toHaveBeenCalledWith(true);
    });
    it('should return responsive mode = false if not collapsed and responsive', () => {
      const collapsed = false;
      const responsive = true;

      shouldSetResponsiveMode(collapsed, responsive, setMode, setOpen);

      expect(setMode).toHaveBeenCalledWith(false);
    });
    it('should return false from setOpen if not collapsed and responsive', () => {
      const collapsed = false;
      const responsive = true;

      shouldSetResponsiveMode(collapsed, responsive, setMode, setOpen);

      expect(setOpen).toHaveBeenCalledWith(false);
    });
  });
});
