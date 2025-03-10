import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values

  const string = readString('user-text');
  const repeat = readNumber('number-of-times');

  // repeat the characters in the text
  let output = '';

  for (let i = 0; i < string.length; i++) {
    for (let a = 0; a < repeat; a++) {
      output += string[i];
    }
  }

  // display the text with repeated characters
  display('repeated-output', output);
});
