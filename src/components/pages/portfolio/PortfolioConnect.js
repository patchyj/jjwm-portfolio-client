/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Portfolio from './PortfolioContainer';

function mapStateToProps(state) {
  return {
    projects: state.projects,
    errors: state.errors
  };
}

export default withRouter(connect(mapStateToProps)(Portfolio));
