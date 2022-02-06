const getWeather = (data) => {
  if (data.length === 1) return 1;

  const result = data.reduce((accumulator, value, index) => {
    const prevValue = data[index - 1];
    const nextValue = data[index + 1];

    const newAccumulator = accumulator + 1;

    if (prevValue === undefined && value > nextValue) return newAccumulator;

    if (value > prevValue && nextValue === undefined) return newAccumulator;

    if (value > prevValue && value > nextValue) return newAccumulator;

    return accumulator;
  }, 0);

  return result;
};

module.exports = getWeather;

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
