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

describe('push method.', () => {
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

// describe('pop method.', () => {
//   test('Returns None if queue is empty.', () => {
//     const queue = new MyQueueSized(5);
//
//     expect(queue.pop()).toBe('None');
//   });
//
//   test('Removes and returns elements from queue.', () => {
//     const queue = new MyQueueSized(5);
//
//     queue.push(1);
//     queue.push(2);
//     queue.push(3);
//
//     const result = queue.pop();
//
//     expect(result).toBe(1);
//     expect(queue.size()).toBe(2);
//   });
// });
//
// describe('peek method.', () => {
//   test('Prints None if queue is empty.', () => {
//     const queue = new MyQueueSized(5);
//
//     expect(queue.peek()).toBe('None');
//   });
//
//   test('Prints first queue item.', () => {
//     const queue = new MyQueueSized(5);
//
//     queue.push(1);
//     queue.push(2);
//     queue.push(3);
//
//     expect(queue.peek()).toBe(1);
//
//     queue.pop();
//
//     expect(queue.peek()).toBe(2);
//   });
// });
