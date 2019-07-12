/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  GET_PROJECTS_STARTED,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILURE,
  GET_PROJECT_STARTED,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAILURE
} from '../types';
import { getProjectsQuery, getProjectQuery } from './projectQueries';
import { baseURL } from '../../utils/baseURL';

export const getProjects = () => (dispatch) => {
  dispatch({ type: GET_PROJECTS_STARTED });

  axios
    .post(`${baseURL}/graphql`, {
      query: getProjectsQuery().query
    })
    .then((res) => {
      dispatch({
        type: GET_PROJECTS_SUCCESS,
        payload: res.data.data.allProjects
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PROJECTS_FAILURE,
        payload: err
      });
    });
};

export const getProject = id => (dispatch) => {
  dispatch({ type: GET_PROJECT_STARTED });

  axios
    .post(`${baseURL}/graphql`, {
      query: getProjectQuery(id).query
    })
    .then((res) => {
      dispatch({
        type: GET_PROJECT_SUCCESS,
        payload: res.data.data.project
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PROJECT_FAILURE,
        payload: err
      });
    });
};
