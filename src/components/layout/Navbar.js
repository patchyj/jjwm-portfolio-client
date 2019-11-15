import React from 'react';
import S from '../styledComponents';
import NavLink from './NavLink';

const Navbar = () => (
  <S.Nav>
    <nav className="navbar navbar-expand fixed-top flex-md-column flex-row align-items-start">
      <div className="collapse navbar-collapse">
        <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-sm-around">
          <NavLink title="Home" />
          <NavLink page="about" title="About" />
          <NavLink page="portfolio" title="Portfolio" />
          <NavLink page="skills" title="Skills" />
          <NavLink page="experience" title="Experience" />
        </ul>
      </div>
    </nav>
  </S.Nav>
);

export default Navbar;
