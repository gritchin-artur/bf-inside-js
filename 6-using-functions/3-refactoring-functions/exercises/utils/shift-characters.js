/**
 * This function changes each character in a string by shifting the character code
 *
 * @params {string} [text = ''] - some text
 * @params {string} [num = ''] - shift number
 * @returns {string} - new string
 */
export const shiftCharacters = (text = '', shift = '') => {
  let output = '';

  for (let char of text) {
    let charNum = char.charCodeAt() + shift;
    output += String.fromCharCode(charNum);
  }

  return output;
};
