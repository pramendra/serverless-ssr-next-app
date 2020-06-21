import {
  //
  app,
  handler,
  server,
} from './index';

const { BASE_PATH = '' } = process.env;
app.prepare().then(() => {
  server.use(BASE_PATH, (req: any, res: any) => {
    return handler(req, res);
  });
  server.listen(8080);
});
