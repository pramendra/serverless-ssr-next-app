import express from 'express';
import { appRoute } from './server/app-route';
import { proxyServer } from './server/proxy-server';

(async () => {
  const { BASE_PATH = '' } = process.env;
  const basePathRoute = express.Router();
  basePathRoute.use(BASE_PATH, appRoute);

  const server = await proxyServer();
  server.use(basePathRoute);
  server.listen(process.env.PORT || 8080);
})().catch((err) => {
  console.error(err);
});
