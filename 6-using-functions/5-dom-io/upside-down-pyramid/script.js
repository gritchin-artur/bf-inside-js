import { readString, display } from '../../../lib/dom-io.js';

import { piramid } from './utils/upside-down-pyramid.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  const input = readString('to-pyramid');

  display('pyramided', piramid(input));
});
