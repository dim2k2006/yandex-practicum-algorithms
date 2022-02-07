const getNearestZero = require('./');

test('Returns [0, 1, 2, 1, 0].', () => {
  expect(getNearestZero([0, 1, 4, 9, 0])).toEqual([0, 1, 2, 1, 0]);
});

test('Returns [0, 1, 2, 3, 4, 5].', () => {
  expect(getNearestZero([0, 7, 9, 4, 8, 20])).toEqual([0, 1, 2, 3, 4, 5]);
});

test('Returns [].', () => {
  expect(getNearestZero([])).toEqual([]);
});

test('Returns [0].', () => {
  expect(getNearestZero([0])).toEqual([0]);
});
