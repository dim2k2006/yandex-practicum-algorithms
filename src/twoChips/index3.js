const getChips3 = (chipsScores, K) => {
  const previousValues = new Set();

  for (let i = 0; i < chipsScores.length; i = i + 1) {
    const value = chipsScores[i];
    const diff = K - value;

    if (previousValues.has(diff)) {
      return [diff, value];
    }

    previousValues.add(value);
  }

  return [];
};

module.exports = getChips3;

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
//   const chipsScores = _inputLines[1].split(' ').map(Number);
//   const K = Number(_inputLines[2]);
//
//   const chips = getChips3(chipsScores, K);
//
//   if (chips.length === 0) {
//     console.log('None');
//
//     return;
//   }
//
//   const result = chips.join(' ');
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
