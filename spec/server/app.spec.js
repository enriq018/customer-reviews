const supertest = require('supertest');

const api = supertest('http://localhost:3005');

describe('User', () => {
  it('GET request to /customerReviews should return a status code of 200', (done) => {
    api.get('/customerReviews')
      .expect(200, done);
  });
});
