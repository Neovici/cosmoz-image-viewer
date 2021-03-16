cosmoz-image-viewer
===================

[![Build Status](https://github.com/Neovici/cosmoz-image-viewer/workflows/Github%20CI/badge.svg)](https://github.com/Neovici/cosmoz-image-viewer/actions?workflow=Github+CI)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Neovici/cosmoz-image-viewer)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![codecov](https://codecov.io/gh/Neovici/cosmoz-image-viewer/branch/master/graph/badge.svg?token=l5LdrbgSSe)](https://codecov.io/gh/Neovici/cosmoz-image-viewer)

# &lt;cosmoz-image-viewer&gt;

**cosmoz-image-viewer** is an element for displaying images in a carousel while
being able to detach the currently selected image into another window, zooming
and activating a fullscreen mode.

`<cosmoz-image-viewer>`

Example:

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="cosmoz-image-viewer.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<cosmoz-image-viewer show-nav show-dots show-fullscreen show-zoom show-detach
images='["demo/images/stockholm.jpg", "demo/images/strasbourg.jpg"]'>
</cosmoz-image-viewer>
```

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
