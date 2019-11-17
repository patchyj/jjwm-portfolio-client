import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ page, title }) => {
  const { pathname } = window.location;

  return (
    <li className="nav-item">
      <Link
        to={`/${page}`}
        className={`nav-link ${pathname === `/${page}` ? 'text-muted' : ''}`}
      >
        {title}
      </Link>
    </li>
  );
};

NavLink.propTypes = {
  page: PropTypes.string,
  title: PropTypes.string
};

NavLink.defaultProps = {
  page: '',
  title: ''
};

export default NavLink;
