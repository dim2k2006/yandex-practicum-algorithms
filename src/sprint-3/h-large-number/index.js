// const genBiggestNumber = (numbers) => {
//   const iter = (numbersList, prefix, usedNumbers) => {
//     if (numbersList.length === 0) return prefix;
//
//     const result = numbersList.map((number) => {
//       const newUsedNumbers = [...usedNumbers, number];
//
//       const newNumbersList = [...numbersList];
//
//       newUsedNumbers.forEach((usedNumber) => {
//         const index = newNumbersList.indexOf(usedNumber);
//
//         newNumbersList[index] = null;
//       });
//
//       const filteredNumbers = newNumbersList.filter((number) => number !== null);
//
//       const res = iter(filteredNumbers, `${prefix}${number}`, newUsedNumbers);
//
//       return res;
//     });
//
//     return result;
//   };
//
//   const result = iter(numbers.split(' '), '', [])
//     .flat(Infinity)
//     .map(Number)
//     .sort();
//
//   const last = result[result.length - 1];
//
//   return last;
// };

const sort = (a, b) => {
  const number1 = Number(`${a}${b}`);
  const number2 = Number(`${b}${a}`);

  return number2 - number1;
};

const genBiggestNumber = (numbers) => {
  const result = numbers.split(' ').sort(sort).join('');

  return result;
};

exports.genBiggestNumber = genBiggestNumber;

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
//   const numbers = _inputLines[1];
//
//   const result = genBiggestNumber(numbers);
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
