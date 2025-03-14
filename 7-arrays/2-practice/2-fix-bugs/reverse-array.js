// #todo

/**
 *
 *  This returns reversed array
 * @params {string} [arr = []] - some array
 * @returns (array) - returns reversed array
 */
export const reverseArray = (arr = []) => {
  const backwards = [...arr].reverse();
  return backwards;
};
