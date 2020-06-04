// const sum = require('./src/sum');
import { toAbsolute } from '../lib/sum';

const paths = {
  mixedPaths: ['/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links', 'links/testLinks01.md', 'links/testLinks02.md', 'links/morefiles/app.js', 'links/morefiles/morefiles01.md'],

  absPaths: [
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/app.js',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/morefiles01.md',
  ],
};
const { mixedPaths, absPaths } = paths;

describe('Checks for absolute paths if not converts them', () => {
  test('It should return absolute paths', () => {
    expect(toAbsolute(mixedPaths)).toEqual(absPaths);
  });
  // test('object assignment', () => {
  //   const data = { one: 1 };
  //   data.two = 2;
  //   expect(data).toEqual({ one: 1, two: 2 });
  // });
});
