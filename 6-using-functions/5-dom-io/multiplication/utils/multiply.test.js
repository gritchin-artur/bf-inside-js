import { multiply } from './multiply.js';

describe('Multiplies two number', () => {
  describe('the function behavior', () => {
    it('multyply 2 by 2', () => {
      const returned = multiply(2, 2);
      expect(returned).toEqual(4);
    });
    it('multyply 5 by 10', () => {
      const returned = multiply(5, 10);
      expect(returned).toEqual(50);
    });
    it('multyply 100 by 0', () => {
      const returned = multiply(100, 0);
      expect(returned).toEqual(0);
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the default param', () => {
      const returned = multiply();
      expect(returned).toEqual(0);
    });
  });
});
