/* @fileOverview ./index.js
 * @desc
 * Er...
 */

// =================================================================== Needful =

import { ass, exec } from './src/index';

exec(function () {
  console.log('tap');
});

console.log(ass([3, 3])());
