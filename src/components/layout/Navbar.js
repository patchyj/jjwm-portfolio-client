import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import S from '../styledComponents';

const Navbar = () => {
  const { pathname } = window.location;
  return (
    <S.Nav>
      <nav className="navbar navbar-expand fixed-top flex-md-column flex-row align-items-start">
        <div className="collapse navbar-collapse">
          <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-sm-around">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${pathname.includes('/about') ? 'active' : ''}`}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className={`nav-link ${pathname.includes('/portfolio') ? 'active' : ''}`}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className={`nav-link ${pathname.includes('/skills') ? 'active' : ''}`}>Skills</Link>
            </li>
          </ul>
        </div>
      </nav>
    </S.Nav>
  );
};

const mapStateToProps = state => ({
  router: state.router
});

export default connect(
  mapStateToProps,
  null
)(Navbar);
