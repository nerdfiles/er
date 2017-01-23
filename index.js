/* @fileOverview ./index.js
 * @desc
 * Er...
 */

// =================================================================== Needful =

import { diff, ass, exec, flank } from './src/index';

// ============================================================ Implementation =

exec(function () {
  console.log('tap');
});

console.log(diff([3, 3, 9], [3, 4]));

console.log(flank({ spock: 'snow' }, function (o, a) {
  console.log(o, a);
}));
