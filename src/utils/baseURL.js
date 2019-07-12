/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-fallthrough */
import config from '../../config';

const { NODE_ENV } = config;

export const baseURL = NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://jjwm-portfolio-api.herokuapp.com';
