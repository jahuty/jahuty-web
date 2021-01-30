[![CircleCI](https://circleci.com/gh/jahuty/jahuty-web.svg?style=svg)](https://circleci.com/gh/jahuty/jahuty-web) [![codecov](https://codecov.io/gh/jahuty/jahuty-web/branch/master/graph/badge.svg?token=3NBRW34P6N)](https://codecov.io/gh/jahuty/jahuty-web) [![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

# jahuty-web

This browser-based SDK provides convenient access to the [Jahuty API](https://docs.jahuty.com/api) from any HTML page.

## Requirements

This library requires a modern web browser.

## Installation

Add the following `<script>`s to your document to enable Jahuty (note, [Axios](https://github.com/axios/axios) must come first).

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://unpkg.com/@jahuty/web@0.1.0/dist/web.js"></script>
```

## Usage

Add a container for each snippet in your document using the HTML5 [data-* attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) `data-snippet-id`:

```html
<div data-snippet-id="1"></div>
```

Then, add a script to execute `jahuty()` after the scripts and DOM have finished loading (i.e., the window's `load` event):

```html
<script>
  window.addEventListener('load', function () {
    jahuty('kn2Kj5ijmT2pH6ZKqAQyNexUqKeRM4VG6DDgWN1lIcc');
  });
</script>
```

This will cause the innerHTML of any element with the `data-snippet-id` attribute to be replaced with its corresponding content:

```html
<div data-snippet-id="1">
  <p>
    This is my first snippet!
  </p>
</div>
```

## License

This library is licensed under the [MIT license](LICENSE).
