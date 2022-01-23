const zip = require('./');

test('Zips to lists', () => {
  const inputA = [1, 2, 3];
  const inputB = [4, 5, 6];
  const expected = [1, 4, 2, 5, 3, 6];

  expect(zip(inputA, inputB)).toEqual(expected);
});
