const countValue = (a, x, b, c) => {
  const result = a * Math.pow(x, 2) + b * x + c;

  return result;
};

module.exports = countValue;

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
//   const values = _inputLines[0].split(' ').map(Number);
//
//   const result = countValue(...values);
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
