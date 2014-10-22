/*global jQuery*/

(function ($) {
    'use strict';

    var defaultOptions = {
            name: 'New window',
            width: 400,
            height: 400
        };

    /**
     * @param {String} url
     * @param {String} name
     * @param {Number} width
     * @param {Number} height
     */
    function popup(url, name, width, height) {
        var $win = $(window),
            left = ($win.width()  - width)  / 2,
            top = ($win.height() - height) / 2,
            opts = 'status=1' +
                ',width='  + width  +
                ',height=' + height +
                ',top='    + top    +
                ',left='   + left;

        window.open(url, name, opts);
    }

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

                    popup(href, options.name, options.width, options.height);
                });
            }
        });
    };
}(jQuery));