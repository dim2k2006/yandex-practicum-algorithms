const { LinkedListQueue } = require('./');

describe('size method.', () => {
  test('Returns 0.', () => {
    const queue = new LinkedListQueue();

    expect(queue.size()).toBe(0);
  });

  test('Returns 0.', () => {
    const queue = new LinkedListQueue();

    queue.put(1);
    queue.put(2);
    queue.put(3);

    expect(queue.size()).toBe(3);

    queue.get();
    queue.get();

    expect(queue.size()).toBe(1);

    queue.get();

    expect(queue.size()).toBe(0);
  });
});

describe('put method.', () => {
  test('Puts data to the queue.', () => {
    const queue = new LinkedListQueue();

    queue.put(1);
    queue.put(2);
    queue.put(3);

    expect(queue.size()).toBe(3);
  });
});

describe('get method.', () => {
  test('Returns error if queue is empty.', () => {
    const queue = new LinkedListQueue();

    expect(queue.get()).toBe('error');
  });

  test('Removes and returns elements from queue head.', () => {
    const queue = new LinkedListQueue();

    queue.put(1);
    queue.put(2);
    queue.put(3);

    const result = queue.get();

    expect(result).toBe(1);
    expect(queue.size()).toBe(2);
  });
});
