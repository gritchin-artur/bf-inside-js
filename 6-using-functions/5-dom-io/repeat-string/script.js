import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { repeatString } from './utils/repeat-string.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  const text = readString('user-text');
  const number = readNumber('number-of-times');

  display('repeated-output', repeatString(text, number));
});
