import React from 'react';
import styled from 'styled-components';
import './HomePage.scss';

const StyledSection = styled.div`
  height: 100vh;
  position: relative;
`;

const ParallaxContainer = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0 auto;

  .view1 {
    border-radius: 130px 130px 0 130px
  }
  .view2 {
    border-radius: 0 130px 0 130px
  }
  .view3 {
    border-radius: 0 130px 130px 130px
  }
`;

const HomePage = () => (
  <div className="container">
    <StyledSection className="section-1">
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
    </StyledSection>
    <StyledSection className="section-2 hide-on-small">
      <ParallaxContainer>
        <div className="window">
          <div className="view view1 left" id="view1" />
        </div>

        <div className="window">
          <div className="view view2 middle" id="view2" />
        </div>

        <div className="window">
          <div className="view view3 right" id="view3" />
        </div>
      </ParallaxContainer>
    </StyledSection>
    <StyledSection className="section-3">
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
          Site built with NextJS and hosted on Heroku. See the code{' '}
        <a href="https://github.com/patchyj/jjwm-portfolio-client" target="_blank" rel="noopener noreferrer">
            here
        </a>
      </small>
    </StyledSection>
  </div>
);

export default HomePage;
