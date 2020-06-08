// import { readfile } from './navFs';

// node.js, "classic" way:
// const MarkdownIt = require('markdown-it');

// const md = new MarkdownIt();
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: false,
});

const linkify = require('linkify-it')();

// DELETEEEE
const fs = require('fs');
// DELETEEEEE
const readfile = (file) => fs.readFileSync(file, 'utf-8');
// deletee (test)
const file = readfile('/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md');
const result = md.render(file);

const areThereLinks = (contentFile) => linkify.test(contentFile); // bolean type

const groupBy = (objectArray, property) => objectArray.reduce((acc, obj) => {
  const key = obj[property];
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(obj);
  return acc;
}, {});

const getLinks = (contentFile) => {
  const x = linkify.match(contentFile);
  const group = groupBy(x, 'url');
  return Object.keys(group);
};

console.log(result);

// console.log(getLinks(result));// SI FUNCIONA


// eslint-disable-next-line max-len
// const y = result.reduce((accumulator, currentValue) => [...accumulator, ...currentValue.url], []);
