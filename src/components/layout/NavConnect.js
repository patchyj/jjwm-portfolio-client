import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = state => ({
  router: state.router
});

export default connect(mapStateToProps, null)(Navbar);
