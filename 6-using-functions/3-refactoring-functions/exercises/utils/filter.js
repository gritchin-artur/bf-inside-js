/**
 * This function reternes the new string not includ some characters
 *
 * @params {string} [toFilter = ''] - first string
 * @params {string} [sremoveThese = ''] - second string
 * @returned {string} - returned new string
 */
export const filter = (toFilter = '', removeThese = '') => {
  let output = '';

  for (let char of toFilter) {
    if (!removeThese.toLowerCase().includes(char.toLowerCase())) {
      output += char;
    }
  }

  return output;
};
