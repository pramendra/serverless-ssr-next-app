const express = require('express');

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const applyStaticMiddleware = (app: any): any => {
  app.use('/static', express.static(process.cwd() + '/static'));
  //   return app;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const applyAppMiddleware = (app: any): any => {
  applyStaticMiddleware(app);
};
