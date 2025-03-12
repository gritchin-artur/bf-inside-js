import { dublicatedLetter } from './remove-duplicates.js';

describe('Removes identical letters in a string', () => {
  describe('the function behavior', () => {
    it('does nothing to an empty string', () => {
      const returned = dublicatedLetter('');
      expect(returned).toEqual('');
    });
    it('different letters in the string', () => {
      const returned = dublicatedLetter('asdf');
      expect(returned).toEqual('asdf');
    });
    it('dublicated letters in the string', () => {
      const returned = dublicatedLetter('asdfasdfasdf');
      expect(returned).toEqual('asdf');
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the default param', () => {
      const returned = dublicatedLetter();
      expect(returned).toEqual('');
    });
  });
});
