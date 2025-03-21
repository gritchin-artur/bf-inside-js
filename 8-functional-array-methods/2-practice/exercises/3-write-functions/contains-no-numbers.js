// #todo

/**
 * returns true if no values are numbers, otherwise returns false
 * does not modify the argument array
 * @param {Array} arr - the array of values to filter
 * @returns {Array} - a new array with no strings
 */
export const containsNoNumbers = (arr = []) => {
  const isNumber = (el) => {
    return typeof el !== 'number';
  };

  return arr.every(isNumber);
};
