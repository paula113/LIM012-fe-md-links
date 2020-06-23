
const md = require('../lib/mdLinks');

const pth = '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md';
const dir = './links/morefiles/testfiles';
const listfile = [
  {
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (`RegExp`)',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
  },
];
const listDir = [
  {
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/testfiles/moretestfiles/more-test-files01.md',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (`RegExp`)',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/testfiles/moretestfiles/more-test-files01.md',
  },
];
const valListFile = [
  {
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (`RegExp`)',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
    status: 404,
    statusText: 'FAIL',
  },
];
const valListDir = [
  {
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/testfiles/moretestfiles/more-test-files01.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (`RegExp`)',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/testfiles/moretestfiles/more-test-files01.md',
    status: 404,
    statusText: 'FAIL',
  },
];

describe('md Links should return an array with the links properties and its absolute file path', () => {
  it('Checks for a file', () => expect(md.mdLinks(pth, { validate: false })).resolves.toStrictEqual(listfile));
  it('Checks for a a dir', () => expect(md.mdLinks(dir, { validate: false })).resolves.toEqual(listDir));
});
describe('Validate md Links ', () => {
  it('Should return an array with the links properties and its absolute file path', () => expect(md.mdLinks(pth, { validate: true })).resolves.toEqual(valListFile));
  it('Should check for md files and return an array with the links properties and its absolute file path', () => expect(md.mdLinks(dir, { validate: true })).resolves.toEqual(valListDir));
});
describe('mdLinks fails with an error', () => {
  it('Should return an array with the links properties and its absolute file path', () => expect(md.mdLinks('../links/testLinks02.md', { validate: false })).rejects.toThrowError('Invalid Path'));
});
