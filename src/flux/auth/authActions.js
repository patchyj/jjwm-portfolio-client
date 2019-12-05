import actionTypes from '../constants';

export const loginUser = userData => ({
  type: actionTypes.LOGIN_USER,
  payload: userData
});

export const registerUser = userData => ({
  type: actionTypes.REGISTER_USER,
  payload: userData
});
