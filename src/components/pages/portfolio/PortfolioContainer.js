/* eslint-disable object-curly-newline */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import data from './projects.json';
import Development from './dev/Development';
import Design from './design/Design';
import S from '../../styledComponents';
import './PortfolioContainer.scss';

const PortfolioContainer = ({ location }) => {
  const match = useRouteMatch();
  const { pathname } = location;
  const currentPage = page => pathname.includes(page);
  useEffect(() => {
    document.title = 'Jack McGregor | Portfolio';
  });

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
            <Route path={`${match.path}`}>
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
  projects: PropTypes.shape({}),
  location: PropTypes.shape({})
};

PortfolioContainer.defaultProps = {
  projects: {},
  location: {}
};

export default PortfolioContainer;
