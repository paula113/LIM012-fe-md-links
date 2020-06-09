// import { readfile } from './navFs';

const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: false,
});

const linkify = require('linkify-it')();
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

const getLinks = (contentFile, prop) => {
  const x = linkify.match(contentFile);
  const group = groupBy(x, prop);
  return Object.keys(group);
};

const linkPage = (str) => str.match(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g).toString();

const getState = (str) => str.split('/').reverse()[0].replace(/[\W_]/g, ' ');

// console.log(getState('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions'));

// console.log(linkPage('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions'));


// console.log(getLinks(file, 'url'));// SI FUNCIONA

export {
  areThereLinks, getLinks, linkPage, getState,
};

// eslint-disable-next-line max-len
// const y = result.reduce((accumulator, currentValue) => [...accumulator, ...currentValue.url], []);
