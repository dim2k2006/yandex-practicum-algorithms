class Stack {
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
}

const isOperator = (char) => {
  const operators = ['+', '-', '/', '*'];

  return operators.includes(char);
};

const calc = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return Math.round(operand1 / operand2);
  }
};

const calculate = (input) => {
  const chars = input.split(' ');

  const stack = new Stack();

  chars.forEach((char) => {
    const isOperatorChar = isOperator(char);

    if (!isOperatorChar) {
      stack.push(Number(char));

      return;
    }

    const operand1 = stack.pop();
    const operand2 = stack.pop();

    const result = calc(operand1, operand2, char);

    stack.push(result);
  });

  const result = stack.pop();

  return result;
};

exports.calculate = calculate;

// Yandex context required code
// const executeStackCommand = (deque, commandName, ...args) => {
//   const result = deque[commandName](...args);
//
//   if (commandName === 'push_back' && result === 'error') {
//     console.log(result);
//
//     return;
//   }
//
//   if (commandName === 'push_front' && result === 'error') {
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
//   const dequeMaxSize = Number(_inputLines[1]);
//   const commands = [...new Array(commandsCount)].map((item, index) => {
//     const commandString = _inputLines[index + 2];
//     const [commandName, commandValue] = commandString.split(' ');
//
//     return [commandName, commandValue ? Number(commandValue) : undefined];
//   });
//
//   const deque = new Deque(dequeMaxSize);
//
//   commands.forEach((commandList) => {
//     const [commandName, commandValue] = commandList;
//
//     executeStackCommand(deque, commandName, commandValue);
//   });
// };
//
// process.stdin.on('end', solve);
