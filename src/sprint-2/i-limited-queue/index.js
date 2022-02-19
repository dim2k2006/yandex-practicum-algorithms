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
    return undefined;
  }

  peek() {
    return undefined;
  }

  size() {
    return this.sizeValue;
  }
}

exports.MyQueueSized = MyQueueSized;

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
