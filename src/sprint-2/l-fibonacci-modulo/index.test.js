const { getFibonacciModule } = require('./');

test('Returns 3.', () => {
  expect(getFibonacciModule(3, 1)).toBe(3);
});

test('Returns 9.', () => {
  expect(getFibonacciModule(10, 1)).toBe(9);
});
