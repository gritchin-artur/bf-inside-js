// #todo

'use strict';

let validInput = '';

let index = 0;
let isValid = false;
while (!isValid) {
  index = index + 1;

  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`,
  );

  /* -- BEGIN: validate input -- */
  if (!userInput) {
    alert('Please enter text with "e" or "E"');
    continue;
  } else if (userInput.length < index) {
    alert('Too short');
    continue;
  } else if (userInput[index - 1].toLowerCase() === 'e') {
    validInput = userInput;
    isValid = true;
  } else {
    alert(`Your text don't consist 'E' or 'e' as a ${index} character`);
  }

  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
