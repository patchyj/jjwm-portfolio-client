/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Navbar from './layout/Navbar';
import HomePage from './HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioContainer from './pages/portfolio/PortfolioContainer';
import PortfolioPiece from './pages/portfolio/PortfolioPiece';
import SkillsPage from './pages/SkillsPage';
import S from './styledComponents';

function App() {
  return (
    <S.StyledApp className="container-fluid">
      <div className="row">
        {/* SIDE NAV */}
        <aside className="col-12 col-md-2 p-0">
          <Navbar />
        </aside>
        <div className="col">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/portfolio" component={PortfolioContainer} />
            <Route exact path="/portfolio/:id" component={PortfolioPiece} />
            <Route exact path="/skills" component={SkillsPage} />
          </Switch>
        </div>
      </div>
    </S.StyledApp>
  );
}

export default hot(module)(App);
