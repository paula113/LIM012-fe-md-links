const path = require('path');

const pathsExm = {
  abPath: ['/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links', '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md', 'links'],
  relPath: ['links', 'links/testLinks01.md'],
  paths: ['links', 'links/testLinks01.md', '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links', '/Users/Drive/Documents/LABORAToRIa/LIM012-fe-md-links/links/testLinks01.md'],
};
// const { abPath, relPath, paths } = pathsExm;

export const toAbsolute = (arr) => {
  const result = [];
  // console.log(arr);
  arr.forEach((element) => {
    if (path.isAbsolute(element) === true) {
      result.push(element);
    } else {
      result.push(path.resolve(element));
    }
  });
     console.log(result);
  return result;
};

// toAbsolute(paths);
