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

export { getType, isNull, isObject, isUndefined };
