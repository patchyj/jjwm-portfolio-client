import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  transition: .2s;
  filter: brightness(30%);
  padding:5px;

  &:hover {
    filter: none;
  }
`;

const Design = ({ projects }) => (
  <div className="row">
    {projects.map(project => (
      <div className="col-md-4">
        <Link to="/">
          <Image src={project.images[0]} alt="" className="img-responsive" />
        </Link>
      </div>
    ))}
  </div>
);

Design.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({}))
};

Design.defaultProps = {
  projects: []
};

export default Design;
