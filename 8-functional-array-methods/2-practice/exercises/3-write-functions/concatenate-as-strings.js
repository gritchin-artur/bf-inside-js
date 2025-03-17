// #todo

/**
 * casts all values to a string and concatenates
 * returns a new array without modifying the original
 * @param {Array} arr - the array of values to filter
 * @returns {Array} - a new array with no strings
 */
export const concatenateAsStrings = (arr = []) => {
  const toString = (arr) => {
    return String(arr);
  };

  const toAllTogether = (acc, next) => {
    return acc + next;
  };

  return arr.map(toString).reduce(toAllTogether, '');
};
