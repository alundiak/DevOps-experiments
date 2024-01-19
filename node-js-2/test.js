const assert = require('node:assert');
const { multiply } = require('./index');

describe('Multiply() test', () => {
  it('should multiply', () => {
    assert(multiply(3, 2) === 6);
  });
})
