// #todo

/**
 *
 *  This checks if all the strings in an array are long
 *
 * @params {string} [strings = []] - some array
 * @params {number} [long = 0] - number
 * @returns {boolean} -returns true or false
 */
export const allLong = (strings = [], long = 0) => {
  let allAre = true;

  for (let i = 0; i < strings.length; i++) {
    const next = strings[i];
    if (next.length < long) {
      allAre = false;
      break;
    }
  }
  return allAre;
};
