/**
 *
 *
 *  This functions return reverced string
 *
 * @params {string} [text = ''] - some text
 * @returns {string} - returns reversed string
 */

export function reverse(text = '') {
  return text.split('').reverse().join('');
}
