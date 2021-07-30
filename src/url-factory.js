/**
 * Creates a URL for a snippet conatiner.
 */
export default class UrlFactory {
  constructor(config) {
    this.config = config;
  }

  create(container) {
    const url = new URL(this.config.baseUri);

    url.pathname = `/snippets/${container.getSnippetId()}/render`;

    const query = this.getQuery(container);
    if (query) {
      url.search = `?${query.toString()}`;
    }

    return url;
  }

  /* "Private" */

  getQuery(container) {
    const query = new URLSearchParams();

    if (container.getParams()) {
      query.append('params', JSON.stringify(container.getParams()));
    }

    if (container.getPreferLatest() || this.config.preferLatest) {
      query.append('latest', 1);
    }

    if (container.getLocation()) {
      query.append('location', container.getLocation());
    }

    return query;
  }
}
