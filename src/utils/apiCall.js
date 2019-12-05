/* eslint-disable no-console */
import axios from 'axios';
import { get } from 'lodash';
import config from '../../config';

export const parseError = (response) => {
  if (get(response, 'data.errors.length') > 0) {
    const requestId = get(response, 'headers["x-request-id"]');
    return new Error(response.data.errors, requestId);
  }
  if (get(response, 'code') === 'ECONNABORTED') {
    return new Error('Request timed out');
  }
  return null;
};

export const httpGetRequest = endpoint => axios.get(`${config.AUTH_API}/${endpoint}`, { withCredentials: true });

export const httpPostRequest = (endpoint, body) => axios.post(`${config.AUTH_API}/${endpoint}`, body, { withCredentials: true });
