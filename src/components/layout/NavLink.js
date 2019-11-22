import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ page, title, closeModal }) => {
  const { pathname } = window.location;

  return (
    <li className="nav-item">
      <Link
        to={`/${page}`}
        className={`nav-link ${pathname === `/${page}` ? 'text-muted' : ''}`}
        onClick={closeModal}
      >
        {title}
      </Link>
    </li>
  );
};

NavLink.propTypes = {
  page: PropTypes.string,
  title: PropTypes.string,
  closeModal: PropTypes.func
};

NavLink.defaultProps = {
  page: '',
  title: '',
  closeModal: () => {}
};

export default NavLink;
