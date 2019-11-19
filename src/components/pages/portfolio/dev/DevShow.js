/* eslint-disable operator-linebreak */
import React from 'react';
import {
  useParams
} from 'react-router-dom';
import PropTypes from 'prop-types';
import projectImages from '../../../../images';

function DevShow({ projects }) {
  const { devId } = useParams();
  const project = projects.find(p => p.id === devId);
  console.log(project);
  return (
    <div className="row">

      <div className="col-md-12 ">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <img
            src={projectImages[devId - 1]}
            alt="Circle of Intrapreneurs"
            className="screenshot"
          />
        </a>
      </div>
      <div className="col">
        <h3>{project.name}</h3>
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
