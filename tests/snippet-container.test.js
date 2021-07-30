import SnippetContainer from '../src/snippet-container';

describe('Container', () => {
  describe(':all', () => {
    describe('when containers do not exist', () => {
      beforeEach(() => {
        document.body.innerHTML = '<div></div>';
      });

      it('returns empty array', () => {
        expect(SnippetContainer.all()).toHaveLength(0);
      });
    });

    describe('when containers do exist', () => {
      beforeEach(() => {
        document.body.innerHTML = '<div data-snippet-id="1"></div>'
          + '<div data-snippet-id="2"></div>';
      });

      it('returns non-empty array', () => {
        expect(SnippetContainer.all()).toHaveLength(2);
      });

      it('returns container instances', () => {
        expect(SnippetContainer.all()[0]).toBeInstanceOf(SnippetContainer);
      });
    });
  });

  describe('.getLocation()', () => {
    describe('when location does not exist', () => {
      const element = document.createElement('div');

      const container = new SnippetContainer(element);

      it('returns false', () => {
        expect(container.getLocation()).toBeFalsy();
      });
    });

    describe('when location is false', () => {
      const element = document.createElement('div');
      element.setAttribute('data-snippet-location', false);

      const container = new SnippetContainer(element);

      it('returns false', () => {
        expect(container.getLocation()).toBeFalsy();
      });
    });

    describe('when location is true', () => {
      const element = document.createElement('div');
      element.setAttribute('data-snippet-location', true);

      const container = new SnippetContainer(element);

      it('returns true', () => {
        expect(container.getLocation()).toBe('http://localhost/');
      });
    });
  });

  describe('.getParams()', () => {
    describe('when params do not exist', () => {
      const element = document.createElement('div');

      const container = new SnippetContainer(element);

      it('returns falsy', () => {
        expect(container.getParams()).toBeFalsy();
      });
    });

    describe('when params do exist', () => {
      const element = document.createElement('div');
      element.setAttribute('data-snippet-params', '{"foo":"bar"}');

      const container = new SnippetContainer(element);

      it('returns params', () => {
        expect(container.getParams()).toMatchObject({ foo: 'bar' });
      });
    });

    describe('when params are invalid json', () => {
      const element = document.createElement('div');
      element.setAttribute('data-snippet-params', 'foo');

      const container = new SnippetContainer(element);

      it('returns object', () => {
        expect(() => container.getParams()).toThrow();
      });
    });
  });

  describe('.getPreferLatest()', () => {
    describe('when prefer-latest does not exist', () => {
      const element = document.createElement('div');

      const container = new SnippetContainer(element);

      it('returns false', () => {
        expect(container.getPreferLatest()).toBeFalsy();
      });
    });

    describe('when prefer-latest is false', () => {
      const element = document.createElement('div');
      element.setAttribute('data-snippet-latest', false);

      const container = new SnippetContainer(element);

      it('returns false', () => {
        expect(container.getPreferLatest()).toBeFalsy();
      });
    });

    describe('when prefer-latest is true', () => {
      const element = document.createElement('div');
      element.setAttribute('data-snippet-latest', true);

      const container = new SnippetContainer(element);

      it('returns true', () => {
        expect(container.getPreferLatest()).toBeTruthy();
      });
    });
  });

  describe('.getSnippetId()', () => {
    const id = 1;

    const element = document.createElement('div');
    element.setAttribute('data-snippet-id', id);

    const container = new SnippetContainer(element);

    it('returns snippet id', () => {
      expect(container.getSnippetId()).toEqual(id);
    });

    it('returns number', () => {
      expect(container.getSnippetId()).toEqual(expect.any(Number));
    });
  });

  describe('.setContent()', () => {
    const content = '<p>foo</p>';

    const element = document.createElement('div');

    const container = new SnippetContainer(element);

    it('sets html', () => {
      container.setContent(content);

      expect(element.innerHTML).toBe(content);
    });
  });
});
