const getUniqCoords = (coords) => {
  const coordsMap = new Map();

  coords.forEach((item) => coordsMap.set(item.join(''), item));

  let uniqCoords = [];

  for (const [, value] of coordsMap) {
    uniqCoords.push(value);
  }

  return uniqCoords;
};

const getBorders = (coords) => {
  const uniqCoords = getUniqCoords(coords);

  const sortedCoords = uniqCoords.sort((a, b) => a[1] - b[1]);

  console.log('sortedCoords:', sortedCoords);

  const iter = (list, accumulator) => {
    if (list.length === 0) return accumulator;

    const first = list[0];

    if (accumulator.length === 0) return iter(list.slice(1), [...accumulator, first]);

    // const filteredAccumulator = accumulator.filter(
    //   (item) => !(item[0] >= first[0] && item[1] <= first[1]),
    // );

    let isItemUsed = false;

    const newAccumulator = accumulator.map((item) => {
      if (item[0] >= first[0] && item[1] <= first[1]) {
        isItemUsed = true;

        return first;
      }

      if (item[1] >= first[0] && item[0] < first[1]) {
        isItemUsed = true;

        return [item[0], first[1]];
      }

      return item;
    });

    const nextAccumulator = isItemUsed ? [...newAccumulator] : [...newAccumulator, first];

    return iter(list.slice(1), nextAccumulator);
  };

  const result = iter(sortedCoords, []);

  const uniqResult = getUniqCoords(result);

  return uniqResult;
};

exports.getBorders = getBorders;

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
//   const numbers = _inputLines[1];
//
//   const result = genBiggestNumber(numbers);
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
