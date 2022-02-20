const { transformMatrix } = require('./');

test('Transforms matrix.', () => {
  const matrix = [
    [1, 2, 3],
    [0, 2, 6],
    [7, 4, 1],
    [2, 7, 0],
  ];

  const expected = [
    [1, 0, 7, 2],
    [2, 2, 4, 7],
    [3, 6, 1, 0],
  ];

  expect(transformMatrix(matrix, 4, 3)).toEqual(expected);
});
