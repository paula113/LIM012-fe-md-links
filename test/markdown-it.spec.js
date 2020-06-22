const md = require('../lib/markdown-it');

// const mk = jest.mock('markdown-t');

const data = {
  contentFile: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  mdLinks: [
    'https://github.com/markdown-it/markdown-it',
    'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    'https://github.com/markedjs/marked',
    'https://github.com/jsdom/jsdom',
    'https://github.com/cheeriojs/cheerio',
  ],
};
const details = {
  href: 'https://github.com/markdown-it/markdown-it',
  text: 'markdown it',
  file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
};
const links = [
  {
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown it',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'Regular Expressions',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  },
  {
    href: 'https://github.com/markedjs/marked',
    text: 'marked',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  },
  {
    href: 'https://github.com/jsdom/jsdom',
    text: 'jsdom',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  },
  {
    href: 'https://github.com/cheeriojs/cheerio',
    text: 'cheerio',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  },
];
const {
  contentFile, mdLinks,
} = data;


describe('Retrieves properties of a links', () => {
  it('Should return an object', () => {
    expect(md.links(mdLinks[0], contentFile)).toEqual(details);
  });
});

describe('Recieves an array of links ', () => {
  it('Should return an new array of objects for each link', () => {
    expect(md.listofLinks(mdLinks, '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md')).toEqual(links);
  });
});
