/* eslint-disable no-unused-vars */
import {
  GET_POSTS_STARTED,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  // eslint-disable-next-line no-unused-vars
  GET_POST_STARTED,
  GET_POST_SUCCESS,
  GET_POST_FAILURE
} from '../actions/types';

const initialState = {
  posts: [],
  loading: false,
  errors: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_STARTED:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        posts: action.payload
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.message
      };
    default:
      return state;
  }
}
