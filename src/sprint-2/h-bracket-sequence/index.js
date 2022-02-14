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

const openingBrackets = ['{', '[', '('];

const getOpeningBracket = (closingBracket) => {
  switch (closingBracket) {
    case '}':
      return '{';
    case ']':
      return '[';
    case ')':
      return '(';
  }
};

const isCorrectBracketSeq = (sequence) => {
  const stack = new Stack();
  const chars = sequence.split('');

  for (let i = 0; i < chars.length; i = i + 1) {
    const char = chars[i];

    const isOpeningBracket = openingBrackets.includes(char);

    if (isOpeningBracket) {
      stack.push(char);

      continue;
    }

    const closingBracket = char;

    const openingBracket = getOpeningBracket(closingBracket);

    const lastItem = stack.peek();

    if (lastItem !== openingBracket) return false;

    stack.pop();
  }

  return stack.size() === 0;
};

exports.isCorrectBracketSeq = isCorrectBracketSeq;

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
//   const sequence = _inputLines[0];
//
//   const result = isCorrectBracketSeq(sequence);
//   const out = result ? 'True' : 'False';
//
//   console.log(out);
// };
//
// process.stdin.on('end', solve);
