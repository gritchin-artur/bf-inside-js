alert(`Enter as many inputs as you want

When you're done entering strings press "cancel"`);

let itemArr = [];

while (true) {
  let input = prompt('enter the next phrase or click "cancel"');

  if (input === null) {
    break;
  }
  if (input === '') {
    alert('Nothin is not allowed');
    continue;
  }

  itemArr.push(input);
}

let newArr = [];

itemArr.forEach((item) => {
  let keep = confirm(`do you want to keep "${item}" ?`);
  if (keep) {
    newArr.push(item);
  }
});

let message = '';
newArr.forEach((el) => (message += `- ${el}\n`));
alert(message);
