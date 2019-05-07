const expect = require('chai').expect
const server = require('../index');

describe('test', () => {
  it('should return a string', () => {
    expect('Hello World').to.equal('Hello World');
  });
});
