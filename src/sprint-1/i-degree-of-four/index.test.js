const isDegreeOfFour = require('./');

test('Returns false.', () => {
  expect(isDegreeOfFour(15)).toBe(false);
});

test('Returns true.', () => {
  expect(isDegreeOfFour(16)).toBe(true);
});

test('Returns true.', () => {
  expect(isDegreeOfFour(1)).toBe(true);
});

test('Returns true.', () => {
  expect(isDegreeOfFour(4)).toBe(true);
});
