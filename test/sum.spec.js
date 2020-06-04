// const sum = require('./src/sum');
import { toAbsolute } from '../lib/sum';

const paths = {
  mixedPaths: [],

  absPaths: [],
};
const { mixedPaths, absPaths } = paths;

describe('Checks for absolute paths if not converts them', () => {
  test('It should return absolute paths', () => {
    expect(toAbsolute(mixedPaths)).toBe(absPaths);
  });
  // test('object assignment', () => {
  //   const data = { one: 1 };
  //   data.two = 2;
  //   expect(data).toEqual({ one: 1, two: 2 });
  // });
});
