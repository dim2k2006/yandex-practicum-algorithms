const getChips2 = (chipsScores, K) => {
  const sortedChips = [...chipsScores].sort();

  const iter = (leftIndex, rightIndex, list) => {
    if (leftIndex >= rightIndex) {
      return null;
    }

    const firstNumber = list[leftIndex];
    const secondNumber = list[rightIndex];
    const current_sum = firstNumber + secondNumber;

    if (current_sum === K) {
      return [firstNumber, secondNumber];
    }

    if (current_sum < K) {
      return iter(leftIndex + 1, rightIndex, list);
    }

    return iter(leftIndex, rightIndex - 1, list);
  };

  return iter(0, sortedChips.length - 1, sortedChips);
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

  if (!chips) {
    console.log('None');

    return;
  }

  const result = chips.join(' ');

  console.log(result);
};

process.stdin.on('end', solve);
