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
    .sort((a, b) => a - b);

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
//   const matrixRowsCount = Number(_inputLines[0]);
//   // const matrixColumnsCount = Number(_inputLines[1]);
//   const matrix = [...new Array(matrixRowsCount)].map((value, index) => {
//     const matrixRow = _inputLines[index + 2].split(' ').map(Number);
//
//     return matrixRow;
//   });
//   const pointY = Number(_inputLines[_inputLines.length - 2]);
//   const pointX = Number(_inputLines[_inputLines.length - 1]);
//
//   const neighbors = getNeighbors(matrix, { y: pointY, x: pointX });
//
//   const result = neighbors.join(' ');
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
