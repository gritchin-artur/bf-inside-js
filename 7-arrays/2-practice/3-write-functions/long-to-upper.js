// #todo

/**
 *
 * This function returns arrays of strings in upper case
 *
 * @params {array} [arr = []] - some array
 * @returns {array} - returns new array in upper case
 */
export const longToUpper = (arr = [], num = 0) => {
  let newArr = [];

  arr.map((item) => {
    if (item.length >= num) {
      newArr.push(item.toUpperCase());
    } else {
      newArr.push(item);
    }
  });

  return newArr;
};
