const getSum = (number1, number2) => {
  if (number1 === 0 && number2 === 0) return 0;

  if (number1 === 1 && number2 === 1) return 0;

  return 1;
};

const getStorage = (number1, number2) => {
  if (number1 === 0 && number2 === 0) return 0;

  if (number1 === 1 && number2 === 1) return 1;

  return 0;
};

const getBinarySum = (binaryNumber1, binaryNumber2) => {
  const numbers1 = String(binaryNumber1).split('').map(Number);
  const numbers2 = String(binaryNumber2).split('').map(Number);

  const biggestList = numbers1.length > numbers2.length ? numbers1 : numbers2;
  const smallestList = numbers1.length > numbers2.length ? numbers2 : numbers1;

  const diff = biggestList.length - smallestList.length;
  const diffList = [...new Array(diff)].map(() => 0);

  const list1 = biggestList;
  const list2 = [...diffList, ...smallestList];

  const result = [];
  let prevStorage = 0;

  for (let i = list1.length - 1; i >= 0; i = i - 1) {
    const number1 = list1[i];
    const number2 = list2[i];

    const preliminaryValue = getSum(number1, number2);
    const nextStorage = getStorage(number1, number2);

    if (prevStorage === 0) {
      result.unshift(preliminaryValue);

      prevStorage = nextStorage;

      if (i === 0) {
        result.unshift(prevStorage);
      }

      continue;
    }

    const value = getSum(preliminaryValue, prevStorage);
    const newStorage = getStorage(preliminaryValue, prevStorage);

    result.unshift(value);

    prevStorage = newStorage === 1 ? newStorage : nextStorage;

    if (i === 0) {
      result.unshift(prevStorage);
    }
  }

  return result.join('').replace(/^0+/, '');
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
