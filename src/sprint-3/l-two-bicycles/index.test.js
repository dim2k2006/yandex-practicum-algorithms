const { find } = require('./');

test.only('Returns [3, 5].', () => {
  // expect(find([1, 2, 4, 4, 6, 8], 3)).toEqual([3, 5]);
  expect(find([1, 2, 4, 4, 6, 8], 3)).toEqual([3]);
});

test('Returns [3, -1].', () => {
  expect(find([1, 2, 4, 4, 4, 4], 3)).toEqual([3, -1]);
});

test('Returns [-1, -1].', () => {
  expect(find([1, 2, 4, 4, 4, 4], 10)).toEqual([-1, -1]);
});

test('Returns [1, 3].', () => {
  expect(find([1, 1, 4, 4, 4, 4], 1)).toEqual([1, 3]);
});
