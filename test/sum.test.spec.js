// const sum = require('./src/sum');
import { sum } from 'src/sum.js'

describe('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});