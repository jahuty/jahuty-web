import init from '../src/index';

describe('init', () => {
  const content = '<p>foo</p>';
  const options = { apiKey: 'foo' };

  describe('when zero containers exist', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div></div>';
    });

    it('does not throw error', () => {
      expect(() => init(options)).not.toThrow(Error);
    });
  });

  describe('when one container exists', () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify({ content }));

      document.body.innerHTML = '<div data-snippet-id="1"></div>';
    });

    it('renders content', async () => {
      await init('foo');

      expect(document.body.innerHTML).toBe(
        `<div data-snippet-id="1">${content}</div>`,
      );
    });
  });

  describe('when many containers exist', () => {
    beforeEach(() => {
      fetch.mockResponse(JSON.stringify({ content }));

      document.body.innerHTML = '<div data-snippet-id="1"></div>'
        + '<div data-snippet-id="2"></div>'
        + '<div data-snippet-id="3"></div>';
    });

    it('renders content', async () => {
      await init('foo');

      expect(document.body.innerHTML).toBe(
        `<div data-snippet-id="1">${content}</div>`
          + `<div data-snippet-id="2">${content}</div>`
          + `<div data-snippet-id="3">${content}</div>`,
      );
    });
  });
});
