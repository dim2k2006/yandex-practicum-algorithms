const getWeather = require('./');

test('Returns 1.', () => {
  const data = [5];

  expect(getWeather(data)).toBe(1);
});

test('Returns 3.', () => {
  const data = [-1, -10, -8, 0, 2, 0, 5];

  expect(getWeather(data)).toBe(3);
});

test('Returns 2.', () => {
  const data = [1, 2, 5, 4, 8];

  expect(getWeather(data)).toBe(2);
});
