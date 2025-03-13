import { readString, display } from '../../../lib/dom-io.js';

import { reverse } from './utils/reverse-string.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  const text = readString('user-text');

  display('reversed-output', reverse(text));
});
