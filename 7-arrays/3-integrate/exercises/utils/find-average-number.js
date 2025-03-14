/**
 *
 * This returns average number of all element of array
 *
 * @params {object} [numbers = []] - array some numbers
 * @returns {number} - returns average number
 */

export const averageNumber = (numbers = []) => {
  let theAverage = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    theAverage += number / numbers.length;
  }

  return theAverage;
};
