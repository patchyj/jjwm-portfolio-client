import fetch from 'node-fetch';
import {
  GET_POSTS_STARTED,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from '../types';

export const getPost = id => (dispatch) => {
  dispatch({ type: GET_POSTS_STARTED });
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((res) => {
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: res
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_POSTS_FAILURE,
        payload: err
      });
    });
};

export const getPosts = () => (dispatch) => {
  dispatch({ type: GET_POSTS_STARTED });
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((res) => {
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: res
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_POSTS_FAILURE,
        payload: err
      });
    });
};
