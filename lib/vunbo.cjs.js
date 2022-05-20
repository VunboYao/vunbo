'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getType(element) {
    var type = typeof element;
    if (type !== 'object') {
        return type;
    }
    return Object.prototype.toString.call(element).replace(/^\[object (\S+)]$/, function (match, $1) {
        return $1.toLocaleLowerCase();
    });
}
function isObject(val) {
    return getType(val) === 'object';
}

exports.getType = getType;
exports.isObject = isObject;