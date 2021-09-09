import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const correct = members.filter((el) => (typeof el === 'string' && el.length > 0));
    const firstLetters = correct.map((el) => (el.trim().slice(0, 1).toUpperCase()));
    const result = firstLetters.sort().join('');
    return result;
  }
  return false;
}
