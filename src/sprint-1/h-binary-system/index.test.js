const getBinarySum = require('./');

test('Returns 10101.', () => {
  expect(getBinarySum(1010, 1011)).toBe(10101);
});

test('Returns 10.', () => {
  expect(getBinarySum(1, 1)).toBe(10);
});
