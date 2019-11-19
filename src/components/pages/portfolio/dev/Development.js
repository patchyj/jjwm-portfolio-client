/* eslint-disable operator-linebreak */
import React from 'react';
import {
  Switch, Route, useRouteMatch, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import projectImages from '../../../../images';
import makeKey from '../../../../utils/makeKey';
import S from '../../../styledComponents';
import DevShow from './DevShow';

const Development = ({ projects }) => {
  const match = useRouteMatch();
  const projectsList =
    projects &&
    projects.map((project, i) => (

      <div className="row my-3" key={makeKey(project.name, i)}>
        <div className="col-md-4 image">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img
              src={projectImages[i]}
              alt="Circle of Intrapreneurs"
              className="screenshot"
            />
          </a>
        </div>
        <div className="col-md-8 px-3">
          <Link to={`${match.url}/${project.id}`}>
            <h3 className="title">{project.name}</h3>
          </Link>
          <h5 className="text-muted">
            {project.from} {project.to && `- ${project.to}`}
          </h5>
          <div className="row" style={{ margin: '0' }}>
            <div className="col-md-3 col-sm-12">
              <S.Social className="">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" />
                  </a>
                )}
                {project.facebook && (
                  <a
                    href={project.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                )}
                {project.twitter && (
                  <a
                    href={project.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                )}
              </S.Social>
            </div>
            <div className="col-md-9 col-sm-12 text-md-right">
              {project.tech.map((t, k) => (
                <span
                  key={makeKey(t, k)}
                  className="badge badge-pill badge-primary mr-2"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p>{project.description}</p>
        </div>
      </div>
    ));

  return (
    <div>

      <Switch>
        <Route path={`${match.path}/:devId`}>
          <DevShow projects={projects} />
        </Route>
        <Route path="/">
          {projectsList}
        </Route>
      </Switch>
    </div>
  );
};

Development.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({}))
};

Development.defaultProps = {
  projects: []
};

export default Development;
