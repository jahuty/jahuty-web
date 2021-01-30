import Client from '@jahuty/jahuty';
import SnippetContainer from './view/snippet-container';

import 'regenerator-runtime/runtime';

export default function init(apiKey) {
  let renders = [];

  const client = new Client({ apiKey });

  const containers = SnippetContainer.all();

  if (containers.length) {
    renders = containers.map(async (container) => {
      const id = container.getSnippetId();
      const render = await client.snippets.render(id);
      container.setContent(render.content);
    });
  }

  return Promise.all(renders);
}
