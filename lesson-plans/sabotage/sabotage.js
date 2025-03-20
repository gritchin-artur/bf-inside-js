/**
 *
 *
 * This function create a piramid
 *
 * @params {string} [input = ''] - some string
 * @returns {string} - returns piramid of the string
 */

export const piramid = (input = '') => {
  let output = '';

  for (let i = 0; i < input.length; i++) {
    let row = input.slice(i);
    output += row + '\n';
  }

  return output.trim();
};
