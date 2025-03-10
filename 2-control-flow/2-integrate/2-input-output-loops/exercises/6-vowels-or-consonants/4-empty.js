// #todo

'use strict';
let userInput = '';
while (true) {
  userInput = prompt('enter a word to filter:');

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  const whiteSpaceRegex = new RegExp('\\s', 'g');
  if (whiteSpaceRegex.test(userInput)) {
    alert("words can't have white space");
    continue;
  }

  const confirmMessage = confirm(
    'do you want to filter this word?\n\n' + '- "' + userInput + '"',
  );

  if (confirmMessage) {
    break;
  }
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

const toRemove = removeVowels ? 'aeiou' : 'bcdfghjklmnpqrstvwxyz';

let filteredInput = '';
for (const character of userInput) {
  const lowerCaseCharacter = character.toLowerCase();
  if (!toRemove.includes(lowerCaseCharacter)) {
    filteredInput += character;
  }
}

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
