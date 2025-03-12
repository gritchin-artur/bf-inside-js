import { search } from './search.js';

describe('Removes identical letters in a string', () => {
  describe('the function behavior', () => {
    it('check to includ "qw" in "qwerty" is not a sensetive case', () => {
      const returned = search('qwerty', 'qw', false);
      expect(returned).toEqual({
        includes: true,
        mainText: 'qwerty',
        includesText: 'qw',
      });
    });
    it('check to includ "QW" in "qwerty" is not a sensetive case', () => {
      const returned = search('qwerty', 'QW', false);
      expect(returned).toEqual({
        includes: false,
        mainText: 'qwerty',
        includesText: 'QW',
      });
    });
    it('check to includ "Qw" in "qwerty"  is a sensetive case', () => {
      const returned = search('qwerty', 'Qw', true);
      expect(returned).toEqual({
        includes: true,
        mainText: 'qwerty',
        includesText: 'Qw',
      });
    });
    describe('the default parameters', () => {
      it('has an empty string for the third default param', () => {
        const returned = search('', '');
        expect(returned).toEqual({
          includes: false,
          mainText: '',
          includesText: '',
        });
      });
    });
    it('has an empty string for the default param', () => {
      const returned = search();
      expect(returned).toEqual({
        includes: false,
        mainText: '',
        includesText: '',
      });
    });
  });
});
