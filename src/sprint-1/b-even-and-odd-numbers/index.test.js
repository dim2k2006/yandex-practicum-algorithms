const solve = require('./');

test('Returns false.', () => {
  const number1 = 1;
  const number2 = 2;
  const number3 = -3;

  const expected = false;

  expect(solve(number1, number2, number3)).toEqual(expected);
});

test('Returns true.', () => {
  const number1 = 7;
  const number2 = 11;
  const number3 = 7;

  const expected = true;

  expect(solve(number1, number2, number3)).toEqual(expected);
});

test('Returns true.', () => {
  const number1 = 6;
  const number2 = -2;
  const number3 = 0;

  const expected = true;

  expect(solve(number1, number2, number3)).toEqual(expected);
});
