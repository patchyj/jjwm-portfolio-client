import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';

const NavList = ({ closeModal }) => (
  <Fragment>
    <NavLink title="Home" closeModal={closeModal} />
    <NavLink page="about" title="About" closeModal={closeModal} />
    <NavLink page="portfolio" title="Portfolio" closeModal={closeModal} />
    <NavLink page="skills" title="Skills" closeModal={closeModal} />
    <NavLink page="experience" title="Experience" closeModal={closeModal} />
  </Fragment>
);

NavList.propTypes = {
  closeModal: PropTypes.func
};

NavList.defaultProps = {
  closeModal: () => {}
};

export default NavList;
