import config from '../../config';

/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-fallthrough */
const { NODE_ENV } = config;

export const baseURL = NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://jjwm-portfolio-api.herokuapp.com';
// export const baseURL = NODE_ENV === 'development' ? BASE_URL_DEV : BASE_URL_PROD;

// console.log(BASE_URL_DEV);
