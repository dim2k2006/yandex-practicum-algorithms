class StackMax {
  constructor() {
    this.stack = [];
  }

  push(x) {
    this.stack.push(x);
  }

  pop() {
    if (this.stack.length === 0) return 'error';

    return this.stack.pop();
  }

  get_max() {
    if (this.stack.length === 0) return 'None';

    const result = this.stack.reduce((accumulator, item) => {
      return Math.max(accumulator, item);
    }, Number.MIN_SAFE_INTEGER);

    return result;
  }
}

const executeStackCommand = (stack, commandName, ...args) => {
  const result = stack[commandName](...args);

  return result;
};

exports.StackMax = StackMax;
exports.executeStackCommand = executeStackCommand;

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
//   const string1 = _inputLines[0];
//   const string2 = _inputLines[1];
//
//   const result = getExtraLetter(string1, string2);
//
//   console.log(result);
// };
//
// process.stdin.on('end', solve);
