const getUniqCoords = (coords) => {
  const coordsMap = new Map();

  coords.forEach((item) => coordsMap.set(item.join(''), item));

  let uniqCoords = [];

  for (const [, value] of coordsMap) {
    uniqCoords.push(value);
  }

  return uniqCoords;
};

const getBorders = (coords) => {
  const uniqCoords = getUniqCoords(coords);

  const sortedCoords = uniqCoords.sort((a, b) => a[1] - b[1]);

  // console.log('sortedCoords:', sortedCoords);

  const result = [];

  for (let i = 0; i < sortedCoords.length; i = i + 1) {
    if (result.length === 0) {
      result.push(sortedCoords[i]);

      continue;
    }

    const [begin1, end1] = result[result.length - 1];
    const [begin2, end2] = sortedCoords[i];

    // console.log('result:', result);
    // console.log(`[${begin1}, ${end1}]`);
    // console.log(`[${begin2}, ${end2}]`);

    if (end1 >= begin2) {
      result.pop();

      result.push([begin1, end2]);
    }

    if (begin1 >= begin2) {
      result.pop();

      result.push([begin2, end2]);
    }

    if (end1 < begin2) {
      result.push([begin2, end2]);
    }
  }

  // console.log('result:', result);

  return result;
};

exports.getBorders = getBorders;

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
//   const coords = [...new Array(rowsCount)].map((_, index) => {
//     const data = _inputLines[index + 1].split(' ').map(Number);
//
//     return data;
//   });
//
//   const result = getBorders(coords);
//
//   const out = result.map((item) => item.join(' ')).join('\n');
//
//   console.log(out);
// };
//
// process.stdin.on('end', solve);
