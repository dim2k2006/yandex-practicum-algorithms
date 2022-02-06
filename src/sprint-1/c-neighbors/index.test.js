const getNeighbors = require('./');

test('Returns [7, 7].', () => {
  const matrix = [
    [1, 2, 3],
    [0, 2, 6],
    [7, 4, 1],
    [2, 7, 0],
  ];
  const point = { y: 3, x: 0 };

  expect(getNeighbors(matrix, point)).toEqual([7, 7]);
});

test('Returns [0, 2].', () => {
  const matrix = [
    [1, 2, 3],
    [0, 2, 6],
    [7, 4, 1],
    [2, 7, 0],
  ];
  const point = { y: 0, x: 0 };

  expect(getNeighbors(matrix, point)).toEqual([0, 2]);
});

test('Returns [0, 2].', () => {
  const matrix = [
    [1, 2, 3],
    [0, 2, 6],
    [7, 4, 1],
    [2, 7, 0],
  ];
  const point = { y: 0, x: 0 };

  expect(getNeighbors(matrix, point)).toEqual([0, 2]);
});
