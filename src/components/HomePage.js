import React from 'react';
import S from './styledComponents';
import './HomePage.scss';

const HomePage = () => (
  <div className="container">
    <S.StyledSection className="section-1">
      <h1 className="display-4 text-right">
        Jack
        <br />
        McGregor
      </h1>
      <div className="typewriter">
        <h4 className="typewriter-text text-muted">
          Fullstack Developer <br className="hide-on-large" /> and Designer.
        </h4>
      </div>
    </S.StyledSection>
    <S.StyledSection className="section-2 hide-on-small">
      <S.ParallaxContainer>
        <div className="window">
          <div className="view view1 left" id="view1" />
        </div>

        <div className="window">
          <div className="view view2 middle" id="view2" />
        </div>

        <div className="window">
          <div className="view view3 right" id="view3" />
        </div>
      </S.ParallaxContainer>
    </S.StyledSection>
    <S.StyledSection className="section-3">
      <h1 className="social">
        <a href="https://github.com/patchyj" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" />
        </a>
        <a href="mailto:jackjwmcgregor@gmail.com">
          <i className="fas fa-envelope" />
        </a>
        <a href="https://www.linkedin.com/in/jack-mcgregor/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" />
        </a>
        <a href="/static/resume.pdf" download>
          <i className="fas fa-download" />
        </a>
      </h1>
      <h5 className="recommend text-muted text-center mt-4">
        Recommendations availbe on LinkedIn and on request
      </h5>
      <hr />
      <small className="text-muted text-center">
        Site built with React, Redux and hosted on Heroku. See the code{' '}
        <a href="https://github.com/patchyj/jjwm-portfolio-client" target="_blank" rel="noopener noreferrer">
          here
        </a>
      </small>
    </S.StyledSection>
  </div>
);

export default HomePage;
