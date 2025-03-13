import { reverse } from './reverse-string.js';

describe('Reverses strings', () => {
  describe('the function behavior', () => {
    it('reversed "qwerty"', () => {
      const returned = reverse('qwerty');
      expect(returned).toEqual('ytrewq');
    });
    it('reversed "HYF"', () => {
      const returned = reverse('HYF');
      expect(returned).toEqual('FYH');
    });
    it('reversed empty string', () => {
      const returned = reverse('');
      expect(returned).toEqual('');
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the default param', () => {
      const returned = reverse();
      expect(returned).toEqual('');
    });
  });
});
