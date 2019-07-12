/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import Navbar from './layout/Navbar';
import HomePage from './HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioContainer from './pages/portfolio/PortfolioContainer';
import PortfolioPiece from './pages/portfolio/PortfolioPiece';
import SkillsPage from './pages/SkillsPage';
import BlogContainer from './pages/blog/BlogContainer';

const StyledApp = styled.nav`
  [class*="col-"] {
    padding: 0;
  }
`;

class App extends React.Component {
  render() {
    return (
      <StyledApp className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navbar />
          </div>
          <div className="col-md-10">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/portfolio" component={PortfolioContainer} />
              <Route exact path="/portfolio/:id" component={PortfolioPiece} />
              <Route exact path="/skills" component={SkillsPage} />
              {/* <Route exact path="/posts" component={BlogContainer} /> */}
            </Switch>
          </div>
        </div>
      </StyledApp>
    );
  }
}

export default hot(module)(App);
