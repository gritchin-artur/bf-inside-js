/*

 * This function check if include text certain letter or phrase 
 * 
 * @params {string} [mainText = ''] - main text
 * @params {string} [textToCheck = ''] - text to check
 * @params {boolean} [sensetive = false] - sensetive text or not
 * @returnes {object} - object containts boolean and two strings
*/

export function search(mainText = '', textToCheck = '', sensetive = false) {
  let output = {
    includes: false,
    mainText: '',
    includesText: '',
  };

  if (mainText === '' || textToCheck === '') {
    output.mainText = mainText;
    output.includesText = textToCheck;
    return output;
  }

  if (sensetive) {
    output.includes = mainText
      .toLowerCase()
      .includes(textToCheck.toLowerCase());
    output.mainText = mainText;
    output.includesText = textToCheck;
  } else {
    output.includes = mainText.includes(textToCheck);
    output.mainText = mainText;
    output.includesText = textToCheck;
  }

  return output;
}
