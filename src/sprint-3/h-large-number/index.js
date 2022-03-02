const genBiggestNumber = (numbers) => {
  const iter = (numbersList, prefix, usedNumbers) => {
    if (numbersList.length === 0) return prefix;

    const result = numbersList.map((number) => {
      const newUsedNumbers = [...usedNumbers, number];

      const newNumbersList = [...numbersList];

      newUsedNumbers.forEach((usedNumber) => {
        const index = newNumbersList.indexOf(usedNumber);

        newNumbersList[index] = null;
      });

      const filteredNumbers = newNumbersList.filter((number) => number !== null);

      const res = iter(filteredNumbers, `${prefix}${number}`, newUsedNumbers);

      return res;
    });

    return result;
  };

  const result = iter(numbers.split(' '), '', [])
    .flat(Infinity)
    .map(Number)
    .sort();

  const last = result[result.length - 1];

  return last;
};

exports.genBiggestNumber = genBiggestNumber;

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
//   const keysPressed = _inputLines[0];
//
//   const result = genCombinations(keysPressed);
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
