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
//   const data = _inputLines[1].split(' ').map(Number);
//
//   const result = getWeather(data);
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
