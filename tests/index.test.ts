import * as supertest from 'supertest';
import {
  //
  Express,
} from 'express';

import { proxyServer } from './../src/server/proxy-server';
import { appRoute } from './../src/server/app-route';

describe('expects http status 200', () => {
  let server: Express;
  // let agent: SuperTest.SuperTest<SuperTest.Test>;
  let request: supertest.SuperTest<supertest.Test>;

  beforeEach(async () => {
    server = await proxyServer();
    server.use(appRoute);
    // agent = SuperTest.agent(server);
    request = supertest.agent(server);
  });

  test('/test', async (done) => {
    // jest.useFakeTimers();
    const response: supertest.Response = await request.get('/test');
    expect(response.status).toBe(200);
    done();
  });
});
