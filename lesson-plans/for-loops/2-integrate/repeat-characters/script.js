import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values

  const text = readString('user-text');
  const num = readNumber('number-of-times');
  let output = '';

  // repeat the characters in the text

  for (let i = 0; text.length > i; i++) {
    for (let a = 0; num > a; a++) {
      output += text[i];
    }
  }

  // display the text with repeated characters

  display('repeated-output', output);
});
