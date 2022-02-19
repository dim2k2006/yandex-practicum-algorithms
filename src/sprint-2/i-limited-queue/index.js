class MyQueueSized {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [...new Array(maxSize)].map(() => null);
    this.head = 0;
    this.tail = 0;
    this.sizeValue = 0;
  }

  push(x) {
    if (this.size() === this.maxSize) return 'error';

    this.queue[this.tail] = x;
    this.tail = (this.tail + 1) % this.maxSize;
    this.sizeValue = this.sizeValue + 1;

    return undefined;
  }

  pop() {
    if (this.size() === 0) return 'None';

    const result = this.queue[this.head];

    this.queue[this.head] = null;
    this.head = (this.head + 1) % this.maxSize;
    this.sizeValue = this.sizeValue - 1;

    return result;
  }

  peek() {
    if (this.size() === 0) return 'None';

    const result = this.queue[this.head];

    return result;
  }

  size() {
    return this.sizeValue;
  }
}

exports.MyQueueSized = MyQueueSized;

// Yandex context required code
// const executeStackCommand = (queue, commandName, ...args) => {
//   const result = queue[commandName](...args);
//
//   if (commandName === 'push' && result === 'error') {
//     console.log(result);
//
//     return;
//   }
//
//   if (commandName === 'pop' && result === 'None') {
//     console.log(result);
//
//     return;
//   }
//
//   if (result !== undefined) {
//     console.log(result);
//   }
// };
//
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
//   const queueMaxSize = Number(_inputLines[1]);
//   const commands = [...new Array(commandsCount)].map((item, index) => {
//     const commandString = _inputLines[index + 2];
//     const [commandName, commandValue] = commandString.split(' ');
//
//     return [commandName, commandValue ? Number(commandValue) : undefined];
//   });
//
//   const queue = new MyQueueSized(queueMaxSize);
//
//   commands.forEach((commandList) => {
//     const [commandName, commandValue] = commandList;
//
//     executeStackCommand(queue, commandName, commandValue);
//   });
// };
//
// process.stdin.on('end', solve);
