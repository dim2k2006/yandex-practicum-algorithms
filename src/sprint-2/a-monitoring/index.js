const transformMatrix = (matrix, rowsCount, columnsCount) => {
  const result = [...new Array(columnsCount)].map((item, index) => {
    const newRow = matrix.map((row) => row[index]);

    return newRow;
  });

  return result;
};

exports.transformMatrix = transformMatrix;

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
//   const rowsCount = Number(_inputLines[0]);
//   const columnsCount = Number(_inputLines[1]);
//
//   const matrix = [...new Array(rowsCount)].map((item, index) => {
//     const row = _inputLines[index + 2].split(' ').map(Number);
//
//     return row;
//   });
//
//   const newMatrix = transformMatrix(matrix, rowsCount, columnsCount);
//
//   const out = newMatrix.map((row) => row.join(' ')).join('\n');
//
//   console.log(out);
// };
//
// process.stdin.on('end', solve);
