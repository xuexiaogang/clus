(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define('clus', factory) :
    (factory());
}(this, function () { 'use strict';

    function getClass(el) {
        return el.className;
    }

    function setClass(el, cls) {
        el.setAttribute('class', cls);
    }

    function addClass(el, cls) {
        if (el && el.classList) {
            el.classList.add(cls);
        } else {
            var current = ' ' + getClass(el) + ' ';
            if (current.indexOf(' ' + cls + ' ') < 0) {
                setClass(el, (current + cls).trim());
            }
        }
    }

    function removeClass(el, cls) {
        if (el && el.classList) {
            el.classList.remove(cls);
        } else {
            var current = ' ' + getClass(el) + ' ',
                target = ' ' + cls + ' ';
            while (current.indexOf(target) >= 0) {
                current = current.replace(target, ' ');
            }
            setClass(el, current.trim());
        }
        if (!el.className) {
            el.removeAttribute('class');
        }
    }

    function hasClass(el, cls) {
        if (el && el.classList) {
            return el.classList.contains(cls);
        } else {
            var current = ' ' + getClass(el) + ' ',
                clsList = current.split(' ');
            clsList.map(function (item) {
                return item == cls ? true : false;
            });
        }
    }

    var clus = {
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        // for short
        add: addClass,
        remove: removeClass,
        has: hasClass
    };

    window.clus = clus;

}));
//# sourceMappingURL=clus.js.map