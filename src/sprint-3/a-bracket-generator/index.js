// const genBrackets = (num) => {
//   const iter = (n, counterOpen, counterClose, accumulator) => {
//     if (counterOpen + counterClose === 2 * n) return accumulator;
//
//     if (counterOpen < n) {
//       return iter(n, counterOpen + 1, counterClose, accumulator + '(');
//     }
//
//     if (counterOpen > counterClose) {
//       return iter(n, counterOpen, counterClose + 1, accumulator + ')');
//     }
//   };
//
//   const result = iter(num, 0, 0, '');
//
//   return result;
// };

class Stack {
  constructor() {
    this.stack = [];
  }

  push(x) {
    this.stack.push(x);
  }

  pop() {
    if (this.stack.length === 0) throw new Error('Can not pop empty stack.');

    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }
}

const openingBracket = '(';

const isCorrectBracketSeq = (sequence) => {
  const stack = new Stack();
  const chars = sequence.split('');

  for (let i = 0; i < chars.length; i = i + 1) {
    const char = chars[i];

    const isOpeningBracket = char === openingBracket;

    if (isOpeningBracket) {
      stack.push(char);

      continue;
    }

    const lastItem = stack.peek();

    if (lastItem !== openingBracket) return false;

    stack.pop();
  }

  return stack.size() === 0;
};

const genBrackets = (num) => {
  const iter = (n, prefix) => {
    if (n === 0) return prefix;

    const a = iter(n - 1, `${prefix}(`);
    const b = iter(n - 1, `${prefix})`);

    return [[a], [b]];
  };

  const sequences = iter(num * 2, '')
    .flat(Infinity)
    .filter(isCorrectBracketSeq);

  return sequences;
};

exports.genBrackets = genBrackets;

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
//   const n = Number(_inputLines[0]);
//
//   const result = genBrackets(n);
//
//   const out = result.join('\n');
//
//   console.log(out);
// };
//
// process.stdin.on('end', solve);
