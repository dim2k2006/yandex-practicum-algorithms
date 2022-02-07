// const findDistance = (data) => {
//   if (!data.includes(0)) return Number.MAX_SAFE_INTEGER;
//
//   const index = data.findIndex((item) => item === 0);
//
//   return index + 1;
// };

// const findDistance = (data, currentIndex) => {
//   let leftPointer = currentIndex;
//   let rightPointer = currentIndex;
//   let i = 0;
//   let result = 0;
//
//   while (i < data.length) {
//     const leftValue = data[leftPointer];
//     const rightValue = data[rightPointer];
//
//     if (leftValue === 0) return currentIndex - leftPointer;
//
//     if (rightValue === 0) return rightPointer - currentIndex;
//
//     leftPointer = Math.max(0, leftPointer - 1);
//     rightPointer = Math.min(rightPointer + 1, data.length - 1);
//
//     i = i + 1;
//   }
//
//   return result;
// };

const findDistance = (currentIndex, zeroIndexes) => {
  const distances = zeroIndexes
    .map((index) => Math.abs(currentIndex - index))
    .sort((a, b) => a - b);

  return distances[0];
};

// const getZeroIndexes = (data) => {
//   const indices = [];
//   const element = 0;
//
//   let idx = data.indexOf(element);
//   while (idx !== -1) {
//     indices.push(idx);
//     idx = data.indexOf(element, idx + 1);
//   }
//
//   return indices;
// };

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
