[![CircleCI](https://circleci.com/gh/jahuty/jahuty-web.svg?style=svg)](https://circleci.com/gh/jahuty/jahuty-web) [![codecov](https://codecov.io/gh/jahuty/jahuty-web/branch/master/graph/badge.svg?token=3NBRW34P6N)](https://codecov.io/gh/jahuty/jahuty-web) [![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

# jahuty-web

This browser-based SDK provides convenient access to the [Jahuty API](https://docs.jahuty.com/api) from any HTML page.

## Requirements

This library supports the last two major versions of major browsers. See the [`.browserlistrc`](https://github.com/jahuty/jahuty-web/blob/main/.browserslistrc) for details.

## Installation

Add the following deferred `<script>` tag to your document:

```html
<script defer src="https://unpkg.com/@jahuty/web@0.2.0/dist/jahuty.js"></script>
```

Add a script to execute `jahuty()` after the resources and DOM have finished loading:

```html
<script>
  document.addEventListener('DOMContentLoaded', function () {
    jahuty({ apiKey: 'YOUR_API_KEY' });
  });
</script>
```

## Usage

Add a container for each snippet in your document using the HTML5 [data-* attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) `data-snippet-id`:

```html
<div data-snippet-id="YOUR_SNIPPET_ID"></div>
```

This will cause the innerHTML of any element with the `data-snippet-id` attribute to be replaced with its corresponding content:

```html
<div data-snippet-id="YOUR_SNIPPET_ID">
  YOUR_SNIPPET_CONTENT
</div>
```

## Rendering content

By default, Jahuty will render a snippet's _published_ content, the content that existed the last time a teammate clicked the "Publish" button, to avoid exposing your creative process to customers.

You can render a snippet's _latest_ content, the content that currently exists in the editor, in the current environment with the `preferLatest` configuration option:

```html
<script>
  document.addEventListener('DOMContentLoaded', function () {
    jahuty({ apiKey: 'YOUR_API_KEY', preferLatest: true });
  });
</script>
```

You can also prefer the latest content (or not) for a single render with the `data-snippet-latest` attribute:

```html
<div data-snippet-id="YOUR_SNIPPET_ID" data-snippet-latest="true"></div>
```

## Using parameters

You can [pass parameters](https://docs.jahuty.com/liquid/parameters) into your snippet by passing a valid JSON string as the `data-snippet-params` attribute:

```html
<div data-snippet-id="YOUR_SNIPPET_ID" data-snippet-params='{"foo":"bar"}'></div>
```

The parameters above would be equivalent to [assigning the variables](https://www.jahuty.com/docs/assigning-a-variable) below in your snippet:

```
{% assign foo = "bar" %}
```

## Caching for performance

At this time, this library does not support caching.

## Handling errors

If [Jahuty's API](https://docs.jahuty.com/api) returns an error, an error will be output to the browser's `console`.

## License

This library is licensed under the [MIT license](LICENSE).
