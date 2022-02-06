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

const getDecimalNumber = (binaryNumber) => {
  const x = 2;
  const list = String(binaryNumber).split('');
  const decimalNumber = list.reverse().reduce((accumulator, item, index) => {
    const value = item * Math.pow(x, index);

    const newAccumulator = accumulator + value;

    return newAccumulator;
  }, 0);

  return decimalNumber;
};

const getBinarySum = (binaryNumber1, binaryNumber2) => {
  const decimalNumber1 = getDecimalNumber(binaryNumber1);
  const decimalNumber2 = getDecimalNumber(binaryNumber2);
  const sum = decimalNumber1 + decimalNumber2;
  const result = getBinaryNumber(sum);

  return result;
};

module.exports = getBinarySum;

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
