/**
 * Returns a new string with only the given characters left in it.
 *
 * @param {string} [text=''] - Some text to remove characters from.
 * @param {string} [character=''] - The characters to keep.
 * @returns {string} Text with only the given characters still in it.
 */
export const keepCharacters = (text = '', character = '') => {
  let output = '';
  for (let char of text) {
    if (character.includes(char)) {
      output += char;
    }
  }

  return output;
};
