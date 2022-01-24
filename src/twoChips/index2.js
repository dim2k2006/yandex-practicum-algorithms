const getChips2 = (chipsScores, K) => {
  const sortedChips = [...chipsScores].sort((a, b) => a - b);

  let left = 0;
  let right = sortedChips.length - 1;

  while (left < right) {
    const firstNumber = sortedChips[left];
    const secondNumber = sortedChips[right];
    const current_sum = firstNumber + secondNumber;

    if (current_sum === K) {
      return [firstNumber, secondNumber];
    }

    if (current_sum < K) {
      left = left + 1;

      continue;
    }

    right = right - 1;
  }

  return [];
};

module.exports = getChips2;

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
  const chipsScores = _inputLines[1].split(' ').map(Number);
  const K = Number(_inputLines[2]);

  const chips = getChips2(chipsScores, K);

  if (chips.length === 0) {
    console.log('None');

    return;
  }

  const result = chips.join(' ');

  console.log(result);
};

process.stdin.on('end', solve);
