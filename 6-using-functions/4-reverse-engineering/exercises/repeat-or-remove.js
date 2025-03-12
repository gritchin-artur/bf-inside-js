/*

* This function removed everything is not a letter or repeats all characters

*@params {string} [text = ''] - some text
*@params {boolen} [params = false] - removed or repeats
*returns {string} - returned new string
*/

export function changeSring(text = '', params = false) {
  const pattern = /[a-zA-Z]/;
  let output = '';
  console.log(params);
  for (const char of text) {
    if (params) {
      if (pattern.test(char)) {
        output += char;
      }
    } else {
      output += char + char;
    }
  }
  console.log(output);
  return output;
}
