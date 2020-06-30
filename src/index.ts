import express, {
  //
  Express,
  Request,
  Response,
} from 'express';

import { nextApp } from './server/next-app';
import { appRoute } from './server/app-route';

const server: Express = express();

export const http = (req: Request, res: Response): any => {
  // console.log(`File: ${req.originalUrl}`);
  return nextApp.prepare().then(() => {
    server.use(appRoute)(req, res);
  });
};
