/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import styled from 'styled-components';
import data from './projects.json';
import './PortfolioPage.scss';
import projectImages from '../../images';

const Social = styled.h5`
  a {
    padding-right: 10px;
    transition: 0.2s;
  }

  a:hover {
    color: grey;
  }
`;

class PortfolioPage extends Component {
  constructor() {
    super();
    this.state = {
      dev: true
    };

    this.onChangeDev = this.onChangeDev.bind(this);
  }

  onChangeDev = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ dev: !this.state.dev });
  };

  render() {
    const { dev } = this.state;

    const projects = data.map((project, i) => (
      <div className="row my-3">
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
          <h3 className="title">{project.name}</h3>
          <h5 className="text-muted">
            {project.from} {project.to && `- ${project.to}`}
          </h5>
          <div className="row" style={{ margin: '0' }}>
            <div className="col-md-3 col-sm-12">
              <Social className="">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" />
                  </a>
                )}
                {project.facebook && (
                  <a href={project.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook" />
                  </a>
                )}
                {project.twitter && (
                  <a href={project.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter" />
                  </a>
                )}
              </Social>
            </div>
            <div className="col-md-9 col-sm-12 text-md-right">
              {project.tech.map(t => (
                <span className="badge badge-pill badge-primary mr-2">{t}</span>
              ))}
            </div>
          </div>

          <p>{project.description}</p>
        </div>
      </div>
    ));
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h3 className="py-4">Portfolio</h3>
            <h4 className="m-0 py-5">
              <span className={!dev ? 'text-muted' : ''} onClick={this.onChangeDev}>
                DEV
              </span>{' '}
              |{' '}
              <span className={dev ? 'text-muted' : ''} onClick={this.onChangeDev}>
                DESIGN
              </span>
            </h4>
            {dev && projects}
            {!dev && 'Check back soon'}
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioPage;
