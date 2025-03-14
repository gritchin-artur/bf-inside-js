import { averageNumber } from './find-average-number.js';

describe('Calculate average number of the array', () => {
  it('does nothing to an empty array', () => {
    const returned = averageNumber([]);
    expect(returned).toEqual(0);
  });
  it('if add [1, 2, 3, 4, 5]', () => {
    const returned = averageNumber([1, 2, 3, 4, 5]);
    expect(returned).toEqual(3);
  });
  it('if add [-1, -2, -3, -4, -5]', () => {
    const returned = averageNumber([-1, -2, -3, -4, -5]);
    expect(returned).toEqual(-3);
  });
});
