const getListForm = (list, number) => {
  const numberForm = Number(list.join(''));
  const sum = numberForm + number;
  const result = String(sum).split('').map(Number);

  return result;
};

module.exports = getListForm;

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
//   const list = _inputLines[1].split(' ').map(Number);
//   const number = Number(_inputLines[2]);
//
//   const result = getListForm(list, number);
//
//   const out = result.join(' ');
//
//   console.log(out);
// };
//
// process.stdin.on('end', solve);
