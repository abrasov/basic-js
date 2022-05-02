const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(message, key) {
    if (message == null || key == null) {
      throw new Error('Incorrect arguments!');
    }
    key = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();
    message = message.toUpperCase();
    const codeA = 'A'.charCodeAt(0);
    const abcCount = 26;
    let result = [];
    let extra = 0;

    for (let i = 0; i < message.length; i++){
      if (message[i].match(/[A-Z]/)) {
        let letterIndx = message.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(i - extra) - codeA;
        result.push(
          String.fromCharCode((letterIndx + shift) % abcCount + codeA)
        );
      } else {
        result.push(message[i]);
        extra++;
      }
    }
    return this.type ? result.join('') : result.reverse().join('');
  }
  decrypt(message, key) {
    if (message == null || key == null) {
      throw new Error('Incorrect arguments!');
    }
    key = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();
    message = message.toUpperCase();
    const codeA = 'A'.charCodeAt(0);
    const abcCount = 26;
    let result = [];
    let extra = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        let letterIndx = message.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(i - extra) - codeA;
        result.push(
          String.fromCharCode((letterIndx - shift + abcCount) % abcCount + codeA)
        );
      } else {
        result.push(message[i]);
        extra++;
      }
    }
    return this.type ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
