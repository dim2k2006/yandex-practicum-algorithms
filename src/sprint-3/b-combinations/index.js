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

const getLettersByKey = (keysLetters, key) => keysLetters.get(key);

const getLettersChunks = (keysPressed) => {
  const keysLetters = getKeysLetters();
  const letters = keysPressed
    .split('')
    .map(Number)
    .map((key) => getLettersByKey(keysLetters, key));

  return letters;
};

const isValidPrefix = (prefix, lettersChunks) => {
  for (let i = 0; i < prefix.length; i = i + 1) {
    const char = prefix[i];
    const chunk = lettersChunks[i];

    if (!chunk.includes(char)) return false;
  }

  return true;
};

const genCombinations = (keysPressed) => {
  const chunks = getLettersChunks(keysPressed);
  const letters = chunks.join('');
  const lettersCount = keysPressed.length;

  const iter = (n, prefix) => {
    if (n === 0) {
      const isValid = isValidPrefix(prefix, chunks);

      return isValid ? prefix : null;
    }

    const result = letters.split('').map((letter) => iter(n - 1, `${prefix}${letter}`));

    return [...result];
  };

  const result = iter(lettersCount, '')
    .flat(Infinity)
    .filter((combination) => combination !== null)
    .filter((combination, index, array) => array.indexOf(combination) === index)
    .join(' ');

  return result;
};

exports.genCombinations = genCombinations;

// Yandex context required code
const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on('line', (line) => {
  _inputLines.push(line);
});

const solve = () => {
  const keysPressed = _inputLines[0];

  const result = genCombinations(keysPressed);

  console.log(result);
};

process.stdin.on('end', solve);
