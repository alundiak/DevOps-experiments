const assert = require('node:assert');
const { add } = require('./index');

describe('Add() test', () => {
  it('should add', () => {
    assert(add(2, 2) === 4);
  });
})
