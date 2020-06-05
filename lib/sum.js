const path = require('path');
const fs = require('fs');

const paths = {
  mixedPaths: ['/Users/Drive/Documents/links', '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links', 'links/testLinks01.md', 'links/testLinks02.md', 'links/morefiles/app.js', 'links/morefiles/morefiles01.md'],
  absPaths: [
    '/Users/Drive/Documents/links',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks02.md',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/app.js',
    '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/morefiles01.md',
  ],
};
const { mixedPaths, absPaths } = paths;

const toAbsolute = (p) => (path.isAbsolute(p) === true ? p : path.resolve(p));// => an absolute path
// console.log(toAbsolute());

const isVal = (p) => (fs.existsSync(p) === true ? p : 'Invalid Path');// => path||str
// console.log(isVal('/Users/Drive/Documents/links'));
// console.log(isVal('/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/morefiles/morefiles01.md'));

