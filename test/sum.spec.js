// const sum = require('./src/sum');
import { sum } from '../lib/sum';

describe('adds 1 + 2 to equal 3', () => {
  test('debe sumar', () => {
    expect(sum(1, 2)).toBe(3);
  });
  // testexpect(sum(1, 2)).toBe(3);
});
