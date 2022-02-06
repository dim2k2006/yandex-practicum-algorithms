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
//   const data = _inputLines[1].split(' ').map(Number);
//
//   const result = getWeather(data);
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
