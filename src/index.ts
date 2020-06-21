import { nextApp } from './server/next-app';
import { appRoute } from './server/app-route';

const express = require('express');
const server = express();
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const http = (req: any, res: any): any => {
  console.log(`File: ${req.originalUrl}`);
  return nextApp.prepare().then(() => {
    server.use(appRoute)(req, res);
  });
};
