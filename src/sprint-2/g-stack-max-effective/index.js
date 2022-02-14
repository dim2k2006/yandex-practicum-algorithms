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

  if (commandName === 'get_max') {
    console.log(result);
  }

  if (commandName === 'pop' && result === 'error') {
    console.log(result);
  }
};

exports.StackMax = StackMax;

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
//   const commandsCount = Number(_inputLines[0]);
//   const commands = [...new Array(commandsCount)].map((item, index) => {
//     const commandString = _inputLines[index + 1];
//     const [commandName, commandValue] = commandString.split(' ');
//
//     return [commandName, commandValue ? Number(commandValue) : undefined];
//   });
//
//   const stack = new StackMax();
//
//   commands.forEach((commandList) => {
//     const [commandName, commandValue] = commandList;
//
//     executeStackCommand(stack, commandName, commandValue);
//   });
// };
//
// process.stdin.on('end', solve);
