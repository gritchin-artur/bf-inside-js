// #todo

'use strict';

let toRepeat = '';
let repetitions = NaN;

while (true) {
  toRepeat = prompt('enter a phrase, each character will be repeated:');

  if (toRepeat === '' || toRepeat === null) {
    alert('nope, enter something');
  } else {
    while (true) {
      const repetitionsInput = prompt(
        'how many times do you want to repeat each character?',
      );

      if (repetitionsInput === null || repetitionsInput === '') {
        alert('enter something');
        continue;
      }
      repetitions = Number(repetitionsInput);

      if (isNaN(repetitions)) {
        alert('"' + repetitionsInput + '" is not a number');
      } else {
        break;
      }
    }

    const confirmMessage = confirm(
      'is this correct?\n\n' + '- "' + toRepeat + '"\n' + '- ' + repetitions,
    );
    if (confirmMessage) {
      break;
    }
  }
}

let withRepeatedCharacters = '';

for (const character of toRepeat) {
  for (let i = 0; i < repetitions; i++) {
    withRepeatedCharacters += character;
  }
}

alert(`"${toRepeat}" -> "${withRepeatedCharacters}"`);
