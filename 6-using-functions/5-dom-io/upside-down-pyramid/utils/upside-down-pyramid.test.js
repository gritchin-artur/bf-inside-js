import { piramid } from './upside-down-pyramid.js';

describe('Create piramid', () => {
  describe('the function behavior', () => {
    it('create piramid from "qwerty"', () => {
      const returned = piramid('qwerty');
      expect(returned).toEqual(`qwerty
werty
erty
rty
ty
y`);
    });
    it('create piramid from "HYF"', () => {
      const returned = piramid('HYF');
      expect(returned).toEqual(`HYF
YF
F`);
    });
    it('create piramid from "JavaScript"', () => {
      const returned = piramid('JavaScript');
      expect(returned).toEqual(`JavaScript
avaScript
vaScript
aScript
Script
cript
ript
ipt
pt
t`);
    });
    it('reversed empty string', () => {
      const returned = piramid('');
      expect(returned).toEqual('');
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the default param', () => {
      const returned = piramid();
      expect(returned).toEqual('');
    });
  });
});
