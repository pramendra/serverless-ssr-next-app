import express, {
  //
  Express,
} from 'express';
import { nextApp } from './server/next-app';
import { appRoute } from './server/app-route';

nextApp.prepare().then(() => {
  const { BASE_PATH = '' } = process.env;
  const basePathRoute = express.Router();
  basePathRoute.use(BASE_PATH, appRoute);

  const server: Express = express();
  server.use(basePathRoute);
  server.listen(process.env.PORT || 8080);
});
