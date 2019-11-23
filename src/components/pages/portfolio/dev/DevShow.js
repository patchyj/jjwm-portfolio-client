/* eslint-disable operator-linebreak */
import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import projectImages from '../../../../images';

function DevShow({ projects }) {
  const { devId } = useParams();
  const project = projects.find(p => p.id === devId) || {};

  return (
    <div className="row">
      <div className="col-md-8">
        <h3 className="py-4">{project.name}</h3>
      </div>
      <div className="col-md-8">
        <img
          src={projectImages[devId - 1]}
          alt={project.name}
          className="screenshot"
        />
      </div>
      <div className="col-8 py-4">
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x mr-3" />
          </a>
        )}
        {project.twitter && (
          <a href={project.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x mr-3" />
          </a>
        )}
        {project.facebook && (
          <a href={project.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x mr-3" />
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x mr-3" />
          </a>
        )}
      </div>
      <div className="col-8">
        <p>{project.description}</p>
      </div>
    </div>
  );
}

DevShow.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({}))
};

DevShow.defaultProps = {
  projects: []
};

export default DevShow;
