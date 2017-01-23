/* @fileOverview ./test/index.js
 * @desc
 * Er... (Tests.)
 */

// =================================================================== Needful =

import { assert } from 'chai';
import { diff, peel, exec } from '../src/index';

// ===================================================================== Tests =

/**
 * Test Suite
 * @desc A fairly sweeping test suite for my tools.
 */
describe('er... muh tools', function () {

  /**
   * Working with arrays
   */
  describe('for arrays', function () {

    it('should take the first element of arrays', function () {
      var firstItem = 1;
      var someArray = [1, 2, 3, 4, 9];
      assert.deepEqual(firstItem, peel(someArray));
    });

    it('should take the difference of two arrays', function () {
      var array1 = [3, 3, 9];
      var array2 = [3, 4];
      assert.isArray(diff(array1, array2), 'a list of differences');
    });
  });

  describe('for functions', function () {

    // it('should tap a function', function () {

    //   exec(function () {
    //     console.log('tap');
    //   });
    // });
  });

});

