/* @fileOverview ./test/index.js
 * @description
 * Er... (Tests.)
 */
import { assert } from 'chai';
import { peel } from '../src/index';

describe('er... muh tools', function () {
  describe('for arrays', function () {
    it('should take the first element of arrays', function () {
      var firstItem = 1;
      var someArray = [1, 2, 3, 4, 9];
      assert.deepEqual(firstItem, peel(someArray));
    });
  });
});

