import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values

  const text = readString('user-text');
  const repeat = readNumber('number-of-times');

  // repeat the string
  let output = '';

  for (let i = 0; i < repeat; i++) {
    output += text;
  }

  // display the repeated string
  display('repeated-output', output);
});
