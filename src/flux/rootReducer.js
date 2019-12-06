/* eslint-disable implicit-arrow-linebreak */
// Set up your root reducer here...
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import AuthReducer from './auth/authReducer';
import userReducer from '../reducers/userReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth: AuthReducer,
    user: userReducer
  });

export default rootReducer;
