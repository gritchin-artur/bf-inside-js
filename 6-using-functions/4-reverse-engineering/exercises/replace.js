/*


* This function replaces selected with new characters in the string

*@params {string} [mainText = ''] - main text
*@params {string} [toReplace = ''] - text to replace
*@params {string} [earthenText = ''] - earthen text
*@returns {string} - replaces result
 */

export function replace(mainText = '', toReplace = '', earthenText = '') {
  let output = mainText.replaceAll(toReplace, earthenText);
  console.log(output);
  return output;
}
