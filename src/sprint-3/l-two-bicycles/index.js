const findDay = (savingsPerDay, bicycleCost) => {
  const leftBoundary = 0;
  const rightBoundary = savingsPerDay.length - 1;

  const iter = (savings, coast, left, right, prevIndex) => {
    if (right <= left) return -1;

    const mid = Math.floor((left + right) / 2);

    if (savings[mid] === coast) return mid + 1;

    if (savings[mid] < coast && prevIndex && savings[prevIndex] > coast)
      return prevIndex + 1;

    // left branch
    if (savings[mid] > coast) {
      return iter(savings, coast, left, mid, mid);
    }

    // right branch
    return iter(savings, coast, mid + 1, right, mid);
  };

  return iter(savingsPerDay, bicycleCost, leftBoundary, rightBoundary, null);
};

const find = (savingsPerDay, bicycleCost) => {
  const result = [
    findDay(savingsPerDay, bicycleCost),
    findDay(savingsPerDay, bicycleCost * 2),
  ];

  return result;
};

exports.find = find;

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
  const savingsPerDay = _inputLines[1].split(' ').map(Number);
  const bicycleCost = Number(_inputLines[2]);

  const result = find(savingsPerDay, bicycleCost);

  const out = result.join(' ');

  console.log(out);
};

process.stdin.on('end', solve);
