const getBinaryNumber = require('./');

test('Returns 101.', () => {
  expect(getBinaryNumber(5)).toBe(101);
});

test('Returns 1110.', () => {
  expect(getBinaryNumber(14)).toBe(1110);
});
