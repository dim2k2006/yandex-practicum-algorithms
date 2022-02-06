const getLongestWord = (text) => {
  const words = text.split(' ');
  const longestWord = words.reduce((accumulator, word) => {
    if (accumulator.length === word.length) return accumulator;

    if (accumulator.length > word.length) return accumulator;

    return word;
  }, '');

  const result = [longestWord, longestWord.length];

  return result;
};

module.exports = getLongestWord;

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
//   const data = _inputLines[1];
//
//   const result = getLongestWord(data);
//
//   const out = `${result[0]}\n${result[1]}`;
//
//   console.log(out);
// };
//
// process.stdin.on('end', solve);
