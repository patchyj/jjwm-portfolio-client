/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component, useState } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useParams,
  withRouter
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

const PortfolioContainer = ({ location }) => {
  const [dev] = useState(true);
  const match = useRouteMatch();
  const { pathname } = location;
  const currentPage = page => pathname.includes(page);

  return (
    <S.Portfolio>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h3 className="py-4">Portfolio</h3>
          <h4 className="m-0 py-5">
            <Link
              to={`${match.url}/dev`}
              className={!currentPage('dev') ? 'text-muted' : ''}
            >
              DEV
            </Link>{' '}
            |{' '}
            <Link
              to={`${match.url}/design`}
              className={!currentPage('design') ? 'text-muted' : ''}
            >
              DESIGN
            </Link>
          </h4>
          <Switch>
            <Route
              path={`${match.path}/dev`}
              render={props => <Development {...props} projects={data} />}
            />
            <Route path={`${match.path}/design`} component={Design} />
            <Route path="/">
              <h6>
                Choose from one of the above options to see some examples of
                work I've done
              </h6>
            </Route>
          </Switch>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PortfolioContainer));
