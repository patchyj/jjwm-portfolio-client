/* eslint-disable no-tabs */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import Api, { httpGetRequest, httpPostRequest } from '../../utils/apiCall';
import actionTypes from '../constants';

const authApi = new Api();

export function* loginUser(action) {
  try {
    yield put({ type: actionTypes.LOGIN_USER_STARTED });
    const response = yield call(httpPostRequest, 'login', action.payload);
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: actionTypes.LOGIN_USER_SUCCESS,
        payload: response.data.user
      });
      yield put({ type: actionTypes.GET_CURRENT_USER });
      yield put(push('/'));
    } else {
      throw response;
    }
  } catch (e) {
    const {
      response: { data }
    } = e;
    yield put({
      type: actionTypes.LOGIN_USER_FAILURE,
      response: {
        errors: data.errors
      }
    });
  }
}

export function* registerUser(action) {
  try {
    yield put({ type: actionTypes.REGISTER_USER_STARTED });
    const response = yield call(httpPostRequest, 'register', action.payload);
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: actionTypes.REGISTER_USER_SUCCESS });
    } else {
      throw response;
    }
  } catch (e) {
    const {
      response: { data }
    } = e;
    yield put({
      type: actionTypes.REGISTER_USER_FAILURE,
      response: {
        errors: data.errors
      }
    });
  }
}

export function* verifyUser() {
  try {
    yield put({ type: actionTypes.VERIFY_USER_STARTED });
    const response = yield call(httpGetRequest, 'verifyUser');
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: actionTypes.VERIFY_USER_SUCCESS });
    } else {
      throw response;
    }
  } catch (e) {
    yield put({
      type: actionTypes.VERIFY_USER_FAILURE,
      errors: e.response.data.errors
    });
    yield put({ type: actionTypes.LOGOUT_USER });
  }
}

export function* logoutUser() {
  try {
    yield put({ type: actionTypes.LOGOUT_USER_STARTED });
    const response = yield call(() => authApi.getRequest('logout'));
    yield put({
      type: actionTypes.LOGOUT_USER_SUCCESS,
      payload: response.isAuthenticated
    });
    yield put({ type: actionTypes.CLEAR_CURRENT_USER });
  } catch (e) {
    yield put({ type: actionTypes.LOGOUT_USER_FAILURE, errors: e.message });
  }
}

export function* passwordConfirmation(action) {
  try {
    yield put({ type: actionTypes.PASSWORD_CHANGE_STARTED });
    const response = yield call(
      httpPostRequest,
      'verifyPassword',
      action.payload
    );
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: actionTypes.PASSWORD_CHANGE_SUCCESS
      });
    } else {
      throw response;
    }
  } catch (e) {
    const {
      response: { data }
    } = e;
    yield put({
      type: actionTypes.PASSWORD_CHANGE_FAILURE,
      response: {
        errors: data.errors
      }
    });
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(actionTypes.VERIFY_USER, verifyUser),
    takeLatest(actionTypes.LOGIN_USER, loginUser),
    takeLatest(actionTypes.REGISTER_USER, registerUser),
    takeLatest(actionTypes.LOGOUT_USER, logoutUser),
    takeLatest(actionTypes.PASSWORD_CHANGE, passwordConfirmation)
  ]);
}
