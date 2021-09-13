import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  const { repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|' } = options;
  const withAddition = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);
  const result = new Array(repeatTimes).fill(str + withAddition).join(separator);

  return result;
}
