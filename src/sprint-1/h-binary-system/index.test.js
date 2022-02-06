const getBinarySum = require('./');

test('Returns 10110.', () => {
  expect(getBinarySum(1011, 1011)).toBe(10110);
});

test('Returns 11110.', () => {
  expect(getBinarySum(1111, 1111)).toBe(11110);
});

test('Returns 10101.', () => {
  expect(getBinarySum(1010, 1011)).toBe(10101);
});

test('Returns 10.', () => {
  expect(getBinarySum(1, 1)).toBe(10);
});

test('Returns 10.', () => {
  expect(getBinarySum(10, 0)).toBe(10);
});
