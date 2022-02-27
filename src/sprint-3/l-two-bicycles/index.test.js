const { find } = require('./');

test('Returns [3, 5].', () => {
  expect(find([1, 2, 4, 4, 6, 8], 3)).toEqual([3, 5]);
});

test('Returns [3, -1].', () => {
  expect(find([1, 2, 4, 4, 4, 4], 3)).toEqual([3, -1]);
});

test('Returns [-1, -1].', () => {
  expect(find([1, 2, 4, 4, 4, 4], 10)).toEqual([-1, -1]);
});
