/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useEffect, Fragment } from 'react';
import S from '../styledComponents';
import { dimensions } from '../styledComponents/breakpoints';
import NavLink from './NavLink';

const shouldCollapse = (width, breakpoint) => width < breakpoint;

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [responsiveMode, setResponsiveMode] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const overFlow = isOpen ? 'hidden' : 'auto';

  document.body.style.overflowY = overFlow;

  if (shouldCollapse(windowWidth, dimensions.bsSmall) && !responsiveMode) {
    setResponsiveMode(true);
  }

  if (!shouldCollapse(windowWidth, dimensions.bsSmall) && responsiveMode) {
    setOpen(false);
    if (responsiveMode) {
      setResponsiveMode(false);
    }
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
    <S.Nav isOpen={isOpen}>
      <nav className="navbar navbar-expand fixed-top flex-md-column flex-row align-items-start">
        <div className="collapse navbar-collapse p-2" id="nav">
          {responsiveMode ? (
            <div className="">
              <i
                className={`fas fa-${isOpen ? 'times fadeIn' : 'bars'} fa-2x`}
                role="button"
                onClick={() => setOpen(!isOpen)}
              />
              <br />
              {isOpen && (
                <div className={`dropdown ${isOpen ? 'fadeIn' : ''}`}>
                  <ul className=" ">
                    <li>blah</li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-sm-around">
              <NavLink title="Home" />
              <NavLink page="about" title="About" />
              <NavLink page="portfolio" title="Portfolio" />
              <NavLink page="skills" title="Skills" />
              <NavLink page="experience" title="Experience" />
            </ul>
          )}
        </div>
      </nav>
    </S.Nav>
  );
};

export default Navbar;
