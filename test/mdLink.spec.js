const fetchMock = require('fetch-mock').sandbox();
// // sandbox() has all the methods of fetch-mock exposed

fetchMock
  .mock('https://github.com/markdown-it/markdown-it', 200)
  .mock('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressionslim012', 404);

const md = require('../lib/mdLinks');

const pth = '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md';
const list = [
  {
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown it',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressionslim012',
    text: 'Regular Expressions',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
  },
];
const valList = [
  {
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown it',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'Regular Expressions',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
    status: 404,
    statusText: 'OK',
  },
];


describe('md Links', () => {
  it('Should return an array with the links properties and its absolute file path', () => expect(md.mdLinks(pth, { validate: false })).resolves.toBe(list));
});
describe('Validate md Links', () => {
  it('Should return an array with the links properties and its absolute file path', () => expect(md.mdLinks(pth, { validate: true })).resolves.toBe(valList));
});
describe('mdLinks fails with an error', () => {
  it('Should return an array with the links properties and its absolute file path', () => expect(md.mdLinks('./links/testLinks02.md', { validate: false })).rejects.toMatch('Invalid Path'));
});
