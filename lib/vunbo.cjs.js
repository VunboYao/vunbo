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
function isNull(val) {
    return getType(val) === 'null';
}
function isUndefined(val) {
    return getType(val) === 'undefined';
}

var to = function (promise) {
    return promise.then(function (res) { return [null, res]; }).catch(function (err) { return [err]; });
};

exports.getType = getType;
exports.isNull = isNull;
exports.isObject = isObject;
exports.isUndefined = isUndefined;
exports.to = to;
