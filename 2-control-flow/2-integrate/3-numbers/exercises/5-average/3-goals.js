// #todo

'use strict';

const instructions =
  'calculate the average of many numbers:\n\n' +
  '- you must input something\n' +
  '- input a number and it will be added to the sum\n' +
  '- input "done" and the program will finish (case insensitive)\n' +
  '- input anything else and it will be ignored\n\n' +
  'when you have finished inputting numbers, the average will be displayed';
alert(instructions);

let sum = 0;
let inputCount = 0;

while (true) {
  const userInput = prompt('enter a number to add, or "done" to finish');

  if (userInput === '' || userInput === null) {
    alert('nothing is not allowed');
    continue;
  }

  /* -- BEGIN: update sum and inputCount if input is a number, exit if it is "done" -- */
  if (userInput.toLowerCase() === 'done') {
    break;
  } else {
    const nextNumber = Number(userInput);

    if (isNaN(nextNumber)) {
      alert('"' + userInput + '" is not a number, it has been ignored');
    }

    sum = sum + nextNumber;

    inputCount = inputCount + 1;
  }
  /* -- END -- */
}

const average = sum / inputCount;

const averageMessage = 'the average of your numbers is: ' + average;
alert(averageMessage);
