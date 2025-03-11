// #todo

/**
 * this function decides how similar two values are
 * @param {any} a - the first value
 * @param {any} b - the second value
 * @returns {string} how similar are a and b?
 */
export function similarity(a, b) {
  const exactlySame = 'exactly the same';
  const theSame = 'the same type';

  if (a === b || Object.is(a, b)) {
    return exactlySame;
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return theSame;
  }
  if (typeof a === 'number' && typeof b === 'number') {
    return theSame;
  }
  if (typeof a === 'object' && typeof b === 'object') {
    return theSame;
  }
  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return theSame;
  } else {
    return 'nothing alike';
  }
}
