// #todo

'use strict';

console.log('-- begin --');

// const word = 'pitsicola';

// let index = 0;
// let logThisOne = true;
// while (index < _._) {
//   index += 1;

//   logThisOne = !logThisOne;
//   if (!_) {
//     _;
//   }

//   const nextLetter = word[index];
//   console.log(index + ': ', nextLetter); // i, s, c, l
// }

// console.assert(index === _._, 'there are this many letters in the word');

// console.log('-- end --');

const word = 'pitsicola';

let index = 0;
let logThisOne = true;
let nextLetter = '';

while (index < word.length - 1) {
  index += 1;

  logThisOne = !logThisOne;

  if (logThisOne) {
    continue;
  }

  nextLetter += ',' + word[index];

  console.log(index + ': ', nextLetter); // i, s, c, l
}

console.assert(
  index === nextLetter.length,
  'there are this many letters in the word',
);

console.log('-- end --');
