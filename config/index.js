require('dotenv').config({ path: `${__dirname}/.env` });

console.log(process.env);
export default {
  PORT: process.env.REACT_APP_PORT,
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL_DEV: process.env.BASE_URL_DEV,
  BASE_URL_PROD: process.env.BASE_URL_PROD
};
