import { version } from '../package.json';

/**
 * The script's configuration object.
 */
export default class JahutyConfig {
  constructor(options = {}) {
    this.apiKey = options.apiKey || null;
    this.baseUri = options.baseUri || 'https://api.jahuty.com';
    this.preferLatest = options.preferLatest || false;

    this.headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
      'User-Agent': `Jahuty Web SDK v${version}`,
      'Content-Type': 'application/json;charset=UTF-8',
    };
  }
}
