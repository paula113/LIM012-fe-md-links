import {
  areThereLinks, getLinks, linkPage, getState,
} from '../lib/markdown-it';

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
  domain: 'github.com',
  state: 'markdown it',
};

const {
  nolinksFile, contentFile, mdLinks, domain, state,
} = data;

describe('checks if there are links in a markdown file', () => {
  it('Should return false if no links were found', () => {
    expect(areThereLinks(nolinksFile)).not.toBeTruthy();
  });
  it('Should return true if file does contain links', () => {
    expect(areThereLinks(contentFile)).toBeTruthy();
  });
});

describe('Retrive links from a markdown file', () => {
  it('Should return false if no links were found', () => {
    expect(getLinks(contentFile, 'url')).toEqual(mdLinks);
  });
});

describe('Ckecks for the url and state of a link', () => {
  it('Should return a domain', () => {
    expect(linkPage(mdLinks[0])).toEqual(domain);
  });
  it('Should return link state', () => {
    expect(getState(mdLinks[0])).toBe(state);
  });
});
