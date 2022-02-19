const { MyQueueSized } = require('./');

describe('size method.', () => {
  test('Returns 0.', () => {
    const queue = new MyQueueSized(5);

    expect(queue.size()).toBe(0);
  });
});

describe('push method.', () => {
  test('Returns error if max size is exceeded.', () => {
    const queue = new MyQueueSized(0);

    const result = queue.push(1);

    expect(result).toBe('error');
  });

  test('Pushes data to the queue.', () => {
    const queue = new MyQueueSized(5);

    queue.push(1);
    queue.push(2);
    queue.push(3);

    expect(queue.size()).toBe(3);
  });
});

describe('pop method.', () => {
  test('Returns None if queue is empty.', () => {
    const queue = new MyQueueSized(5);

    expect(queue.pop()).toBe('None');
  });

  test('Removes and returns elements from queue.', () => {
    const queue = new MyQueueSized(5);

    queue.push(1);
    queue.push(2);
    queue.push(3);

    const result = queue.pop();

    expect(result).toBe(1);
    expect(queue.size()).toBe(2);
  });
});
