const findDistance = (data) => {
  if (!data.includes(0)) return Number.MAX_SAFE_INTEGER;

  const index = data.findIndex((item) => item === 0);

  return index + 1;
};

const getNearestZero = (data) => {
  const result = data.map((number, index) => {
    if (number === 0) return 0;

    const leftChunk = data.slice(0, index);
    const rightChunk = data.slice(index + 1);

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
//   const string1 = _inputLines[0];
//   const string2 = _inputLines[1];
//
//   const result = getExtraLetter(string1, string2);
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
