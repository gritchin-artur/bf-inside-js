/**
 * This function returns reversed string
 *
 * @params {string} [text = ''] - some text
 * @returns {string} - new string
 */
export const reverse = (text = '') => {
  let output = text.split('').reverse().join('');

  return output;
};
