// #todo

/**
 *
 * This function convert string greater than second parametr to upper case
 *
 * @params {string} [arr = ''] - arrays of srtring
 * @params {number} [num = 0] - length of string
 * @returns (object) - returns array of the string
 */
export const longToUpper = (arr = '', num = 0) => {
  return arr.map((el) => (el.length >= num ? el.toUpperCase() : el));
};
