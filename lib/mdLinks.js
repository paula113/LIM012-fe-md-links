
const fetch = require('node-fetch');

const navFs = require('./navFs');

const lb = require('./markdown-it');


const getLinksFromFile = (e) => {
  let result = [];
  const content = navFs.readfile(e);
  if (lb.areThereLinks(content)) {
    const filelinks = lb.getLinks(content, 'url');
    result = lb.listofLinks(filelinks, e);
  }
  return result;
};
// console.log(mdFiles(listd));

const list = [
  {
    href: 'https://github.com/jknjyyfsszbnhydxl',
    text: 'markdown it',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'Regular Expressions',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  },
];


const handleSuccess = (resolvedValue, links) => {
  const newarr = [];
  for (let i = 0; i < resolvedValue.length; i += 1) {
    const objectLinks = {
      ...links[i],
      status: resolvedValue[i].status,
      statusText: resolvedValue[i].statusText,
    };
    newarr.push(objectLinks);
  }
  return newarr;
};

const handleFailure = (rejectReason) => rejectReason.message;

const httpRequest = (links) => {
  // Problema 1: si elimino un character el link expecto status === 404 BUT 200
  // Pregunta:  si esta funcion hace una peticion http al servidor
  // y la respuesta de la finalizacion del problema de consume por then or catch
  // cual seria el valor a retornar
  const iterable = links.map((url) => fetch(url.href, { method: 'GET' }));
  return Promise.all(iterable)//
    .then((result) => handleSuccess(result, links))
    .catch((rejectionReason) => handleFailure(rejectionReason));
};

// httpRequest(list).then((result) => console.log(result));


const mdLinks = (path, option) => new Promise((resolved, reject) => {
  const absolutePth = navFs.toAbsolute(path);
  if (navFs.isVal(absolutePth) === true && navFs.isAFile(absolutePth) === false) {
    const filesList = navFs.recursiveGetFiles(absolutePth);
    const md = navFs.isMd(filesList, '.md');
    const details = md.map((e) => getLinksFromFile(e)).flat();
    const response = !option || option.validate === false ? details : httpRequest(details)
      .then((res) => res);
    resolved(response);
  } else {

    // reject!! 'Invalid Path'

  }
});

mdLinks('/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/', { validate: true }).then((val) => console.log(val));
