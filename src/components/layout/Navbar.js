import React, { useState, useEffect } from 'react';
import S from '../styledComponents';
import { dimensions } from '../styledComponents/breakpoints';
import NavLink from './NavLink';

const shouldCollapse = (width, breakpoint) => width < breakpoint;
// const shouldCollapse = (width, break) => width < dimensions.bsSmall;

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [responsiveMode, setResponsiveMode] = useState(false);

  if (shouldCollapse(windowWidth, dimensions.bsSmall) && !responsiveMode) {
    console.log('BREAK');
    setResponsiveMode(true);
  }

  if (!shouldCollapse(windowWidth, dimensions.bsSmall) && responsiveMode) {
    console.log('UNBREAK');
    setResponsiveMode(false);
  }

  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  return (
    <S.Nav>
      <nav className="navbar navbar-expand fixed-top flex-md-column flex-row align-items-start">
        <div className="collapse navbar-collapse" id="nav">
          <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-sm-around">
            <NavLink title="Home" />
            <NavLink page="about" title="About" />
            <NavLink page="portfolio" title="Portfolio" />
            <NavLink page="skills" title="Skills" />
            <NavLink page="experience" title="Experience" />
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            onClick={setResponsiveMode}
          >
            <i className="fas fa-bars" />
          </button>
        </div>
      </nav>
    </S.Nav>
  );
};

export default Navbar;
