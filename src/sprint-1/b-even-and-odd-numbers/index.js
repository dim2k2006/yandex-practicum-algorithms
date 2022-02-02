const isEven = (number) => number % 2 === 0;
const isOdd = (number) => number % 2 !== 0;

const solve = (...numbers) => {
  const firstNumber = numbers[0];
  const checker = isEven(firstNumber) ? isEven : isOdd;

  const result = numbers.every(checker);

  return result;
};

module.exports = solve;

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
//   const values = _inputLines[0].split(' ').map(Number);
//
//   const result = countValue(...values);
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
