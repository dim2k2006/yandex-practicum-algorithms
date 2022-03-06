const isSubsequence = (string1, string2) => {
  const string1Length = string1.length;
  const string2Length = string2.length;

  let pointer = 0;
  let charA = string1[pointer];

  for (let i = 0; i < string2Length; i = i + 1) {
    if (pointer > string1Length - 1) return true;

    const charB = string2[i];

    if (charA === charB) {
      pointer = pointer + 1;
      charA = string1[pointer];
    }
  }

  return false;
};

exports.isSubsequence = isSubsequence;

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
//   const string1 = _inputLines[0];
//   const string2 = _inputLines[1];
//
//   const result = isSubsequence(string1, string2);
//
//   console.log(result ? 'True' : 'False');
// };
//
// process.stdin.on('end', solve);
