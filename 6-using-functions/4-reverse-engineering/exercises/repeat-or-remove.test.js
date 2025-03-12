import { changeSring } from './repeat-or-remove.js';

describe('Removes identical letters in a string', () => {
  describe('the function behavior', () => {
    it('if the empty string', () => {
      const returned = changeSring('', true);
      expect(returned).toEqual('');
    });
    it('different letters in the string', () => {
      const returned = changeSring('asdf123', true);
      expect(returned).toEqual('asdf');
    });
    it('dublicated letters in the string', () => {
      const returned = changeSring('asdf', false);
      expect(returned).toEqual('aassddff');
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the default param', () => {
      const returned = changeSring();
      expect(returned).toEqual('');
    });
  });
});
