import { skip } from './skip.js';

describe('Skip every some character', () => {
  describe('the function behavior', () => {
    it('skip every 2th character of "qwerty"', () => {
      const returned = skip('qwerty', 2);
      expect(returned).toEqual('qet');
    });
    it('skip every 3h character of "JavaScript"', () => {
      const returned = skip('JavaScript', 3);
      expect(returned).toEqual('Jart');
    });
    it('skip empty string', () => {
      const returned = skip('', 5);
      expect(returned).toEqual('');
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the default param', () => {
      const returned = skip();
      expect(returned).toEqual('');
    });
  });
});
