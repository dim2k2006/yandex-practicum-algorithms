const getFibonacci = (number) => {
  if (number === 0 || number === 1) return 1;

  const result = getFibonacci(number - 1) + getFibonacci(number - 2);

  return result;
};

exports.getFibonacci = getFibonacci;

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
//   const result = getFibonacci(number);
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
