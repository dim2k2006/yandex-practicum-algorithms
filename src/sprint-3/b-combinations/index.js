const getKeysLetters = () => {
  const keys = new Map();

  keys.set('2', 'abc');
  keys.set('3', 'def');
  keys.set('4', 'ghi');
  keys.set('5', 'jkl');
  keys.set('6', 'mno');
  keys.set('7', 'pqrs');
  keys.set('8', 'tuv');
  keys.set('9', 'wxyz');

  return keys;
};

const genCombinations = (keysPressed) => {
  const letterByKey = getKeysLetters();
  const keys = keysPressed.split('');

  const iter = (keysList, prefix) => {
    if (keysList.length === 0) return prefix;

    const key = keysList[0];

    const letters = letterByKey.get(key).split('');

    const result = letters.map((letter) => iter(keysList.slice(1), `${prefix}${letter}`));

    return result;
  };

  const result = iter(keys, '').flat(Infinity).join(' ');

  return result;
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
//   const keysPressed = _inputLines[0];
//
//   const result = genCombinations(keysPressed);
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
