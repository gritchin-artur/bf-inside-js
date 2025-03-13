/**
 * 
 * 
 *  This function skipes some letters
 * 
 *@params {string} [text = ''] - some text 
 *@params {number} [num = 0] - number of skip letter
 @results {string} - returns string without skiped letter
 */

export function skip(text = '', num = 0) {
  let output = '';
  for (let i = 0; i < text.length; i++) {
    if (i % num === 0) {
      output += text[i];
    }
  }

  return output;
}
