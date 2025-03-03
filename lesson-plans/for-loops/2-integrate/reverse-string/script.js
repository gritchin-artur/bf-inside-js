import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text

  const input = readString('user-text');
  let output = '';
  // use a for loop that counts down (i--) to reverse the input

  for (let i = input.length - 1; i >= 0; i--) {
    output += input[i];
  }

  // display the reversed string

  display('reversed-output', output);
});
