const { StackMax } = require('./');

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
});

describe('pop command.', () => {
  test('Returns error.', () => {
    const stack = new StackMax();

    expect(stack.pop()).toBe('error');
  });
});
