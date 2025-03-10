// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a condition instead of ||

// try different values and different types
const firstName = 'Artur';
const lastName = 'Hrythyn';
console.log(firstName, lastName);

// const hasAnAName = firstName[0] === 'A' || lastName[0] === 'A';

let hasAnAName;
if (firstName[0] === 'A') {
  hasAnAName = firstName[0] === 'A';
} else {
  hasAnAName = lastName[0] === 'A';
}
console.log(hasAnAName);

console.log('-- end --');
