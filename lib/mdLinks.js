// import {
//   toAbsolute, isVal, isAFile, recursiveGetFiles, isMd, readfile,
// } from './navFs';

// import {
//   areThereLinks, getLinks, links, listofLinks,
// } from './markdown-it';
const fetch = require('node-fetch');

const navFs = require('./navFs');

const lb = require('./markdown-it');

// new Promise((resolved, reject) =>
const mdLinks = (path) => {
  const absolutePth = navFs.toAbsolute(path);
  let list = [];
  if (navFs.isVal(absolutePth) === true) {
    if (navFs.isAFile(absolutePth) === false) {
      const filesList = navFs.recursiveGetFiles(absolutePth);
      const md = navFs.isMd(filesList, '.md');
      md.forEach((e) => {
        const file = { file: e };
        const content = navFs.readfile(e);
        if (lb.areThereLinks(content) === true) {
          const filelinks = lb.getLinks(content, 'url');
          const l = lb.listofLinks(filelinks);
          console.log(l);
          // list = { ...l, ...file };
          // list.forEach((x) => const l = { ...x, ...file });
          // console.log();
        } else {
          // no links
        }
      });
    } else {
      // resolved search links as a  single file
    }
  } else {
  // reject!! 'Invalid Path'
  }
  console.log(list);
};
// });
// console.log(navFs.recursiveGetFiles('/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/'));

mdLinks('/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/');
// const list = [
//   { href: 'https://github.com', text: 'markdown it' },
//   {
//     href: 'https://devloper.mozilla.org',
//     text: 'Regular Expressions',
//   },
//   { href: 'https://github.com', text: 'marked' },
//   { href: 'https://github.com', text: 'jsdom' },
//   { href: 'https://github.com', text: 'cheerio' },
// ];


// const requestHttp = (links) => links.map((obj) => {
//   try {
//     fetch(obj.href, {
//       method: 'get',
//     })
//       .then((res) => {
//         const status = { status: res.status };
//         const statusText = { statusText: res.statusText };
//         console.log({ ...obj, ...status, ...statusText });

//         return { ...obj, ...status, ...statusText };
//       })

//       .catch(() => {
//         // if (reject.message) {
//         // const status = { status: res.status };
//         const statusText = { statusText: 'fail' };
//         console.log({ ...obj, ...statusText });
//         return { ...obj, ...statusText };
//         // }
//       });
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// });
//   return statusLinks;


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
