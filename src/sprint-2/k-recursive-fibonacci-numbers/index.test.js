const { getFibonacci } = require('./');

test('Returns 1.', () => {
  expect(getFibonacci(0)).toBe(1);
});

test('Returns 1.', () => {
  expect(getFibonacci(1)).toBe(1);
});

test('Returns 3.', () => {
  expect(getFibonacci(3)).toBe(3);
});

test('Returns 5.', () => {
  expect(getFibonacci(4)).toBe(5);
});
