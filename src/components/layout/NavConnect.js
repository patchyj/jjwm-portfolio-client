import { connect } from 'react-redux';
import Navbar from './Navbar';
import { logoutUser } from '../../flux/auth/authActions';

const mapStateToProps = state => ({
  router: state.router,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
