import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values

  const skip = readNumber('skip-size');
  const text = readString('user-text');
  let output = '';

  // create a new string with skipped characters

  for (let i = 0; i < text.length; i += skip) {
    output += text[i];
    console.log(output);
  }

  // display the skipped string

  display('skipped-output', output);
});
