import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { skip } from './utils/skip.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  const number = readNumber('skip-size');
  const text = readString('user-text');

  display('skipped-output', skip(text, number));
});
