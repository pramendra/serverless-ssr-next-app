import { nextApp } from './server/next-app';
import { appRoute } from './server/app-route';

const { BASE_PATH = '' } = process.env;

const express = require('express');
const server = express();

const basePathRoute = express.Router();
basePathRoute.use(BASE_PATH, appRoute);

nextApp.prepare().then(() => {
  server.use(basePathRoute);
  server.listen(8080);
});
