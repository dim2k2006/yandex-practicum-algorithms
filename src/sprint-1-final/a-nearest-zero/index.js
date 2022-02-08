// const findDistance = (currentIndex, zeroIndexes) => {
//   const distances = zeroIndexes
//     .map((index) => Math.abs(currentIndex - index))
//     .sort((a, b) => a - b);
//
//   return distances[0];
// };
//
// const getZeroIndexes = (data) => {
//   return data.reduce((accumulator, item, index) => {
//     if (item !== 0) return accumulator;
//
//     return [...accumulator, index];
//   }, []);
// };

// const getNearestZero = (data) => {
//   const zeroIndexes = getZeroIndexes(data);
//
//   const result = data.map((number, index) => {
//     if (number === 0) return 0;
//
//     const distance = findDistance(index, zeroIndexes);
//
//     return distance;
//   });
//
//   return result;
// };

const isInt = (n) => {
  return n % 1 === 0;
};

const getDistance = (inflectionPoint, currentDistance, i) => {
  if (isInt(inflectionPoint)) {
    const isInflectionPointReached = i > inflectionPoint;

    const result = isInflectionPointReached ? currentDistance - 1 : currentDistance + 1;

    return result;
  }

  const isInflectionPointReached = i > inflectionPoint;

  if (isInflectionPointReached && i - inflectionPoint < 1) return currentDistance;

  const result = isInflectionPointReached ? currentDistance - 1 : currentDistance + 1;

  return result;
};

const getNextInflationPoint = (data, index) => {
  const nextZeroIndex = data.indexOf(0, index + 1);

  const inflectionPoint =
    nextZeroIndex > 0 ? index + (nextZeroIndex - index) / 2 : Number.MAX_SAFE_INTEGER;

  return inflectionPoint;
};

const getNearestZero = (data) => {
  const result = [];
  let inflectionPoint = data.indexOf(0);
  let distance = inflectionPoint;

  console.log('distance:', distance);

  for (let i = 0; i < data.length; i = i + 1) {
    const value = data[i];

    if (value === 0) {
      result.push(value);

      inflectionPoint = getNextInflationPoint(data, i);

      distance = 0;

      continue;
    }

    distance = getDistance(inflectionPoint, distance, i);

    result.push(distance);
  }

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
