/**
 * A snippet container.
 *
 * @example  a simple container
 *   <div data-snippet-id="1"></div>
 *
 * @example  a container with params and latest content
 *   <div data-snippet-id="1"
 *        data-snippet-params='{"foo":"bar"}'
 *        data-snippet-latest="true"
 *        data-snippet-location="true"></div>
 */
export default class SnippetContainer {
  constructor(element) {
    this.element = element;
  }

  /**
   * Returns all the containers in the document.
   *
   * @return  Array<SnippetContainer>
   */
  static all() {
    const containers = [];

    const elements = document.querySelectorAll('[data-snippet-id]');

    elements.forEach((element) => {
      containers.push(new SnippetContainer(element));
    });

    return containers;
  }

  /**
   * Returns the snippet's location (or undefined).
   *
   * @example  use the given value
   *   <div data-snippet-id="1" data-snippet-location="true"></div>
   *
   * @return  String|undefined
   */
  getLocation() {
    return this.element.dataset.snippetLocation
      && this.element.dataset.snippetLocation.toLowerCase() === 'true'
      && window.location.href;
  }

  /**
   * Returns the snippet's params (or undefined).
   *
   * @example  with single-quoted attribute value and double-quoted json
   *   <div data-snippet-id="1" data-snippet-params='{"foo":"bar"}'></div>
   *
   * @example  with double-quoted attribute value and escaped json
   *   <div data-snippet-id="1"
   *        data-snippet-params="{&quot;foo&quot;:&quot;bar&quot;}"></div>
   *
   * @return  Object|undefined
   */
  getParams() {
    return this.element.dataset.snippetParams
      && JSON.parse(this.element.dataset.snippetParams);
  }

  /**
   * Returns true if the snippet should render the latest content.
   *
   * If omitted, or value is not "true", the published content will be rendered.
   *
   * @example
   *   <div data-snippet-id="1" data-snippet-latest="true"></div>
   *
   * @return  bool|undefined
   */
  getPreferLatest() {
    return this.element.dataset.snippetLatest
      && this.element.dataset.snippetLatest.toLowerCase() === 'true';
  }

  /**
   * Returns the snippet's numeric identifier.
   *
   * @example
   *   <div data-snippet-id="1"></div>
   *
   * @return  Number
   */
  getSnippetId() {
    return +this.element.dataset.snippetId;
  }

  setContent(content) {
    this.element.innerHTML = content;
  }
}
