// #todo

'use strict';

let userInput = '';
let repetitions = NaN;
while (true) {
  userInput = prompt('enter a phrase to repeat:');

  if (!userInput) {
    alert('nope, enter something');
    continue;
  }

  const repetitionsInput = prompt('how many times do you want to repeat it?');

  if (isNaN(Number(repetitionsInput))) {
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }

  const confirmMessage = confirm(
    'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + repetitions,
  );

  if (confirmMessage) {
    break;
  } else {
    continue;
  }
}

let repeatedInput = '';

for (let i = 0; i < repetitions; i++) {
  repeatedInput += userInput;
}

const finalMessage = `"${userInput}" -> "${repeatedInput}"`;
alert(finalMessage);
