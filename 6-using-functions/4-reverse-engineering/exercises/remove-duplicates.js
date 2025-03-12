/*

* This function deleted all dublicated letters

*@params {string} [text = ''] - some text
*@returned {string} - returned text without dublicated letters
*/

export function dublicatedLetter(text = '') {
  let output = '';

  for (let char of text) {
    if (!output.includes(char)) {
      output += char;
    }
  }
  console.log(output);
  return output;
}
