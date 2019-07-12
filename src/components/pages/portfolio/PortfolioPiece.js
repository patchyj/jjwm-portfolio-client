/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as projectActions from '../../../actions/projects/projectActions';

const Jumbotron = styled.div`
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  height: 500px;
  margin:3rem;
`;

const Quote = styled.div`
  :before {
    content: open-quote;
    display: inline;
    height: 0;
    line-height: 0;
    left: -10px;
    position: relative;
    top: 30px;
    color: #ccc;
    font-size: 6em;
  }

  @media (max-width: 720px) {
    :before {
      left: 10px;
      font-size: 3em;
    }
  }
`;

class PortfolioPiece extends Component {
  componentDidMount() {
    const { actions, match } = this.props;
    actions.projectActions.getProject(match.params.id);
  }

  render() {
    const { projects } = this.props;
    const { project } = projects;

    return (
      <div>
        {project ? (
          <div>
            <Jumbotron className="jumbotron" style={{ background: `url(${project.images[1]})` }} />
            <div className="container">
              <h1 className="px-0">{project.title}</h1>
              <div className="row">
                <Quote className="col-md-9 offset-md-3 col-sm-12">
                  <h4 className="mx-0 p-3 text-muted">{project.tagline}</h4>
                </Quote>
              </div>
              <h5 className="mx-0 my-3">{project.author.firstName} {project.author.lastName}</h5>
              <p className="my-2 py-2 text-justify" style={{ fontSize: '1.2rem' }}>{project.about}</p>
            </div>
          </div>
        ) : <h1>Loading...</h1>}
      </div>
    );
  }
}

PortfolioPiece.propTypes = {
  actions: PropTypes.shape({ getProject: PropTypes.func }).isRequired,
  match: PropTypes.shape({}).isRequired,
  projects: PropTypes.shape(PropTypes.shape({}))
};

PortfolioPiece.defaultProps = {
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
)(PortfolioPiece);
