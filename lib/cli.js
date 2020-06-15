#!usr/bin/env node

// Grab provided args
// const [,, ...args] = process.argv;
// console.log(args);
// console.log(`hello world ${args}`);
const chalk = require('chalk');


const api = require('./mdLinks');


const log = console.log;

const command = process.argv;

//  CLI
// FUNCTIONS
const broken = (arr) => {
  const result = arr.filter((x) => x.status !== 200);
  return result.length;
};
const uniques = (arr) => new Set(arr).size;

const cli = (path, val, stats) => {
//   const opts = parseArgsIntoOptions(options);
  if (val && stats) {
    api.mdLinks(path, { validate: true })
      .then((links) => {
        // => [{ href, text, file }]
        // console.table(links);
        log(chalk`
        {yellow.bold Total : }{yellow ${links.length}}
        {cyanBright.bold Uniques: }{cyanBright ${uniques(links)}}
        {red.bold Brokens: }{red ${broken(links)}}`);
      })
      .catch(console.error);
  } else if (val) {
    api.mdLinks(path, { validate: true })
      .then((links) => {
        // => [{ href, text, file }]
        // console.table(links);
        for (let i = 0; i < links.length; i += 1) {
          log(chalk`
    File: {rgb(255,131,0) ${links[i].file}}  Href: {green ${links[i].href}} 
    Text: {blueBright ${links[i].text}} Status: {yellow ${links[i].status}} StatusText: {yellow ${links[i].statusText}}
    `);
        }
      })
      .catch(console.error);
  } else if (stats) {
    api.mdLinks(path)
      .then((links) => {
        log(chalk`{yellow.bold Total : }{yellow ${links.length}}
{cyanBright.bold Uniques: }{cyanBright ${uniques(links)}}`);
      })
      .catch(console.error);
  } else {
    // DEFAULT
    api.mdLinks(path, { validate: false })
      .then((links) => {
      // => [{ href, text, file }]
        for (let i = 0; i < links.length; i += 1) {
          log(chalk`
        href : {green ${links[i].href}}
        text : {blueBright ${links[i].text}}
        File : {rgb(255,131,0) ${links[i].file}}
        `);
        }
      })
      .catch(console.error);
  }
};


log(chalk.blue('Welcome to mdLinks. Please insert a path and options --validate and/or --stats'));
const newarr = command.slice(2, 5);
const iPath = newarr[0];
const stats = !!(newarr.includes('--stats'));
const val = !!(newarr.includes('--validate'));
cli(iPath, val, stats);

// -------------------------
//  CLI
// FUNCTIONS
// const broken = (arr) => {
//   const result = arr.filter((x) => x.status !== 200);
//   return result.length;
// };

// const uniques = (arr) => new Set(arr).size;

// TESTING CLI

//  --VALIDATE
// api.mdLinks('../links/morefiles/morefile02.md', { validate: true })
//   .then((links) => {
//     // => [{ href, text, file }]
//     console.table(links);
//   })
//   .catch(console.error);
//----------

// --STATS
// mdLinks('../links/testLinks01.md')
//   .then((links) => {
//     // console.table(links);
//     console.log(`Total: ${links.length}
// Uniques: ${uniques(links)}`);
//   })
//   .catch(console.error);
//----------
//     api.mdLinks(path)
//       .then((links) => {
//         // console.table(links);
//         log(`Total: ${links.length}
// Uniques: ${uniques(links)}`);
//       })
//       .catch(console.error);


// STATS & VALIDATE
// mdLinks('/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/', { validate: true })
//   .then((links) => {
//     // => [{ href, text, file }]
//     console.table(links);
//     console.log(`Total: ${links.length}
// Uniques: ${uniques(links)}
// Brokens: ${broken(links)}`);
//   })
//   .catch(console.error);
//----------


// const defaultOptions = {
//   validate: false,
// };
//   eslint-disable-next-line max-len
// const isOptionsObj = (obj) => Object.keys(obj || {}).reduce((acc, k) => acc || defaultOptions.hasOwnProperty(k), false);
