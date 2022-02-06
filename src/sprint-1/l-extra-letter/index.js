const getExtraLetter = (string1, string2) => {
  const iter = (list1, list2) => {
    if (list1.length === 0) return list2[0];

    const firstLetter = list1[0];

    return iter(list1.slice(1), list2.replace(firstLetter, ''));
  };

  return iter(string1, string2);
};

module.exports = getExtraLetter;

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
