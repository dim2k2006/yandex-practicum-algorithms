const findDay = (savingsPerDay, coast) => {
  const iter = (savings) => {
    const leftIndex = 0;
    const rightIndex = savings.length - 1;
    const midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (savings[leftIndex] < coast && savings[rightIndex] >= coast) return rightIndex;

    if (rightIndex - leftIndex <= 1) return -1;

    if (savings[midIndex] >= coast) {
      return iter(savings.slice(0, midIndex));
    }

    return iter(savings.slice(midIndex, rightIndex));
  };

  const result = iter(savingsPerDay);

  return result;
};

exports.findDay = findDay;

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
//   const savingsPerDay = _inputLines[1].split(' ').map(Number);
//   const bicycleCost = Number(_inputLines[2]);
//
//   const result1 = findDay(savingsPerDay, bicycleCost);
//   const result2 = findDay(savingsPerDay, bicycleCost * 2);
//
//   const out = [result1, result2].join(' ');
//
//   console.log(out);
// };
//
// process.stdin.on('end', solve);
