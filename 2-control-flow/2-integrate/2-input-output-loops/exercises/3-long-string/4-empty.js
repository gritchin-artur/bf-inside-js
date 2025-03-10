// #todo

'use strict';

let userInput = '';

while (!userInput) {
  userInput = prompt('enter anything longer than 5 characters');
  if (userInput.length < 5) {
    alert('Too short');
    userInput = prompt('enter anything longer than 5 characters');
  }
}

alert('"' + userInput + '" is ' + userInput.length + ' characters long');
