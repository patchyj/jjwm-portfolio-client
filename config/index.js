import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT,
  BASE_URL_DEV: process.env.BASE_URL_DEV,
  BASE_URL_TEST: process.env.BASE_URL_TEST,
  BASE_URL_PROD: process.env.BASE_URL_PROD
};
