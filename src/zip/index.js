const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on('line', (line) => {
  _inputLines.push(line);
});

const zip = (inputA, inputB) => {
  const iter = (accumulator, listA, listB) => {
    if (listA.length === 0) {
      return accumulator;
    }

    const newAccumulator = [...accumulator, listA[0], listB[0]];

    return iter(newAccumulator, listA.slice(1), listB.slice(1));
  };

  return iter([], inputA, inputB);
};

const solve = () => {
  const inputA = _inputLines[1].split(' ').map(Number);
  const inputB = _inputLines[2].split(' ').map(Number);

  const result = zip(inputA, inputB).join(' ');

  console.log(result);
};

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);

module.exports = zip;
