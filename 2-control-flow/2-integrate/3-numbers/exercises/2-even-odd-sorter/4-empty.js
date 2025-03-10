// #todo

'use strict';

let userInput = '';
while (true) {
  userInput = prompt('enter a number');

  if (isNaN(Number(userInput)) || !userInput) {
    alert('shoud enter number');
    continue;
  }
  break;
}

alert(userInput + (userInput % 2 === 0 ? ' is even' : ' is odd'));
