import React from 'react';
import S from '../styledComponents';

const Footer = () => (
  <S.Footer>
    <h1 className="social">
      <a
        href="https://github.com/patchyj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" />
      </a>
      <a href="mailto:jackjwmcgregor@gmail.com">
        <i className="fas fa-envelope" />
      </a>
      <a
        href="https://www.linkedin.com/in/jack-mcgregor/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a href="/static/resume.pdf" download>
        <i className="fas fa-download" />
      </a>
    </h1>
    <h5 className="recommend text-muted text-center mt-4">
      Recommendations available on request
    </h5>

    <div className="byline">
      <small className="text-muted">
        Site built with React hosted on Heroku. See the code{' '}
        <a
          href="https://github.com/patchyj/jjwm-portfolio-client"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </small>
    </div>
  </S.Footer>
);

export default Footer;
