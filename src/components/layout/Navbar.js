import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Navbar = () => {
  const { pathname } = window.location;
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className="collapse navbar-collapse justify-content-md-center"
      >
        <ul className="navbar-nav flex-md-column">
          <div className="nav-item">
            <Link to="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          </div>
          <div className="nav-item">
            <Link to="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
          </div>
          <div className="nav-item">
            <Link to="/portfolio" className={`nav-link ${pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</Link>
          </div>
          <div className="nav-item">
            <Link to="/skills" className={`nav-link ${pathname === '/skills' ? 'active' : ''}`}>Skills</Link>
          </div>
          <div className="nav-item">
            <Link to="/posts" className={`nav-link ${pathname === '/posts' ? 'active' : ''}`}>Blog</Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  router: state.router
});

export default connect(
  mapStateToProps,
  null
)(Navbar);
