const { StackMax, executeCommands } = require('./');

describe('get_max command.', () => {
  test('Returns None.', () => {
    const stack = new StackMax();

    expect(stack.get_max()).toBe('None');
  });

  test('Returns 1.', () => {
    const stack = new StackMax();

    stack.push(1);

    expect(stack.get_max()).toBe(1);
  });

  test('Returns 100.', () => {
    const stack = new StackMax();

    stack.push(50);
    stack.push(99);
    stack.push(100);
    stack.push(-50);
    stack.push(0);

    expect(stack.get_max()).toBe(100);
  });

  test('Returns 5.', () => {
    const stack = new StackMax();

    stack.push(0);
    stack.push(5);
    stack.push(10);

    stack.pop();

    expect(stack.get_max()).toBe(5);
  });
});

describe('pop command.', () => {
  test('Returns error.', () => {
    const stack = new StackMax();

    expect(stack.pop()).toBe('error');
  });
});

// test.only('Returns 5.', () => {
//   const stack = new StackMax();
//
//   const commands = [
//     'get_max',
//     'push -8',
//     'pop',
//     'pop',
//     'get_max',
//     'pop',
//     'pop',
//     'get_max',
//     'push -1',
//     'get_max',
//     'push -8',
//     'get_max',
//     'push 3',
//     'get_max',
//     'push 5',
//     'push -1',
//     'pop',
//     'push -4',
//     'pop',
//     'pop',
//     'get_max',
//     'push 2',
//     'pop',
//     'pop',
//     'push -6',
//     'pop',
//     'get_max',
//     'push 4',
//     'pop',
//     'pop',
//     'push -3',
//     'pop',
//     'pop',
//     'get_max',
//     'pop',
//     'pop',
//     'pop',
//     'get_max',
//     'push -2',
//     'get_max',
//     'push -3',
//     'push 5',
//     'get_max',
//     'push -3',
//     'push 1',
//     'push 5',
//     'pop',
//     'pop',
//     'pop',
//     'get_max',
//     'get_max',
//     'push 9',
//     'get_max',
//     'push 7',
//     'pop',
//     'pop',
//     'push 0',
//     'push 8',
//     'push -2',
//     'pop',
//     'get_max',
//     'push -6',
//     'push 9',
//     'push 0',
//     'get_max',
//     'get_max',
//     'pop',
//     'pop',
//     'push 3',
//     'get_max',
//     'get_max',
//     'get_max',
//     'push -5',
//     'pop',
//     'get_max',
//     'push 4',
//     'pop',
//     'push -10',
//     'pop',
//     'get_max',
//   ];
//
//   const log = executeCommands(stack, commands);
//
//   console.log(log.join('\n'));
//
//   expect(stack.get_max()).toBe(5);
// });
