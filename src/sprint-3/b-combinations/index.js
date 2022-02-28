const getKeysLetters = () => {
  const keys = new Map();

  keys.set(2, 'abc');
  keys.set(3, 'def');
  keys.set(4, 'ghi');
  keys.set(5, 'jkl');
  keys.set(6, 'mno');
  keys.set(7, 'pqrs');
  keys.set(8, 'tuv');
  keys.set(9, 'wxyz');

  return keys;
};

const genCombinations = (keysPressed) => {
  const keysLetters = getKeysLetters();
  const lettersChunks = keysPressed
    .split('')
    .map(Number)
    .map((key) => keysLetters.get(key))
    .map((string) => string.split(''));

  const firstChunk = lettersChunks[0];
  const restLetters = lettersChunks.slice(1).flat(Infinity);

  const combinations = firstChunk
    .map((letter) => {
      const result = restLetters.map((restLetter) => `${letter}${restLetter}`);

      return result;
    })
    .flat(Infinity);

  console.log(combinations);

  return combinations;
};

exports.genCombinations = genCombinations;

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
//   const n = Number(_inputLines[0]);
//
//   const result = genBrackets(n);
//
//   const out = result.join('\n');
//
//   console.log(out);
// };
//
// process.stdin.on('end', solve);
