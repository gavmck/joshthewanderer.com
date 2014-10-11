(function ($) {
    'use strict';
    var a = document.body, e = document.documentElement;
    $(window).unbind('scroll').scroll(function () {
        a.style.backgroundPosition = '0px ' + -(Math.max(e.scrollTop, a.scrollTop) / 8) + 'px';
    });
})(Zepto);