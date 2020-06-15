// import { readfile } from './navFs';

const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: false,
});

const linkify = require('linkify-it')();
// console.log(linkify.match());


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
// const hrefProp = (str) => str.match(/https?:\/\/(www\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g).toString();
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

const links = (link, mdfile) => ({
  href: link,
  text: stateText(link),
  file: mdfile,
});

// => [{ href, text }];
const listofLinks = (m, mdfile) => {
  const list = [];
  m.forEach((x) => {
    const objts = links(x, mdfile);
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
