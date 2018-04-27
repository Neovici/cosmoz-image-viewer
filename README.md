cosmoz-image-viewer
===================

[![Build Status](https://travis-ci.org/Neovici/cosmoz-image-viewer.svg?branch=master)](https://travis-ci.org/Neovici/cosmoz-image-viewer)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Neovici/cosmoz-image-viewer)

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
<cosmoz-image-viewer images="[[ images ]]">
</cosmoz-image-viewer>
<script type="text/javascript">
(() => {
  window.addEventListener('WebComponentsReady', () => {
    const images = [
      'demo/images/stockholm.jpg',
      'demo/images/a_size.png',
      'demo/images/strasbourg.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/strasbourg.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/strasbourg.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/strasbourg.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/strasbourg.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/strasbourg.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/strasbourg.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/strasbourg.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/strasbourg.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/strasbourg.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/strasbourg.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/strasbourg.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/strasbourg.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/strasbourg.jpg',
      'demo/images/stockholm.jpg',
      'demo/images/strasbourg.jpg',
      'demo/images/stockholm.jpg'
    ];
    document.querySelectorAll('.scope').forEach(s => s.images = images);
  });
})();
</script>
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
