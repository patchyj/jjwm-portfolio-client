/* eslint-disable no-unused-vars */
import {
  GET_PROJECTS_STARTED,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILURE,
  // eslint-disable-next-line no-unused-vars
  GET_PROJECT_STARTED,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAILURE
} from '../actions/types';

const initialState = {
  loading: false,
  errors: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS_STARTED:
      return {
        ...state,
        loading: true
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        projects: action.payload
      };
    case GET_PROJECTS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.message
      };
    case GET_PROJECT_STARTED:
      return {
        ...state,
        loading: true
      };
    case GET_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        project: action.payload
      };
    case GET_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.message
      };
    default:
      return state;
  }
}
