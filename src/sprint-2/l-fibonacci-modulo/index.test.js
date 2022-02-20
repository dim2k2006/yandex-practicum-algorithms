const { getFibonacciModule, getFibonacci } = require('./');

describe('getFibonacci', () => {
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
});

describe('getFibonacciModule', () => {
  test('Returns 3.', () => {
    expect(getFibonacciModule(3, 1)).toBe(3);
  });

  test('Returns 9.', () => {
    expect(getFibonacciModule(10, 1)).toBe(9);
  });
});
