import { repeats } from './repeat-characters.js';

describe('Repeats each character of the string', () => {
  describe('the function behavior', () => {
    it('repeats each character "qwerty" 2 times', () => {
      const returned = repeats('qwerty', 2);
      expect(returned).toEqual('qqwweerrttyy');
    });
    it('repeats each character "HYF" 3 times', () => {
      const returned = repeats('HYF', 3);
      expect(returned).toEqual('HHHYYYFFF');
    });
    it('repeats empty string 13 times', () => {
      const returned = repeats('', 13);
      expect(returned).toEqual('');
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the default param', () => {
      const returned = repeats();
      expect(returned).toEqual('');
    });
  });
});
