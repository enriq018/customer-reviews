const expect = require('chai').expect;
const supertest = require('supertest');

const api = supertest('http://localhost:3005');

describe('User', () => {
  it('should return 200', (done) => {
    api.get('/customerReviews')
    .set('Accept', 'Application/json')
    .expect(200, done)
  })
})