// #todo

'use strict';

const userString = prompt('enter a number:');

const inputIsANumber = !isNaN(Number(userString));

const userThinksItsANumber = confirm(
  'did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"',
);

userThinksItsANumber === inputIsANumber ? alert('correct!') : alert('nope :(');
