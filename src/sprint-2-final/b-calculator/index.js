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
      return Math.floor(operand1 / operand2);
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

    const operand2 = stack.pop();
    const operand1 = stack.pop();

    const result = calc(operand1, operand2, char);

    stack.push(result);
  });

  const result = stack.pop();

  return result;
};

exports.calculate = calculate;

// Yandex context required code
const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on('line', (line) => {
  _inputLines.push(line);
});

const solve = () => {
  const input = _inputLines[0];

  const result = calculate(input);

  console.log(result);
};

process.stdin.on('end', solve);
