const findDay = (savingsPerDay, bicycleCost) => {
  const iter = (savings, coast, left, right) => {
    const mid = Math.floor((left + right) / 2);

    console.log(`left: ${left}; right: ${right}; mid: ${mid};`);

    if (left >= right) return -1;

    if (savings[left] === coast) return left;

    if (savings[mid] === coast) {
      if (mid === left + 1) {
        return mid;
      } else {
        return iter(savings, coast, left, mid + 1);
      }
    } else {
      return iter(savings, coast, mid + 1, right);
    }
  };

  const result = iter(savingsPerDay, bicycleCost, 0, savingsPerDay.length);

  if (result < 0) return result;

  return result + 1;
};

const find = (savingsPerDay, bicycleCost) => {
  const result = [
    findDay(savingsPerDay, bicycleCost),
    // findDay(savingsPerDay, bicycleCost * 2),
  ];

  return result;
};

exports.find = find;

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
//   const result = find(savingsPerDay, bicycleCost);
//
//   const out = result.join(' ');
//
//   console.log(out);
// };
//
// process.stdin.on('end', solve);
