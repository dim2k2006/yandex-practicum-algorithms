const isDegreeOfFour = (number) => {
  const initialNumber = 4;
  const multiplier = 4;
  let product = initialNumber * multiplier;

  if (number === 1) {
    return true;
  }

  if (number === initialNumber) {
    return true;
  }

  while (product <= number) {
    if (product === number) return true;

    product = product * multiplier;
  }

  return false;
};

module.exports = isDegreeOfFour;

// Yandex context required code
// const _readline = require('readline');
//
// const _reader = _readline.createInterface({
//   input: process.stdin,
// });
//
// const _inputLines = [];
//
// _reader.on('line', (line) => {
//   _inputLines.push(line);
// });
//
// const solve = () => {
//   const number = Number(_inputLines[0]);
//
//   const result = isDegreeOfFour(number);
//
//   const out = result ? 'True' : 'False';
//
//   console.log(out);
// };
//
// process.stdin.on('end', solve);
