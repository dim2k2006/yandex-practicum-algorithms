const { MyQueueSized } = require('./');

describe('size', () => {
  test('Returns 0.', () => {
    const queue = new MyQueueSized(5);

    expect(queue.size()).toBe(0);
  });
});
