import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values

  const number = readNumber('skip-size');
  const string = readString('user-text');

  // create a new string with skipped characters

  let output = '';

  for (let i = 0; i < string.length; i++) {
    if (i % number === 0) {
      output += string[i];
    }
  }

  // display the skipped string
  display('skipped-output', output);
});
