import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const { pathname } = window.location;

const NavLink = ({ page, title }) => (
  <li className="nav-item">
    <Link
      to={`/${page}`}
      className={`nav-link ${pathname.includes(`/${page}`) ? 'active' : ''}`}
    >
      {title}
    </Link>
  </li>
);

NavLink.propTypes = {
  page: PropTypes.string,
  title: PropTypes.string
};

NavLink.defaultProps = {
  page: '',
  title: ''
};

export default NavLink;
