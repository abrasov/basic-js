const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const search = matrix.flat().filter(el => el === '^^');
  let count = 0;
  if (search.length > 0) {
    count = search.length;
  }
  return count;
}

module.exports = {
  countCats
};
