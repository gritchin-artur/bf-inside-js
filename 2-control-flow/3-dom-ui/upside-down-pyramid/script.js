import { readString, display } from '../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text

  const text = readString('to-pyramid');

  // create the pyramid

  let output = '';

  //   for (let i = 0; i < text.length; i++) { // variant 1
  //   output += text.slice(i) + '\n';
  // }

  for (let i = 0; i < text.length; i++) {
    // variant 2
    let rep = '';
    for (let a = i; a < text.length; a++) {
      rep += text[a];
    }
    output += rep + '\n';
  }

  // display the pyramid
  display('pyramided', output);
});
