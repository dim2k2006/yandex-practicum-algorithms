class StackMax {
  constructor() {
    this.stack = [];
    this.maxs = [Number.MIN_SAFE_INTEGER];
  }

  push(x) {
    this.stack.push(x);

    const lastMax = this.maxs[this.maxs.length - 1];

    if (x >= lastMax) {
      this.maxs.push(x);
    }
  }

  pop() {
    if (this.stack.length === 0) return 'error';

    const lastMax = this.maxs[this.maxs.length - 1];

    const removedItem = this.stack.pop();

    if (removedItem === lastMax) {
      this.maxs.pop();
    }

    return removedItem;
  }

  get_max() {
    if (this.stack.length === 0) return 'None';

    return this.maxs[this.maxs.length - 1];
  }
}

const executeStackCommand = (stack, commandName, ...args) => {
  const result = stack[commandName](...args);

  if (commandName === 'get_max') {
    console.log(result);

    // return result;
  }

  if (commandName === 'pop' && result === 'error') {
    console.log(result);

    // return result;
  }
};

// const executeCommands = (stack, commands) => {
//   const log = commands
//     .map((commandString) => {
//       const [commandName, commandValue] = commandString.split(' ');
//
//       const value = commandValue ? Number(commandValue) : undefined;
//
//       const prevMaxs = [...stack.maxs];
//
//       const commandResult = executeStackCommand(stack, commandName, value);
//
//       console.log('stack maxs before:', prevMaxs);
//       console.log(
//         `commandName: ${commandName}. commandValue: ${commandValue}. commandResult: ${commandResult}`,
//       );
//       console.log('stack maxs after:', stack.maxs);
//
//       return commandResult;
//     })
//     .filter((logItem) => !!logItem);
//
//   return log;
// };

exports.StackMax = StackMax;
// exports.executeCommands = executeCommands;

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
