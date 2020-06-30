const supertest = require('supertest');
import { http } from '../src/index';

// const express = require('express');
// const app = express();
// app.use('/', http);

const request = supertest(http);

describe('GET /', () => {
  // beforeEach(() => {
  //   jest.setTimeout(10000);
  // });
  it('responds Hello World!', async (done) => {
    const response = await request.get('/test');
    expect(response.statusCode).toBe(200);
    done();
  });
});

// describe('GET /webhook', () => {
//   it('responds webhook', async (done) => {
//     await supertest(app).post('/webhook').expect(500);
//     done();
//   });
// });
