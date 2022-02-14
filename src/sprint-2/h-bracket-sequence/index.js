const isCorrectBracketSeq = (sequence) => {
  let accumulator1 = 0; // {}
  let accumulator2 = 0; // []
  let accumulator3 = 0; // ()

  const chars = sequence.split('');

  chars.forEach((char) => {
    switch (char) {
      case '{':
        accumulator1 = accumulator1 + 1;
        break;
      case '}':
        accumulator1 = accumulator1 - 1;
        break;

      case '[':
        accumulator2 = accumulator2 + 1;
        break;
      case ']':
        accumulator2 = accumulator2 - 1;
        break;

      case '(':
        accumulator3 = accumulator3 + 1;
        break;
      case ')':
        accumulator3 = accumulator3 - 1;
        break;
    }
  });

  return accumulator1 + accumulator2 + accumulator3 === 0;
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
