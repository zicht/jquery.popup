# Zicht Image Preloader

With this jQuery plugin you can easily open new broser windows.

Usage

```javascript
// open all anchors with a class "js-popup" in a new window and (if the browser supports it) disable resizing and scrolling
$('a.js-popup').popup({
    features: 'resizable=no,scrollbars=no'
});
```

The following properies of the options object can be passed to the plugin:

- name: A name for the new window. The name can be used as the target of links and forms using the target attribute of <a> or <form> elements. The name should not contain whitespace.
- width: The width of the window.
- height: The height of the window.
- features: Extra [features](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Position_and_size_features) that will be passed to the window.

The option object is optional. The defaults are:

```javascript
var defaultOptions = {
    name: 'New window',
    width: 400,
    height: 400,
    features: ''
};
```

# Maintainer
* Boudewijn Schoon <boudewijn@zicht.nl>
