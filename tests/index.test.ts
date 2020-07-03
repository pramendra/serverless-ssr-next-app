import * as SuperTest from 'supertest';
import {
  //
  Express,
} from 'express';

import { proxyServer } from './../src/server/proxy-server';
import { appRoute } from './../src/server/app-route';

describe('expects http status 204', () => {
  let server: Express;
  let agent: SuperTest.SuperTest<SuperTest.Test>;
  // let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(async () => {
    server = await proxyServer();
    server.use(appRoute);
    agent = SuperTest.agent(server);
    // request = SuperTest(server);
  });

  test('/test', async (done) => {
    // jest.useFakeTimers();
    const response: SuperTest.Response = await agent.get('/test');
    expect(response.status).toBe(200);
    done();
  });
});
