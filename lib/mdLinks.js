// import {
//   toAbsolute, isVal, isAFile, recursiveGetFiles, isMd, readfile,
// } from './navFs';

// import {
//   areThereLinks, getLinks, links, listofLinks,
// } from './markdown-it';
const fetch = require('node-fetch');

const navFs = require('./navFs');

const lb = require('./markdown-it');

// const addfileProp = (arr, prop) =>

// new Promise((resolved, reject) =>
const mdLinks = (path, option) => new Promise((resolved, reject) => {
  const absolutePth = navFs.toAbsolute(path);
  let result = [];
  if (navFs.isVal(absolutePth) === true && navFs.isAFile(absolutePth) === false) {
    const filesList = navFs.recursiveGetFiles(absolutePth);
    const md = navFs.isMd(filesList, '.md');
    md.forEach((e) => {
      const content = navFs.readfile(e);
      if (lb.areThereLinks(content) === true) {
        const filelinks = lb.getLinks(content, 'url');
        const l = lb.listofLinks(filelinks);
        result = l.map((obj) => ({ ...obj, file: e }));
        const response = !option || option.validate === false ? result : 'hola';
        // requestHttp(result);
        resolved(response);
      } else {
        // no links on
      }
    });
  } else {
  // reject!! 'Invalid Path'

  }
  // console.log(result);
// };
});
// console.log(navFs.recursiveGetFiles('/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/'));

// mdLinks('/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/', { validate: false }).then((val) => console.log(val));

// const promise = Promise.resolve(17468);

// promise.then((val) => {
//   console.log(val);
// });

// const promises = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([89, 45, 323]);
//   }, 5000);
// });

// promises.then((values) => {
//   console.log(values[1]);
// });


const list = [
  // {
  //   href: 'https://github.com/markdown-it/markdown-it',
  //   text: 'markdown it',
  //   file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  // },
  // {
  //   href: 'https://developer.mozilla.org/es/docs/Wb/JavaScript/Guide/Regular_Expressions',
  //   text: 'Regular Expressions',
  //   file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  // },
  // {
  //   href: 'https://github.com/markedjs/marked',
  //   text: 'marked',
  //   file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  // },
  // {
  //   href: 'https://github.com/jsdom/jdom',
  //   text: 'jsdom',
  //   file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  // },
  // {
  //   href: 'https://github.com/cheeriojs/cheerio',
  //   text: 'cheerio',
  //   file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  // },
  {
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown it',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'Regular Expressions',
    file: '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  },

];

// const addProp = (arr, key) => arr.map((obj) => ({ ...obj, ...key }));

const handleSuccess = (resolvedValue, links) => {
  // let result = [];
  const status = { status: resolvedValue.status };
  const statusText = { statusText: resolvedValue.statusText };
  // console.log(status);
  const result = links.map((obj) => ({ ...obj, ...status, ...statusText }));
  console.log(result);
  // return result;
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

const requestHttp = (links) => links.forEach((element) => {
  // try {
  fetch(element.href, {
    method: 'get',
  })
    .then((onFulfilled) => handleSuccess(onFulfilled, links))
    .catch((rejectionReason) => handleFailure(rejectionReason, links));
});

// };
requestHttp(list);
// (onFulfilled) => {
//   // const status = { status: onFulfilled.status };
//   // const statusText = { statusText: onFulfilled.statusText };
//   // result = links.map((obj) => ({ ...obj, ...status, ...statusText }));
//   // console.log(statusText);
//   // console.log(status);
//   console.log(result);
//   return result;


// requestHttp('https://developer.mozilla.org/es/docs/Wb/JavaScript/Guide/Regular_Expressions');
// requestHttp('https://deloper.mozilla.org/es/docs/Wb/JavaScript/Guide/Regular_Expressions');


// requestHttp(list);


// console.log(checkStatus('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions'));

// console.log(fetch.Promise);
// console.log(fetch);


// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

// https.get('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions', (res) => {
//   const { statusCode } = res;
//   const contentType = res.headers['content-type'];
//   //   console.log(res);
//   console.log(statusCode);
//   console.log(contentType);

//   let error;
//   if (statusCode !== 200) {
//     error = new Error('Request Failed.\n'
//                       + `Status Code: ${statusCode}`);
//   } else if (!/^application\/json/.test(contentType)) {
//     error = new Error('Invalid content-type.\n'
//                       + `Expected application/json but received ${contentType}`);
//   }
//   if (error) {
//     console.error(error.message);
//     // Consume response data to free up memory
//     res.resume();
//     return;
//   }

//   res.setEncoding('utf8');
//   let rawData = '';
//   res.on('data', (chunk) => { rawData += chunk; });
//   res.on('end', () => {
//     try {
//       const parsedData = JSON.parse(rawData);
//       console.log(parsedData);
//     } catch (e) {
//       console.error(e.message);
//     }
//   });
// }).on('error', (e) => {
//   console.error(`Got error: ${e.message}`);
// });


// http.get('http://nodejs.org/dist/index.json', (res) => {
//   const { statusCode } = res;
//   const contentType = res.headers['content-type'];

//   let error;
//   if (statusCode !== 200) {
//     error = new Error('Request Failed.\n'
//                       + `Status Code: ${statusCode}`);
//   } else if (!/^application\/json/.test(contentType)) {
//     error = new Error('Invalid content-type.\n'
//                       + `Expected application/json but received ${contentType}`);
//   }
//   if (error) {
//     console.error(error.message);
//     // Consume response data to free up memory
//     res.resume();
//     return;
//   }

//   res.setEncoding('utf8');
//   let rawData = '';
//   res.on('data', (chunk) => { rawData += chunk; });
//   res.on('end', () => {
//     try {
//       const parsedData = JSON.parse(rawData);
//       console.log(parsedData);
//     } catch (e) {
//       console.error(e.message);
//     }
//   });
// }).on('error', (e) => {
//   console.error(`Got error: ${e.message}`);
// });
//------------------------------------------------------------------------------------------
// const requestHttp = (links) => {
//   const statusLinks = links.forEach((obj) => {
//     try {
//       fetch(obj.href, {
//         method: 'get',
//       })
//         .then((res) => {
//           // const status = res.status;
//           // const statusText = res.statusText;
//           obj.forEach((element) => { x.status = res.status, x.statusText = res.status,})
//           // console.log(status, statusText);
//         })
//         .catch((reject) => {
//           console.error(reject.message);
//         });
//     } catch (error) {
//       console.log(error);

//     }
//   });
//   return statusLinks;
// };
