import JahutyConfig from '../src/jahuty-config';

import { version } from '../package.json';

describe('Config', () => {
  describe('.apiKey', () => {
    describe('without apiKey option', () => {
      it('returns falsy value', () => {
        expect(new JahutyConfig().apiKey).toBeFalsy();
      });
    });

    describe('with apiKey option', () => {
      it('returns api key', () => {
        expect(new JahutyConfig({ apiKey: 'foo' }).apiKey).toEqual('foo');
      });
    });
  });

  describe('.headers', () => {
    it('has accept header', () => {
      expect(new JahutyConfig().headers).toMatchObject({
        Accept: 'application/json',
      });
    });

    it('has version header', () => {
      expect(new JahutyConfig().headers).toMatchObject({
        'User-Agent': expect.stringMatching(`Jahuty Web SDK v${version}`),
      });
    });

    it('has content-type header', () => {
      expect(new JahutyConfig().headers).toMatchObject({
        'Content-Type': 'application/json;charset=UTF-8',
      });
    });

    it('has authorization header', () => {
      expect(new JahutyConfig({ apiKey: 'foo' }).headers).toMatchObject({
        Authorization: 'Bearer foo',
      });
    });
  });

  describe('.baseUri', () => {
    describe('without baseUri option', () => {
      it('returns api uri', () => {
        expect(new JahutyConfig().baseUri).toEqual('https://api.jahuty.com');
      });
    });

    describe('with baseUri option', () => {
      it('returns baseUri', () => {
        expect(new JahutyConfig({ baseUri: 'foo' }).baseUri).toEqual('foo');
      });
    });
  });

  describe('.preferLatest', () => {
    describe('without preferLatest option', () => {
      it('returns falsy', () => {
        expect(new JahutyConfig().preferLatest).toBeFalsy();
      });
    });

    describe('with preferLatest option', () => {
      it('returns truthy', () => {
        expect(new JahutyConfig({ preferLatest: true }).preferLatest).toBeTruthy();
      });
    });
  });
});
