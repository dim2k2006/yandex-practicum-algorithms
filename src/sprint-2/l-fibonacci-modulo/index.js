const getFibonacci = (number) => {
  const arr = [BigInt(0), BigInt(1)];

  const getValue = (i) => {
    if (i === 0) return BigInt(1);

    return arr[i];
  };

  for (let i = 2; i < number + 1; i++) {
    arr.push(BigInt(getValue(i - 1) + getValue(i - 2)));
  }

  return getValue(number);
};

const getFibonacciModule = (number, digitsCount) => {
  const fibonacci = getFibonacci(number);

  if (String(fibonacci).length <= digitsCount) return fibonacci;

  const result = fibonacci % BigInt(Math.pow(10, digitsCount));

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
//   const out = String(result).replace('n', '');
//
//   console.log(out);
// };
//
// process.stdin.on('end', solve);
