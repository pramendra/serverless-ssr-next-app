import express from 'express';
import { applyAppMiddleware } from '../middleware/middleware-config';
import routes from './routes';
import { nextApp } from './next-app';

const appRoute = express.Router();
const handler = routes.getRequestHandler(nextApp);

applyAppMiddleware(appRoute);
appRoute.use(handler);

export { appRoute };
