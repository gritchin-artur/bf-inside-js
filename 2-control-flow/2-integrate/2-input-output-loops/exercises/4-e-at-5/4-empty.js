// #todo

'use strict';

let validInput = '';

while (true) {
  validInput = prompt('enter anything with "e" or "E" as the 5th letter');

  if (!validInput) {
    continue;
  } else if (validInput.length < 5) {
    alert('Too short');
    continue;
  } else if (validInput[4].toLowerCase() === 'e') {
    alert('done: "' + validInput + '"');
    break;
  } else {
    alert('Input does not contain "e" as the 5th letter');
  }
}
