import { readNumber, display } from '../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values

  const left = readNumber('left');
  const right = readNumber('right');

  // use a for loop to multiply the two numbers

  let output = 0;

  for (let i = 0; i < right; i++) {
    output += left;
  }

  // display the product
  display('product', output);
});
