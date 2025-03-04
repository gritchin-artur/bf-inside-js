'use strict';

/**
 * Repeats a string with each character repeated.
 *
 * @param {string} text - The string that will be repeat-repeated.
 * @param {number} repeats - How many times to repeat the characters and string.
 * @returns {string} The string with repeated characters, repeated.
 */
const repeatRepeat = (text, repeats) => {
  let long = '';
  let output = '';

  if (repeats === 0) {
    return output;
  }

  for (let i = 0; i < text.length; i++) {
    let times = '';

    for (let a = 0; a < repeats; a++) {
      times += text[i];
    }
    output += times;
  }
  for (let b = 0; b < repeats; b++) {
    long = long + output;
  }
  return long;
};

describe('repeatRepeat: repeats each character and the whole string', () => {
  it('repeat-repeats 0 times', () => {
    const returned = repeatRepeat('hoy!', 0);
    expect(returned).toEqual('');
  });
  it('repeat-repeats 1 time', () => {
    const returned = repeatRepeat('aaaa', 1);
    expect(returned).toEqual('aaaa');
  });
  it('repeat-repeats 2 times', () => {
    const returned = repeatRepeat('Hi', 2);
    expect(returned).toEqual('HHiiHHii');
  });
  it('repeat-repeats 3 times', () => {
    const returned = repeatRepeat('abc', 3);
    expect(returned).toEqual('aaabbbcccaaabbbcccaaabbbccc');
  });
  it('repeat-repeats an empty string 12 times', () => {
    const returned = repeatRepeat('', 12);
    expect(returned).toEqual('');
  });
});
