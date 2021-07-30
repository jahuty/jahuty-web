# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.1] - 2021-07-30

### Added

* Added the `data-snippet-location` attribute to help you track where snippets are rendered.

## [0.2.0] - 2021-05-05

### Added

* Added Lightweight Architectural Design Records (LADR) to capture important decisions.
* Added render parameters with the `data-snippet-params` data attribute.
* Added rending the _latest_ content with the `preferLatest` configuration option and the `data-snippet-latest` data attribute.
* Added support for the last two versions of major browsers with `browserlistrc`.

### Changed

* Changed the build output file from `dist/web.js` to `dist/jahuty.js`, since "web" is pretty nondescript.

### Removed

* Removed the dependency on `@jahuty/jahuty` to help both libraries evolve independently for their target environment.
* Removed the dependency on `axios` and switched to `fetch` API to reduce external dependencies.

## [0.1.0] - 2021-01-30

* Initial release.
