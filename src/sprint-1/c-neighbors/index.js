const getNeighbors = (matrix, point) => {
  const leftNeighborPoint = { y: point.y, x: point.x - 1 };
  const rightNeighborPoint = { y: point.y, x: point.x + 1 };
  const topNeighborPoint = { y: point.y - 1, x: point.x };
  const bottomNeighborPoint = { y: point.y + 1, x: point.x };

  const neighbors = [
    rightNeighborPoint,
    topNeighborPoint,
    leftNeighborPoint,
    bottomNeighborPoint,
  ]
    .map((point) => {
      const row = matrix[point.y];

      if (!row) return undefined;

      const value = row[point.x];

      if (value === undefined) return undefined;

      return value;
    })
    .filter((value) => value !== undefined)
    .sort();

  return neighbors;
};

module.exports = getNeighbors;

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
//   const values = _inputLines[0].split(' ').map(Number);
//
//   const result = main(...values);
//
//   const out = result ? 'WIN' : 'FAIL';
//
//   console.log(out);
// };
//
// process.stdin.on('end', solve);
