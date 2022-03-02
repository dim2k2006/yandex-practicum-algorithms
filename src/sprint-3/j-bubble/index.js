const sort = (data) => {
  const iter = (list, leftPointer, rightPointer, isAnySortHappened) => {
    if (leftPointer === list.length - 1) return [list, isAnySortHappened];

    const leftValue = list[leftPointer];
    const rightValue = list[rightPointer];

    const isSortNeeded = leftValue > rightValue;

    if (isSortNeeded) {
      list[leftPointer] = rightValue;
      list[rightPointer] = leftValue;
    }

    return iter(list, leftPointer + 1, rightPointer + 1, isAnySortHappened ? isAnySortHappened : isSortNeeded);
  }

  const result = iter(data, 0, 1, false);

  return result;
}

const bubbleSort = (numbers) => {
  const attemptsCount = numbers.length - 1;

  const iter = (list, accumulator, attempt) => {
    if (attempt >= attemptsCount) return accumulator;

    const [newList, isAnySortHappened] = sort(list, 0, 1);

    const newAccumulator = isAnySortHappened
      ? [...accumulator, [...newList]]
      : accumulator;

    return iter(newList, newAccumulator, attempt + 1);
  }

  const result = iter(numbers, [], 0);

  return result;
};

exports.bubbleSort = bubbleSort;

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
