// #todo

'use strict';

let userInput = '';
let unicodeShift = NaN;

while (true) {
  userInput = prompt(
    'enter a phrase, each character will be shifted by character code:',
  );

  if (!userInput) {
    alert('nope, enter something');
    continue;
  } else {
    while (true) {
      const unicodeShiftInput = prompt(
        'how many unicode numbers do you want the characters to shift?',
      );

      if (!unicodeShiftInput) {
        alert('enter something');
      } else {
        unicodeShift = Number(unicodeShiftInput);

        if (Number.isNaN(unicodeShift)) {
          alert('"' + unicodeShiftInput + '" is not a number');
        } else {
          break;
        }
      }
    }

    const confirmation = confirm(
      'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + unicodeShift,
    );
    if (confirmation) {
      break;
    }
  }
}

let encodedString = '';

for (const character of userInput) {
  const encodedCharacter = String.fromCharCode(
    character.charCodeAt() + unicodeShift,
  );
  encodedString += encodedCharacter;
}

alert(`"${userInput}" -> "${encodedString}"`);
