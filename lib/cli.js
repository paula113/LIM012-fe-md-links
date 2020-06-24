#!/usr/bin/env node

/* eslint-disable no-console */

const chalk = require('chalk');

const api = require('./mdLinks');

const log = console.log;

const command = process.argv;


log(chalk.blue('Welcome to mdLinks.Please insert a path and options --validate and/or --stats'));


const uniques = (arr) => {
  const myNewArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i].href;
    myNewArr.push(element);
  }
  return new Set(myNewArr).size;
};

const valdStts = (links) => {
  const brokens = links.filter((x) => x.status !== 200);
  return log(chalk`
{yellow.bold Total : }{yellow ${links.length}}
{cyanBright.bold Uniques: }{cyanBright ${uniques(links)}}
{red.bold Brokens: }{red ${brokens.length}}
`);
};

const vald = (links) => {
  let str = '';
  for (let i = 0; i < links.length; i += 1) {
    str = log(chalk`
Href: {green ${links[i].href}} File: {rgb(255,131,0) ${links[i].file}}
Text: {blueBright ${links[i].text}} Status: {yellow ${links[i].status}} StatusText: {yellow ${links[i].statusText}}
`);
  }
  return str;
};


const stts = (links) => log(chalk`{yellow.bold Total : }{yellow ${links.length}}
{cyanBright.bold Uniques: }{cyanBright ${uniques(links)}}`);


const def = (links) => {
  let str = '';
  for (let i = 0; i < links.length; i += 1) {
    str = log(chalk`
  href : {green ${links[i].href}}
  text : {blueBright ${links[i].text}}
  File : {rgb(255,131,0) ${links[i].file}}
  `);
  }
  return str;
};


const cli = (path, val, stats) => {
  if (val && stats) {
    return api.mdLinks(path, { validate: true })
      .then(valdStts)
      .catch(console.error);
  } if (val) {
    return api.mdLinks(path, { validate: true })
      .then(vald)
      .catch(console.error);
  } if (stats) {
    return api.mdLinks(path)
      .then(stts)
      .catch(console.error);
  }
  // DEFAULT
  return api.mdLinks(path, { validate: false })
    .then(def)
    .catch(console.error);
};


const newarr = command.slice(2, 5);
const iPath = newarr[0];
const stats = !!(newarr.includes('--stats'));
const val = !!(newarr.includes('--validate'));
// console.log(newarr); npm install url repo otro folder (cn pckg.jsn)

cli(iPath, val, stats);

// /Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/

/**

 */
