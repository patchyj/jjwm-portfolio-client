/* eslint-disable no-tabs */
import {
 all, call, put, takeLatest 
} from 'redux-saga/effects';
// import { push } from 'connected-react-router';
import { httpPostRequest } from '../../utils/apiCall';
import actionTypes from '../constants';

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
      // yield put(push('/'));
    } else {
      throw response;
    }
  } catch (errors) {
    yield put({
      type: actionTypes.LOGIN_USER_FAILURE,
      response: {
        errors: errors.message
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

export default function* authSaga() {
  yield all([
    takeLatest(actionTypes.LOGIN_USER, loginUser),
    takeLatest(actionTypes.REGISTER_USER, registerUser)
  ]);
}
