// #todo

/**
 * casts all array items to Number and removes NaN
 * @param {Array} arr - the array of items to coerce
 * @returns {Array} - a new array of number values
 */
export const keepNumbery = (arr = []) => {
  const toNumter = (el) => {
    return Number(el);
  };
  const exeptNan = (el) => {
    return !isNaN(el);
  };
  return arr.map(toNumter).filter(exeptNan);
};
