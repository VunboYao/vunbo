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
    return promise.then(function (res) { return [null, res]; })["catch"](function (err) { return [err]; });
};
/*
{
  function foo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('success')
      }, 2000)
    })
  }

  function bar() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('reject')
      }, 2000)
    })
  }

  async function run() {
    const [err, res] = await to(foo())
    console.log(err, res) // null, 'success'

    const [err2, res2] = await to(bar())
    console.log(err2, res2) // reject undefined
  }

  run()
}

*/

exports.getType = getType;
exports.isNull = isNull;
exports.isObject = isObject;
exports.isUndefined = isUndefined;
exports.to = to;
