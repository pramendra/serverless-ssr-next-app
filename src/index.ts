import {
  //
  Express,
  Request,
  Response,
} from 'express';

import { appRoute } from './server/app-route';
import { proxyServer } from './server/proxy-server';

export const http = async (req: Request, res: Response): Promise<Express> => {
  const server = await proxyServer();
  return server.use(appRoute)(req, res);
};
