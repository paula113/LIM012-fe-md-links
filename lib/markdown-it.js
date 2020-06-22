
const md = require('markdown-it')({
  html: true,
  linkify: true,
});

const linkify = require('linkify-it')();
// console.log(linkify.match());


// const fs = require('fs');


// const readfile = (file) => fs.readFileSync(file, 'utf-8');
// const file = readfile('/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md');

// const result = md.render(file, '<a>');
// const y = linkify.match(result);
// const toS = Renderer.renderAttrs(y);
// new Renderer();
// console.log(md.parse(result));
// console.log(result);


const areThereLinks = (contentFile) => linkify.test(contentFile); // bolean type


// => [] 0f links from a file using markdown library
const getLinks = (contentFile) => {
  const x = linkify.match(contentFile);
  // console.log(x);
  const newarr = [];

  for (let i = 0; i < x.length; i += 1) {
    const element = x[i].url;
    newarr.push(element);
  }
  return newarr;
};
// console.log(getLinks(file, 'url'));// SI FUNCIONA

// => URL
// const rx = /https?:\/\/(www\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;
// const hrefProp = (str) => str.match(rx).toString();
// console.log(hrefProp('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions'));
// console.log(hrefProp('https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url'));

// => STATE OF SPA
const stateText = (str) => str.split('/').reverse()[0].replace(/[\W_]/g, ' ');

// console.log(getState('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions'));

// const mdLinks = [
//   'https://github.com/markdown-it/markdown-it',
//   'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
//   'https://github.com/markedjs/marked',
//   'https://github.com/jsdom/jsdom',
//   'https://github.com/cheeriojs/cheerio',
// ];

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
