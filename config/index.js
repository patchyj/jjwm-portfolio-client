require('dotenv').config({ path: `${__dirname}/.env` });

export default {
  PORT: process.env.REACT_APP_PORT,
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL_DEV: process.env.BASE_URL_DEV,
  BASE_URL_PROD: process.env.BASE_URL_PROD,
  AUTH_API:
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:4000/auth'
      : 'https://jjwm-portfolio-auth.herokuapp.com/auth'
};
