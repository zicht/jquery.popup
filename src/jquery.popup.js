/*global jQuery*/
// jscs:disable requireTemplateStrings

(function ($) {
    'use strict';

    var defaultOptions = {
            name: 'New window',
            width: 400,
            height: 400,
            features: ''
        };

    /**
     * @param {string} url
     * @param {string} name
     * @param {number} width
     * @param {number} height
     * @param {string} features
     */
    function popup(url, name, width, height, features) {
        var $win = $(window),
            left = ($win.width() - width) / 2,
            top = ($win.height() - height) / 2,
            opts = 'status=1' + ',width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;

        if ('' !== features) {
            opts += ',' + features;
        }

        window.open(url, name, opts);
    }

    // Make sure not to overwrite an existing global
    if (undefined !== $.popup) {
        $.zpopup = popup;
    } else {
        $.popup = popup;
    }

    $.fn.popup = function (options) {
        options = $.extend({}, defaultOptions, options || {});

        return this.each(function () {
            var $anchor = $(this),
                href = $anchor.attr('href');

            if (href) {
                $anchor.on('click', function (event) {
                    event.preventDefault();

                    popup(href, options.name, options.width, options.height, options.features);
                });
            }
        });
    };
}(jQuery));