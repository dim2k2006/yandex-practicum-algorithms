const countValue = require('./');

test('Counts function values.', () => {
  const a = -8;
  const x = -5;
  const b = -2;
  const c = 7;

  const expected = -183;

  expect(countValue(a, x, b, c)).toEqual(expected);
});

test('Counts function values.', () => {
  const a = 8;
  const x = 2;
  const b = 9;
  const c = -10;

  const expected = 40;

  expect(countValue(a, x, b, c)).toEqual(expected);
});
