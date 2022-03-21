const getUniqSegments = (coords) => {
  const coordsMap = new Map();

  coords.forEach((item) => coordsMap.set(item.join(''), item));

  let uniqCoords = [];

  for (const [, value] of coordsMap) {
    uniqCoords.push(value);
  }

  return uniqCoords;
};

const composeBorders = (segments, newSegment) => {
  const [begin2, end2] = newSegment;

  const iter = (list) => {
    const [begin1, end1] = list[list.length - 1];

    if (begin1 > begin2 && end2 > end1) {
      if (list.length === 1) return [newSegment];

      return iter(list.slice(0, list.length - 1));
    }

    if (end1 >= begin2) {
      const newList = [...list.slice(0, list.length - 1), [begin1, end2]];

      return newList;
    }

    if (begin1 >= begin2) {
      const newList = [...list.slice(0, list.length - 1), [begin2, end2]];

      return newList;
    }

    const newList = [...list, newSegment];

    return newList;
  };

  return iter(segments);
};

const getBorders = (segments) => {
  const uniqSegments = getUniqSegments(segments);

  const sortedSegments = uniqSegments.sort((a, b) => a[1] - b[1]);

  // console.log('sortedCoords:', sortedCoords);

  let result = [];

  for (let i = 0; i < sortedSegments.length; i = i + 1) {
    if (result.length === 0) {
      result.push(sortedSegments[i]);

      continue;
    }

    // const [begin1, end1] = result[result.length - 1];
    const [begin2, end2] = sortedSegments[i];

    // console.log('result:', result);
    // console.log(`[${begin1}, ${end1}]`);
    // console.log(`[${begin2}, ${end2}]`);

    result = composeBorders(result, [begin2, end2]);
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
