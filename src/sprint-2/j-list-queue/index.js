class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.sizeValue = 0;
  }

  get() {
    return undefined;
  }

  put(x) {
    const node = new Node(x, this.head);

    this.head = node;

    this.sizeValue = this.sizeValue + 1;
  }

  size() {
    return this.sizeValue;
  }
}

exports.LinkedListQueue = LinkedListQueue;

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
