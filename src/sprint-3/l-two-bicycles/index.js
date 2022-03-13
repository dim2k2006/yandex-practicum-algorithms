const findDay = (savingsPerDay, coast) => {
  const iter = (savings, leftIndex, rightIndex) => {
    const midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (rightIndex - leftIndex <= 1) return rightIndex;

    if (savings[midIndex] >= coast) {
      return iter(savings, 0, midIndex);
    }

    return iter(savings, midIndex, rightIndex);
  };

  const index = iter(savingsPerDay, 0, savingsPerDay.length - 1);

  if (savingsPerDay[index] >= coast) return index + 1;

  return -1;
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
