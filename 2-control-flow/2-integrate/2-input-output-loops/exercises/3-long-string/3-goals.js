// #todo

'use strict';

let userInput = '';
while (!userInput) {
  /* -- BEGIN: validate input -- */
  userInput = prompt('enter anything longer than 5 characters');
  /* -- END: validate input -- */
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
