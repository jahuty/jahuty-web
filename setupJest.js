// Setup fetch-mock. Both `fetch` and `fetchMock` will be available on the
// global scope. Fetch will be used as usual by your code and you'll use
// fetchMock in your tests.
//
// @see  https://www.npmjs.com/package/jest-fetch-mock
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
