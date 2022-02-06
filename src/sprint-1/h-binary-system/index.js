const getSum = (number1, number2) => {
  if (number1 === 0 && number2 === 0) return { sum: 0, storage: 0 };

  if (number1 === 1 && number2 === 1) return { sum: 0, storage: 1 };

  return { sum: 1, storage: 0 };
};

const getBinarySum = (binaryNumber1, binaryNumber2) => {
  const numbers1 = String(binaryNumber1).split('').map(Number);
  const numbers2 = String(binaryNumber2).split('').map(Number);

  const biggestList = numbers1.length > numbers2.length ? numbers1 : numbers2;
  const smallestList = numbers1.length > numbers2.length ? numbers2 : numbers1;

  const result = [];
  let prevStorage = 0;

  for (let i = biggestList.length - 1; i >= 0; i = i - 1) {
    const number1 = biggestList[i];
    const number2 = smallestList[i];

    const value = getSum(number1, number2);

    const newValue = prevStorage === 1 ? getSum(value.sum, prevStorage) : value;

    result.unshift(newValue.sum);

    prevStorage = value.storage;

    if (i === 0) {
      result.unshift(prevStorage);
    }
  }

  return Number(result.join(''));
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
//   const binaryNumber1 = _inputLines[0];
//   const binaryNumber2 = _inputLines[1];
//
//   const result = getBinarySum(binaryNumber1, binaryNumber2);
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
