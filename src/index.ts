// server.js;
const express = require('express');
const next = require('next');
// const routes = require('./routes');
import routes from './routes';
import './server';

const dev = process.env.NODE_ENV !== 'production';
const { BASE_PATH = '' } = process.env;
export const app = next({
  //
  dev,
  dir: 'src/app',

  conf: {
    assetPrefix: BASE_PATH,
  },
});
export const handler = routes.getRequestHandler(app);
export const server = express();

// server.get('*', (req: any, res: any) => handler(req, res));

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const http = (req: any, res: any): any => {
  console.log(`File: ${req.originalUrl}`);
  return app.prepare().then(() => {
    server(req, res);
  });
};
