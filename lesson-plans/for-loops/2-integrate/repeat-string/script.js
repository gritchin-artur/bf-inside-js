import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values

  const text = readString('user-text');
  const number = readNumber('number-of-times');
  let output = '';

  // repeat the string

  for (let i = 0; number > i; i++) {
    output += text;
  }

  // display the repeated string

  display('repeated-output', output);
});
