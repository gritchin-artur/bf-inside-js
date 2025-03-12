import { replace } from './replace.js';

describe('Removes identical letters in a string', () => {
  describe('the function behavior', () => {
    it('replaces "qwerty" to "azerty"', () => {
      const returned = replace('qwerty', 'qw', 'az');
      expect(returned).toEqual('azerty');
    });
    it('replaces "JavaScript" to "JS"', () => {
      const returned = replace('Hello JavaScript', 'JavaScript', 'JS');
      expect(returned).toEqual('Hello JS');
    });
    it('if the empty string', () => {
      const returned = replace('', '', '');
      expect(returned).toEqual('');
    });

    describe('the default parameters', () => {
      it('has an empty string for the third default param', () => {
        const returned = replace('qwerty', '');
        expect(returned).toEqual('qwerty');
      });
    });
    it('has an empty string for the default param', () => {
      const returned = replace();
      expect(returned).toEqual('');
    });
  });
});
