const { Deque } = require('./');

describe('size method.', () => {
  test('Returns 0.', () => {
    const deque = new Deque(5);

    expect(deque.size()).toBe(0);
  });

  test('Returns 0.', () => {
    const deque = new Deque(5);

    deque.push_back(1);
    deque.push_back(2);
    deque.push_back(3);

    expect(deque.size()).toBe(3);

    deque.pop_front();
    deque.pop_front();

    expect(deque.size()).toBe(1);

    deque.pop_front();

    expect(deque.size()).toBe(0);
  });
});

describe('push_back method.', () => {
  test('Returns error if max size is exceeded.', () => {
    const deque = new Deque(0);

    const result = deque.push_back(1);

    expect(result).toBe('error');
  });

  test('Pushes data to the queue.', () => {
    const deque = new Deque(5);

    deque.push_back(1);
    deque.push_back(2);
    deque.push_back(3);

    expect(deque.size()).toBe(3);
  });
});

describe('pop_front method.', () => {
  test('Returns None if queue is empty.', () => {
    const deque = new Deque(5);

    expect(deque.pop_front()).toBe('None');
  });

  test('Removes and returns elements from queue.', () => {
    const deque = new Deque(5);

    deque.push_back(1);
    deque.push_back(2);
    deque.push_back(3);

    const result = deque.pop_front();

    expect(result).toBe(1);
    expect(deque.size()).toBe(2);
  });
});
