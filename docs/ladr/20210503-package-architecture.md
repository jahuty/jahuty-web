# Package architecture

2021-05-03

## Context

How should we architect this package? One one hand, we don't want to re-invent the Node.js package, and on the other, we don't want to bloat this one with underutilized dependencies (in-memory caching, collections, etc).

A few months ago, we split the "web" package from the Node.js package, because we were jumping through hoops to build a package that worked in both Node.js and the browser. We included the Node.js package as a dependency here and used Webpacker to bundle a UMD package for the browser.

With the addition of `keyv` in-memory caching to the Node.js package (`0.3.0`), this strategy no longer works. There are a few paths forward.

We could change the caching library of the Node.js package. This fix may only delay the inevitable, however. The Node.js and browser-based packages have inherently different purposes. While the Node.js SDK will grow with Jahuty's API, I don't expect the Web SDK will grow much beyond inserting content into HTML pages.

We could turn off unused features in the Node.js package, but that doesn't seem great either. The Web SDK should be as small as possible for performance, and, although Webpack's tree shaking helps, regularly stepping around unused features and libraries seems like a smell.

We could remove the `@jahuty/jahuty` dependency and allow both libraries to evolve independently.

## Decision

I think the best path forward, at least for now, is to remove the `@jahuty/jahuty` package as a dependency and develop this library independently. We can always change this decision in the future if both packages evolve to have more similarities than differences.

## Consequences

Refactor the library to remove `@jahuty/jahuty` dependency.
