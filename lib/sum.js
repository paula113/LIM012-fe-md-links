const path = require('path');
const fs = require('fs');

// const paths = {
//   mixedPaths: ['/Users/Drive/Documents/links', '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links', 'links/testLinks01.md', 'links/testLinks02.md', 'links/morefiles/app.js', 'links/morefiles/morefiles01.md'],
//   absPaths: [
//     '/Users/Drive/Documents/links',
//     '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links',
//     '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
//     '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
//     '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/app.js',
//     '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/morefiles01.md',
//   ],
// };
// const { mixedPaths, absPaths } = paths;

// B/C Absolute path point to its full location in the file system
const toAbsolute = (p) => (path.isAbsolute(p) === true ? p : path.resolve(p));// => an absolute path
// B/C It has to exist in the file system before executing smthg in it
const isVal = (p) => (fs.existsSync(p));
// B/C A fs.Stats object provides information about a file.
const isAFile = (p) => ((fs.statSync(p).isFile() === true));

const recursiveGetFiles = (dir) => fs.readdirSync(dir).reduce((absPaths, relPaths) => {
  const completePath = path.join(dir, relPaths);
  const isDir = fs.statSync(completePath).isDirectory();
  return isDir ? [...absPaths, ...recursiveGetFiles(completePath)] : [...absPaths, completePath];
}, []);


// console.log(recursiveGetFiles('/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links'));

export {
  toAbsolute, isVal, isAFile, recursiveGetFiles,
};
