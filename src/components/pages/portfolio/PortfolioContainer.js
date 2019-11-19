/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component, useState } from 'react';
import {
  Switch, Route, useRouteMatch,
  useParams
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import data from './projects.json';
import './PortfolioContainer.scss';
import Development from './dev/Development';
import Design from './design/Design';
import * as projectActions from '../../../actions/projects/projectActions';
import S from '../../styledComponents';

const PortfolioContainer = () => {
  const [dev, onChangeDev] = useState();
  const match = useRouteMatch();

  return (
    <S.Portfolio>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h3 className="py-4">Portfolio</h3>
          <h4 className="m-0 py-5">
            <span
              className={!dev ? 'text-muted' : ''}
              onClick={onChangeDev}
            >
              DEV
            </span>{' '}
            |{' '}
            <span
              className={dev ? 'text-muted' : ''}
              onClick={onChangeDev}
            >
              DESIGN
            </span>
          </h4>
          <Switch>
            <Route
              path={`${match.path}/dev`}
              render={props => <Development {...props} projects={data} />}
            />
          </Switch>
          {dev && <Development projects={data} />}
          {!dev && <Design />}
        </div>
      </div>
    </S.Portfolio>
  );
};

PortfolioContainer.propTypes = {
  actions: PropTypes.shape({ getProjects: PropTypes.func }).isRequired,
  projects: PropTypes.shape({})
};

PortfolioContainer.defaultProps = {
  projects: {}
};

function mapStateToProps(state) {
  return {
    projects: state.projects,
    errors: state.errors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      projectActions: bindActionCreators(projectActions, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);
