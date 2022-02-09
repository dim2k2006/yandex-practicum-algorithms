const getNearestZero = (data) => {
  let prevZeroIndex = null;

  let nextIndex = data.indexOf(0, 1);
  let nextZeroIndex = nextIndex === -1 ? Number.MAX_SAFE_INTEGER : nextIndex;

  const result = data.map((number, index) => {
    if (number === 0) {
      prevZeroIndex = index;

      nextIndex = data.indexOf(0, index + 1);
      nextZeroIndex = nextIndex === -1 ? Number.MAX_SAFE_INTEGER : nextIndex;

      return 0;
    }

    const leftDistance =
      prevZeroIndex === null ? Number.MAX_SAFE_INTEGER : index - prevZeroIndex;
    const rightDistance = nextZeroIndex - index;

    const distance = Math.min(leftDistance, rightDistance);

    return distance;
  });

  return result;
};

module.exports = getNearestZero;

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
  const data = _inputLines[1].split(' ').map(Number);

  const result = getNearestZero(data).join(' ');

  console.log(result);
};

process.stdin.on('end', solve);
