import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ page, title, onClick }) => {
  const { pathname } = window.location;

  return (
    <li className="nav-item">
      <Link
        to={`/${page}`}
        className={`nav-link ${pathname === `/${page}` ? 'text-muted' : ''}`}
        onClick={onClick}
      >
        {title}
      </Link>
    </li>
  );
};

NavLink.propTypes = {
  page: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
};

NavLink.defaultProps = {
  page: '',
  title: '',
  onClick: () => {}
};

export default NavLink;
