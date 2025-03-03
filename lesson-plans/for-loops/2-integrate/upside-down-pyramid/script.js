import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text

  const input = readString('to-pyramid');
  let output = '';

  // create the pyramid

  for (let i = 0; i < input.length; i++) {
    let line = '';
    for (let a = i; a < input.length; a++) {
      line += input[a];
    }
    output += line + '\n';
  }

  // display the pyramid

  display('pyramided', output);
});
