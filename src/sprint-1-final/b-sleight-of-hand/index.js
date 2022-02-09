const roundsCount = 9;
const playersCount = 2;

const getScores = (playerButtonsCount, field) => {
  let scores = 0;

  const clickableButtonsCount = playerButtonsCount * playersCount;

  for (let i = 1; i <= roundsCount; i = i + 1) {
    const roundButtonsCount = field.filter((button) => button === i).length;

    if (roundButtonsCount === 0) continue;

    if (clickableButtonsCount >= roundButtonsCount) {
      scores = scores + 1;
    }
  }

  return scores;
};

module.exports = getScores;

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
  const k = Number(_inputLines[0]);

  const row1 = _inputLines[1].split('').map(Number);
  const row2 = _inputLines[2].split('').map(Number);
  const row3 = _inputLines[3].split('').map(Number);
  const row4 = _inputLines[4].split('').map(Number);

  const field = [...row1, ...row2, ...row3, ...row4];

  const result = getScores(k, field);

  console.log(result);
};

process.stdin.on('end', solve);
