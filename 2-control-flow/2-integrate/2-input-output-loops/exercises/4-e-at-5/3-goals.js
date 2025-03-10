// #todo

'use strict';

let validInput = '';
let isNotValid = true;
while (isNotValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  /* -- BEGIN: validate input -- */
  if (!userInput) {
    alert('You must enter something');
    continue;
  } else if (userInput.length < 5) {
    alert('Enter 5 letters minimum');
    continue;
  } else if (userInput[4].toLowerCase() === 'e') {
    validInput = userInput;
    isNotValid = false;
  } else {
    alert('input has no "e" or "E" as the 5th character');
  }

  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
