// #todo

/**
 *
 *
 * Returns true if all elements of the array are greater than or equal to the second parametr
 * @params {string} [strings = []] - some array
 * @params {number} [long = 0] - second parametr
 * @returns {boolean} - returns true or false
 */
export const allLong = (strings = [], long = 0) => {
  const compare = (strings, long) => {
    return strings.length >= long;
  };

  return strings.every(compare);
};
