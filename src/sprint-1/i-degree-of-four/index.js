const isDegreeOfFour = (number) => {
  const initialNumber = 4;
  const multiplier = 4;
  let product = initialNumber * multiplier;

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
//   const binaryNumber1 = _inputLines[0];
//   const binaryNumber2 = _inputLines[1];
//
//   const result = getBinarySum(binaryNumber1, binaryNumber2);
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
