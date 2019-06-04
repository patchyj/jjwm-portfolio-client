/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-fallthrough */
const { NODE_ENV } = process.env;
let baseURL = '';

switch (NODE_ENV) {
  case 'development':
    baseURL = 'http://localhost:4000';
  case 'test':
    baseURL = 'http://localhost:4000';
  case 'production':
    baseURL = 'https://jjwm-portfolio-api.herokuapp.com';
  default:
    baseURL = 'http://localhost:4000';
    break;
}

export { baseURL };
