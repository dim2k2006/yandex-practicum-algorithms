const isPairExistsInAccumulator = (pair, accumulator) => {
  const result = accumulator.find((item) => item[0] >= pair[0] && item[1] <= pair[1]);

  return result;
};

const getBorders = (coords) => {
  const iter = (list, accumulator) => {
    console.log('list:', list);
    console.log('accumulator:', accumulator);

    if (list.length === 0) return accumulator;

    const pair = list[0];

    if (accumulator.length === 0) return iter(list.slice(1), [pair]);

    // const isExistsInAccumulator = isPairExistsInAccumulator(pair, accumulator);
    //
    // if (isExistsInAccumulator) return iter(list.slice(1), accumulator);

    const newAccumulator = accumulator.map((item) => {
      if (pair[0] <= item[0] && pair[1] >= item[1]) {
        return pair;
      }

      return item;
    });

    return iter(list.slice(1), newAccumulator);
  };

  const result = iter(coords, []);

  console.log('result:', result);

  return result;
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
