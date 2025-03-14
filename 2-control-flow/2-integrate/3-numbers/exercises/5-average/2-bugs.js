// #todo

'use strict';

/* look out for:

  - conditional checks
  - break vs. continue

*/

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

let stillEnteringNumbers = true;
while (stillEnteringNumbers) {
  const userInput = prompt('enter a number to add, or "done" to finish');

  if (userInput === '' || userInput === 'null') {
    alert('nothing is not allowed');
    continue;
  }

  if (userInput.toLowerCase() === 'done') {
    stillEnteringNumbers = false;
  } else {
    const nextNumber = Number(userInput);

    if (isNaN(nextNumber)) {
      alert('"' + userInput + '" is not a number, it has been ignored');
    }

    sum = sum + nextNumber;

    inputCount = inputCount + 1;
  }
}

const average = sum / inputCount;

const averageMessage = 'the average of your numbers is: ' + average;
alert(averageMessage);
