const sum = (data) => data.reduce((accumulator, number) => accumulator + number, 0);

const countMovingAverage = (timeseries, K) => {
  const result = [];

  let current_sum = sum(timeseries.slice(0, K));

  result.push(current_sum / K);

  for (let i = 0; i < timeseries.length - K; i = i + 1) {
    current_sum -= timeseries[i];
    current_sum += timeseries[i + K];

    const current_avg = current_sum / K;

    result.push(current_avg);
  }

  return result;
};

module.exports = countMovingAverage;

// Yandex context required code
// const _readline = require('readline');
//
// const _reader = _readline.createInterface({
//   input: process.stdin,
// });
//
// const _inputLines = [];
//
// // Установим callback на считывание строки - так мы получим
// // все строки из ввода в массиве _inputLines.
// _reader.on('line', (line) => {
//   _inputLines.push(line);
// });
//
// const solve = () => {
//   const timeseries = _inputLines[1].split(' ').map(Number);
//   const K = Number(_inputLines[2]);
//
//   const result = countMovingAverage(timeseries, K).join(' ');
//
//   console.log(result);
// };
//
// // Когда ввод закончится, будет вызвана функция solve.
// process.stdin.on('end', solve);
