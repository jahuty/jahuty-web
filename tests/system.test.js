import init from '../src/index';

describe('System', () => {
  const apiKey = 'kn2Kj5ijmT2pH6ZKqAQyNexUqKeRM4VG6DDgWN1lIcc';
  const content = '<p>This is my first snippet!</p>';

  describe('when the user initializes a page', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div data-snippet-id="1"></div>';
    });

    it('renders the page', async () => {
      await init(apiKey);

      expect(document.body.innerHTML).toBe(
        `<div data-snippet-id="1">${content}</div>`,
      );
    });
  });
});
