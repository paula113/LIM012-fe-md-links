const md = require('../lib/mdLinks');

const list = [
  {
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown it',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'Regular Expressions',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
  },
];


describe('md Links', () => {
  it('Should return an array with the links properties and its absolute file path', () => expect(md.mdLinks('/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md', { validate: false })).resolves.toBe(list));
});

describe('mdLinks fails with an error', () => {
  it('Should return an array with the links properties and its absolute file path', () => expect(md.mdLinks('../links/testLinks02.md', { validate: false })).rejects.toMatch('Invalid Path'));
});
