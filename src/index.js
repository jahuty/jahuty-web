import 'whatwg-fetch';
import 'regenerator-runtime/runtime';

import JahutyConfig from './jahuty-config';
import SnippetContainer from './snippet-container';
import UrlFactory from './url-factory';

export default function init(options) {
  let renders = [];

  const containers = SnippetContainer.all();

  if (containers.length) {
    const config = new JahutyConfig(options);

    const urls = new UrlFactory(config);

    renders = containers.map(async (container) => {
      const url = urls.create(container);

      const response = await fetch(url.href, { headers: config.headers });

      const payload = await response.json();

      if (response.ok) {
        container.setContent(payload.content);
      }
    });
  }

  return Promise.all(renders);
}
