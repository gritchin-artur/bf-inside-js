// #todo

'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
function adds(x = 0, y = 0) {
  return x + y;
}

describe('Adding numbers', () => {
  describe('returns the added number', () => {
    it('returns 14', () => {
      const expected = 14;
      const actual = adds(8, 6);
      expect(actual).toEqual(expected);
    });
    // ...
  });
  describe('returns the added number', () => {
    it('returns 6', () => {
      const expected = 6;
      const actual = adds(2, 4);
      expect(actual).toEqual(expected);
    });
    // ...
  });
  // ...
});
