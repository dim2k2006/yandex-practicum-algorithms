const findDistance = (currentIndex, zeroIndexes) => {
  const distances = zeroIndexes
    .map((index) => Math.abs(currentIndex - index))
    .sort((a, b) => a - b);

  return distances[0];
};

const getZeroIndexes = (data) => {
  return data.reduce((accumulator, item, index) => {
    if (item !== 0) return accumulator;

    return [...accumulator, index];
  }, []);
};

const getNearestZero = (data) => {
  const zeroIndexes = getZeroIndexes(data);

  const result = data.map((number, index) => {
    if (number === 0) return 0;

    const distance = findDistance(index, zeroIndexes);

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
