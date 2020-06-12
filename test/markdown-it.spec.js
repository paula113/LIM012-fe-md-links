const md = require('../lib/markdown-it');

const data = {
  nolinksFile: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
  contentFile: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  mdLinks: [
    'https://github.com/markdown-it/markdown-it',
    'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    'https://github.com/markedjs/marked',
    'https://github.com/jsdom/jsdom',
    'https://github.com/cheeriojs/cheerio',
  ],
  url: 'https://github.com/markdown-it/markdown-it',
  state: 'markdown it',
};

const {
  nolinksFile, contentFile, mdLinks, url, state,
} = data;

describe('checks if there are links in a markdown file', () => {
  // MOCK
  it('Should return false if no links were found', () => {
    expect(md.areThereLinks(nolinksFile)).not.toBeTruthy();
  });
  it('Should return true if file does contain links', () => {
    expect(md.areThereLinks(contentFile)).toBeTruthy();
  });
});

describe('Retrive links from a markdown file', () => {
  // MOCK
  it('Should return false if no links were found', () => {
    expect(md.getLinks(contentFile, 'url')).toEqual(mdLinks);
  });
});

describe('', () => {
  it('Should return an object', () => {
    expect(md.links(mdLinks[0])).toEqual({});
  });
  it('Should return link state', () => {
    expect(md.listofLinks(mdLinks[0])).toBe(state);
  });
});
