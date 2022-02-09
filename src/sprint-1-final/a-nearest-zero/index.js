const findDistance = (data) => {
  if (!data.includes(0)) return Number.MAX_SAFE_INTEGER;

  const index = data.findIndex((item) => item === 0);

  return index + 1;
};

const getNearestZero = (data) => {
  let prevZeroIndex = 0;

  const result = data.map((number, index) => {
    if (number === 0) {
      prevZeroIndex = index;

      return 0;
    }

    const nextIndex = data.indexOf(0, index + 1);
    const nextZeroIndex = nextIndex === -1 ? Number.MAX_SAFE_INTEGER : nextIndex;

    const leftChunk = data.slice(prevZeroIndex, index);
    const rightChunk = data.slice(index + 1, nextZeroIndex + 1);

    const leftDistance = findDistance([...leftChunk].reverse());
    const rightDistance = findDistance(rightChunk);

    const distance = Math.min(leftDistance, rightDistance);

    return distance;
  });

  return result;
};

module.exports = getNearestZero;

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
//   const result = getNearestZero(data).join(' ');
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
