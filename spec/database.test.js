const mongoose = require('mongoose');
const index = require('../database/index.js');
const seed = require('../database/seed.js');

beforeAll(async (done) => {
  await mongoose.disconnect();
  await mongoose.connect('mongodb://localhost/image-slider', { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.on('error', (err) => done.fail(err));
});

describe('Test seeding script', () => {
  test('should...', async () => {

  })
});

afterAll(async (done) => {
  await mongoose.disconnect();
  done();
});
