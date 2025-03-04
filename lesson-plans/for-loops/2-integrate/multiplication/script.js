import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values

  const input1 = readNumber('left');
  const input2 = readNumber('right');
  // use a for loop to multiply the two numbers

  // let output = input1 * input2;

  let output = 0;

  for (let i = 0; i < input2; i++) {
    output += input1;
  }
  // display the product

  display('product', output);
});
