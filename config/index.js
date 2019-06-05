require('dotenv').config({ path: `${__dirname}/.env` });

console.log(process.env);
export default {
  PORT: process.env.PORT,
  BASE_URL_DEV: process.env.BASE_URL_DEV,
  BASE_URL_PROD: process.env.BASE_URL_PROD
};
