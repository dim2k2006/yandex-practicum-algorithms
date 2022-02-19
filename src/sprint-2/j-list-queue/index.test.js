const { LinkedListQueue } = require('./');

describe('size method.', () => {
  test('Returns 0.', () => {
    const queue = new LinkedListQueue();

    expect(queue.size()).toBe(0);
  });

  // test('Returns 0.', () => {
  //   const queue = new MyQueueSized(5);
  //
  //   queue.push(1);
  //   queue.push(2);
  //   queue.push(3);
  //
  //   expect(queue.size()).toBe(3);
  //
  //   queue.pop();
  //   queue.pop();
  //
  //   expect(queue.size()).toBe(1);
  //
  //   queue.pop();
  //
  //   expect(queue.size()).toBe(0);
  // });
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
