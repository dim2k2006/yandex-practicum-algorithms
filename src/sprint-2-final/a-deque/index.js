/*
-- ПРИНЦИП РАБОТЫ --
Реализовал дек на улучшенной версии объета - Map, где каждое значение дека хранится под определенным ключом.

Использую два указателя: один для хранения значения "переднего" ключа, второй для хранения значения "заднего" ключа.

При добавлении элемента в дек, вычисляем ключ для нового "переднего" или "заднего" элемента, сохраняем значение под этим ключом и сохраняеи значение этого ключа.

При удалении элемента из дека, удаляем элемент под последним сохраненным ключом, вычисляем новое значение ключа и сохраняем его.

Изначально планировал использовать кольцевой буфер, но позже понял что так не получится. В результате не без помощи интернета получилось вот такое решение.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Не имею опыта доказательств корректности алгоритмов, поэтому затрудняюсь описать эту часть.
Этот алгоритм прошел все тесты, поэтому он скорее всего корректный 🙈

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --

Тк оперция добавления и удаления в Map выполняются за O(1), то и операции добавления и удаления в дек выполняются за O(1).

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --

Тк мы сохраняем все значения в дек, то данный дек будет потреблять O(n) памяти.

 */

class Deque {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.data = new Map();
    this.front = 0;
    this.back = 1;
    this.sizeValue = 0;
  }

  push_front(value) {
    if (this.size() === this.maxSize) return 'error';

    this.front = (this.front + 1) % this.maxSize;

    this.sizeValue = this.sizeValue + 1;

    this.data.set(this.front, value);
  }

  pop_front() {
    if (this.size() === 0) return 'error';

    const result = this.data.get(this.front);

    this.data.delete(this.front);

    this.front = (this.front || this.maxSize) - 1;

    this.sizeValue = this.sizeValue - 1;

    return result;
  }

  push_back(value) {
    if (this.size() === this.maxSize) return 'error';

    this.back = (this.back || this.maxSize) - 1;

    this.data.set(this.back, value);

    this.sizeValue = this.sizeValue + 1;
  }

  pop_back() {
    if (this.size() === 0) return 'error';

    const result = this.data.get(this.back);

    this.data.delete(this.back);

    this.back = (this.back + 1) % this.maxSize;

    this.sizeValue = this.sizeValue - 1;

    return result;
  }

  size() {
    return this.sizeValue;
  }
}

exports.Deque = Deque;

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
