const getPrimeFactors = (number) => {
  const result = [];

  let curNum = number;

  let probe = 2;

  while (curNum !== 1) {
    if (curNum % probe !== 0) {
      probe = probe + 1;
    } else {
      curNum = curNum / probe;

      result.push(probe);
    }
  }

  return result;
};

module.exports = getPrimeFactors;

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
//   const result = isDegreeOfFour(number);
//
//   const out = result ? 'True' : 'False';
//
//   console.log(out);
// };
//
// process.stdin.on('end', solve);
