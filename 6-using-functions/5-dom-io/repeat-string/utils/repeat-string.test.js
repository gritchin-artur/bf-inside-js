import { repeatString } from './repeat-string.js';

describe('Repeats all string', () => {
  describe('the function behavior', () => {
    it('repeats "qwerty" 2 times', () => {
      const returned = repeatString('qwerty', 2);
      expect(returned).toEqual('qwertyqwerty');
    });
    it('repeats "HYF" 3 times', () => {
      const returned = repeatString('HYF', 3);
      expect(returned).toEqual('HYFHYFHYF');
    });
    it('repeats 13 times', () => {
      const returned = repeatString('', 13);
      expect(returned).toEqual('');
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the default param', () => {
      const returned = repeatString();
      expect(returned).toEqual('');
    });
  });
});
