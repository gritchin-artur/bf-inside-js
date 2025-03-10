// #todo

'use strict';

let userInput = '';
let isValidName = false;
while (!isValidName) {
  /* -- BEGIN: validate input -- */
  userInput = prompt('enter your name:');

  if (!userInput) {
    alert('nothing is not a name');
    continue;
  }

  alert('is this correct?\n"' + userInput + '"');

  break;

  /* -- END: validate input -- */
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
