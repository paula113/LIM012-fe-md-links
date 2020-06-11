// import { readfile } from './navFs';

const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: false,
});

const linkify = require('linkify-it')();
// console.log(linkify.match());


// -------------------------------------
// DELETEEEE
const fs = require('fs');
// DELETEEEEE
const readfile = (file) => fs.readFileSync(file, 'utf-8');
// deletee (test)
const file = readfile('/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md');
const result = md.render(file);
// console.log(result);

// -------------------------------------------

const areThereLinks = (contentFile) => linkify.test(contentFile); // bolean type

const groupBy = (objectArray, property) => objectArray.reduce((acc, obj) => {
  const key = obj[property];
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(obj);
  return acc;
}, {});

// => [] 0f links from a file using markdown library
const getLinks = (contentFile, prop) => {
  const x = linkify.match(contentFile);
  const group = groupBy(x, prop);
  return Object.keys(group);
};
// console.log(getLinks(file, 'url'));// SI FUNCIONA

// => URL
const hrefProp = (str) => str.match(/https?:\/\/(www\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g).toString();
// console.log(hrefProp('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions'));
// console.log(hrefProp('https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url'));

// => STATE OF SPA
const stateText = (str) => str.split('/').reverse()[0].replace(/[\W_]/g, ' ');
// console.log(getState('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions'));

const mdLinks = [
  'https://github.com/markdown-it/markdown-it',
  'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
  'https://github.com/markedjs/marked',
  'https://github.com/jsdom/jsdom',
  'https://github.com/cheeriojs/cheerio',
];

const links = (link) => ({
  href: link,
  text: stateText(link),
});

// => [{ href, text }];
const listofLinks = (m) => {
  const list = [];
  m.forEach((x) => {
    const objts = links(x);
    list.push(objts);
  });
  return list;
};
// console.log(listofLinks(mdLinks));


module.exports = {
  areThereLinks, getLinks, links, listofLinks,
};

// eslint-disable-next-line max-len
// const y = result.reduce((accumulator, currentValue) => [...accumulator, ...currentValue.url], []);
