/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  GET_PROJECTS_STARTED,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILURE
} from '../types';
import { getProjectsQuery } from './projectQueries';
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
