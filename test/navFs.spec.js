// const sum = require('./src/sum');
import {
  toAbsolute, isVal, isAFile, recursiveGetFiles,
  isMd,
} from '../lib/navFs';

const paths = {
  relPath: 'links/testLinks01.md',
  abstPath: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  AbsfalsePath: '/Users/Drive/Documents/links',
  absDirPath: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links',
  listOfAnyFiles: [
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/app.js',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/morefiles01.md',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
  ],
  mdFiles: [
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/morefiles01.md',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
  ],
};
const {
  relPath, abstPath, AbsfalsePath,
  absDirPath, listOfAnyFiles,
  mdFiles,
} = paths;

describe('Checks for absolute paths if not converts them', () => {
  test('It should return absolute path', () => {
    expect(toAbsolute(relPath)).toEqual(abstPath);
  });
  test('It should return same path', () => {
    expect(toAbsolute(abstPath)).toBe(abstPath);
  });
});

describe('Checks for existing path', () => {
  test('It should return existing path', () => {
    expect(isVal(abstPath)).toBeTruthy();
  });
  test('It should return a falsy value', () => {
    expect(isVal(AbsfalsePath)).not.toBeTruthy();
  });
});

describe('Checks if is a file', () => {
  test('It should return true if is a file', () => {
    expect(isAFile(abstPath)).toBeTruthy();
  });
  test('It should return a false if is not a file (dir) ', () => {
    expect(isAFile(absDirPath)).not.toBeTruthy();
  });
});

describe('Recursive funtion', () => {
  test('It should return an array of files', () => {
    expect(recursiveGetFiles(absDirPath)).toEqual(listOfAnyFiles);
  });
});

describe('Checks for  md files', () => {
  test('It should return an array of files .md files', () => {
    expect(isMd(listOfAnyFiles, '.md')).toEqual(mdFiles);
  });
});
