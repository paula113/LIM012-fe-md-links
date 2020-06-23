
const md = require('markdown-it')({
  html: true,
  linkify: true,
});

const linkify = require('linkify-it')();

const areThereLinks = (contentFile) => linkify.test(contentFile); // bolean type


// => [] 0f links from a file using markdown library
const getLinks = (contentFile) => {
  const x = linkify.match(contentFile);
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
// const stateText = (url) => url.split('/').reverse()[0].replace(/[\W_]/g, ' ');

const textBrackets = (contentFile) => contentFile.match(/(?<=\[).*(?=\])/g);

// console.log(getState('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions'));

// const mdLinks = [
//   'https://github.com/markdown-it/markdown-it',
//   'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
//   'https://github.com/markedjs/marked',
//   'https://github.com/jsdom/jsdom',
//   'https://github.com/cheeriojs/cheerio',
// ];

const links = (link, path, contentFile, i) => ({
  href: link,
  text: textBrackets(contentFile)[i],
  file: path,
});

// => [{ href, text }];
const listofLinks = (m, path, contentFile) => {
  const list = [];
  m.forEach((x, i) => {
    const objts = links(x, path, contentFile, i);
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
