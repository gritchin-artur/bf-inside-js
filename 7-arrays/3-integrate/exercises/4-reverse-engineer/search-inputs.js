alert(`Enter as many phrases as you want


the enter a search query (case sensetive)
-> only phrases than includes the query will be kept`);

let inputQuery = [];

while (true) {
  let input = prompt('enter some text or click "cancel"');
  if (input) {
    inputQuery.push(input);
  }
  if (inputQuery !== [] && input === null) {
    break;
  }
}
console.log(inputQuery);

let searchQuery = '';

while (!searchQuery) {
  searchQuery = prompt('enter a search query');
}

let newArr = [];
inputQuery.forEach((el) => {
  if (el.includes(searchQuery)) {
    newArr.push(el);
  }
});

console.log(newArr);
let message = '';
newArr.forEach((el) => (message += `- ${el}\n`));

alert(`query: ${searchQuery}

matches:
${message}`);
