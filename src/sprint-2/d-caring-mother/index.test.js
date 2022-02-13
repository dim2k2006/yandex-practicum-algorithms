const { buildLinkedList } = require('../../generate');
const findIndex = require('./');

test('Returns 0.', () => {
  const list = buildLinkedList([1, 2, 3, 4]);

  expect(findIndex(list, 1)).toBe(0);
});

test('Returns 2.', () => {
  const list = buildLinkedList([1, 2, 3, 4, 5]);

  expect(findIndex(list, 3)).toBe(2);
});

test('Returns 4.', () => {
  const list = buildLinkedList([1, 2, 3, 4, 5]);

  expect(findIndex(list, 5)).toBe(4);
});

test('Returns -1.', () => {
  const list = buildLinkedList([1, 2, 3, 4, 5]);

  expect(findIndex(list, 20)).toBe(-1);
});
