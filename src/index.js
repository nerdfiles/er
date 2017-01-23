/* @fileOverview ./src/index.js
 * @description
 * Er... (Learning ES6 in combination with Ramda.)
 */

// =================================================================== Needful =

var R = {
  ifElse: require('ramda/src/ifElse'),
  isArrayLike: require('ramda/src/isArrayLike'),
  head: require('ramda/src/head'),
  chain: require('ramda/src/chain'),
  clone: require('ramda/src/clone'),
  type: require('ramda/src/type'),
  tap: require('ramda/src/tap'),
  is: require('ramda/src/is'),
  slice: require('ramda/src/slice'),
  F: require('ramda/src/F'),
  isEmpty: require('ramda/src/isEmpty'),
  forEach: require('ramda/src/forEach'),
  compose: require('ramda/src/compose'),
  difference: require('ramda/src/difference')
};

// ================================================================= Internals =

var delay = function () {
  return setTimeout(arguments[1], arguments[0]);
};

var interval = function () {
  return setInterval(arguments[1], arguments[0]);
};

// ============================================================ Implementation =

module.exports = {
  delay: delay,

  interval: interval,

  peel: R.ifElse(R.isArrayLike, R.head, R.clone),

  exec: R.ifElse(R.compose(R.type, R.is(Function)), R.tap, R.clone),

  ass: R.ifElse(R.isArrayLike, R.slice, R.F),

  diff: function (array1, array2) {
    return R.difference(array1, array2);
  },

  build: function (f) {
    return function () {
      return R.compose(f);
    };
  },

  flank: function (obj, func) {
    var results = [];
    if (!R.isEmpty(obj)) {
      R.forEach(function (x) {
        var v = obj[x];
        results.push(func(x, v));
      }, obj);
    }
    return results;
  }
};

