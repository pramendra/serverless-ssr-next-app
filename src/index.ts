/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import express from 'express';

const routeMain = express.Router({});

routeMain.get('/', function (req: any, res: any) {
  res.status(200).send('Hello World!');
});

routeMain.post('/webhook', (req: any, res: any) => {
  const { PRISMIC_WEBHOOK_SECRET } = process.env;
  const { secret = '' } = res.body || {};
  if (secret && secret !== PRISMIC_WEBHOOK_SECRET) {
    res.status(403).send('permission denied');
    return;
  }
  res.status(200).send('webhook');
});

export const http = routeMain;

exports.event = (event: any, callback: any) => {
  callback();
};
