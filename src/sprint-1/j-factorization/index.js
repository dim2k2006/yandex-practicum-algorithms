// const isPrime = (number) => {
//   if (number === 1) return false;
//
//   let i = 2;
//
//   while (i * i <= number) {
//     if (number % i === 0) return false;
//
//     i = i + 1;
//   }
//
//   return true;
// };

const getPrimeFactors = (number) => {
  const result = [];
  let d = 2;

  while (d * d <= number) {
    if (number % d === 0) {
      result.push(d);
      number = number / d;
    } else {
      d = d + 1;
    }
  }

  if (number > 1) {
    result.push(number);
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
//   const result = getPrimeFactors(number);
//
//   const out = result.join(' ');
//
//   console.log(out);
// };
//
// process.stdin.on('end', solve);
