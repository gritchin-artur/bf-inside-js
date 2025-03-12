/**
 *
 *
 * This function repeats each character as many times as specified in the second parameter
 *
 * @params {string} [text = ''] - some text
 * @params {number} [num = 0] - how many times repeats
 * @returns {string} - returned new string
 */

export function repeats(text = '', num = 0) {
  let output = '';

  for (let char of text) {
    for (let i = 0; i < num; i++) {
      output += char;
    }
  }

  return output;
}
