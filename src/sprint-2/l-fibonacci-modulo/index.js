const getFibonacci = (number) => {
  const arr = [1, 1];

  for (let i = 2; i < number + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[number];
};

const getFibonacciModule = (number, digitsCount) => {
  const fibonacci = getFibonacci(number);

  if (String(fibonacci).length <= digitsCount) return fibonacci;

  const result = fibonacci % Math.pow(10, digitsCount);

  return result;
};

exports.getFibonacciModule = getFibonacciModule;
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
//   const [number, digitsCount] = _inputLines[0].split(' ').map(Number);
//
//   const result = getFibonacciModule(number, digitsCount);
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
