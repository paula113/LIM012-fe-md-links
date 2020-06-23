// const sum = require('./src/sum');
const navFs = require('../lib/navFs');

const paths = {
  relPath: 'links/testLinks01.md',
  abstPath: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  AbsfalsePath: '/Users/Drive/Documents/links',
  absDirPath: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links',
  mdFiles: [
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/morefile02.md',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/morefiles01.md',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/testfiles/moretestfiles/more-test-files01.md',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
  ],
};
const listOfAnyFiles = [
  '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles',
  '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/app.js',
  '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/morefile02.md',
  '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/morefiles01.md',
  '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/testfiles',
  '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/testfiles/moretestfiles',
  '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/testfiles/moretestfiles/more-test-files01.md',
  '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/testfiles/moretestfiles-app.js',
  '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/testfiles/testapp.js',
  '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
];
const {
  relPath, abstPath, AbsfalsePath,
  absDirPath,
  mdFiles,
} = paths;

describe('Checks for absolute paths if not converts them', () => {
  test('It should return absolute path', () => {
    expect(navFs.toAbsolute(relPath)).toEqual(abstPath);
  });
  test('It should return same path', () => {
    expect(navFs.toAbsolute(abstPath)).toBe(abstPath);
  });
});

describe('Checks for existing path', () => {
  test('It should return existing path', () => {
    expect(navFs.isVal(abstPath)).toBeTruthy();
  });
  test('It should return a falsy value', () => {
    expect(navFs.isVal(AbsfalsePath)).not.toBeTruthy();
  });
});

describe('Checks if is a file', () => {
  test('It should return true if is a file', () => {
    expect(navFs.isAFile(abstPath)).toBeTruthy();
  });
  test('It should return a false if is not a file (dir) ', () => {
    expect(navFs.isAFile(absDirPath)).not.toBeTruthy();
  });
});

describe('Recursive funtion', () => {
  test('It should return an array of files', () => {
    expect(navFs.recursiveGetFiles(absDirPath)).toEqual(listOfAnyFiles);
  });
});

describe('Checks for  md files', () => {
  test('It should return an array of files .md files', () => {
    expect(navFs.isMd(listOfAnyFiles, '.md')).toEqual(mdFiles);
  });
});
