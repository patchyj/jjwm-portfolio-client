/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useEffect } from 'react';
import S from '../styledComponents';
import { dimensions } from '../styledComponents/breakpoints';
import NavList from './NavList';

export const shouldCollapse = (width, breakpoint) => width < breakpoint;

export const shouldSetResponsiveMode = (
  collapsed,
  responsive,
  setMode,
  setOpen
) => {
  if (collapsed && !responsive) setMode(true);

  if (!collapsed && responsive) {
    setOpen(false);
    if (responsive) setMode(false);
  }
};

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [responsiveMode, setResponsiveMode] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const overFlow = isOpen ? 'hidden' : 'auto';

  document.body.style.overflowY = overFlow;

  shouldSetResponsiveMode(
    shouldCollapse(windowWidth, dimensions.bsSmall),
    responsiveMode,
    setResponsiveMode,
    setOpen
  );

  const resetModal = () => {
    setOpen(false);
  };

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
            <div className="dropdown">
              <div className="d-flex">
                <i
                  className={`fas fa-${isOpen ? 'times fadeIn' : 'bars'} fa-2x`}
                  role="button"
                  onClick={() => setOpen(!isOpen)}
                />
              </div>
              {isOpen && (
                <div className="fadeIn">
                  <ul>
                    <NavList closeModal={resetModal} />
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-sm-around">
              <NavList closeModal={resetModal} />
            </ul>
          )}
        </div>
      </nav>
    </S.Nav>
  );
};

export default Navbar;
