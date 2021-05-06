import init from '../src/index';

describe('user renders snippets', () => {
  const apiKey = 'kn2Kj5ijmT2pH6ZKqAQyNexUqKeRM4VG6DDgWN1lIcc';

  beforeEach(() => {
    // Disable `fetch-mock` and use the real `fetch` implementation.
    fetchMock.dontMock();
  });

  describe('without params or latest', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div data-snippet-id="1"></div>';
    });

    it('renders the snippet', async () => {
      await init({ apiKey });

      expect(document.body.innerHTML).toMatch('This is my first snippet');
    });
  });

  describe('with params', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div data-snippet-id="62"
             data-snippet-params='{"foo":"foo","bar":"bar"}'></div>`;
    });

    it('renders the snippets', async () => {
      await init({ apiKey });

      expect(document.body.innerHTML).toMatch('This foo is bar');
    });
  });

  describe('with latest', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div data-snippet-id="102" data-snippet-latest="true"></div>';
    });

    it('renders the snippets', async () => {
      await init({ apiKey });

      expect(document.body.innerHTML).toMatch('This content is latest');
    });
  });
});
