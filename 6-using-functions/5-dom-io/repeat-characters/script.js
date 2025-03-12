import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { repeats } from './utils/repeat-characters.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  const text = readString('user-text');
  const number = readNumber('number-of-times');

  display('repeated-output', repeats(text, number));
});
