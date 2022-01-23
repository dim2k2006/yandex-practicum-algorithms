const getChips = (chipsScores, K) => {
  for (let i = 0; i < chipsScores.length; i = i + 1) {
    for (let j = i + 1; j < chipsScores.length; j = j + 1) {
      const sum = chipsScores[i] + chipsScores[j];

      if (sum === K) {
        return [chipsScores[i], chipsScores[j]];
      }
    }
  }
};

module.exports = getChips;

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
//   const chips = getChips(chipsScores, K);
//
//   if (!chips) {
//     console.log('None');
//
//     return;
//   }
//
//   const result = getChips(chipsScores, K).join(' ');
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
