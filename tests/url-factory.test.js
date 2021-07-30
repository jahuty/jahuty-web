import UrlFactory from '../src/url-factory';
import SnippetContainer from '../src/snippet-container';

jest.mock('../src/snippet-container');

describe('UrlFactory', () => {
  describe('.create()', () => {
    describe('without params or latest', () => {
      beforeAll(() => {
        SnippetContainer.mockImplementation(() => ({
          getSnippetId: () => 1,
          getParams: () => false,
          getPreferLatest: () => false,
          getLocation: () => false,
        }));
      });

      it('returns URL', () => {
        const factory = new UrlFactory({ baseUri: 'https://example.com' });
        const container = new SnippetContainer();

        expect(factory.create(container)).toBeInstanceOf(URL);
      });
    });

    describe('with params', () => {
      beforeAll(() => {
        SnippetContainer.mockImplementation(() => ({
          getSnippetId: () => 1,
          getParams: () => ({ foo: 'foo' }),
          getPreferLatest: () => false,
          getLocation: () => false,
        }));
      });

      it('returns URL', () => {
        const factory = new UrlFactory({ baseUri: 'https://example.com' });
        const container = new SnippetContainer();

        expect(factory.create(container)).toBeInstanceOf(URL);
      });
    });

    describe('with latest', () => {
      beforeAll(() => {
        SnippetContainer.mockImplementation(() => ({
          getSnippetId: () => 1,
          getParams: () => false,
          getPreferLatest: () => true,
          getLocation: () => false,
        }));
      });

      it('returns URL', () => {
        const factory = new UrlFactory({ baseUri: 'https://example.com' });
        const container = new SnippetContainer();

        expect(factory.create(container)).toBeInstanceOf(URL);
      });
    });
  });

  describe('.getQuery()', () => {
    describe('without params or latest', () => {
      beforeAll(() => {
        SnippetContainer.mockImplementation(() => ({
          getParams: () => false,
          getPreferLatest: () => false,
          getLocation: () => false,
        }));
      });

      it('returns blank string', () => {
        const container = new SnippetContainer();

        const query = new UrlFactory({}).getQuery(container);

        expect(query.toString()).toEqual('');
      });
    });

    describe('with params', () => {
      beforeAll(() => {
        SnippetContainer.mockImplementation(() => ({
          getParams: () => ({ foo: 'bar' }),
          getPreferLatest: () => false,
          getLocation: () => false,
        }));
      });

      it('returns url-encoded string', () => {
        const container = new SnippetContainer();

        const query = new UrlFactory({}).getQuery(container);

        expect(query.toString()).toEqual('params=%7B%22foo%22%3A%22bar%22%7D');
      });
    });

    describe('with prefer latest', () => {
      beforeAll(() => {
        SnippetContainer.mockImplementation(() => ({
          getParams: () => false,
          getPreferLatest: () => true,
          getLocation: () => false,
        }));
      });

      it('returns url-encoded string', () => {
        const container = new SnippetContainer();

        const query = new UrlFactory({}).getQuery(container);

        expect(query.toString()).toEqual('latest=1');
      });
    });

    describe('with location', () => {
      beforeAll(() => {
        SnippetContainer.mockImplementation(() => ({
          getParams: () => false,
          getPreferLatest: () => false,
          getLocation: () => 'https://example.com',
        }));
      });

      it('returns url-encoded string', () => {
        const container = new SnippetContainer();

        const query = new UrlFactory({}).getQuery(container);

        expect(query.toString()).toEqual('location=https%3A%2F%2Fexample.com');
      });
    });
  });
});
