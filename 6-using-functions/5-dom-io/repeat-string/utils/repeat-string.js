/**
 *
 *
 *  This function repeats all string as many times as specified in the second parameter
 *
 * @params {string} [text = ''] - some text
 * @params {number} [num = 0] - how many times repeats
 * @returns {string} - returned new string
 */

export function repeatString(text = '', num = 0) {
  let output = '';

  for (let i = 0; i < num; i++) {
    output += text;
  }

  return output;
}
