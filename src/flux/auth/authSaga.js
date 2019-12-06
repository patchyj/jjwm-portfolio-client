/* eslint-disable object-curly-newline */
/* eslint-disable no-tabs */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { httpPostRequest, httpGetRequest } from '../../utils/apiCall';
import actionTypes from '../constants';

export function* loginUser(action) {
  try {
    yield put({ type: actionTypes.LOGIN_USER_STARTED });
    const res = yield call(httpPostRequest, 'login', action.payload);
    if (res.data.errors) throw res.data.errors;
    if (res.status >= 200 && res.status < 300) {
      yield put({
        type: actionTypes.LOGIN_USER_SUCCESS,
        payload: res.data.user
      });
      yield put(push('/about'));
    } else {
      throw res;
    }
  } catch (errors) {
    yield put({
      type: actionTypes.LOGIN_USER_FAILURE,
      response: {
        errors
      }
    });
  }
}

export function* registerUser(action) {
  try {
    yield put({ type: actionTypes.REGISTER_USER_STARTED });
    const res = yield call(httpPostRequest, 'register', action.payload);
    if (res.data.errors) throw res.data.errors;
    if (res.status >= 200 && res.status < 300) {
      yield put({ type: actionTypes.REGISTER_USER_SUCCESS });
    } else {
      throw res;
    }
  } catch (errors) {
    yield put({
      type: actionTypes.REGISTER_USER_FAILURE,
      response: {
        errors
      }
    });
  }
}

export function* logoutUser() {
  try {
    yield put({ type: actionTypes.LOGOUT_USER_STARTED });
    const { data } = yield call(httpGetRequest, 'logout');
    if (data.errors) throw data.errors;
    yield put({
      type: actionTypes.LOGOUT_USER_SUCCESS,
      payload: data
    });
    yield put(push('/auth'));
  } catch (e) {
    yield put({ type: actionTypes.LOGOUT_USER_FAILURE, errors: e.message });
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(actionTypes.LOGIN_USER, loginUser),
    takeLatest(actionTypes.REGISTER_USER, registerUser),
    takeLatest(actionTypes.LOGOUT_USER, logoutUser)
  ]);
}
