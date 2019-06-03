// Set up your root reducer here...
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import AuthReducer from './authReducer';
import ErrorReducer from './errorReducer';
import userReducer from './userReducer';
import postReducer from './postReducer';


const rootReducer = history => combineReducers({
  router: connectRouter(history),
  auth: AuthReducer,
  errors: ErrorReducer,
  user: userReducer,
  posts: postReducer
});

export default rootReducer;
