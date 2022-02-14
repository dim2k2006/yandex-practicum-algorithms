const { buildBiLinkedList } = require('../../generate');
const reverse = require('./');

test('Reverses not empty list.', () => {
  const list = buildBiLinkedList([1, 2, 3, 4]);
  const expectedList = buildBiLinkedList([4, 3, 2, 1]);

  expect(reverse(list)).toEqual(expectedList);
});

test('Reverses list with 1 item.', () => {
  const list = buildBiLinkedList([1]);
  const expectedList = buildBiLinkedList([1]);

  expect(reverse(list)).toEqual(expectedList);
});
