const { merge, merge_sort } = require('./solution');

test('Sorts an array.', () => {
  const list = [1, 4, 9, 2, 10, 11];

  expect(merge(list, 0, 3, 6)).toEqual([1, 2, 4, 9, 10, 11]);
});
