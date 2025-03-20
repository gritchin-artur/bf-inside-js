import { piramid } from './sabotage.js';

describe('Create piramid', () => {
  describe('returns piramid', () => {
    it('returns piramid of "qwerty"', () => {
      const expected = `qwerty
werty
erty
rty
ty
y`;
      const actual = piramid('qwerty');
      expect(actual).toEqual(expected);
    });
  });
  it('returns "Artur"', () => {
    const expected = 'Artur';
    const actual = piramid(`Artur
      rtur
      tur
      ur
      r`);
    expect(actual).toEqual(expected);
  });
});
