import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const arr = n.toString().split('');
  const min = Math.min.apply(this, arr).toString();
  const deletedNum = arr.splice(arr.indexOf(min), 1);
  return Number(arr.join(''));
}
