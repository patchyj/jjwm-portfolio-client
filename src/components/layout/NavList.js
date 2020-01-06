/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';

const NavList = ({ closeModal, isAuthenticated, logoutUser }) => (
  <Fragment>
    <NavLink title="Home" onClick={closeModal} />
    <NavLink page="about" title="About" onClick={closeModal} />
    <NavLink page="portfolio" title="Portfolio" onClick={closeModal} />
    <NavLink page="skills" title="Skills" onClick={closeModal} />
    <NavLink page="experience" title="Experience" onClick={closeModal} />
    {/* {!isAuthenticated ? (
      <NavLink page="auth" title="Auth" onClick={closeModal} />
    ) : (
      <NavLink page="auth" title="Logout" onClick={logoutUser} />
    )} */}
  </Fragment>
);

NavList.propTypes = {
  closeModal: PropTypes.func,
  isAuthenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired
};

NavList.defaultProps = {
  closeModal: () => {}
};

export default NavList;
