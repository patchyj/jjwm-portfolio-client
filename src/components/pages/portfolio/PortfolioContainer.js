/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import data from './projects.json';
import './PortfolioContainer.scss';
import Development from './dev/Development';
import Design from './design/Design';
import * as projectActions from '../../../actions/projects/projectActions';
import S from '../../styledComponents';

class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = {
      dev: true
    };

    this.onChangeDev = this.onChangeDev.bind(this);
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.projectActions.getProjects();
  }

  onChangeDev = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ dev: !this.state.dev });
  };

  render() {
    const { dev } = this.state;
    const {
      projects: { projects: projectsList }
    } = this.props;

    return (
      <S.Portfolio>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h3 className="py-4">Portfolio</h3>
            <h4 className="m-0 py-5">
              <span
                className={!dev ? 'text-muted' : ''}
                onClick={this.onChangeDev}
              >
                DEV
              </span>{' '}
              |{' '}
              <span
                className={dev ? 'text-muted' : ''}
                onClick={this.onChangeDev}
              >
                DESIGN
              </span>
            </h4>
            {dev && <Development projects={data} />}
            {!dev && <Design projects={projectsList} />}
          </div>
        </div>
      </S.Portfolio>
    );
  }
}

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
