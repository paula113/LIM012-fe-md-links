const fetchMock = require('fetch-mock').sandbox();

const nodeFetch = jest.requireActual('node-fetch');// to fallback to the network
// (or have some other use case for giving fetch-mock access to node-fetch internals
// you will need to use jest.requireActual('node-fetch')

//  copies all enumerable own properties from one or more source objects to a target object
Object.assign(fetchMock.config, {
  fetch: nodeFetch,
});

fetchMock
  .mock('https://github.com/markdown-it/markdown-it', 200)
  .mock('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions', 404);

module.exports = fetchMock;
