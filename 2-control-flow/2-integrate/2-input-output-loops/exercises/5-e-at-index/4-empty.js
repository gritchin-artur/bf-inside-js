// #todo

'use strict';

let output = '';
let i = 0;

while (true) {
  i++;
  output = prompt(`enter anything with "e" or "E" as the ${i}th letter`);

  if (!output) {
    alert('you shoud enter memething');
    continue;
  } else if (i > output.length) {
    alert('too short');
    continue;
  } else if (output[i - 1].toLowerCase() === 'e') {
    alert('done: "' + output + '"');
    break;
  } else {
    alert(`Your text don't consist 'E' or 'e' as a ${i} character`);
    continue;
  }
}
