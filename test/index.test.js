const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('responds with service status', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual({ status: 'UP' });
  });
});
