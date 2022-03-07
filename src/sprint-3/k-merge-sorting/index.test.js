const { merge, merge_sort } = require('./');

test('Merges two sorted arrays.', () => {
  const list = [1, 4, 9, 2, 10, 11];

  expect(merge(list, 0, 3, 6)).toEqual([1, 2, 4, 9, 10, 11]);
});

test('Sorts and merges an array.', () => {
  const list = [1, 4, 2, 10, 1, 2];

  merge_sort(list, 0, 6);

  expect(list).toEqual([1, 1, 2, 2, 4, 10]);
});
