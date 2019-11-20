import React, { useState } from 'react';
import S from '../styledComponents';
import { dimensions } from '../styledComponents/breakpoints';
import NavLink from './NavLink';

const setCollapse = () => window.innerWidth < dimensions.bsSmall;

const Navbar = () => {
  // console.log(setCollapse());
  const [responsive, setNavbar] = useState(setCollapse());
  console.log(responsive);
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
          <button className="navbar-toggler" type="button" onClick={setNavbar}>
            <i className="fas fa-bars" />
          </button>
        </div>
      </nav>
    </S.Nav>
  );
};

export default Navbar;
