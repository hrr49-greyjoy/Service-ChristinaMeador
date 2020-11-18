const supertest = require('supertest');
const mongoose = require('mongoose');
const axios = require('axios');
const server = require('../server/index.js');

const request = supertest(server);

beforeAll(async (done) => {
  await mongoose.disconnect();

  mongoose.connect('mongodb://localhost/image-server', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', (err) => done.fail(err));
  db.once('open', () => done());
  done();
});

test('Jest has been implemented correctly.', () => {
  expect(1 + 2).toBe(3);
});

test('Server is pulling listings from the database', () => {
  var data = [];
  axios.get('/api/images')
    .then(res => {
      data = res.data;
    })
    .catch (err => {
      console.log('ERROR: ', err);
    })
    .then( () => {
      expect(data.length).toBeGreaterThan(0);
    });
});

afterAll(async (done) => {
  await mongoose.disconnect();
  done();
});