/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import express from 'express';

const routeMain = express.Router({});

routeMain.get('/', function (req: any, res: any) {
  const { GCP_REGION } = process.env;
  console.log('>>>', GCP_REGION);
  res.status(200).send('Hello World!');
});

routeMain.post('/webhook', (req: any, res: any) => {
  // const secret = res.body;
  // const { PRISMIC_WEBHOOK_SECRET, PRISMIC_API, TEST } = process.env;
  // console.log(
  //   // res.body,
  //   TEST,
  //   secret !== PRISMIC_WEBHOOK_SECRET,
  //   secret,
  //   PRISMIC_API,
  //   PRISMIC_WEBHOOK_SECRET
  // );
  // if (secret !== PRISMIC_WEBHOOK_SECRET) res.status(400).send('webhook');
  // else res.status(200).send('webhook');
  res.status(200).send('webhook');
});

export const http = routeMain;

exports.event = (event: any, callback: any) => {
  callback();
};
