import express, {
  //
  Express,
} from 'express';
import { nextApp } from './next-app';

export const proxyServer = async (): Promise<Express> => {
  const server: Express = express();
  await nextApp.prepare();
  return server;
};
