'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const serverRequestTest = supertest(app);

describe('Error handling tests', () => {
  it('404 not found', async () => {
    let res = await serverRequestTest.get('/badroute');
    expect(res.status).toEqual(404); // testing 404 on bad route
    expect(res.text).toEqual('Not found'); // testing correct response text on bad route
  });
});

