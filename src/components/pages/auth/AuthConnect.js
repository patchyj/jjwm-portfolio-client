import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, registerUser } from '../../../flux/auth/authActions';
import AuthContainer from './AuthContainer';

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data)),
  registerUser: () => dispatch(registerUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AuthContainer));
