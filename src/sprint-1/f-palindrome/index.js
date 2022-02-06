const isPalindrome = (text) => {
  const newText = text.replace(/[^\w]/g, '').toLowerCase();
  const textLength = newText.length;

  let leftPointer = 0;
  let rightPointer = textLength - 1;

  while (leftPointer <= rightPointer) {
    const leftLetter = newText[leftPointer];
    const rightLetter = newText[rightPointer];

    if (leftLetter !== rightLetter) return false;

    leftPointer = leftPointer + 1;
    rightPointer = rightPointer - 1;
  }

  return true;
};

module.exports = isPalindrome;

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
//   const text = _inputLines[0];
//
//   const result = isPalindrome(text);
//
//   const out = result ? 'True' : 'False';
//
//   console.log(out);
// };
//
// process.stdin.on('end', solve);
