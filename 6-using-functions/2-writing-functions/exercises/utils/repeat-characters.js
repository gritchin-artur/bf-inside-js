/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {string} [text=''] - A string to repeat each character.
 * @param {number} [num=1] - How many times to repeat each character.
 * @returns {string} The original text with each character repeated.
 */
export const repeatCharacters = (text = '', num = 1) => {
  let output = '';

  for (let char of text) {
    for (let i = 0; i < num; i++) {
      output += char;
    }
  }
  return output;
};
