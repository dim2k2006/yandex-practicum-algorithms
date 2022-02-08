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

test('Returns [0, 0].', () => {
  expect(getNearestZero([0, 0])).toEqual([0, 0]);
});

test('Returns [0, 1, 0].', () => {
  expect(getNearestZero([0, 1, 0])).toEqual([0, 1, 0]);
});

test('Returns [0, 1, 0].', () => {
  expect(getNearestZero([0, 5, 0])).toEqual([0, 1, 0]);
});

test('Returns [0, 0, 1].', () => {
  expect(getNearestZero([0, 0, 5])).toEqual([0, 0, 1]);
});

test('Returns [1, 0, 0].', () => {
  expect(getNearestZero([5, 0, 0])).toEqual([1, 0, 0]);
});

test('Returns [1, 0, 1, 1, 0, 1, 1, 0, 1].', () => {
  expect(getNearestZero([98, 0, 10, 77, 0, 59, 28, 0, 94])).toEqual([
    1, 0, 1, 1, 0, 1, 1, 0, 1,
  ]);
});

test('Returns [1, 0, 1, 2, 2, 1, 0, 1].', () => {
  expect(getNearestZero([5, 0, 1, 2, 3, 4, 0, 5])).toEqual([1, 0, 1, 2, 2, 1, 0, 1]);
});

test('Returns [8, 7, 6, 5, 4, 3, 2, 1, 0].', () => {
  expect(getNearestZero([64, 68, 37, 11, 77, 80, 48, 82, 0])).toEqual([
    8, 7, 6, 5, 4, 3, 2, 1, 0,
  ]);
});
