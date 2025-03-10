// #todo

'use strict';

let toRepeat = '';
let repetitions = NaN;

let notConfirmed = false;
while (!notConfirmed) {
  toRepeat = prompt('enter a phrase, each character will be repeated:');

  if (toRepeat === '' || toRepeat === null) {
    alert('nope, enter something');
  } else {
    while (true) {
      const repetitionsInput = prompt(
        'how many times do you want to repeat each character?',
      );
      console.log(
        'repetitionsInput:',
        typeof repetitionsInput,
        repetitionsInput,
      );

      if (repetitionsInput === null || repetitionsInput === '') {
        alert('enter something');
        continue;
      }

      repetitions = Number(repetitionsInput);
      console.log('repetitions:', typeof repetitions, repetitions);

      if (Number.isNaN(repetitions)) {
        alert('"' + repetitionsInput + '" is not a number');
      } else {
        break;
      }
    }
    /* -- END -- */

    const confirmMessage =
      'is this correct?\n\n' + '- "' + toRepeat + '"\n' + '- ' + repetitions;
    notConfirmed = confirm(confirmMessage);
  }
}

let withRepeatedCharacters = '';

/* -- BEGIN: repeat each character in the string -- */
for (const character of toRepeat) {
  for (let i = 0; i < repetitions; i++) {
    withRepeatedCharacters += character;
  }
}
/* -- END -- */

const finalMessage = `"${toRepeat}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);
