/**
 *
 *  This function returns a pyramid that removes the first character each time
 *
 * @params {string} [text = ''] - some text
 * @returns {string} - returns string from your text
 */

export function piramid(text = '') {
  let output = '';

  for (let i = 0; i < text.length; i++) {
    output += text.slice(i) + '\n';
  }

  return output.trim();
}
