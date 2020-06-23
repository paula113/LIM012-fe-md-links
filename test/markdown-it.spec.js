const md = require('../lib/markdown-it');

const data = {
  pathab: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
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
  text: 'markdown-it',
  file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
};
const contentFile = `- Usando un _módulo_ como [markdown-it](https://github.com/markdown-it/markdown-it),
que nos devuelve un arreglo de _tokens_ que podemos recorrer para identificar
los links.
- Siguiendo otro camino completamente, podríamos usar
[expresiones regulares (RegExp)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions).
- También podríamos usar una combinación de varios _módulos_ (podría ser válido
transformar el markdown a HTML usando algo como [marked](https://github.com/markedjs/marked)
y de ahí extraer los link con una librería de DOM como [JSDOM](https://github.com/jsdom/jsdom)
o [Cheerio](https://github.com/cheeriojs/cheerio) entre otras).
- Usando un _custom renderer_ de [marked](https://github.com/markedjs/marked)
(new marked.Renderer()).
transformar el markdown a HTML usando algo como [marked](https://github.com/markedjs/marked)
y de ahí extraer los link con una librería de DOM como [JSDOM](https://github.com/jsdom/jsdom)
o [Cheerio](https://github.com/cheeriojs/cheerio) entre otras.
- Usando un _custom renderer_ de [marked](https://github.com/markedjs/marked)
(new marked.Renderer()).`;
const links = [
  {
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (RegExp)',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  },
  {
    href: 'https://github.com/markedjs/marked',
    text: 'marked',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  },
  {
    href: 'https://github.com/jsdom/jsdom',
    text: 'JSDOM',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  },
  {
    href: 'https://github.com/cheeriojs/cheerio',
    text: 'Cheerio',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  },
];
const {
  pathab, mdLinks,
} = data;


describe('Retrieves properties of a links', () => {
  it('Should return an object', () => {
    expect(md.links(mdLinks[0], pathab, contentFile, [0])).toEqual(details);
  });
});

describe('Recieves an array of links ', () => {
  it('Should return an new array of objects for each link', () => {
    expect(md.listofLinks(mdLinks, '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md', contentFile)).toEqual(links);
  });
});
