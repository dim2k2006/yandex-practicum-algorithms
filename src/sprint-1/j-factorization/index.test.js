const getPrimeFactors = require('./');

test('Returns [2, 2, 2].', () => {
  expect(getPrimeFactors(8)).toEqual([2, 2, 2]);
});

test('Returns [13].', () => {
  expect(getPrimeFactors(13)).toEqual([13]);
});

test('Returns [2, 2, 5, 5].', () => {
  expect(getPrimeFactors(100)).toEqual([2, 2, 5, 5]);
});
