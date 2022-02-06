const getBinaryNumber = (decimalNumber) => {
  const iter = (accumulator, number) => {
    const divisionResult = Math.trunc(number / 2);
    const divisionRemainder = number % 2;

    const newAccumulator = [...accumulator, divisionRemainder];

    if (divisionResult === 0) return newAccumulator;

    return iter(newAccumulator, divisionResult);
  };

  const result = iter([], decimalNumber);

  const newResult = result.reverse().join('');

  return Number(newResult);
};

module.exports = getBinaryNumber;

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
//   const decimalNumber = _inputLines[0];
//
//   const result = getBinaryNumber(decimalNumber);
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
