export function multiply(left, right) {
  let output = 0;

  for (let i = 0; i < right; i++) {
    output += left;
  }
  return output;
}
