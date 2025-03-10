// #todo

'use strict';

const userString = prompt('enter a number:');

/* -- BEGIN: check if input is a number -- */
const inputIsANumber = !isNaN(Number(userString));
/* -- END -- */

/* -- BEGIN: ask the user if they think their input is a number -- */
const userThinksItsANumber = confirm(
  'did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"',
);
/* -- END -- */

const userIsCorrect = userThinksItsANumber === inputIsANumber;

if (userIsCorrect) {
  alert('correct!');
} else {
  alert('nope :(');
}
