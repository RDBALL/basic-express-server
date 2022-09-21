'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const serverRequestTest = supertest(app);

describe('Validate query function', () => {
  describe('Name query', () => {
    test('500 if no name in the query string', async () => {
      let response = await serverRequestTest.get('/person');
      expect(response.status).toEqual(500); // validating a 500 error if no name is in query string
      expect(response.text).toEqual('⛔ valid query parameter required 👉 example  .../person?name=Robert');
    });
  });

  describe('GET routes Tests', () => {
    test('Correct query string for /person route', async () => {
      let response = await serverRequestTest.get('/person?name=Robert');
      expect(response.status).toEqual(200); // validating the name is in the query string
      expect(response.body.name).toEqual('Robert'); //validating output object name = query string input
    });
  });
});