const path = require('path');
const fs = require('fs');


const listOfmdFiles = [

  '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/morefiles01.md',
  '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
  '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
];

// B/C Absolute path point to its full location in the file system
const toAbsolute = (p) => (path.isAbsolute(p) === true ? p : path.resolve(p));// => an absolute path
// B/C It has to exist in the file system before executing smthg in it
const isVal = (p) => fs.existsSync(p);
// console.log(isVal('/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/lib/links/testLinks02.md'));
// console.log(isVal('/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md'));

// B/C A fs.Stats object provides information about a file.
const isAFile = (p) => ((fs.statSync(p).isFile() === true));

const recursiveGetFiles = (dir) => fs.readdirSync(dir).reduce((absPaths, relPaths) => {
  const completePath = path.join(dir, relPaths);
  const isDir = fs.statSync(completePath).isDirectory();
  return isDir ? [...absPaths, ...recursiveGetFiles(completePath)] : [...absPaths, completePath];
}, []);

// console.log(recursiveGetFiles('/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links'));


const isMd = (arr, ext) => arr.filter((file) => path.extname(file) === ext);

const readfile = (file) => fs.readFileSync(file, 'utf-8');

// console.log(readFile(listOfmdFiles));


module.exports = {
  toAbsolute, isVal, isAFile, recursiveGetFiles, isMd, readfile,
};
