// #todo

'use strict';

let userNumber = NaN;
while (true) {
  const userInput = prompt('enter a number');

  /* -- BEGIN: exit if userInput is a valid number -- */
  if (isNaN(Number(userInput)) || !userInput) {
    alert('shoud enter number');
    continue;
  }

  userNumber = userInput;
  break;
  /* -- END -- */
}

const message = userNumber % 2 === 0 ? ' is even' : ' is odd';
alert(userNumber + message);
