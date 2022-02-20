const getFibonacci = (number) => {
  let prevPrev = BigInt(0);
  let prev = BigInt(1);

  const getValue = (value) => {
    if (value === 0n) return BigInt(1);

    return value;
  };

  for (let i = 2; i < number + 1; i++) {
    const nextValue = getValue(prev) + getValue(prevPrev);

    prevPrev = prev;
    prev = nextValue;
  }

  return prev;
};

const getFibonacciModule = (number, digitsCount) => {
  const fibonacci = getFibonacci(number);

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
