/* @fileOverview ./index.js
 * @desc
 * Er...
 */

// =================================================================== Needful =

import { diff, ass, exec } from './src/index';

// ============================================================ Implementation =

exec(function () {
  console.log('tap');
});

console.log(diff([3, 3, 9], [3, 4]));
